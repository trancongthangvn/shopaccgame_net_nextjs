import { Users, Trophy, MessageSquare, Banknote } from "lucide-react";

const stats = [
  { icon:Users,         val:"48,000+", lbl:"Thành viên đăng ký", c:"#f97316" },
  { icon:Trophy,        val:"320+",    lbl:"Giao dịch / ngày",   c:"#fbbf24" },
  { icon:Banknote,      val:"15 tỷ+",  lbl:"Tổng GMV (VNĐ)",     c:"#10b981" },
  { icon:MessageSquare, val:"4.9/5",   lbl:"Đánh giá người dùng",c:"#f43f5e" },
];

export default function StatsBand() {
  return (
    <section className="relative py-16 lg:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(249,115,22,0.06),transparent 50%,rgba(244,63,94,0.04))" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ icon:Icon, val, lbl, c }) => (
            <div key={lbl} className="card card-hover p-5 sm:p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl flex items-center justify-center mb-3"
                style={{ background: `linear-gradient(135deg,${c}26,${c}10)`, border: `1px solid ${c}33` }}>
                <Icon className="w-5 h-5" style={{ color: c }} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-gilroy),sans-serif", color: c }}>
                {val}
              </div>
              <div className="text-xs uppercase tracking-wider" style={{ color: "var(--fg3)" }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
