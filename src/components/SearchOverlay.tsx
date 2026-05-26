"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchListings, imgFor } from "@/data/listings";

export default function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(o => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const openFn = () => setOpen(true);
    window.addEventListener("keydown", fn);
    window.addEventListener("search:open", openFn);
    return () => {
      window.removeEventListener("keydown", fn);
      window.removeEventListener("search:open", openFn);
    };
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
    else setQ("");
  }, [open]);

  if (!open) return null;

  const results = q.trim() ? searchListings(q).slice(0, 6) : [];

  const submit = (term: string) => {
    setOpen(false);
    router.push(`/tim-kiem/?q=${encodeURIComponent(term)}`);
  };

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-[80] flex items-start justify-center pt-20 px-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)" }}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="w-full max-w-xl rounded-2xl overflow-hidden"
        style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "var(--shadow-lg)" }}
      >
        <form onSubmit={e => { e.preventDefault(); if (q.trim()) submit(q.trim()); }} className="flex items-center gap-2 px-4 h-14" style={{ borderBottom: "1px solid var(--border)" }}>
          <Search className="w-5 h-5" style={{ color: "var(--fg3)" }} />
          <input
            ref={inputRef}
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Tìm tin đăng, game, rank…"
            className="flex-1 bg-transparent outline-none text-base"
            style={{ color: "var(--fg)" }}
          />
          <button type="button" onClick={() => setOpen(false)} className="w-7 h-7 rounded-md flex items-center justify-center cursor-pointer" style={{ color: "var(--fg3)" }} aria-label="Đóng">
            <X className="w-4 h-4" />
          </button>
        </form>

        <div className="max-h-[60vh] overflow-y-auto">
          {q.trim() === "" ? (
            <div className="p-6 text-center text-sm" style={{ color: "var(--fg3)" }}>
              Gõ để tìm acc — hoặc nhấn <kbd className="px-1.5 py-0.5 rounded text-2xs font-mono" style={{ background: "var(--scrim2)" }}>Esc</kbd> để thoát
            </div>
          ) : results.length === 0 ? (
            <div className="p-6 text-center text-sm" style={{ color: "var(--fg3)" }}>
              Không có kết quả cho “{q}”
            </div>
          ) : (
            <ul>
              {results.map(l => (
                <li key={l.id}>
                  <button
                    onClick={() => submit(l.title)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left cursor-pointer hover:bg-[var(--scrim)] transition-colors"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgFor(l.id, 80, 80)} alt="" loading="lazy" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold truncate" style={{ color: "var(--fg)" }}>{l.title}</div>
                      <div className="text-xs flex items-center gap-2" style={{ color: "var(--fg3)" }}>
                        <span>{l.game}</span> · <span>{l.rank}</span> · <span style={{ color: l.color }} className="font-bold">{l.price}đ</span>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => submit(q)} className="w-full px-4 py-3 text-sm font-semibold cursor-pointer hover:bg-[var(--scrim)] transition-colors" style={{ color: "var(--orange)", borderTop: "1px solid var(--border)" }}>
                  Xem tất cả kết quả cho “{q}” →
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
