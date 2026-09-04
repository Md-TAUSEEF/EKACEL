import { useLanguage } from "../../context/LanguageContext.jsx";

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { industries } from "../../data/industries";

export default function IndustriesSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-slate-surface py-14 sm:py-16 lg:py-20">
      <div className="w-full space-y-16 px-[30px] sm:px-[30px] lg:space-y-20">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Industries"
            title={t("Energy Solutions for Every Industry.")}
            description="Different industries put very different demands on power. Our systems are matched to the load."
          />

         <Link
  to="/industries"
  className="
    hidden
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-[#F7E135]
    px-5
    py-3
    text-sm
    font-bold
    text-black
    shadow-lg
    shadow-yellow-500/20
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-[#eab308]
    hover:shadow-xl
    hover:shadow-yellow-500/25
    lg:inline-flex
  "
>
  Explore Industries
  <ArrowUpRight
    size={16}
    className="
      text-black
      transition-transform
      duration-300
      group-hover:translate-x-0.5
      group-hover:-translate-y-0.5
    "
  />
</Link>
        </div>

        {/* =====================================================
            PREMIUM CARDS
        ====================================================== */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry, index) => (
            <Link
              key={industry.slug}
              to={industry.href}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-teal-200
                hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]
              "
            >

              {/* =================================================
                  IMAGE
              ================================================== */}
              <div className="relative h-[165px] overflow-hidden">

                <img
                  src={industry.image}
                  alt={t(industry.name)}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* IMAGE OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/65
                    via-slate-950/10
                    to-transparent
                    transition-opacity
                    duration-300
                    group-hover:from-slate-950/50
                  "
                />

                {/* INDEX */}
                <span
                  className="
                    absolute
                    left-4
                    top-4
                    flex
                    h-7
                    min-w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    px-2
                    text-[9px]
                    font-bold
                    tracking-wider
                    text-white
                    backdrop-blur-md
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* ARROW */}
                <span
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:border-teal-400
                    group-hover:bg-teal-600
                  "
                >
                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>

              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}
              <div className="p-5">

                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-teal-700">{t("Industry" )}</span>
                </div>

                <h3
                  className="
                    text-[17px]
                    font-bold
                    leading-tight
                    tracking-tight
                    text-slate-950
                    transition-colors
                    duration-300
                    group-hover:text-teal-700
                  "
                >
                  {t(industry.name)}
                </h3>

                <p
                  className="
                    mt-2
                    line-clamp-2
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >
                  {t(industry.description)}
                </p>

                {/* BOTTOM LINK */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">

                  <span className="text-[11px] font-bold text-slate-400 transition-colors group-hover:text-teal-700">{t("Explore Solution" )}</span>

                  <ArrowUpRight
                    size={14}
                    className="
                      text-slate-300
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-teal-600
                    "
                  />

                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* MOBILE CTA */}
        <Link
          to="/industries"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-white
            px-5
            py-3
            text-sm
            font-bold
            text-slate-900
            shadow-sm
            transition-all
            hover:border-teal-300
            hover:text-teal-700
            sm:hidden
          "
        >
          Explore All Industries
          <ArrowUpRight size={16} />
        </Link>

      </div>
    </section>
  );
}

