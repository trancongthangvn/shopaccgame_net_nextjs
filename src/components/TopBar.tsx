"use client";
import { useEffect, useState } from "react";
import { Gift, ChevronRight, X } from "lucide-react";

export default function TopBar() {
  const [show, setShow] = useState(true);
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 });

  useEffect(() => {
    const t = setInterval(() => {
      setTime(p => {
        let { h, m, s } = p;
        s--; if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  if (!show) return null;
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="relative z-50" style={{ background: "linear-gradient(90deg,#7c3aed,#f43f5e,#f59e0b)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-between text-xs text-white font-medium">
        <div className="flex items-center gap-3 overflow-hidden">
          <Gift className="w-3.5 h-3.5 wiggle flex-shrink-0" />
          <span className="hidden sm:inline font-semibold">🎁 Khuyến mãi đặc biệt:</span>
          <span className="whitespace-nowrap">Giảm <strong>20%</strong> tất cả gói nổi bật — Mã: <strong className="px-1.5 py-0.5 rounded bg-white/20">GAMER20</strong></span>
          <span className="hidden md:inline opacity-80">·</span>
          <span className="hidden md:inline-flex items-center gap-1.5">
            Còn:
            <span className="font-mono font-bold tabular-nums bg-black/30 rounded px-1.5 py-0.5">
              {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-1 text-xs font-semibold hover:opacity-80 transition-opacity cursor-pointer">
            Áp dụng ngay <ChevronRight className="w-3 h-3" />
          </button>
          <button onClick={() => setShow(false)} className="p-1 hover:bg-white/20 rounded transition-colors cursor-pointer" aria-label="Đóng">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
