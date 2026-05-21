import { Swords, Crosshair, Wand2, Globe, Car, Gamepad2, Trophy, Sparkles } from "lucide-react";

const cats = [
  { name:"Liên Minh Huyền Thoại", short:"MOBA · PC", count:"3,200+", icon:Swords,   c1:"#7c3aed", c2:"#4f46e5", tag:"🔥 Hot",   tagCol:"#f43f5e" },
  { name:"Free Fire",              short:"Battle Royale", count:"2,100+", icon:Crosshair, c1:"#f43f5e", c2:"#dc2626", tag:"🔥 Hot",   tagCol:"#f43f5e" },
  { name:"PUBG Mobile",            short:"Battle Royale", count:"1,850+", icon:Crosshair, c1:"#f59e0b", c2:"#d97706", tag:"Trending",tagCol:"#f59e0b" },
  { name:"Genshin Impact",         short:"Action RPG",   count:"980+",   icon:Wand2,    c1:"#a78bfa", c2:"#7c3aed", tag:"Mới",    tagCol:"#a78bfa" },
  { name:"Liên Quân Mobile",       short:"MOBA · Mobile",count:"1,420+", icon:Trophy,   c1:"#10b981", c2:"#059669", tag:"",       tagCol:"" },
  { name:"Valorant",               short:"Tactical FPS", count:"760+",   icon:Globe,    c1:"#06b6d4", c2:"#0284c7", tag:"Trending",tagCol:"#06b6d4" },
  { name:"Minecraft",              short:"Sandbox",      count:"430+",   icon:Car,      c1:"#84cc16", c2:"#65a30d", tag:"",       tagCol:"" },
  { name:"Nhiều Game Khác",        short:"Tất cả thể loại",count:"1,800+",icon:Gamepad2,c1:"#94a3b8", c2:"#64748b", tag:"",       tagCol:"" },
];

export default function GameCategories() {
  return (
    <section id="categories" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4" style={{ color: "#9f67ff" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#9f67ff" }}>Danh Mục</span>
            </div>
            <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-russo),sans-serif" }}>
              <span style={{ color: "var(--fg)" }}>Chọn </span>
              <span className="grad-purple">Tựa Game</span>
            </h2>
          </div>
          <p className="hidden sm:block text-sm pb-1" style={{ color: "var(--fg3)" }}>12,500+ tin đăng</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {cats.map((cat) => {
            const Icon = cat.icon;
            return (
              <button key={cat.name}
                className="relative group rounded-2xl p-5 text-left overflow-hidden transition-all duration-300 cursor-pointer border-glow-hover"
                style={{ background: "var(--surface)" }}
                aria-label={`Xem ${cat.name}`}
              >
                {/* Gradient bg on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `linear-gradient(135deg,${cat.c1}12,${cat.c2}08)` }} />

                {/* Glow orb */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"
                  style={{ background: cat.c1 }} />

                {/* Tag */}
                {cat.tag && (
                  <span className="absolute top-3 right-3 tag" style={{ background: cat.tagCol + "22", color: cat.tagCol, border: `1px solid ${cat.tagCol}44` }}>
                    {cat.tag}
                  </span>
                )}

                {/* Icon */}
                <div className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg,${cat.c1}33,${cat.c2}22)` }}>
                  <Icon className="w-5 h-5" style={{ color: cat.c1 }} />
                </div>

                {/* Name */}
                <div className="relative font-semibold text-sm mb-1 leading-tight" style={{ color: "var(--fg)" }}>
                  {cat.name}
                </div>
                <div className="relative text-xs mb-3" style={{ color: "var(--fg3)" }}>{cat.short}</div>
                <div className="relative text-xs font-bold" style={{ color: cat.c1 }}>
                  {cat.count} tin đăng
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
