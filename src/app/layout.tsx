import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";
import SearchOverlay from "@/components/SearchOverlay";

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

// Editorial mono — used for prices, IDs, ticker, marketplace data.
const jbm = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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

// Inline pre-hydration script: read saved theme from localStorage and apply
// data-theme="dark" before first paint. Default is light, so we only set the
// attribute when dark is wanted — avoids flash on the much more common case.
const themeInitScript = `
(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${svnGilroy.variable} ${jbm.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-gilroy), system-ui, sans-serif" }}
      >
        <ToastProvider>
          {children}
          <SearchOverlay />
        </ToastProvider>
      </body>
    </html>
  );
}
