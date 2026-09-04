import { useLanguage } from "../../context/LanguageContext.jsx";

import React, { useMemo, useState } from "react";

import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import { energySolutions } from "../../data/solutions";

export default function EnergySolutions() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  /*
   * =========================================================
   * 4 CARDS PER SLIDE
   * =========================================================
   */
  const slides = useMemo(() => {
    const result = [];

    for (let i = 0; i < energySolutions.length; i += 4) {
      result.push(energySolutions.slice(i, i + 4));
    }

    return result;
  }, []);

  const totalSlides = slides.length;
  const currentItems = slides[currentSlide] || [];

  /*
   * =========================================================
   * DIFFERENT PREMIUM ACCENT COLORS
   * =========================================================
   */
  const accentColors = [
    {
      dot: "bg-teal-500",
      text: "text-teal-700",
      hoverText: "group-hover:text-teal-700",
      border: "group-hover:border-teal-200",
      arrow: "group-hover:bg-teal-600",
      arrowBorder: "group-hover:border-teal-400",
      bottom: "bg-teal-600",
    },
    {
      dot: "bg-emerald-500",
      text: "text-emerald-700",
      hoverText: "group-hover:text-emerald-700",
      border: "group-hover:border-emerald-200",
      arrow: "group-hover:bg-emerald-600",
      arrowBorder: "group-hover:border-emerald-400",
      bottom: "bg-emerald-600",
    },
    {
      dot: "bg-amber-500",
      text: "text-amber-700",
      hoverText: "group-hover:text-amber-700",
      border: "group-hover:border-amber-200",
      arrow: "group-hover:bg-amber-500",
      arrowBorder: "group-hover:border-amber-300",
      bottom: "bg-amber-500",
    },
    {
      dot: "bg-blue-500",
      text: "text-blue-700",
      hoverText: "group-hover:text-blue-700",
      border: "group-hover:border-blue-200",
      arrow: "group-hover:bg-blue-600",
      arrowBorder: "group-hover:border-blue-400",
      bottom: "bg-blue-600",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === totalSlides - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? totalSlides - 1 : current - 1
    );
  };

  return (
    <section className="w-full overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* =====================================================
          MAIN WRAPPER — SAME 30PX ALIGNMENT
      ====================================================== */}
      <div className="w-full space-y-16 px-[30px] sm:px-[30px] lg:space-y-20">

        {/* =====================================================
            MAIN CONTENT — 53% LEFT / 47% RIGHT
        ====================================================== */}
        <div className="grid items-center gap-10 lg:grid-cols-[51fr_49fr] lg:gap-12 xl:gap-14">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="w-full">

            {/* EYEBROW */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-700">{t("Energy Solutions" )}</span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-none text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-[48px]">
              A Broader Energy
              <span className="block text-teal-700">{t("Ecosystem, Built to Fit." )}</span>
            </h2>

            {/* ACCENT LINE */}
            <div className="mt-5 h-[3px] w-16 rounded-full bg-[#4d8b59]" />

            {/* DESCRIPTION 1 */}
            <p className="mt-6 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">{t("EKACEL delivers practical energy solutions designed around the changing power requirements of homes, businesses, mobility and industrial applications." )}</p>

            {/* DESCRIPTION 2 */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">{t("From dependable backup systems to intelligent energy storage, our solutions are engineered to deliver consistent performance, efficiency and long-term value." )}</p>

            {/* DESCRIPTION 3 */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">{t("We combine application-focused engineering with modern energy technology to create scalable solutions that can adapt as energy needs continue to evolve." )}</p>

            {/* HIGHLIGHT STATEMENT */}
            <div className="mt-5 flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f4c430]" />

              <p className="max-w-xl text-sm font-semibold leading-6 text-slate-800">{t("Smarter energy. Dependable performance. Solutions built for today and ready for tomorrow." )}</p>
            </div>

            {/* =================================================
                CTA
            ================================================== */}
            <div className="mt-8">
              <Link
                to="/solutions"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#F7E135]
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-black
                  shadow-[0_10px_30px_rgba(244,196,48,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#eab308]
                  hover:shadow-[0_15px_35px_rgba(244,196,48,0.32)]
                "
              >
                Explore All Solutions

                <ArrowRight
                  size={16}
                  className="text-black transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* =================================================
                SLIDE CONTROLS
            ================================================== */}
            <div className="mt-9 flex items-center gap-4">

              {/* PREVIOUS */}
              <button
                type="button"
                onClick={prevSlide}
                disabled={totalSlides <= 1}
                aria-label={t("Previous slide")}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-700
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-slate-300
                  hover:bg-slate-50
                  hover:shadow-md
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <ChevronLeft size={17} />
              </button>

              {/* SLIDE NUMBER */}
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-extrabold text-slate-950">
                  {String(currentSlide + 1).padStart(2, "0")}
                </span>

                <span className="text-xs font-semibold text-slate-300">
                  /
                </span>

                <span className="text-xs font-bold text-slate-400">
                  {String(totalSlides).padStart(2, "0")}
                </span>
              </div>

              {/* NEXT */}
              <button
                type="button"
                onClick={nextSlide}
                disabled={totalSlides <= 1}
                aria-label={t("Next slide")}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-700
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-slate-300
                  hover:bg-slate-50
                  hover:shadow-md
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <ChevronRight size={17} />
              </button>

            </div>
          </div>

          {/* =====================================================
              RIGHT — 4 CARD SLIDER
          ====================================================== */}
          <div className="w-full">

            <div className="relative">

              {/* TOP LABEL */}
              <div className="mb-5 flex items-center justify-between">

                <div className="flex items-center gap-2">
                  <Sparkles
                    size={14}
                    className="text-amber-500"
                  />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{t("Explore Solutions" )}</span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                  {currentItems.length} Solutions
                </span>

              </div>

              {/* =================================================
                  CARDS
              ================================================== */}
              <div
                key={currentSlide}
                className="
                  grid
                  grid-cols-1
                  gap-5
                  sm:grid-cols-2
                "
              >

                {currentItems.map((solution, index) => {
                  const accent =
                    accentColors[index % accentColors.length];

                  return (
                    <Link
                      key={solution.slug}
                      to={solution.href}
                      className={`
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
                        hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]
                        ${accent.border}
                      `}
                    >

                      {/* IMAGE */}
                      <div className="relative h-[150px] overflow-hidden">

                        <img
                          src={solution.image}
                          alt={t(solution.name)}
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
                          "
                        />

                        {/* CARD NUMBER */}
                        <span
                          className="
                            absolute
                            left-3
                            top-3
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
                            text-white
                            backdrop-blur-md
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* TOP RIGHT ARROW */}
                        <span
                          className={`
                            absolute
                            right-3
                            top-3
                            flex
                            h-8
                            w-8
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
                            ${accent.arrowBorder}
                            ${accent.arrow}
                          `}
                        >
                          <ArrowUpRight size={15} />
                        </span>

                      </div>

                      {/* CARD CONTENT */}
                      <div className="p-5">

                        {/* CATEGORY */}
                        <div className="flex items-center gap-2">

                          <span
                            className={`
                              h-1.5
                              w-1.5
                              rounded-full
                              ${accent.dot}
                            `}
                          />

                          <span
                            className={`
                              text-[9px]
                              font-extrabold
                              uppercase
                              tracking-[0.16em]
                              ${t(accent.text)}
                            `}
                          >{t("Energy Solution" )}</span>

                        </div>

                        {/* TITLE */}
                        <h3
                          className={`
                            mt-2
                            text-[16px]
                            font-bold
                            leading-tight
                            text-slate-950
                            transition-colors
                            ${accent.hoverText}
                          `}
                        >
                          {t(solution.name)}
                        </h3>

                        {/* DESCRIPTION */}
                        <p
                          className="
                            mt-2
                            line-clamp-2
                            text-xs
                            leading-5
                            text-slate-500
                          "
                        >
                          {t(solution.description)}
                        </p>

                        {/* FOOTER */}
                        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">

                          <span
                            className={`
                              text-[10px]
                              font-bold
                              text-slate-400
                              transition-colors
                              ${accent.hoverText}
                            `}
                          >{t("Discover More" )}</span>

                          <ArrowRight
                            size={13}
                            className={`
                              text-slate-300
                              transition-all
                              duration-300
                              group-hover:translate-x-1
                              ${accent.hoverText}
                            `}
                          />

                        </div>

                      </div>

                      {/* PREMIUM BOTTOM ACCENT */}
                      <div
                        className={`
                          absolute
                          bottom-0
                          left-0
                          h-[2px]
                          w-full
                          origin-left
                          scale-x-0
                          transition-transform
                          duration-500
                          group-hover:scale-x-100
                          ${accent.bottom}
                        `}
                      />

                    </Link>
                  );
                })}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
