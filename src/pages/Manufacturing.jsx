import { useLanguage } from "../context/LanguageContext.jsx";

import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/FAQItem";

import {
  Factory,
  Layers,
  ShieldCheck,
  Gauge,
  Settings2,
  Microscope,
  PackageCheck,
  Globe2,
  ArrowRight,
  CheckCircle2,
  BatteryCharging,
  Boxes,
  Zap,
  Cog,
  CircleCheck,
} from "lucide-react";

/* =========================================================
   MANUFACTURING CAPABILITIES
========================================================= */

const capabilities = [
  {
    icon: Factory,
    title: "Production Lines",
    text: "Structured manufacturing capabilities supporting automotive, inverter, industrial and emerging energy applications.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    hoverBorder: "hover:border-emerald-200",
    line: "bg-emerald-500",
  },
  {
    icon: Layers,
    title: "Process Integration",
    text: "Connected production processes designed to maintain consistency, traceability and controlled output.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverBorder: "hover:border-blue-200",
    line: "bg-blue-500",
  },
  {
    icon: Gauge,
    title: "Process Control",
    text: "Defined process checkpoints help monitor critical manufacturing parameters throughout production.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    hoverBorder: "hover:border-amber-200",
    line: "bg-amber-500",
  },
  {
    icon: ShieldCheck,
    title: "Quality Checks",
    text: "Multi-stage inspection and verification support dependable product quality before dispatch.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    hoverBorder: "hover:border-violet-200",
    line: "bg-violet-500",
  },
];

/* =========================================================
   MANUFACTURING PROCESS
========================================================= */

const manufacturingProcess = [
  {
    number: "01",
    icon: Boxes,
    title: "Material Preparation",
    text: "Careful handling and preparation of key materials before entering production.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
    border: "border-emerald-200",
    ring: "ring-emerald-100",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Assembly & Production",
    text: "Controlled assembly processes aligned with product and application requirements.",
    bg: "bg-blue-50",
    color: "text-blue-600",
    border: "border-blue-200",
    ring: "ring-blue-100",
  },
  {
    number: "03",
    icon: Microscope,
    title: "Inspection & Testing",
    text: "Defined testing stages help verify performance, consistency and product quality.",
    bg: "bg-amber-50",
    color: "text-amber-600",
    border: "border-amber-200",
    ring: "ring-amber-100",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Final Quality Release",
    text: "Finished products are verified, packed and prepared for reliable delivery.",
    bg: "bg-violet-50",
    color: "text-violet-600",
    border: "border-violet-200",
    ring: "ring-violet-100",
  },
];

/* =========================================================
   QUALITY POINTS
========================================================= */

const qualityPoints = [
  {
    icon: CircleCheck,
    title: "Defined Processes",
    text: "Structured manufacturing workflows",
    bg: "bg-emerald-500/10",
    iconBg: "bg-emerald-500",
    color: "text-emerald-400",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    text: "Multi-stage product verification",
    bg: "bg-blue-500/10",
    iconBg: "bg-blue-500",
    color: "text-blue-400",
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    text: "Application-focused validation",
    bg: "bg-amber-500/10",
    iconBg: "bg-amber-500",
    color: "text-amber-400",
  },
  {
    icon: Zap,
    title: "Reliable Output",
    text: "Consistency across production",
    bg: "bg-violet-500/10",
    iconBg: "bg-violet-500",
    color: "text-violet-400",
  },
];

/* =========================================================
   MANUFACTURING PAGE
========================================================= */

export default function Manufacturing() {
  const { t } = useLanguage();
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        eyebrow="About Us"
        title={t("Manufacturing built around consistency, quality and scale.")}
        description="EKACEL is building manufacturing capabilities focused on dependable battery and energy solutions for residential, commercial, industrial and mobility applications — with a vision to serve evolving markets in India and internationally."
        breadcrumb={[
          { label: "About Us", href: "/about" },
          {
            label: "Manufacturing",
            href: "/about/manufacturing",
          },
        ]}
        image="/images/hero-1.png"
      />

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        {/* Background glow */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-emerald-100/50 blur-[110px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-blue-50/70 blur-[110px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="lg:col-span-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 rounded-full bg-teal-600" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-700">{t("Manufacturing Excellence" )}</span>
              </div>

              <h2 className="max-w-2xl font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
                Building energy products with{" "}
                <span className="text-teal-700">{t("discipline and precision." )}</span>
              </h2>

              <div className="mt-4 max-w-2xl space-y-3">
                <p className="text-sm leading-7 text-slate-500 sm:text-[15px]">{t("Manufacturing is at the heart of a dependable energy business. EKACEL focuses on structured processes, quality control and application-driven production to create battery and energy products designed for real-world requirements." )}</p>

                <p className="text-sm leading-7 text-slate-500 sm:text-[15px]">{t("From material preparation and assembly to inspection and final release, every stage is approached with consistency and product reliability in mind." )}</p>

                <p className="text-sm leading-7 text-slate-500 sm:text-[15px]">{t("As EKACEL expands its product portfolio and international ambitions, manufacturing capability will remain an important foundation for dependable energy solutions." )}</p>
              </div>

              {/* Small trust strip */}

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-600"
                  />

                  <span className="text-[11px] font-bold text-emerald-800">{t("Process Focused" )}</span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2">
                  <ShieldCheck
                    size={15}
                    className="text-blue-600"
                  />

                  <span className="text-[11px] font-bold text-blue-800">{t("Quality Driven" )}</span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50 px-3.5 py-2">
                  <Gauge
                    size={15}
                    className="text-amber-600"
                  />

                  <span className="text-[11px] font-bold text-amber-800">{t("Performance Focused" )}</span>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT — IMAGE CARD
            ================================================== */}

            <div className="lg:col-span-5">
              <div className="group relative">
                {/* Outer glow */}

                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[2rem] bg-emerald-200/40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                />

                {/* Image Card */}

                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_25px_70px_rgba(15,23,42,0.14)]">
                  <div className="relative h-[330px] sm:h-[370px]">
                    <img
                      src="/images/battery-manufacturing.jpg"
                      alt={t("EKACEL manufacturing")}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Image overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 to-transparent" />

                    {/* Top badge */}

                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/60 px-3.5 py-2 backdrop-blur-md">
                      <Factory
                        size={14}
                        className="text-emerald-400"
                      />

                      <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white">{t("EKACEL Manufacturing" )}</span>
                    </div>

                    {/* Bottom content */}

                    <div className="absolute inset-x-5 bottom-5">
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-emerald-300">{t("Manufacturing Approach" )}</p>

                            <p className="mt-1 text-sm font-bold text-white">{t("Consistency • Quality • Reliability" )}</p>
                          </div>

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 shadow-lg">
                            <BatteryCharging
                              size={20}
                              strokeWidth={1.8}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating mini card */}

                <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-[0_15px_40px_rgba(15,23,42,0.12)] sm:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Cog size={18} />
                    </div>

                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">{t("Production" )}</p>

                      <p className="text-xs font-bold text-slate-900">{t("Controlled Processes" )}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE CAPABILITIES
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-10 sm:py-12 lg:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-emerald-100/50 blur-[110px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          {/* Header */}

          <div className="relative mb-7 max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-teal-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-700">{t("Core Capabilities" )}</span>
            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Manufacturing designed around{" "}
              <span className="text-teal-700">{t("control and consistency." )}</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">{t("Our manufacturing approach brings together structured production, process monitoring and quality-focused practices to support dependable energy products." )}</p>
          </div>

          {/* Capability Cards */}

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(
              (
                {
                  icon: Icon,
                  title,
                  text,
                  iconBg,
                  iconColor,
                  hoverBorder,
                  line,
                },
                index,
              ) => (
                <article
                  key={title}
                  className={`
                    group relative overflow-hidden rounded-2xl
                    border border-slate-200 bg-white
                    p-5
                    shadow-[0_8px_28px_rgba(15,23,42,0.045)]
                    transition-all duration-500
                    hover:-translate-y-1.5
                    ${hoverBorder}
                    hover:shadow-[0_20px_45px_rgba(15,23,42,0.09)]
                  `}
                >
                  <div className="absolute right-4 top-4">
                    <span className="text-[10px] font-black tracking-[0.18em] text-slate-200 transition-colors duration-300 group-hover:text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className={`
                        flex h-12 w-12 shrink-0 items-center
                        justify-center rounded-xl
                        ${iconBg} ${iconColor}
                        transition-all duration-500
                        group-hover:scale-105
                      `}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="min-w-0 pr-5">
                      <h3 className="font-heading text-base font-extrabold leading-tight text-slate-950">
                        {title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {text}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`
                      mt-5 h-1 w-8 rounded-full ${line}
                      transition-all duration-500
                      group-hover:w-14
                    `}
                  />
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          MANUFACTURING PROCESS
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-50 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          {/* Premium Header */}

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-3 rounded-full border border-teal-100 bg-teal-50 px-4 py-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-teal-700">{t("Manufacturing Process" )}</span>
            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
              From materials to{" "}
              <span className="text-teal-700">{t("finished product." )}</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">{t("A structured production journey where every stage contributes to product consistency, quality and dependable performance." )}</p>
          </div>

          {/* Process Flow */}

          <div className="relative mt-9">
            {/* Desktop connecting line */}

            <div className="pointer-events-none absolute left-[12%] right-[12%] top-[42px] hidden lg:block">
              <div className="h-[2px] w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-full origin-left animate-[pulse_3s_ease-in-out_infinite] bg-gradient-to-r from-emerald-300 via-blue-300 via-amber-300 to-violet-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {manufacturingProcess.map(
                ({
                  number,
                  icon: Icon,
                  title,
                  text,
                  bg,
                  color,
                  border,
                  ring,
                }) => (
                  <article
                    key={number}
                    className="group relative"
                  >
                    <div
                      className={`
                        relative h-full overflow-hidden
                        rounded-2xl border border-slate-200
                        bg-white p-5
                        shadow-[0_8px_30px_rgba(15,23,42,0.045)]
                        transition-all duration-500
                        hover:-translate-y-2
                        hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)]
                        ${"hover:" + border}
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-3xl font-black text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                          {number}
                        </span>

                        <span
                          className={`
                            flex h-11 w-11 items-center
                            justify-center rounded-xl
                            border ${border} ${bg} ${color}
                            ring-4 ${ring}
                            transition-all duration-500
                            group-hover:rotate-3
                            group-hover:scale-110
                          `}
                        >
                          <Icon
                            size={20}
                            strokeWidth={1.8}
                          />
                        </span>
                      </div>

                      <h3 className="mt-5 font-heading text-base font-extrabold text-slate-950">
                        {title}
                      </h3>

                      <p className="mt-2.5 text-xs leading-6 text-slate-500">
                        {text}
                      </p>

                      <div
                        className={`
                          mt-5 h-1 w-8 rounded-full ${color.replace(
                            "text-",
                            "bg-",
                          )}
                          transition-all duration-500
                          group-hover:w-full
                        `}
                      />
                    </div>

                    <div className="flex justify-center py-2 sm:hidden">
                      <div className="h-5 w-px bg-slate-200" />
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUALITY & RELIABILITY
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-10 sm:py-12 lg:py-14">
        {/* Color glows */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/15 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="relative grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-10">
            {/* LEFT */}

            <div className="lg:col-span-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 rounded-full bg-teal-400" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-400">{t("Quality First" )}</span>
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Quality is built into the{" "}
                <span className="text-teal-400">{t("process." )}</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-[15px]">{t("Dependable battery products require more than a finished appearance. EKACEL focuses on process discipline, inspection and performance-oriented quality practices throughout the manufacturing journey." )}</p>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {qualityPoints.map(
                  ({
                    icon: Icon,
                    title,
                    text,
                    bg,
                    iconBg,
                    color,
                  }) => (
                    <div
                      key={title}
                      className={`
                        group flex items-center gap-3
                        rounded-xl border border-white/10
                        ${bg}
                        px-3.5 py-3
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:border-white/20
                      `}
                    >
                      <div
                        className={`
                          flex h-9 w-9 shrink-0 items-center
                          justify-center rounded-lg
                          ${iconBg} text-white
                          transition-transform duration-300
                          group-hover:scale-105
                        `}
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.9}
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className={`text-xs font-bold ${color}`}
                        >
                          {title}
                        </p>

                        <p className="mt-0.5 text-[10px] leading-5 text-slate-400">
                          {text}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* RIGHT — COMPACT PREMIUM CARD */}

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400" />

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 shadow-[0_10px_25px_rgba(16,185,129,0.2)]">
                      <ShieldCheck
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <p className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-teal-400">{t("Quality Commitment" )}</p>

                      <h3 className="mt-0.5 font-heading text-lg font-extrabold text-white">{t("Reliability by design" )}</h3>
                    </div>
                  </div>

                  <div className="hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:flex">
                    <CheckCircle2
                      size={15}
                      className="text-teal-400"
                    />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-3">
                    <div className="h-1.5 w-8 rounded-full bg-emerald-400" />

                    <p className="mt-3 text-[10px] font-bold text-white">{t("Process" )}</p>

                    <p className="mt-1 text-[9px] leading-4 text-slate-500">{t("Discipline" )}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/15 bg-blue-400/5 p-3">
                    <div className="h-1.5 w-8 rounded-full bg-blue-400" />

                    <p className="mt-3 text-[10px] font-bold text-white">{t("Quality" )}</p>

                    <p className="mt-1 text-[9px] leading-4 text-slate-500">{t("Inspection" )}</p>
                  </div>

                  <div className="rounded-xl border border-amber-400/15 bg-amber-400/5 p-3">
                    <div className="h-1.5 w-8 rounded-full bg-amber-400" />

                    <p className="mt-3 text-[10px] font-bold text-white">{t("Product" )}</p>

                    <p className="mt-1 text-[9px] leading-4 text-slate-500">{t("Reliability" )}</p>
                  </div>
                </div>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="text-[11px] leading-5 text-slate-500">{t("EKACEL's manufacturing philosophy focuses on building products that can support the everyday demands of modern energy applications." )}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GLOBAL MANUFACTURING VISION
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-700 via-teal-700 to-teal-800 px-6 py-7 shadow-[0_25px_65px_rgba(13,148,136,0.16)] sm:px-9 sm:py-9 lg:px-12">
            {/* Decorative glows */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[80px] transition-transform duration-700 group-hover:scale-125"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-teal-950/20 blur-[80px]"
            />

            <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2.5">
                  <Globe2
                    size={18}
                    className="text-teal-100"
                    strokeWidth={1.8}
                  />

                  <span className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-teal-100">{t("Global Manufacturing Vision" )}</span>
                </div>

                <h2 className="mt-3 max-w-3xl font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[34px]">
                  Building from India with a vision for{" "}
                  <span className="text-teal-100">{t("international energy markets." )}</span>
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-teal-50/90">{t("EKACEL is being developed with a long-term global perspective. Our manufacturing and product strategy is focused on creating dependable energy solutions that can evolve with customer requirements across different markets." )}</p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <a
                  href="/products"
                  className="
                    group/btn inline-flex items-center gap-2
                    rounded-xl bg-yellow-400
                    px-5 py-3
                    text-xs font-extrabold text-black
                    shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-yellow-300
                    hover:shadow-[0_15px_30px_rgba(0,0,0,0.16)]
                  "
                >
                  Explore Our Products

                  <ArrowRight
                    size={15}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GLOBAL CTA
      ====================================================== */}

      <CTASection />
    </>
  );
}
