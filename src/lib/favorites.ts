"use client";
import { useEffect, useState, useCallback } from "react";

const KEY = "favorites";

function read(): string[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
}

// Cross-component sync without external store: dispatch a window event so
// every mounted instance of useFavorites re-reads localStorage.
function broadcast() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event("favorites:changed"));
}

export function useFavorites() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    setIds(read());
    const fn = () => setIds(read());
    window.addEventListener("favorites:changed", fn);
    window.addEventListener("storage", fn);
    return () => {
      window.removeEventListener("favorites:changed", fn);
      window.removeEventListener("storage", fn);
    };
  }, []);

  const toggle = useCallback((id: string) => {
    const cur = read();
    const has = cur.includes(id);
    const next = has ? cur.filter(x => x !== id) : [...cur, id];
    localStorage.setItem(KEY, JSON.stringify(next));
    broadcast();
    return !has; // returns whether item is now favorited
  }, []);

  const isFav = useCallback((id: string) => ids.includes(id), [ids]);

  return { ids, isFav, toggle };
}
