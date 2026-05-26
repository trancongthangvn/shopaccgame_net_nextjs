"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Gamepad2, Mail, Lock, User as UserIcon, Eye, EyeOff, AlertCircle } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { useToast } from "@/components/Toast";

type Mode = "login" | "register";

export default function AuthCard() {
  const router = useRouter();
  const { login } = useAuth();
  const { push } = useToast();
  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setErr("");

    if (mode === "register" && name.trim().length < 2) { setErr("Họ tên tối thiểu 2 ký tự"); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr("Email không hợp lệ"); return; }
    if (password.length < 6) { setErr("Mật khẩu tối thiểu 6 ký tự"); return; }

    setBusy(true);
    setTimeout(() => {
      const displayName = mode === "register" ? name.trim() : email.split("@")[0];
      login({ name: displayName, email });
      push(mode === "login" ? `Chào mừng trở lại, ${displayName}!` : "Đăng ký thành công!", "success");
      router.push("/tai-khoan/");
      setBusy(false);
    }, 700);
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-6">
        <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
          <div className="w-10 h-10 rounded-xl btn-primary flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold leading-none">
            <span className="grad-orange">Shop</span><span className="grad-rose">Acc</span><span style={{ color: "var(--fg)" }}>Game</span>
          </span>
        </Link>
        <h1 className="text-2xl font-extrabold mb-1" style={{ color: "var(--fg)" }}>
          {mode === "login" ? "Đăng nhập" : "Tạo tài khoản"}
        </h1>
        <p className="text-sm" style={{ color: "var(--fg2)" }}>
          {mode === "login" ? "Truy cập tin đăng & yêu thích của bạn" : "Bắt đầu mua bán acc game uy tín"}
        </p>
      </div>

      <div className="card p-6">
        {/* Tabs */}
        <div className="grid grid-cols-2 gap-1 p-1 rounded-xl mb-5" style={{ background: "var(--scrim)" }}>
          {(["login", "register"] as const).map(m => (
            <button
              key={m}
              type="button"
              onClick={() => { setMode(m); setErr(""); }}
              className="py-2 rounded-lg text-sm font-bold transition-all cursor-pointer"
              style={{
                background: mode === m ? "var(--surface)" : "transparent",
                color: mode === m ? "var(--fg)" : "var(--fg3)",
                boxShadow: mode === m ? "var(--shadow-sm)" : "none",
              }}
            >
              {m === "login" ? "Đăng nhập" : "Đăng ký"}
            </button>
          ))}
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          {mode === "register" && (
            <InputRow icon={<UserIcon className="w-4 h-4" />}>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Họ và tên"
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: "var(--fg)" }}
              />
            </InputRow>
          )}

          <InputRow icon={<Mail className="w-4 h-4" />}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: "var(--fg)" }}
              autoComplete="email"
            />
          </InputRow>

          <InputRow icon={<Lock className="w-4 h-4" />}>
            <input
              type={showPw ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Mật khẩu (≥ 6 ký tự)"
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: "var(--fg)" }}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
            <button type="button" onClick={() => setShowPw(s => !s)} className="cursor-pointer" style={{ color: "var(--fg3)" }} aria-label="Hiện mật khẩu">
              {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </InputRow>

          {err && (
            <div className="flex items-center gap-2 text-xs" style={{ color: "#f43f5e" }}>
              <AlertCircle className="w-3.5 h-3.5" /> {err}
            </div>
          )}

          {mode === "login" && (
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer" style={{ color: "var(--fg2)" }}>
                <input type="checkbox" className="accent-orange-500 cursor-pointer" /> Ghi nhớ tôi
              </label>
              <button type="button" onClick={() => push("Vui lòng kiểm tra email", "info")} className="hover:opacity-80 cursor-pointer" style={{ color: "var(--orange)" }}>Quên mật khẩu?</button>
            </div>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full py-3 rounded-xl text-sm font-bold text-white btn-primary cursor-pointer disabled:opacity-50 mt-2"
          >
            {busy ? "Đang xử lý…" : (mode === "login" ? "Đăng nhập" : "Tạo tài khoản")}
          </button>
        </form>

        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center"><div className="w-full" style={{ borderTop: "1px solid var(--border)" }} /></div>
          <div className="relative text-center"><span className="px-3 text-xs" style={{ background: "var(--surface)", color: "var(--fg3)" }}>hoặc</span></div>
        </div>

        <button
          type="button"
          onClick={() => push("Đăng nhập Google sẽ sớm có mặt", "info")}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold cursor-pointer"
          style={{ background: "var(--scrim)", border: "1px solid var(--border)", color: "var(--fg2)" }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 11.1h-9.17v2.92h5.27c-.23 1.5-1.7 4.4-5.27 4.4-3.17 0-5.76-2.62-5.76-5.85S8.99 6.7 12.18 6.7c1.8 0 3.01.77 3.7 1.43l2.53-2.42C16.83 4.16 14.7 3.3 12.18 3.3 6.97 3.3 2.77 7.4 2.77 12.57s4.2 9.27 9.41 9.27c5.43 0 9.03-3.82 9.03-9.19 0-.62-.07-1.09-.15-1.55z"/></svg>
          Tiếp tục với Google
        </button>

        <p className="text-xs text-center mt-5" style={{ color: "var(--fg3)" }}>
          {mode === "login" ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
          <button type="button" onClick={() => setMode(m => m === "login" ? "register" : "login")} className="font-semibold hover:opacity-80 cursor-pointer" style={{ color: "var(--orange)" }}>
            {mode === "login" ? "Đăng ký ngay" : "Đăng nhập"}
          </button>
        </p>
      </div>
    </div>
  );
}

function InputRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 px-3 h-11 rounded-xl transition-colors focus-within:border-orange-500/60"
      style={{ background: "var(--scrim)", border: "1px solid var(--border)" }}>
      <span style={{ color: "var(--fg3)" }}>{icon}</span>
      {children}
    </div>
  );
}
