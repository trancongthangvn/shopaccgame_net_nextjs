import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// SVN Gilroy — local font (see /src/app/fonts/)
const svnGilroy = localFont({
  src: [
    { path: "./fonts/SVN-Gilroy_Regular.woff2",     weight: "400", style: "normal" },
    { path: "./fonts/SVN-Gilroy_Medium.woff2",      weight: "500", style: "normal" },
    { path: "./fonts/SVN-Gilroy_SemiBold.woff2",    weight: "600", style: "normal" },
    { path: "./fonts/SVN-Gilroy_Bold.woff2",        weight: "700", style: "normal" },
    { path: "./fonts/SVN-Gilroy_Bold_Italic.woff2", weight: "700", style: "italic" },
    { path: "./fonts/SVN-Gilroy_Heavy.woff2",       weight: "800", style: "normal" },
    { path: "./fonts/SVN-Gilroy_Black.woff2",       weight: "900", style: "normal" },
    { path: "./fonts/SVN-Gilroy_Black_Italic.woff2",weight: "900", style: "italic" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShopAccGame.net - Sàn Đăng Tin Mua Bán Tài Khoản Game Uy Tín",
  description:
    "Nền tảng đăng tin quảng cáo mua bán tài khoản game hàng đầu Việt Nam. Tìm kiếm acc game giá tốt, an toàn, nhanh chóng. LMHT, PUBG, Free Fire, Genshin Impact và nhiều game khác.",
  keywords: [
    "shop acc game",
    "mua bán tài khoản game",
    "acc lmht",
    "acc pubg",
    "acc free fire",
    "acc genshin",
    "shopaccgame",
    "mua acc game",
  ],
  robots: "index, follow",
  openGraph: {
    title: "ShopAccGame.net - Sàn Đăng Tin Tài Khoản Game",
    description: "Đăng tin & tìm kiếm tài khoản game uy tín, giá tốt nhất",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${svnGilroy.variable} h-full`}>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-gilroy), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
