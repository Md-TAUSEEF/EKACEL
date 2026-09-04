import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function ImageCard({ image, name, description, href, size = "md" }) {
  const { t } = useLanguage();
  const height = size === "lg" ? "aspect-[16/10]" : "aspect-[4/3]";

  return (
    <Link
      to={href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-line bg-white transition-shadow duration-300 hover:shadow-card"
    >
      <div className={`relative w-full overflow-hidden ${height}`}>
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-semibold text-navy">{t(name)}</h3>
          <ArrowUpRight
            size={18}
            className="mt-1 flex-shrink-0 text-slate-muted transition-all duration-200 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-light"
          />
        </div>
        <p className="text-sm leading-relaxed text-slate-muted">{t(description)}</p>
      </div>
    </Link>
  );
}
