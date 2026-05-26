import Dashboard from "./Dashboard";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tài khoản | ShopAccGame.net",
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Dashboard />
      <Footer />
    </>
  );
}
