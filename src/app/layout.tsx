import type { Metadata } from "next";
import { Russo_One, Chakra_Petch } from "next/font/google";
import "./globals.css";

const russoOne = Russo_One({
  weight: "400",
  variable: "--font-russo",
  subsets: ["latin"],
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
  subsets: ["latin"],
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
    <html
      lang="vi"
      className={`${russoOne.variable} ${chakraPetch.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-chakra), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
