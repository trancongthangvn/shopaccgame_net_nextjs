import { notFound } from "next/navigation";
import { listings, getListing } from "@/data/listings";
import ListingDetail from "./ListingDetail";

export function generateStaticParams() {
  return listings.map(l => ({ id: l.id }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const listing = getListing(id);
  if (!listing) notFound();
  return <ListingDetail listing={listing} />;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const l = getListing(id);
  if (!l) return { title: "Không tìm thấy tin đăng | ShopAccGame.net" };
  return {
    title: `${l.title} | ShopAccGame.net`,
    description: l.description ?? `${l.game} rank ${l.rank} — giá ${l.price}đ`,
  };
}
