import { useLanguage } from "../../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items = [] }) {
  const { t } = useLanguage();
  const trail = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label={t("Breadcrumb")} className="flex flex-wrap items-center gap-1.5 text-sm">
      {trail.map((item, i) => {
        const isLast = i === trail.length - 1;
        return (
          <span key={`${t(item.label)}-${i}`} className="flex items-center gap-1.5">
            {isLast ? (
              <span className="text-white/60">{t(item.label)}</span>
            ) : (
              <Link to={item.href} className="text-white/80 transition-colors hover:text-volt">
                {t(item.label)}
              </Link>
            )}
            {!isLast && <ChevronRight size={13} className="text-white/40" />}
          </span>
        );
      })}
    </nav>
  );
}
