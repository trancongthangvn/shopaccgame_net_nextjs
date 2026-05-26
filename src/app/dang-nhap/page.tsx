import type { Metadata } from "next";
import AuthCard from "./AuthCard";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Đăng nhập / Đăng ký | ShopAccGame.net",
  description: "Đăng nhập tài khoản ShopAccGame.net để quản lý tin đăng và yêu thích.",
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-[calc(100vh-220px)] flex items-center justify-center px-4 py-12">
        <AuthCard />
      </main>
    </>
  );
}
