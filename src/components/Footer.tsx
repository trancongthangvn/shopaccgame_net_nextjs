"use client";
import { Gamepad2, Globe, Play, MessageCircle, ArrowUp, Mail, MapPin, Phone } from "lucide-react";

const cols = {
  "Dịch Vụ":  ["Đăng Tin Miễn Phí","Gói Nổi Bật","Xác Minh Người Bán","Quảng Cáo Banner"],
  "Danh Mục": ["Liên Minh Huyền Thoại","Free Fire","PUBG Mobile","Genshin Impact","Liên Quân","Valorant"],
  "Hỗ Trợ":   ["Trung Tâm Trợ Giúp","Báo Cáo Vi Phạm","Giao Dịch An Toàn","Liên Hệ CSKH"],
  "Pháp Lý":  ["Điều Khoản Sử Dụng","Chính Sách Bảo Mật","Quy Chế Hoạt Động","Thông Tin Công Ty"],
};

const payments = [
  { name:"MoMo",       c:"#a50064" },
  { name:"ZaloPay",    c:"#0068ff" },
  { name:"VNPay",      c:"#005baa" },
  { name:"ViettelPay", c:"#ee0033" },
  { name:"Vietcombank",c:"#1e5f3f" },
  { name:"Techcombank",c:"#ed1c24" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      {/* Payment methods strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6" style={{ borderBottom:"1px solid var(--border)" }}>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color:"var(--fg3)" }}>
            🔒 Phương thức thanh toán phổ biến giữa người dùng
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {payments.map(p => (
              <div key={p.name}
                className="px-3 py-1.5 rounded-lg text-2xs font-bold transition-all hover:scale-105 cursor-default"
                style={{ background:"var(--surface2)", border:"1px solid var(--border)", color: p.c }}>
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl btn-primary flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-base font-bold leading-none" style={{ fontFamily: "var(--font-gilroy),sans-serif" }}>
                <span className="grad-purple">Shop</span><span className="grad-rose">Acc</span><span className="text-white">Game</span>
                <span className="text-xs ml-0.5" style={{ color: "var(--fg3)" }}>.net</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--fg2)" }}>
              Sàn đăng tin quảng cáo mua bán acc game hàng đầu Việt Nam. Kết nối người mua &amp; bán minh bạch, an toàn.
            </p>

            {/* Contact */}
            <div className="space-y-2 mb-5 text-xs" style={{ color: "var(--fg2)" }}>
              <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" style={{ color: "var(--purple2)" }} /> support@shopaccgame.net</div>
              <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" style={{ color: "var(--purple2)" }} /> 1900 9999 (8h-22h)</div>
              <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" style={{ color: "var(--purple2)" }} /> Hà Nội, Việt Nam</div>
            </div>

            {/* Disclaimer */}
            <div className="text-xs p-3 rounded-xl leading-relaxed mb-5"
              style={{ background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.2)", color: "#fcd34d" }}>
              <strong>⚠️ Tuyên bố:</strong> Nền tảng đăng tin trung gian — không trực tiếp mua bán và không bảo lãnh giao dịch.
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {[
                { icon:Globe,         label:"Facebook", color:"#1877F2" },
                { icon:Play,          label:"YouTube",  color:"#FF0000" },
                { icon:MessageCircle, label:"Zalo",     color:"#0068FF" },
              ].map(({ icon:Icon, label, color }) => (
                <a key={label}
                  href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
                  style={{ background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--fg2)" }}
                  aria-label={label}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = color + "66"; (e.currentTarget as HTMLElement).style.color = color; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--fg2)"; }}
                >
                  <Icon className="w-4 h-4" />
                </a>
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="text-center sm:text-left">
            <p className="text-xs" style={{ color: "var(--fg3)" }}>© {year} ShopAccGame.net · MST: 0123456789 (minh họa) · Đã đăng ký Bộ Công Thương</p>
            <p className="text-xs mt-1" style={{ color: "var(--fg4)" }}>
              Không liên kết với Riot, Garena, Krafton, miHoYo hay bất kỳ nhà phát hành game nào.
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
