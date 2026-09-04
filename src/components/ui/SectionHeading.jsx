import { useLanguage } from "../../context/LanguageContext";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  size = "md",
  className = "",
}) {
  const { t } = useLanguage();
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = tone === "dark" ? "text-white" : "text-navy";
  const descColor = tone === "dark" ? "text-white/70" : "text-slate-muted";
  const eyebrowColor = tone === "dark" ? "text-volt" : "text-teal-light";
  const titleSize = size === "lg" ? "text-display-md" : "text-display-sm";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`text-sm font-semibold tracking-wide ${eyebrowColor}`}>{t(eyebrow)}</span>
      )}
      <h2 className={`${titleSize} font-heading font-semibold ${titleColor}`}>{t(title)}</h2>
      {description && <p className={`text-base sm:text-lg leading-relaxed ${descColor}`}>{t(description)}</p>}
    </div>
  );
}
