import Link from "next/link";

/**
 * Editorial-style section header used across the homepage.
 * Format: a numbered label on the left ("01 / Tin mới"), a 1px rule that
 * stretches across, optional right-side action link.
 *
 * The whole point is to give the page a publication/Bloomberg-Terminal feel —
 * less marketing-template, more product-of-record.
 */
export default function SectionHead({
  index,
  eyebrow,
  title,
  titleAccent,
  subtitle,
  rightHref,
  rightLabel,
}: {
  index: string;       // "01", "02", "03" — kept as string so leading zero is preserved
  eyebrow: string;     // small uppercase label, e.g. "Tin mới"
  title: string;
  titleAccent?: string; // a single word/phrase to colour with the brand accent
  subtitle?: string;
  rightHref?: string;
  rightLabel?: string;
}) {
  return (
    <header className="mb-8">
      {/* Top rule + numbered eyebrow */}
      <div className="flex items-center gap-4 mb-5">
        <span className="font-mono-ed text-sm font-medium" style={{ color: "var(--fg3)" }}>
          {index}
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--fg2)" }}>
          {eyebrow}
        </span>
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
        {rightHref && rightLabel && (
          <Link
            href={rightHref}
            className="text-xs font-semibold uppercase tracking-[0.12em] hover:opacity-80 transition-opacity"
            style={{ color: "var(--fg2)" }}
          >
            {rightLabel} →
          </Link>
        )}
      </div>

      <h2
        className="text-display-3"
        style={{ fontFamily: "var(--font-gilroy),sans-serif", color: "var(--fg)" }}
      >
        {title}
        {titleAccent && <> <span className="grad-orange">{titleAccent}</span></>}
      </h2>
      {subtitle && (
        <p className="text-sm mt-2 max-w-xl" style={{ color: "var(--fg3)" }}>{subtitle}</p>
      )}
    </header>
  );
}
