import Link from "next/link";
import { Swords, Crosshair, Wand2, Crown, Globe, Car, Gamepad2, ArrowRight } from "lucide-react";
import SectionHead from "@/components/SectionHead";

const cats = [
  { name:"Liên Minh\nHuyền Thoại", short:"MOBA · PC",    count:"3,200+", icon:Swords,    c1:"#60a5fa", c2:"#3b82f6", preview:"preview-lmht",    tag:"🔥 Hot", key:"lmht" },
  { name:"Free Fire",              short:"Battle Royale",count:"2,100+", icon:Crosshair, c1:"#fb7185", c2:"#f43f5e", preview:"preview-ff",      tag:"🔥 Hot", key:"ff" },
  { name:"PUBG\nMobile",           short:"Battle Royale",count:"1,850+", icon:Crosshair, c1:"#fbbf24", c2:"#f59e0b", preview:"preview-pubg",    tag:"Trending", key:"pubg" },
  { name:"Genshin\nImpact",        short:"Action RPG",   count:"980+",   icon:Wand2,     c1:"#c4b5fd", c2:"#7c3aed", preview:"preview-genshin", tag:"Mới", key:"genshin" },
  { name:"Liên Quân\nMobile",      short:"MOBA · Mobile",count:"1,420+", icon:Crown,     c1:"#34d399", c2:"#10b981", preview:"preview-lq",      tag:"", key:"lq" },
  { name:"Valorant",               short:"Tactical FPS", count:"760+",   icon:Globe,     c1:"#22d3ee", c2:"#06b6d4", preview:"preview-valo",    tag:"Trending", key:"valo" },
  { name:"Minecraft",              short:"Sandbox",      count:"430+",   icon:Car,       c1:"#84cc16", c2:"#65a30d", preview:"preview-lq",      tag:"", key:"all" },
  { name:"Tất Cả\nGame Khác",      short:"100+ tựa game",count:"1,800+", icon:Gamepad2,  c1:"#94a3b8", c2:"#64748b", preview:"preview-lmht",    tag:"", key:"all" },
];

export default function CategoriesGrid() {
  return (
    <section id="categories" className="py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <SectionHead
          index="01"
          eyebrow="Danh mục"
          title="Chọn"
          titleAccent="tựa game"
          subtitle="Hàng nghìn tin đăng từ các tựa game phổ biến nhất Việt Nam."
          rightHref="/tim-kiem/"
          rightLabel="Tất cả game"
        />

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {cats.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link key={cat.name} href={`/tim-kiem/?game=${cat.key}`}
                className="relative group card overflow-hidden text-left transition-all cursor-pointer hover:scale-[1.02]"
                style={{ background:"var(--surface)" }}
                aria-label={cat.name.replace("\n", " ")}
              >
                {/* Preview — photo placeholder */}
                <div className="relative h-32 overflow-hidden" style={{ background: "var(--bg3)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://picsum.photos/seed/cat-${cat.key}-${cat.name.replace(/\s+/g, "")}/400/250`} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.5))" }} />
                  {/* Tag */}
                  {cat.tag && (
                    <div className="absolute top-2 right-2 z-10">
                      <span className="badge text-2xs" style={{ background: cat.c1, color: "white" }}>
                        {cat.tag}
                      </span>
                    </div>
                  )}
                  {/* Small game icon chip bottom-left */}
                  <div className="absolute bottom-2 left-2 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: cat.c1 }}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4">
                  <div className="text-sm font-bold leading-tight mb-1 whitespace-pre-line" style={{ color:"var(--fg)" }}>
                    {cat.name}
                  </div>
                  <div className="text-2xs mb-2" style={{ color:"var(--fg3)" }}>{cat.short}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold" style={{ color: cat.c1 }}>{cat.count} tin</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" style={{ color: cat.c1 }} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
