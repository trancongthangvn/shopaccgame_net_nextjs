"use client";
import { Gamepad2, Globe, Play, MessageCircle, ArrowUp } from "lucide-react";

const cols = {
  "Dịch Vụ": ["Đăng Tin Miễn Phí","Gói Nổi Bật","Xác Minh Người Bán","Quảng Cáo Banner"],
  "Danh Mục": ["Liên Minh Huyền Thoại","Free Fire","PUBG Mobile","Genshin Impact","Liên Quân","Valorant"],
  "Hỗ Trợ":   ["Trung Tâm Trợ Giúp","Báo Cáo Vi Phạm","Giao Dịch An Toàn","Liên Hệ CSKH"],
  "Pháp Lý":  ["Điều Khoản SD","Chính Sách Bảo Mật","Quy Chế Hoạt Động","Thông Tin Công Ty"],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl btn-primary flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-[15px] font-bold" style={{ fontFamily: "var(--font-russo),sans-serif" }}>
                <span className="grad-purple">ShopAcc</span>
                <span className="grad-rose">Game</span>
                <span style={{ color: "var(--fg3)" }}>.net</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--fg2)" }}>
              Sàn đăng tin quảng cáo mua bán tài khoản game hàng đầu Việt Nam. Kết nối người mua và người bán minh bạch, an toàn.
            </p>
            <div className="text-xs p-3.5 rounded-xl mb-6 leading-relaxed"
              style={{ background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.2)", color: "#fcd34d" }}>
              ⚠️ <strong>Tuyên bố:</strong> Nền tảng đăng tin trung gian — không mua bán trực tiếp và không bảo lãnh giao dịch.
            </div>
            <div className="flex items-center gap-2">
              {[
                { icon: Globe,         label: "Facebook", color: "#1877F2" },
                { icon: Play,          label: "YouTube",  color: "#FF0000" },
                { icon: MessageCircle, label: "Zalo",     color: "#0068FF" },
              ].map(({ icon: Icon, label, color }) => (
                <button key={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                  style={{ background: "var(--surface2)", border: "1px solid var(--border)" }}
                  aria-label={label}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = color + "66"; (e.currentTarget as HTMLElement).style.background = color + "18"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.background = "var(--surface2)"; }}
                >
                  <Icon className="w-4 h-4" style={{ color: "var(--fg2)" }} />
                </button>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(cols).map(([cat, links]) => (
            <div key={cat}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--fg3)" }}>{cat}</h4>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm transition-colors duration-200 hover:text-purple-400" style={{ color: "var(--fg2)" }}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="text-center sm:text-left">
            <p className="text-xs" style={{ color: "var(--fg3)" }}>© {year} ShopAccGame.net · MST: 0123456789 (minh họa)</p>
            <p className="text-xs mt-1" style={{ color: "var(--fg3)" }}>
              Không liên kết với Riot, Garena, Krafton hay bất kỳ nhà phát hành game nào.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {["Điều Khoản","Bảo Mật","Cookies"].map(l => (
              <a key={l} href="#legal" className="text-xs transition-colors hover:text-purple-400" style={{ color: "var(--fg3)" }}>{l}</a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-8 h-8 rounded-xl flex items-center justify-center transition-all hover:scale-110 cursor-pointer btn-ghost"
              aria-label="Lên đầu trang"
            >
              <ArrowUp className="w-4 h-4" style={{ color: "var(--fg2)" }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
