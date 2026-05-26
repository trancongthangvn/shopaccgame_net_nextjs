import { imgFor } from "@/data/listings";

/**
 * Photographic placeholder for a listing card, with a dark gradient overlay
 * so any text/badges layered on top stay readable. Children are absolutely
 * positioned over the image.
 */
export default function ListingImage({
  id,
  className = "",
  w = 800,
  h = 500,
  children,
}: {
  id: string;
  className?: string;
  w?: number;
  h?: number;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden bg-[var(--bg3)] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgFor(id, w, h)}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Readability overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.55) 100%)" }}
      />
      {children}
    </div>
  );
}
