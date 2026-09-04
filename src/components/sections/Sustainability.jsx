import { useLanguage } from "../../context/LanguageContext.jsx";
import {
  Recycle,
  Zap,
  Factory,
  Route,
  Leaf,
  ArrowUpRight,
} from "lucide-react";

import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const themes = [
  {
    icon: Zap,
    title: "Smarter Energy Use",
    text: "Energy storage solutions designed to help customers use, manage and store power more efficiently.",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
  },
  {
    icon: Route,
    title: "Energy Efficiency",
    text: "Thoughtful system design focused on reducing unnecessary energy loss and improving overall power utilization.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    icon: Factory,
    title: "Responsible Engineering",
    text: "A product-development approach that considers performance, durability and responsible energy use throughout the solution lifecycle.",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
  },
  {
    icon: Recycle,
    title: "Future-Ready Thinking",
    text: "Exploring better ways to support efficient energy systems and contribute to a more sustainable power ecosystem.",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
];

export default function Sustainability() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">

      {/* =====================================================
          SUBTLE BACKGROUND ACCENT
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-10
          h-72
          w-72
          rounded-full
          bg-[#F7D84A]/10
          blur-[100px]
        "
      />

      {/* =====================================================
          MAIN WRAPPER
          LEFT / RIGHT = 30px
      ====================================================== */}
      <div className="relative w-full px-[30px] sm:px-[30px]">

        {/* =====================================================
            MAIN LAYOUT
        ====================================================== */}
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">

          {/* ===================================================
              LEFT — CONTENT
          ==================================================== */}
          <div className="flex flex-col gap-5 lg:order-1 lg:col-span-7">

            {/* SECTION HEADING */}
            <SectionHeading
              eyebrow="SUSTAINABILITY"
              title={t("Powering Progress With a Smarter Energy Approach.")}
              description="At EKACEL, we believe better energy solutions should deliver more than dependable power. Our approach focuses on efficiency, responsible engineering and technologies that support the transition toward a smarter energy ecosystem."
            />

            {/* =================================================
                THEMES GRID
            ================================================== */}
            <div className="grid grid-cols-1 gap-3 border-t border-slate-100 pt-5 sm:grid-cols-2">

              {themes.map(
                ({
                  icon: Icon,
                  title,
                  text,
                  iconColor,
                  iconBg,
                }) => (
                  <div
                    key={title}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-100
                      bg-white
                      p-4
                      shadow-[0_5px_20px_rgba(15,23,42,0.035)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#F7D84A]/50
                      hover:shadow-[0_12px_28px_rgba(15,23,42,0.07)]
                    "
                  >

                    {/* ICON + ARROW */}
                    <div className="flex items-center justify-between">

                      <span
                        className={`
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          ${iconBg}
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        `}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.8}
                          className={iconColor}
                        />
                      </span>

                      <ArrowUpRight
                        size={14}
                        className="
                          text-slate-200
                          transition-all
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-[#D4B52F]
                        "
                      />

                    </div>

                    {/* TITLE */}
                    <h3 className="mt-3 text-sm font-bold tracking-tight text-slate-950">
                      {title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-1.5 text-xs leading-5 text-slate-500">
                      {text}
                    </p>

                    {/* ACCENT */}
                    <div
                      className="
                        mt-3
                        h-[2px]
                        w-6
                        rounded-full
                        bg-[#F7D84A]
                        transition-all
                        duration-300
                        group-hover:w-10
                      "
                    />

                  </div>
                )
              )}

            </div>

            {/* =================================================
                CTA
            ================================================== */}
            <div className="flex flex-wrap items-center gap-4">

              <Button
  to="/about/innovation"
  className="bg-[#f8d15e] !text-black hover:bg-[#eab308]"
>{t("Explore Our Approach" )}</Button>

              <div className="flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-[#F7D84A]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">{t("Efficiency • Innovation • Responsibility" )}</span>

              </div>

            </div>

          </div>

          {/* ===================================================
              RIGHT — IMAGE
          ==================================================== */}
          <div className="relative lg:order-2 lg:col-span-5">

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[22px]
                border
                border-slate-200
                bg-slate-100
                shadow-[0_15px_45px_rgba(15,23,42,0.08)]
              "
            >

              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop"
                alt={t("Renewable energy and sustainable power")}
                className="
                  aspect-[5/4]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />

              {/* TOP BADGE */}
              <div
                className="
                  absolute
                  left-4
                  top-4
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-slate-950/45
                  px-3
                  py-1.5
                  backdrop-blur-md
                "
              >
                <Leaf
                  size={13}
                  className="text-[#F7D84A]"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white">{t("Sustainable Energy" )}</span>
              </div>

              {/* IMAGE BOTTOM CONTENT */}
              <div className="absolute bottom-4 left-4 right-4">

                <div className="flex items-end justify-between gap-4">

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F7D84A]">{t("EKACEL" )}</p>

                    <p className="mt-1 max-w-xs text-sm font-semibold leading-5 text-white">{t("Building smarter solutions for a more efficient energy future." )}</p>
                  </div>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F7D84A]
                      text-slate-950
                      shadow-lg
                    "
                  >
                    <ArrowUpRight size={16} />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}