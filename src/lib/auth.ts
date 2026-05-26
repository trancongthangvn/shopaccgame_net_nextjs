"use client";
import { useEffect, useState, useCallback } from "react";

const KEY = "user";

export type User = { name: string; email: string; avatar?: string };

function read(): User | null {
  if (typeof window === "undefined") return null;
  try { const raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) : null; } catch { return null; }
}
function broadcast() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event("auth:changed"));
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUser(read());
    setReady(true);
    const fn = () => setUser(read());
    window.addEventListener("auth:changed", fn);
    window.addEventListener("storage", fn);
    return () => {
      window.removeEventListener("auth:changed", fn);
      window.removeEventListener("storage", fn);
    };
  }, []);

  const login = useCallback((u: User) => {
    localStorage.setItem(KEY, JSON.stringify(u));
    broadcast();
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(KEY);
    broadcast();
  }, []);

  return { user, ready, login, logout };
}
