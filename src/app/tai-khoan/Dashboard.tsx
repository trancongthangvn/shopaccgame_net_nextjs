"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User as UserIcon, Heart, FileText, LogOut, Plus, Eye } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { useFavorites } from "@/lib/favorites";
import { useToast } from "@/components/Toast";
import { listings, imgFor } from "@/data/listings";

type Tab = "listings" | "favorites" | "profile";

export default function Dashboard() {
  const router = useRouter();
  const { user, ready, logout } = useAuth();
  const { ids: favIds } = useFavorites();
  const { push } = useToast();
  const [tab, setTab] = useState<Tab>("listings");

  useEffect(() => {
    if (ready && !user) router.replace("/dang-nhap/");
  }, [ready, user, router]);

  if (!ready || !user) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 text-center" style={{ color: "var(--fg2)" }}>
        Đang kiểm tra phiên đăng nhập…
      </main>
    );
  }

  const myFavs = listings.filter(l => favIds.includes(l.id));
  const myListings: typeof listings = []; // mock — none yet

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

      {/* Header */}
      <div className="card p-6 mb-6">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-white text-2xl" style={{ background: "#f97316" }}>
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-extrabold truncate" style={{ color: "var(--fg)" }}>{user.name}</h1>
            <p className="text-sm truncate" style={{ color: "var(--fg3)" }}>{user.email}</p>
          </div>
          <button
            onClick={() => { logout(); push("Đã đăng xuất", "info"); router.push("/"); }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer"
            style={{ background: "var(--scrim)", border: "1px solid var(--border)", color: "var(--fg2)" }}
          >
            <LogOut className="w-4 h-4" /> Đăng xuất
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          <Stat label="Tin đăng" value={myListings.length} color="#f97316" />
          <Stat label="Yêu thích" value={myFavs.length} color="#f43f5e" />
          <Stat label="Giao dịch" value={0} color="#10b981" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-xl mb-5 max-w-md" style={{ background: "var(--scrim)" }}>
        {([
          { k: "listings", l: "Tin đăng", i: FileText },
          { k: "favorites", l: "Yêu thích", i: Heart },
          { k: "profile", l: "Thông tin", i: UserIcon },
        ] as const).map(t => {
          const Icon = t.i;
          return (
            <button
              key={t.k}
              onClick={() => setTab(t.k)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer"
              style={{
                background: tab === t.k ? "var(--surface)" : "transparent",
                color: tab === t.k ? "var(--fg)" : "var(--fg3)",
                boxShadow: tab === t.k ? "var(--shadow-sm)" : "none",
              }}
            >
              <Icon className="w-3.5 h-3.5" /> {t.l}
            </button>
          );
        })}
      </div>

      {/* Content */}
      {tab === "listings" && (
        <div className="card p-12 text-center">
          <FileText className="w-12 h-12 mx-auto mb-3" style={{ color: "var(--fg4)" }} />
          <h3 className="text-base font-bold mb-1" style={{ color: "var(--fg)" }}>Bạn chưa có tin đăng nào</h3>
          <p className="text-sm mb-4" style={{ color: "var(--fg3)" }}>Đăng tin đầu tiên để bắt đầu bán acc.</p>
          <Link href="/dang-tin/" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold text-white btn-primary cursor-pointer">
            <Plus className="w-4 h-4" /> Đăng tin mới
          </Link>
        </div>
      )}

      {tab === "favorites" && (
        myFavs.length === 0 ? (
          <div className="card p-12 text-center">
            <Heart className="w-12 h-12 mx-auto mb-3" style={{ color: "var(--fg4)" }} />
            <h3 className="text-base font-bold mb-1" style={{ color: "var(--fg)" }}>Chưa có tin yêu thích</h3>
            <p className="text-sm mb-4" style={{ color: "var(--fg3)" }}>Nhấn ❤ trên các tin đăng để lưu lại xem sau.</p>
            <Link href="/" className="inline-flex px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer btn-ghost" style={{ color: "var(--fg2)" }}>
              Khám phá acc
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {myFavs.map(l => (
              <Link key={l.id} href={`/acc/${l.id}/`} className="card card-hover overflow-hidden">
                <div className="relative h-32 overflow-hidden" style={{ background: "var(--bg3)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgFor(l.id, 400, 250)} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.5))" }} />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded text-2xs text-white" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <Eye className="w-3 h-3" />{l.views}
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-xs font-semibold line-clamp-2 mb-2 min-h-[2.2rem]" style={{ color: "var(--fg)" }}>{l.title}</div>
                  <div className="text-base font-bold" style={{ color: l.color }}>{l.price}đ</div>
                </div>
              </Link>
            ))}
          </div>
        )
      )}

      {tab === "profile" && (
        <div className="card p-6 space-y-4">
          <Row label="Họ tên" value={user.name} />
          <Row label="Email" value={user.email} />
          <Row label="SĐT" value="Chưa cập nhật" />
          <Row label="Trạng thái" value="Đã xác minh email" valueColor="#10b981" />
          <button onClick={() => push("Tính năng đang phát triển", "info")} className="px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer btn-ghost" style={{ color: "var(--fg2)" }}>
            Cập nhật thông tin
          </button>
        </div>
      )}
    </main>
  );
}

function Stat({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="rounded-xl p-3 text-center" style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
      <div className="text-2xl font-extrabold" style={{ color }}>{value}</div>
      <div className="text-xs" style={{ color: "var(--fg3)" }}>{label}</div>
    </div>
  );
}

function Row({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) {
  return (
    <div className="flex items-center justify-between py-2.5" style={{ borderBottom: "1px solid var(--border)" }}>
      <span className="text-sm" style={{ color: "var(--fg3)" }}>{label}</span>
      <span className="text-sm font-semibold" style={{ color: valueColor ?? "var(--fg)" }}>{value}</span>
    </div>
  );
}
