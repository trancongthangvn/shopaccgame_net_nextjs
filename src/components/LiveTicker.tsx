import { Zap, TrendingUp, Radio } from "lucide-react";

const events = [
  { u:"Anh Minh",  a:"LMHT Kim Cương 1",        p:"850K",   t:"2 phút trước" },
  { u:"Chị Lan",   a:"Genshin AR55 + 5★ Hutao", p:"2.5tr",  t:"5 phút trước" },
  { u:"Bạn Hùng",  a:"Free Fire Thách Đấu",     p:"650K",   t:"8 phút trước" },
  { u:"Anh Phong", a:"PUBG Conqueror Asia",     p:"1.2tr",  t:"12 phút trước" },
  { u:"Bạn Khoa",  a:"Valorant Radiant",        p:"3.2tr",  t:"15 phút trước" },
  { u:"Chị Mai",   a:"Liên Quân Huyền Thoại",   p:"480K",   t:"18 phút trước" },
  { u:"Anh Tú",    a:"LMHT Cao Thủ + 200 skin", p:"1.8tr",  t:"22 phút trước" },
  { u:"Bạn Vy",    a:"Genshin AR60 Whale Acc",  p:"5tr",    t:"25 phút trước" },
];

// Duplicate for seamless loop — translateX(-50%) needs ≥2× content width
const items = [...events, ...events];

export default function LiveTicker() {
  return (
    <div
      className="relative py-2 overflow-hidden marquee-track"
      style={{
        background: "linear-gradient(90deg,var(--bg2) 0%,var(--bg) 50%,var(--bg2) 100%)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-4">

        {/* Broadcast-style label */}
        <div
          className="flex items-center gap-2 flex-shrink-0 pr-4 relative z-10"
          style={{ borderRight: "1px solid var(--border)" }}
        >
          <div
            className="flex items-center gap-1.5 px-2 py-0.5 rounded"
            style={{ background: "rgba(239,68,68,.15)", border: "1px solid rgba(239,68,68,.35)" }}
          >
            <Radio className="w-3 h-3" style={{ color: "#ef4444" }} aria-hidden />
            <span className="live-dot" aria-hidden />
            <span className="text-2xs font-extrabold uppercase tracking-widest" style={{ color: "#ef4444" }}>Live</span>
          </div>
          <TrendingUp className="w-3.5 h-3.5 hidden sm:inline" style={{ color: "var(--fg3)" }} aria-hidden />
          <span className="text-2xs hidden sm:inline font-semibold uppercase tracking-wider" style={{ color: "var(--fg3)" }}>
            Giao dịch gần đây
          </span>
        </div>

        {/* Marquee */}
        <div
          className="flex-1 overflow-hidden marquee-mask"
          role="marquee"
          aria-label="Các giao dịch gần đây"
        >
          <div className="flex gap-10 marquee whitespace-nowrap" style={{ width: "max-content" }}>
            {items.map((e, i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <Zap className="w-3 h-3 flex-shrink-0" style={{ color: "#fbbf24" }} aria-hidden />
                <span className="font-semibold" style={{ color: "var(--fg2)" }}>{e.u}</span>
                <span style={{ color: "var(--fg3)" }}>vừa mua</span>
                <span className="font-semibold" style={{ color: "var(--fg)" }}>{e.a}</span>
                <span className="font-bold" style={{ color: "#fb7185" }}>{e.p}</span>
                <span style={{ color: "var(--fg4)" }}>· {e.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
