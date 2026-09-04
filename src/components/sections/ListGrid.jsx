import { useLanguage } from "../../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";

export default function ListGrid({ items }) {
  const { t } = useLanguage();
  return (
    <section className="w-full max-w-full bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-line bg-slate-line sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug || item.href}
              to={item.href}
              className="group flex flex-col justify-between gap-6 bg-white p-7 transition-colors duration-200 hover:bg-slate-surface"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-lg font-semibold text-navy">{t(item.name)}</h3>
                <ArrowUpRight
                  size={17}
                  className="mt-1 flex-shrink-0 text-slate-muted transition-all duration-200 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-light"
                />
              </div>
              <p className="text-sm leading-relaxed text-slate-muted">{t(item.description)}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
