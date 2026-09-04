import { useLanguage } from "../../context/LanguageContext";

export default function StatCard({ value, label, tone = "light" }) {
  const { t } = useLanguage();
  const valueColor = tone === "dark" ? "text-white" : "text-navy";
  const labelColor = tone === "dark" ? "text-white/60" : "text-slate-muted";
  const borderColor = tone === "dark" ? "border-white/15" : "border-slate-line";

  return (
    <div className={`border-l ${borderColor} pl-5 sm:pl-6`}>
      <div className={`font-heading text-3xl sm:text-4xl font-bold ${valueColor}`}>{t(value)}</div>
      <div className={`mt-1.5 text-sm ${labelColor}`}>{t(label)}</div>
    </div>
  );
}
