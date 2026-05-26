"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Zap, Shield, CheckCircle2, AlertCircle } from "lucide-react";
import { gameCategories } from "@/data/listings";
import { useToast } from "@/components/Toast";

type Errors = Partial<Record<"game" | "title" | "price" | "rank" | "contact", string>>;

export default function SellForm() {
  const router = useRouter();
  const { push } = useToast();

  const [game, setGame] = useState("");
  const [title, setTitle] = useState("");
  const [rank, setRank] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [tagsRaw, setTagsRaw] = useState("");
  const [contact, setContact] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const games = gameCategories.filter(g => g.key !== "all");

  const validate = (): Errors => {
    const e: Errors = {};
    if (!game) e.game = "Chọn game";
    if (title.trim().length < 10) e.title = "Tiêu đề tối thiểu 10 ký tự";
    if (!rank.trim()) e.rank = "Nhập rank";
    if (!/^\d{4,}$/.test(price.replace(/[.,\s]/g, ""))) e.price = "Giá phải là số (≥ 1.000đ)";
    if (!/^[0-9+\s()-]{8,}$|^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) e.contact = "SĐT hoặc email hợp lệ";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      push("Vui lòng kiểm tra lại các trường", "error");
      return;
    }
    if (!agree) {
      push("Bạn cần đồng ý điều khoản trước khi đăng", "error");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      push("Đăng tin thành công! Tin sẽ duyệt trong 15 phút.", "success");
      setSubmitting(false);
      router.push("/");
    }, 900);
  };

  const formatPrice = (raw: string) => {
    const digits = raw.replace(/\D/g, "");
    return digits ? Number(digits).toLocaleString("vi-VN") : "";
  };

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 lg:py-12">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4" style={{ color: "#f97316" }} />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f97316" }}>Đăng tin miễn phí</span>
        </div>
        <h1 className="text-display-3 mb-3" style={{ fontFamily: "var(--font-gilroy),sans-serif" }}>
          <span style={{ color: "var(--fg)" }}>Đăng Bán </span>
          <span className="grad-rose">Acc Game</span>
        </h1>
        <p className="text-base" style={{ color: "var(--fg2)" }}>
          Tiếp cận <strong style={{ color: "var(--fg)" }}>48,000+</strong> người mua tiềm năng. Tin được duyệt trong 15 phút.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className="space-y-6">

        {/* Game */}
        <Field label="Game" required error={errors.game}>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {games.map(g => (
              <button
                key={g.key}
                type="button"
                onClick={() => setGame(g.key)}
                className="py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                style={{
                  background: game === g.key ? `linear-gradient(135deg,${g.color},${g.color}cc)` : "var(--scrim)",
                  border: `1px solid ${game === g.key ? "transparent" : "var(--border)"}`,
                  color: game === g.key ? "white" : "var(--fg2)",
                  boxShadow: game === g.key ? `0 4px 14px ${g.color}55` : "none",
                }}
              >
                {g.label}
              </button>
            ))}
          </div>
        </Field>

        {/* Title */}
        <Field label="Tiêu đề tin đăng" required error={errors.title} hint="VD: Acc LMHT Kim Cương 1 — 80 tướng + email gốc">
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            maxLength={120}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500/40 transition-all"
            style={{ background: "var(--scrim)", border: `1px solid ${errors.title ? "#f43f5e" : "var(--border)"}`, color: "var(--fg)" }}
            placeholder="Tiêu đề rõ ràng, có thông tin chính của acc"
          />
          <div className="text-2xs text-right mt-1" style={{ color: "var(--fg3)" }}>{title.length}/120</div>
        </Field>

        {/* Rank + Price */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Rank / Cấp" required error={errors.rank}>
            <input
              type="text"
              value={rank}
              onChange={e => setRank(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500/40 transition-all"
              style={{ background: "var(--scrim)", border: `1px solid ${errors.rank ? "#f43f5e" : "var(--border)"}`, color: "var(--fg)" }}
              placeholder="Cao Thủ, AR55, Radiant…"
            />
          </Field>
          <Field label="Giá bán (VNĐ)" required error={errors.price}>
            <div className="relative">
              <input
                type="text"
                value={price}
                onChange={e => setPrice(formatPrice(e.target.value))}
                inputMode="numeric"
                className="w-full pl-4 pr-12 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500/40 transition-all font-bold"
                style={{ background: "var(--scrim)", border: `1px solid ${errors.price ? "#f43f5e" : "var(--border)"}`, color: "var(--fg)" }}
                placeholder="0"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: "var(--fg3)" }}>đ</span>
            </div>
          </Field>
        </div>

        {/* Description */}
        <Field label="Mô tả chi tiết" hint="Liệt kê skin, tướng, trang phục, ngày tạo, email gốc/không…">
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={5}
            maxLength={1000}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500/40 transition-all resize-none"
            style={{ background: "var(--scrim)", border: "1px solid var(--border)", color: "var(--fg)" }}
            placeholder="Mô tả càng chi tiết, càng dễ bán."
          />
          <div className="text-2xs text-right mt-1" style={{ color: "var(--fg3)" }}>{description.length}/1000</div>
        </Field>

        {/* Tags */}
        <Field label="Tags" hint="Mỗi tag cách nhau bằng dấu phẩy. Tối đa 5 tag.">
          <input
            type="text"
            value={tagsRaw}
            onChange={e => setTagsRaw(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500/40 transition-all"
            style={{ background: "var(--scrim)", border: "1px solid var(--border)", color: "var(--fg)" }}
            placeholder="VD: 80 tướng, email gốc, full skin"
          />
          {tagsRaw && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {tagsRaw.split(",").map(t => t.trim()).filter(Boolean).slice(0, 5).map(t => (
                <span key={t} className="text-2xs px-2 py-1 rounded-md font-medium" style={{ background: "var(--scrim2)", color: "var(--fg2)" }}>{t}</span>
              ))}
            </div>
          )}
        </Field>

        {/* Contact */}
        <Field label="SĐT hoặc email liên hệ" required error={errors.contact}>
          <input
            type="text"
            value={contact}
            onChange={e => setContact(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500/40 transition-all"
            style={{ background: "var(--scrim)", border: `1px solid ${errors.contact ? "#f43f5e" : "var(--border)"}`, color: "var(--fg)" }}
            placeholder="0912 345 678 hoặc you@email.com"
          />
        </Field>

        {/* Safety notice */}
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.2)" }}>
          <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
          <div className="text-xs leading-relaxed" style={{ color: "var(--fg2)" }}>
            ShopAccGame.net là nền tảng đăng tin trung gian, không bảo lãnh giao dịch. Luôn dùng dịch vụ trung gian uy tín khi giao dịch giá trị cao.
          </div>
        </div>

        {/* Agree */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agree}
            onChange={e => setAgree(e.target.checked)}
            className="mt-1 w-4 h-4 rounded cursor-pointer accent-orange-500"
          />
          <span className="text-sm" style={{ color: "var(--fg2)" }}>
            Tôi xác nhận thông tin trên là chính xác và đồng ý với{" "}
            <a href="#legal" className="underline hover:opacity-80" style={{ color: "var(--orange)" }}>điều khoản dịch vụ</a>.
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold text-white btn-rose cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>Đang đăng tin…</>
          ) : (
            <><Zap className="w-4 h-4" /> Đăng tin miễn phí</>
          )}
        </button>
      </form>
    </main>
  );
}

function Field({ label, required, error, hint, children }: { label: string; required?: boolean; error?: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-sm font-semibold mb-2 flex items-center gap-1" style={{ color: "var(--fg)" }}>
        {label}
        {required && <span style={{ color: "#f43f5e" }}>*</span>}
      </label>
      {hint && <div className="text-xs mb-2" style={{ color: "var(--fg3)" }}>{hint}</div>}
      {children}
      {error && (
        <div className="flex items-center gap-1.5 mt-2 text-xs" style={{ color: "#f43f5e" }}>
          <AlertCircle className="w-3.5 h-3.5" /> {error}
        </div>
      )}
    </div>
  );
}
