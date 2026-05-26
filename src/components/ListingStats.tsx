import type { Listing } from "@/data/listings";
import { Eye } from "lucide-react";

/**
 * Compact mono-numeric stats row for a listing card.
 * Shows watchers (live), last comparable sold price, and 7-day price trend.
 * The mono font + tabular numerals are intentional — gives data weight,
 * like a stock ticker rather than a marketing card.
 */
export default function ListingStats({ l, compact = false }: { l: Listing; compact?: boolean }) {
  const trend = l.priceTrend7d ?? 0;
  const up = trend > 0;
  const down = trend < 0;
  const trendColor = up ? "#10b981" : down ? "#f43f5e" : "var(--fg3)";
  const trendArrow = up ? "▲" : down ? "▼" : "·";

  return (
    <div
      className={`font-mono-ed flex items-center gap-3 ${compact ? "text-2xs" : "text-xs"} pt-2.5 mt-2.5`}
      style={{ borderTop: "1px solid var(--border)", color: "var(--fg3)" }}
    >
      <span className="flex items-center gap-1" title="Đang xem">
        <Eye className="w-3 h-3" /> {l.watchers ?? 0}
      </span>
      {l.lastSold && (
        <span title="Giá đã bán gần nhất">
          <span style={{ color: "var(--fg4)" }}>Last</span>{" "}
          <span style={{ color: "var(--fg2)" }}>{l.lastSold}đ</span>
        </span>
      )}
      <span className="ml-auto font-semibold" style={{ color: trendColor }} title="Biến động giá 7 ngày">
        {trendArrow} {Math.abs(trend).toFixed(1)}%
      </span>
    </div>
  );
}
