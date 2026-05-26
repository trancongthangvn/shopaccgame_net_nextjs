// Shared mock listings — used by homepage grid, search, listing detail page.
// In a real backend, replace this with API calls.

export type Listing = {
  id: string;
  game: string;
  gameKey: string;
  title: string;
  rank: string;
  price: string;       // formatted, e.g. "850.000"
  priceNum: number;    // raw VND for sorting
  oldPrice?: string;
  views: string;
  favs?: number;
  posted: string;
  verified?: boolean;
  tags: string[];
  preview: string;     // css class name
  color: string;
  accent: string;
  badge?: "hot" | "new" | "vip" | "sale";
  description?: string;
  seller?: { name: string; rating: number; sales: number };
  // marketplace data
  watchers?: number;    // people watching the listing right now
  soldCount?: number;   // how many similar accs already sold under this seller
  priceTrend7d?: number; // % change of comparable acc price last 7 days (e.g. +4.2 or -1.8)
  lastSold?: string;    // last comparable sold price, formatted
};

export const listings: Listing[] = [
  { id:"LMHT8425", game:"LMHT", gameKey:"lmht", title:"Acc LMHT Kim Cương 1 — 80 tướng + 15 skin legendary, email gốc", rank:"Kim Cương 1", price:"850.000", priceNum:850000, oldPrice:"1.200.000", views:"2.4k", favs:48, posted:"2 giờ trước", verified:true, tags:["80+ tướng","15 skin","Email gốc"], preview:"preview-lmht", color:"#3b82f6", accent:"#60a5fa", badge:"sale", description:"Acc LMHT chính chủ, đã chơi 5 năm, đầy đủ email gốc và SĐT. 80+ tướng sở hữu, 15 skin legendary (Pulsefire Ezreal, Elementalist Lux, DJ Sona...). Trang bị Rune mặc định + 15 trang đa dạng cho meta hiện tại. Đã xác minh 2FA, sẵn sàng chuyển nhượng full info.", seller:{ name:"GameStore247", rating:4.9, sales:142 }, watchers:39, soldCount:12, priceTrend7d:7.5, lastSold:"867.000" },
  { id:"LMHT8542", game:"LMHT", gameKey:"lmht", title:"Acc LMHT Cao Thủ — Full tướng + 200 skin, all rune trang", rank:"Cao Thủ", price:"1.890.000", priceNum:1890000, views:"3.1k", favs:67, posted:"4 giờ trước", verified:true, tags:["Full tướng","200 skin","Cao Thủ"], preview:"preview-lmht", color:"#3b82f6", accent:"#60a5fa", badge:"hot", description:"Acc whale full bộ — toàn bộ 165+ tướng, 200 skin bao gồm cả Prestige/Mythic. Rank Cao Thủ mùa hiện tại, MMR ổn định. Trang phục theo bộ thu thập gần đủ. Đã clear nick sạch, không sai phạm.", seller:{ name:"ProAccVN", rating:5.0, sales:88 }, watchers:61, soldCount:29, priceTrend7d:1.7, lastSold:"1.927.800" },
  { id:"FF7733", game:"Free Fire", gameKey:"ff", title:"Acc Free Fire Thách Đấu — Skin súng MP40 Cobra cực hiếm", rank:"Thách Đấu", price:"650.000", priceNum:650000, oldPrice:"950.000", views:"1.8k", favs:35, posted:"5 giờ trước", verified:true, tags:["MP40 Cobra","30+ skin","Garena VN"], preview:"preview-ff", color:"#f43f5e", accent:"#fb7185", badge:"sale", description:"Free Fire server VN — Thách Đấu mùa 28. MP40 Cobra evo full level, AWM Winterlands, M1014 Demon. 30+ skin nhân vật, set quần áo limited. Đầy đủ kim cương 5k+.", seller:{ name:"FFShop99", rating:4.8, sales:215 }, watchers:48, soldCount:22, priceTrend7d:-4.5, lastSold:"669.500" },
  { id:"FF7891", game:"Free Fire", gameKey:"ff", title:"Acc Free Fire Cao Cấp — Diamond max, full skin nhân vật", rank:"Bậc Thầy", price:"380.000", priceNum:380000, views:"1.1k", favs:21, posted:"6 giờ trước", verified:false, tags:["Full skin NV","Diamond","Email gốc"], preview:"preview-ff", color:"#f43f5e", accent:"#fb7185", badge:"new", description:"Acc nuôi từ 2021, đủ tất cả nhân vật và skill. Diamond max, đăng nhập bằng email/Facebook gốc.", seller:{ name:"GamerCorner", rating:4.5, sales:32 }, watchers:37, soldCount:12, priceTrend7d:6.0, lastSold:"399.000" },
  { id:"PUBG2024", game:"PUBG", gameKey:"pubg", title:"Acc PUBG Conqueror — Glacier M416, Pharaoh X-Suit", rank:"Conqueror", price:"1.200.000", priceNum:1200000, oldPrice:"1.800.000", views:"3.1k", favs:89, posted:"1 ngày trước", verified:false, tags:["Conqueror","X-Suit","Glacier"], preview:"preview-pubg", color:"#f59e0b", accent:"#fbbf24", badge:"vip", description:"PUBG Mobile global — Conqueror Asia. M416 Glacier max, AKM Glacier, Pharaoh X-Suit Lv7, Mythic gloves. Hơn 3500 trận classic, KD 4.2.", seller:{ name:"PUBGKings", rating:4.7, sales:67 }, watchers:25, soldCount:21, priceTrend7d:-6.6, lastSold:"1.248.000" },
  { id:"GS9012", game:"Genshin", gameKey:"genshin", title:"Genshin AR55 — 12 nhân vật 5★ (Hutao C2, Zhongli C0, Raiden C0)", rank:"AR55", price:"2.500.000", priceNum:2500000, views:"4.2k", favs:128, posted:"3 giờ trước", verified:true, tags:["12 NV 5★","Hutao C2","Whale acc"], preview:"preview-genshin", color:"#c4b5fd", accent:"#a78bfa", badge:"vip", description:"Whale acc Genshin Impact server Asia. 12 nhân vật 5★ (Hutao C2 R1, Zhongli, Raiden, Kazuha, Yelan, Nahida, Ayaka...). 8 vũ khí 5★ signature. Đã farm artifact +20 cho team chính.", seller:{ name:"WhalesParadise", rating:5.0, sales:24 }, watchers:53, soldCount:12, priceTrend7d:4.7, lastSold:"2.650.000" },
  { id:"LQ2024", game:"Liên Quân", gameKey:"lq", title:"Acc Liên Quân Huyền Thoại — Full 110 tướng VN Server", rank:"Huyền Thoại", price:"480.000", priceNum:480000, oldPrice:"700.000", views:"1.2k", favs:42, posted:"30 phút trước", verified:true, tags:["110 tướng","15 trang phục","S5 rank"], preview:"preview-lq", color:"#10b981", accent:"#34d399", badge:"sale", description:"Acc Liên Quân server Việt Nam — Huyền Thoại S5. Full 110 tướng, 15+ trang phục SS-S, đủ ngọc và bùa hộ mệnh.", seller:{ name:"LienQuanShop", rating:4.6, sales:198 }, watchers:63, soldCount:5, priceTrend7d:-4.2, lastSold:"480.000" },
  { id:"VAL3344", game:"Valorant", gameKey:"valo", title:"Acc Valorant Radiant — 20 agent + Vandal Prime Skin", rank:"Radiant", price:"3.200.000", priceNum:3200000, views:"5.6k", favs:156, posted:"1 giờ trước", verified:true, tags:["Radiant","20 agent","Prime Vandal"], preview:"preview-valo", color:"#06b6d4", accent:"#22d3ee", badge:"hot", description:"Valorant server APAC — Radiant Top 500. 20/22 agent unlocked, full collection Prime, Reaver, Sovereign, Glitchpop. RR ổn định, không bị warning.", seller:{ name:"ValMaster", rating:5.0, sales:41 }, watchers:43, soldCount:4, priceTrend7d:-4.8, lastSold:"3.200.000" },
];

export const gameCategories = [
  { key:"all",     label:"Tất Cả",      count:12500 },
  { key:"lmht",    label:"LMHT",        count:3200, color:"#3b82f6" },
  { key:"ff",      label:"Free Fire",   count:2100, color:"#f43f5e" },
  { key:"pubg",    label:"PUBG",        count:1850, color:"#f59e0b" },
  { key:"genshin", label:"Genshin",     count:980,  color:"#c4b5fd" },
  { key:"lq",      label:"Liên Quân",   count:1420, color:"#10b981" },
  { key:"valo",    label:"Valorant",    count:760,  color:"#06b6d4" },
];

/**
 * Deterministic placeholder image for a listing. Uses picsum.photos seeded by
 * the listing id so each card has its own image but the same image survives
 * across reloads. Swap this for a CDN URL or signed S3 path once real
 * uploads are wired up.
 */
export function imgFor(id: string, w = 800, h = 500): string {
  return `https://picsum.photos/seed/${encodeURIComponent(id)}/${w}/${h}`;
}

export function getListing(id: string): Listing | undefined {
  return listings.find(l => l.id === id);
}

export function searchListings(q: string): Listing[] {
  if (!q.trim()) return listings;
  const t = q.toLowerCase();
  return listings.filter(l =>
    l.title.toLowerCase().includes(t) ||
    l.game.toLowerCase().includes(t) ||
    l.rank.toLowerCase().includes(t) ||
    l.id.toLowerCase().includes(t) ||
    l.tags.some(tag => tag.toLowerCase().includes(t))
  );
}
