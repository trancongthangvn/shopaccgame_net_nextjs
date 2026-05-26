import type { Metadata } from "next";
import SellForm from "./SellForm";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Đăng Tin Bán Acc | ShopAccGame.net",
  description: "Đăng tin bán tài khoản game miễn phí. Tiếp cận 48,000+ người mua tiềm năng.",
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Navbar />
      <SellForm />
      <Footer />
    </>
  );
}
