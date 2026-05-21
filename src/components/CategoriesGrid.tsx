import { Swords, Crosshair, Wand2, Crown, Globe, Car, Gamepad2, Trophy, Sparkles, ArrowRight } from "lucide-react";

const cats = [
  { name:"Liên Minh\nHuyền Thoại", short:"MOBA · PC",    count:"3,200+", icon:Swords,    c1:"#a78bfa", c2:"#7c3aed", preview:"preview-lmht",    tag:"🔥 Hot" },
  { name:"Free Fire",              short:"Battle Royale",count:"2,100+", icon:Crosshair, c1:"#fb7185", c2:"#f43f5e", preview:"preview-ff",      tag:"🔥 Hot" },
  { name:"PUBG\nMobile",           short:"Battle Royale",count:"1,850+", icon:Crosshair, c1:"#fbbf24", c2:"#f59e0b", preview:"preview-pubg",    tag:"Trending" },
  { name:"Genshin\nImpact",        short:"Action RPG",   count:"980+",   icon:Wand2,     c1:"#c4b5fd", c2:"#a78bfa", preview:"preview-genshin", tag:"Mới" },
  { name:"Liên Quân\nMobile",      short:"MOBA · Mobile",count:"1,420+", icon:Crown,     c1:"#34d399", c2:"#10b981", preview:"preview-lq",      tag:"" },
  { name:"Valorant",               short:"Tactical FPS", count:"760+",   icon:Globe,     c1:"#22d3ee", c2:"#06b6d4", preview:"preview-valo",    tag:"Trending" },
  { name:"Minecraft",              short:"Sandbox",      count:"430+",   icon:Car,       c1:"#84cc16", c2:"#65a30d", preview:"preview-lq",      tag:"" },
  { name:"Tất Cả\nGame Khác",      short:"100+ tựa game",count:"1,800+", icon:Gamepad2,  c1:"#94a3b8", c2:"#64748b", preview:"preview-lmht",    tag:"" },
];

export default function CategoriesGrid() {
  return (
    <section id="categories" className="py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4" style={{ color:"#a78bfa" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color:"#a78bfa" }}>Danh Mục Game</span>
            </div>
            <h2 className="section-heading-line text-3xl sm:text-4xl mb-2" style={{ fontFamily:"var(--font-gilroy),sans-serif" }}>
              <span style={{ color:"var(--fg)" }}>Chọn </span>
              <span className="grad-purple">Tựa Game</span>
              <span style={{ color:"var(--fg)" }}> Yêu Thích</span>
            </h2>
            <p className="text-sm" style={{ color:"var(--fg3)" }}>Hàng nghìn tin đăng từ các tựa game phổ biến nhất Việt Nam</p>
          </div>
          <button className="flex items-center gap-1 text-sm font-semibold pb-1 cursor-pointer transition-colors hover:text-purple-400" style={{ color:"var(--fg2)" }}>
            Xem tất cả <ArrowRight className="w-4 h-4 bounce-x" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {cats.map((cat) => {
            const Icon = cat.icon;
            return (
              <button key={cat.name}
                className="relative group card overflow-hidden text-left transition-all cursor-pointer hover:scale-[1.02]"
                style={{ background:"var(--surface)" }}
                aria-label={cat.name.replace("\n", " ")}
              >
                {/* Preview area with rank shield */}
                <div className={`relative h-28 ${cat.preview} hex-grid overflow-hidden`}>
                  {/* Tag */}
                  {cat.tag && (
                    <div className="absolute top-2 right-2 z-10">
                      <span className="badge"
                        style={{ background: cat.c1+"33", color:"white", border:`1px solid ${cat.c1}88`, fontSize:"9px", padding:"2px 8px" }}>
                        {cat.tag}
                      </span>
                    </div>
                  )}

                  {/* Centerpiece icon with glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative transition-transform duration-300 group-hover:scale-110">
                      <div className="rank-shield w-12 h-12"
                        style={{ background:`linear-gradient(135deg,${cat.c1},${cat.c2})`, boxShadow:`0 6px 20px ${cat.c2}66` }}>
                        <Icon className="w-5 h-5 text-white drop-shadow" />
                      </div>
                      <div className="absolute -inset-2 -z-10 rounded-full opacity-50 blur-xl" style={{ background: cat.c2 }} />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4">
                  <div className="text-sm font-bold leading-tight mb-1 whitespace-pre-line" style={{ color:"var(--fg)" }}>
                    {cat.name}
                  </div>
                  <div className="text-[11px] mb-2" style={{ color:"var(--fg3)" }}>{cat.short}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold" style={{ color: cat.c1 }}>{cat.count} tin</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" style={{ color: cat.c1 }} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
