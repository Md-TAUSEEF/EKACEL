import { useLanguage } from "../../context/LanguageContext.jsx";

import {
  Beaker,
  BatteryCharging,
  Gauge,
  Radar,
  Cpu,
  Waves,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    icon: Beaker,
    title: "Research & Development",
    text: "Focused development of battery technologies, materials and energy storage solutions.",
    accent: "text-violet-600",
    bg: "bg-violet-50",
    border: "group-hover:border-violet-200",
  },
  {
    icon: BatteryCharging,
    title: "Battery Technology",
    text: "Advanced battery engineering designed for dependable performance and demanding duty cycles.",
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "group-hover:border-emerald-200",
  },
  {
    icon: Waves,
    title: "Energy Storage",
    text: "Reliable storage architectures built for backup power, renewable energy and daily usage.",
    accent: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "group-hover:border-cyan-200",
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    text: "Battery performance, reliability and operating characteristics evaluated across key conditions.",
    accent: "text-amber-600",
    bg: "bg-amber-50",
    border: "group-hover:border-amber-200",
  },
  {
    icon: Cpu,
    title: "Engineering",
    text: "Integrated electrical and mechanical engineering focused on practical energy solutions.",
    accent: "text-blue-600",
    bg: "bg-blue-50",
    border: "group-hover:border-blue-200",
  },
  {
    icon: Radar,
    title: "Smart Energy",
    text: "Intelligent monitoring and energy management concepts for modern power systems.",
    accent: "text-rose-600",
    bg: "bg-rose-50",
    border: "group-hover:border-rose-200",
  },
];

export default function TechnologySection() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-16 lg:py-20">

      {/* =====================================================
          PREMIUM BACKGROUND EFFECTS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-teal-100/50
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-yellow-100/40
          blur-[120px]
        "
      />

      {/* =====================================================
          30px LEFT / RIGHT + CONSISTENT TOP / BOTTOM SPACING
      ====================================================== */}

      <div className="relative w-full space-y-16 px-[30px] sm:px-[30px] lg:space-y-20">

        {/* =====================================================
            MAIN LAYOUT
        ====================================================== */}

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">

          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <div className="lg:col-span-4 lg:sticky lg:top-24">

            {/* EYEBROW */}

            <div className="mb-5 flex items-center gap-2">

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-teal-100 bg-teal-50">
                <Sparkles
                  size={14}
                  className="text-teal-600"
                />
              </span>

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal-700">{t("Technology & R&D" )}</span>

            </div>

            {/* HEADING */}

            <h2 className="max-w-md text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
              Innovation That
              <span className="block text-teal-700">{t("Moves Energy Forward." )}</span>
            </h2>

            {/* ACCENT */}

            <div className="mt-5 h-[3px] w-16 rounded-full bg-teal-600" />

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500 sm:text-base">{t("Our approach combines battery technology, engineering, testing and energy intelligence to build solutions designed for reliable real-world performance." )}</p>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">{t("From energy storage to backup power and modern mobility applications, every solution is developed around efficiency, reliability and long-term value." )}</p>

            {/* CTA */}

            <div className="mt-7">

              <a
                href="#contact"
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
                  font-extrabold
                  text-black
                  shadow-lg
                  shadow-yellow-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#eab308]
                  hover:shadow-xl
                  hover:shadow-yellow-500/25
                "
              >
                Explore Our Technology

                <ArrowRight
                  size={16}
                  className="
                    text-black
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

            </div>

            {/* =================================================
                MINI STATS
            ================================================== */}

            <div className="mt-8 grid max-w-md grid-cols-2 gap-3">

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-4
                  shadow-sm
                  transition-all
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >

                <p className="text-2xl font-extrabold text-slate-950">
                  06
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">{t("Core Capabilities" )}</p>

              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-4
                  shadow-sm
                  transition-all
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >

                <p className="text-2xl font-extrabold text-teal-700">{t("R&D" )}</p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">{t("Engineering Focus" )}</p>

              </div>

            </div>

          </div>

          {/* ===================================================
              RIGHT — PREMIUM CAPABILITY GRID
          ==================================================== */}

          <div className="lg:col-span-8">

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {capabilities.map(
                (
                  {
                    icon: Icon,
                    title,
                    text,
                    accent,
                    bg,
                    border,
                  },
                  index
                ) => (

                  <div
                    key={title}
                    className={`
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-5
                      shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                      transition-all
                      duration-500
                      hover:-translate-y-1.5
                      hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                      ${border}
                    `}
                  >

                    {/* TOP ROW */}

                    <div className="flex items-center justify-between">

                      <span className="text-[10px] font-extrabold tracking-[0.18em] text-slate-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="
                          text-slate-300
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-slate-700
                        "
                      />

                    </div>

                    {/* ICON */}

                    <div
                      className={`
                        mt-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        ${bg}
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-2
                      `}
                    >

                      <Icon
                        size={22}
                        strokeWidth={1.8}
                        className={accent}
                      />

                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        mt-5
                        text-base
                        font-extrabold
                        tracking-tight
                        text-slate-950
                        transition-colors
                        duration-300
                        group-hover:text-teal-700
                      "
                    >
                      {title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500">
                      {text}
                    </p>

                    {/* BOTTOM LINE */}

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
                        ${accent.replace("text-", "bg-")}
                      `}
                    />

                  </div>

                )
              )}

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM TECHNOLOGY STRIP
        ====================================================== */}

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs font-medium text-slate-400">{t("Engineering • Testing • Innovation • Energy Intelligence" )}</p>

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

            <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400">{t("Built for dependable performance" )}</span>

          </div>

        </div>

      </div>

    </section>
  );
}

