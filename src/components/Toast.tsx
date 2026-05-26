"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CheckCircle2, XCircle, Info, X } from "lucide-react";

type ToastKind = "success" | "error" | "info";
type Toast = { id: number; message: string; kind: ToastKind };
type Ctx = { push: (message: string, kind?: ToastKind) => void };

const ToastCtx = createContext<Ctx>({ push: () => {} });

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Toast[]>([]);

  const push = useCallback((message: string, kind: ToastKind = "info") => {
    const id = Date.now() + Math.random();
    setItems(prev => [...prev, { id, message, kind }]);
    setTimeout(() => setItems(prev => prev.filter(t => t.id !== id)), 3200);
  }, []);

  return (
    <ToastCtx.Provider value={{ push }}>
      {children}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none" aria-live="polite">
        {items.map(t => <ToastItem key={t.id} t={t} onClose={() => setItems(p => p.filter(x => x.id !== t.id))} />)}
      </div>
    </ToastCtx.Provider>
  );
}

function ToastItem({ t, onClose }: { t: Toast; onClose: () => void }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const id = requestAnimationFrame(() => setShow(true)); return () => cancelAnimationFrame(id); }, []);
  const Icon = t.kind === "success" ? CheckCircle2 : t.kind === "error" ? XCircle : Info;
  const color = t.kind === "success" ? "#10b981" : t.kind === "error" ? "#f43f5e" : "#3b82f6";
  return (
    <div
      className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg min-w-[280px] max-w-sm transition-all"
      style={{
        background: "var(--surface)",
        border: `1px solid ${color}55`,
        boxShadow: `0 10px 30px rgba(0,0,0,.15), 0 0 0 1px ${color}22 inset`,
        transform: show ? "translateX(0)" : "translateX(120%)",
        opacity: show ? 1 : 0,
      }}
    >
      <Icon className="w-5 h-5 flex-shrink-0" style={{ color }} />
      <span className="text-sm font-medium flex-1" style={{ color: "var(--fg)" }}>{t.message}</span>
      <button onClick={onClose} className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-[var(--scrim2)] cursor-pointer" aria-label="Đóng" style={{ color: "var(--fg3)" }}>
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

export function useToast() {
  return useContext(ToastCtx);
}
