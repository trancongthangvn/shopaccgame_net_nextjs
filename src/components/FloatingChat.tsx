"use client";
import { useState } from "react";
import { MessageCircle, X, Send, Headphones } from "lucide-react";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
        style={{
          background: "linear-gradient(135deg,#7c3aed,#f43f5e)",
          boxShadow: "0 8px 32px rgba(124,58,237,0.5), 0 0 0 8px rgba(124,58,237,0.12)",
        }}
        aria-label={open ? "Đóng chat" : "Mở chat hỗ trợ"}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-2xs font-bold text-white pulse-soft"
            style={{ background: "#f43f5e", boxShadow: "0 0 8px #f43f5e" }}>
            1
          </span>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[340px] max-w-[calc(100vw-2.5rem)] rounded-2xl overflow-hidden shadow-2xl"
          style={{ background: "var(--surface)", border: "1px solid var(--border3)" }}>

          {/* Header */}
          <div className="p-4 text-white" style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)" }}>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
                  <Headphones className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2" style={{ background: "#10b981", borderColor: "#7c3aed" }} />
              </div>
              <div>
                <div className="font-bold text-sm">Hỗ Trợ ShopAccGame</div>
                <div className="text-2xs opacity-90 flex items-center gap-1">
                  <span className="live-dot" style={{ background: "#86efac" }} />
                  Đang online · Phản hồi ~2 phút
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3 max-h-72 overflow-y-auto" style={{ background: "var(--bg2)" }}>
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-2xs font-bold flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)" }}>SA</div>
              <div className="max-w-[80%]">
                <div className="p-3 rounded-2xl rounded-tl-none text-xs leading-relaxed"
                  style={{ background: "var(--surface2)", color: "var(--fg2)" }}>
                  Xin chào! 👋 Tôi là trợ lý ảo của ShopAccGame.
                </div>
                <div className="p-3 mt-2 rounded-2xl rounded-tl-none text-xs leading-relaxed"
                  style={{ background: "var(--surface2)", color: "var(--fg2)" }}>
                  Bạn cần hỗ trợ về: đăng tin, tìm acc, hay quy trình giao dịch?
                </div>
              </div>
            </div>

            {/* Quick replies */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {["Cách đăng tin","Tìm acc","Bảo mật","Liên hệ"].map(q => (
                <button key={q}
                  className="text-2xs px-3 py-1.5 rounded-full transition-colors cursor-pointer hover:bg-purple-500/20"
                  style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.3)", color: "var(--purple3)" }}>
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-3 flex items-center gap-2" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              className="flex-1 px-3 py-2 rounded-xl text-xs bg-transparent outline-none"
              style={{ color: "var(--fg)", border: "1px solid var(--border)" }}
              aria-label="Tin nhắn"
            />
            <button className="w-9 h-9 rounded-xl flex items-center justify-center text-white btn-primary cursor-pointer" aria-label="Gửi">
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
