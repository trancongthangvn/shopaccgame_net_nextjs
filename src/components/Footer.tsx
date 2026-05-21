"use client";
import { Gamepad2, Globe, Play, MessageCircle } from "lucide-react";

const footerLinks = {
  "Dịch Vụ": [
    "Đăng Tin Miễn Phí",
    "Gói Nổi Bật",
    "Xác Minh Người Bán",
    "Quảng Cáo Banner",
  ],
  "Danh Mục Game": [
    "Liên Minh Huyền Thoại",
    "Free Fire",
    "PUBG Mobile",
    "Genshin Impact",
    "Liên Quân Mobile",
    "Valorant",
  ],
  "Hỗ Trợ": [
    "Trung Tâm Trợ Giúp",
    "Báo Cáo Vi Phạm",
    "Hướng Dẫn Giao Dịch An Toàn",
    "Liên Hệ CSKH",
  ],
  "Pháp Lý": [
    "Điều Khoản Sử Dụng",
    "Chính Sách Bảo Mật",
    "Quy Chế Hoạt Động",
    "Giải Quyết Tranh Chấp",
    "Thông Tin Công Ty",
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      style={{
        background: "var(--color-background-2)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "var(--color-primary)" }}
              >
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-russo), sans-serif" }}
              >
                ShopAcc<span style={{ color: "var(--color-accent)" }}>Game</span>
                <span style={{ color: "var(--color-muted-text)" }}>.net</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-muted-text)" }}>
              Sàn đăng tin quảng cáo mua bán tài khoản game hàng đầu Việt Nam.
              Kết nối người mua và người bán một cách minh bạch, an toàn.
            </p>

            <div
              className="text-xs p-3 rounded-xl border leading-relaxed mb-5"
              style={{
                background: "#F59E0B0D",
                borderColor: "#F59E0B33",
                color: "#FCD34D",
              }}
            >
              <strong>Tuyên bố:</strong> ShopAccGame.net là nền tảng đăng tin trung gian,
              không mua bán trực tiếp và không bảo lãnh giao dịch.
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, label: "Facebook", color: "#1877F2" },
                { icon: Play, label: "YouTube", color: "#FF0000" },
                { icon: MessageCircle, label: "Zalo", color: "#0068FF" },
              ].map(({ icon: Icon, label, color }) => (
                <button
                  key={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 hover:scale-110 cursor-pointer"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-muted-text)",
                    background: "var(--color-surface)",
                  }}
                  aria-label={label}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = color;
                    (e.currentTarget as HTMLButtonElement).style.borderColor = color + "55";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--color-muted-text)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border)";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="font-semibold text-sm mb-4"
                style={{
                  fontFamily: "var(--font-russo), sans-serif",
                  color: "var(--color-foreground)",
                }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs transition-colors duration-200 hover:text-purple-300"
                      style={{ color: "var(--color-muted-text)" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs space-y-1 text-center sm:text-left" style={{ color: "var(--color-muted-text)" }}>
              <p>© {currentYear} ShopAccGame.net — Tất cả quyền được bảo lưu</p>
              <p>
                Giấy phép TMĐT: Đã đăng ký Bộ Công Thương •{" "}
                <span style={{ color: "var(--color-secondary)" }}>
                  MST: 0123456789 (minh họa)
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs" style={{ color: "var(--color-muted-text)" }}>
              <a href="#legal" className="hover:text-purple-300 transition-colors duration-200">
                Điều Khoản
              </a>
              <span>•</span>
              <a href="#legal" className="hover:text-purple-300 transition-colors duration-200">
                Bảo Mật
              </a>
              <span>•</span>
              <a href="#legal" className="hover:text-purple-300 transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>

          {/* Bottom disclaimer */}
          <div
            className="mt-4 text-xs leading-relaxed text-center"
            style={{ color: "#475569" }}
          >
            ShopAccGame.net không phải là đại lý, đối tác chính thức hay có liên quan đến bất kỳ nhà
            phát hành game nào. Tên các tựa game (LMHT, Free Fire, PUBG, Genshin Impact, v.v.)
            là thương hiệu thuộc sở hữu của các công ty tương ứng.
          </div>
        </div>
      </div>
    </footer>
  );
}
