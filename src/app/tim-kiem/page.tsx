import { Suspense } from "react";
import SearchResults from "./SearchResults";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tìm kiếm tin đăng | ShopAccGame.net",
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12" style={{ color: "var(--fg2)" }}>Đang tải…</div>}>
        <SearchResults />
      </Suspense>
      <Footer />
    </>
  );
}
