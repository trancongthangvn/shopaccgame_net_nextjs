import { Gamepad2, Crosshair, Swords, Wand2, Car, Globe } from "lucide-react";

const categories = [
  {
    name: "Liên Minh Huyền Thoại",
    short: "LMHT / LoL",
    count: "3,200+",
    color: "#7C3AED",
    bg: "#7C3AED18",
    border: "#7C3AED44",
    icon: Swords,
    tag: "Hot",
  },
  {
    name: "PUBG Mobile",
    short: "Battle Royale",
    count: "1,850+",
    color: "#F59E0B",
    bg: "#F59E0B18",
    border: "#F59E0B44",
    icon: Crosshair,
    tag: "Trending",
  },
  {
    name: "Free Fire",
    short: "Battle Royale",
    count: "2,100+",
    color: "#F43F5E",
    bg: "#F43F5E18",
    border: "#F43F5E44",
    icon: Crosshair,
    tag: "Hot",
  },
  {
    name: "Genshin Impact",
    short: "Action RPG",
    count: "980+",
    color: "#A78BFA",
    bg: "#A78BFA18",
    border: "#A78BFA44",
    icon: Wand2,
    tag: "Mới",
  },
  {
    name: "Liên Quân Mobile",
    short: "MOBA",
    count: "1,420+",
    color: "#10B981",
    bg: "#10B98118",
    border: "#10B98144",
    icon: Gamepad2,
    tag: "",
  },
  {
    name: "Valorant",
    short: "Tactical FPS",
    count: "760+",
    color: "#06B6D4",
    bg: "#06B6D418",
    border: "#06B6D444",
    icon: Globe,
    tag: "Trending",
  },
  {
    name: "Need for Speed",
    short: "Racing",
    count: "340+",
    color: "#F97316",
    bg: "#F9731618",
    border: "#F9731644",
    icon: Car,
    tag: "",
  },
  {
    name: "Game Khác",
    short: "Nhiều thể loại",
    count: "1,800+",
    color: "#94A3B8",
    bg: "#94A3B818",
    border: "#94A3B844",
    icon: Gamepad2,
    tag: "",
  },
];

export default function GameCategories() {
  return (
    <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2
          className="text-3xl sm:text-4xl mb-3"
          style={{
            fontFamily: "var(--font-russo), sans-serif",
            color: "var(--color-foreground)",
          }}
        >
          Danh Mục{" "}
          <span className="neon-text-purple" style={{ color: "var(--color-secondary)" }}>
            Game
          </span>
        </h2>
        <p className="text-sm" style={{ color: "var(--color-muted-text)" }}>
          Hàng nghìn tài khoản từ các tựa game phổ biến nhất Việt Nam
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.name}
              className="relative group rounded-2xl border p-5 text-left transition-all duration-300 card-glow cursor-pointer hover:scale-[1.02]"
              style={{
                background: cat.bg,
                borderColor: cat.border,
              }}
              aria-label={`Xem tin đăng ${cat.name}`}
            >
              {cat.tag && (
                <span
                  className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{
                    background: cat.color + "33",
                    color: cat.color,
                    border: `1px solid ${cat.color}55`,
                  }}
                >
                  {cat.tag}
                </span>
              )}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: cat.color + "22", color: cat.color }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div
                className="font-semibold text-sm mb-0.5 leading-tight"
                style={{
                  color: "var(--color-foreground)",
                  fontFamily: "var(--font-chakra), sans-serif",
                }}
              >
                {cat.name}
              </div>
              <div className="text-xs mb-2" style={{ color: "var(--color-muted-text)" }}>
                {cat.short}
              </div>
              <div className="text-xs font-semibold" style={{ color: cat.color }}>
                {cat.count} tin đăng
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
