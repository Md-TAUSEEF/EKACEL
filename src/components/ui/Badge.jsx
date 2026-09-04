export default function Badge({ children, tone = "light" }) {
  const toneClass =
    tone === "dark"
      ? "border-white/25 text-white/80"
      : "border-slate-line text-slate-muted";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium ${toneClass}`}
    >
      {children}
    </span>
  );
}
