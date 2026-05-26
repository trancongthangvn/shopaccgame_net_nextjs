"use client";
import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Search, Trophy, Eye, X } from "lucide-react";
import { listings, gameCategories, searchListings } from "@/data/listings";

export default function SearchResults() {
  const sp = useSearchParams();
  const router = useRouter();

  const initialQ = sp.get("q") ?? "";
  const initialGame = sp.get("game") ?? "all";

  const [q, setQ] = useState(initialQ);
  const [game, setGame] = useState(initialGame);
  const [sort, setSort] = useState<"newest" | "price-asc" | "price-desc">("newest");

  const results = useMemo(() => {
    let r = searchListings(q);
    if (game !== "all") r = r.filter(l => l.gameKey === game);
    if (sort === "price-asc") r = r.slice().sort((a, b) => a.priceNum - b.priceNum);
    if (sort === "price-desc") r = r.slice().sort((a, b) => b.priceNum - a.priceNum);
    return r;
  }, [q, game, sort]);

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (game !== "all") params.set("game", game);
    router.replace(`/tim-kiem/?${params.toString()}`);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

      {/* Search bar */}
      <form onSubmit={submit} className="flex items-center gap-2 p-2 rounded-2xl mb-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
        <Search className="w-5 h-5 ml-2" style={{ color: "var(--fg3)" }} />
        <input
          autoFocus
          type="text"
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Tìm acc LMHT, PUBG, Free Fire, Genshin…"
          className="flex-1 bg-transparent outline-none text-base"
          style={{ color: "var(--fg)" }}
        />
        {q && (
          <button type="button" onClick={() => setQ("")} className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer" style={{ color: "var(--fg3)" }}>
            <X className="w-4 h-4" />
          </button>
        )}
        <button type="submit" className="px-4 py-2.5 rounded-xl text-sm font-bold text-white btn-primary cursor-pointer">Tìm</button>
      </form>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <span className="text-xs font-bold uppercase tracking-wider mr-2" style={{ color: "var(--fg3)" }}>Game:</span>
        {gameCategories.map(g => (
          <button
            key={g.key}
            onClick={() => setGame(g.key)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all"
            style={{
              background: game === g.key ? (g.color ?? "#f97316") : "var(--scrim)",
              color: game === g.key ? "white" : "var(--fg2)",
              border: `1px solid ${game === g.key ? "transparent" : "var(--border)"}`,
            }}
          >
            {g.label}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs" style={{ color: "var(--fg3)" }}>Sắp xếp:</span>
          <select value={sort} onChange={e => setSort(e.target.value as typeof sort)} className="text-xs px-3 py-1.5 rounded-lg cursor-pointer outline-none"
            style={{ background: "var(--scrim)", border: "1px solid var(--border)", color: "var(--fg2)" }}>
            <option value="newest">Mới nhất</option>
            <option value="price-asc">Giá thấp → cao</option>
            <option value="price-desc">Giá cao → thấp</option>
          </select>
        </div>
      </div>

      {/* Result count */}
      <div className="text-sm mb-4" style={{ color: "var(--fg2)" }}>
        <strong style={{ color: "var(--fg)" }}>{results.length}</strong> tin đăng
        {q && <> cho từ khoá <strong style={{ color: "var(--orange)" }}>“{q}”</strong></>}
      </div>

      {/* Grid */}
      {results.length === 0 ? (
        <div className="card p-12 text-center">
          <Search className="w-12 h-12 mx-auto mb-3" style={{ color: "var(--fg4)" }} />
          <h3 className="text-base font-bold mb-1" style={{ color: "var(--fg)" }}>Không tìm thấy tin đăng phù hợp</h3>
          <p className="text-sm" style={{ color: "var(--fg3)" }}>Thử dùng từ khoá khác hoặc bỏ bớt bộ lọc.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {results.map(l => (
            <Link key={l.id} href={`/acc/${l.id}/`} className="card card-hover overflow-hidden">
              <div className={`relative h-36 ${l.preview} hex-grid`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rank-shield w-14 h-14" style={{ background: `linear-gradient(135deg,${l.accent},${l.color})` }}>
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="badge" style={{ background: l.color + "ee", color: "white" }}>{l.game}</span>
                </div>
                <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded backdrop-blur-md" style={{ background: "rgba(0,0,0,0.4)" }}>
                  <Trophy className="w-3 h-3 text-white" />
                  <span className="text-2xs font-bold text-white">{l.rank}</span>
                </div>
                <div className="absolute bottom-2 right-2 flex items-center gap-1 text-2xs text-white/90 px-1.5 py-0.5 rounded backdrop-blur-md" style={{ background: "rgba(0,0,0,0.4)" }}>
                  <Eye className="w-3 h-3" />{l.views}
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold line-clamp-2 mb-2 min-h-[2.4rem]" style={{ color: "var(--fg)" }}>{l.title}</h3>
                <div className="text-lg font-bold" style={{ color: l.color }}>{l.price}<span className="text-xs">đ</span></div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
