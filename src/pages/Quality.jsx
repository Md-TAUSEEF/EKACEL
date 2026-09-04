import { useLanguage } from "../context/LanguageContext.jsx";

import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/FAQItem";

import {
  Gauge,
  ShieldCheck,
  Thermometer,
  ClipboardCheck,
  Microscope,
  Activity,
  BatteryCharging,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  PackageCheck,
  CircleCheck,
} from "lucide-react";

/* =========================================================
   QUALITY TESTING
========================================================= */

const testing = [
  {
    icon: Thermometer,
    title: "Environmental Testing",
    text: "Performance evaluated across temperature, humidity and environmental conditions relevant to intended applications.",
    bg: "bg-orange-50",
    color: "text-orange-600",
    border: "border-orange-100",
  },
  {
    icon: Gauge,
    title: "Load Testing",
    text: "Charge, discharge and operating cycles are evaluated to understand product behaviour under demanding conditions.",
    bg: "bg-blue-50",
    color: "text-blue-600",
    border: "border-blue-100",
  },
  {
    icon: ShieldCheck,
    title: "Safety Validation",
    text: "Products undergo defined checks focused on safe operation, protection and dependable performance.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
    border: "border-emerald-100",
  },
  {
    icon: ClipboardCheck,
    title: "Batch Inspection",
    text: "Sampling and inspection procedures help maintain consistency across production batches before dispatch.",
    bg: "bg-violet-50",
    color: "text-violet-600",
    border: "border-violet-100",
  },
];

/* =========================================================
   QUALITY PROCESS
========================================================= */

const qualityProcess = [
  {
    number: "01",
    icon: FlaskConical,
    title: "Material Verification",
    text: "Key materials and incoming components are checked before entering production.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
    border: "border-emerald-100",
  },
  {
    number: "02",
    icon: Activity,
    title: "Performance Testing",
    text: "Electrical and operating characteristics are evaluated against defined requirements.",
    bg: "bg-blue-50",
    color: "text-blue-600",
    border: "border-blue-100",
  },
  {
    number: "03",
    icon: Microscope,
    title: "Inspection",
    text: "Products move through visual, dimensional and application-focused inspection stages.",
    bg: "bg-violet-50",
    color: "text-violet-600",
    border: "border-violet-100",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Final Release",
    text: "Completed products are reviewed before packaging and preparation for dispatch.",
    bg: "bg-amber-50",
    color: "text-amber-600",
    border: "border-amber-100",
  },
];

/* =========================================================
   QUALITY PRINCIPLES
========================================================= */

const qualityPrinciples = [
  "Defined testing procedures",
  "Multi-stage inspection",
  "Application-focused validation",
  "Performance-oriented checks",
  "Batch-level quality monitoring",
  "Focus on consistency and reliability",
];

/* =========================================================
   QUALITY PAGE
========================================================= */

export default function Quality() {
  const { t } = useLanguage();
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        eyebrow="About Us"
        title={t("Quality & Testing")}
        description="Products are validated through structured inspection and testing before they reach customers and channel partners."
        breadcrumb={[
          { label: "About Us", href: "/about" },
          {
            label: "Quality & Testing",
            href: "/about/quality",
          },
        ]}
        image="/images/quality-testing.jpg"
      />

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-72 w-72 rounded-full bg-emerald-100/50 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-64 w-64 rounded-full bg-blue-100/40 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">

            {/* LEFT */}

            <div className="lg:col-span-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-9 rounded-full bg-emerald-600" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">{t("Quality Assurance" )}</span>
              </div>

              <h2 className="max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
                Quality engineered into{" "}
                <span className="text-emerald-700">{t("every stage." )}</span>
              </h2>

              <div className="mt-4 max-w-2xl space-y-2.5">
                <p className="text-sm leading-6.5 text-slate-500 sm:text-[15px]">{t("Reliable energy products depend on more than the final assembly. EKACEL approaches quality as a continuous process that begins with material verification and continues through production, testing and final release." )}</p>

                <p className="text-sm leading-6.5 text-slate-500 sm:text-[15px]">{t("Testing and inspection are structured around understanding product behaviour, maintaining consistency and identifying potential issues before products move forward." )}</p>

                <p className="text-sm leading-6.5 text-slate-500 sm:text-[15px]">{t("This quality-focused approach supports the development of dependable battery and energy solutions for different applications and operating environments." )}</p>
              </div>

              {/* HIGHLIGHTS */}

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Process Control",
                  "Performance Testing",
                  "Safety Checks",
                  "Batch Inspection",
                ].map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-emerald-600"
                    />

                    <span className="text-[11px] font-bold text-slate-700">
                      {t(item)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT PREMIUM IMAGE CARD */}

            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.09)]">

                <div className="relative h-[280px] overflow-hidden rounded-[19px] bg-slate-900 sm:h-[310px]">
                  <img
                    src="/images/quality-testing1.jpg"
                    alt={t("EKACEL quality and testing")}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />

                  {/* Top label */}

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/50 px-3 py-1.5 backdrop-blur-md">
                    <ShieldCheck
                      size={13}
                      className="text-emerald-400"
                    />

                    <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white">{t("EKACEL QUALITY" )}</span>
                  </div>

                  {/* Bottom content */}

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-emerald-400">{t("Test · Inspect · Validate" )}</p>

                    <h3 className="mt-1.5 max-w-md font-heading text-lg font-extrabold leading-tight text-white sm:text-xl">{t("Confidence built through controlled testing." )}</h3>
                  </div>
                </div>

                {/* Floating badge */}

                <div className="absolute bottom-5 right-4 rounded-2xl border border-white/30 bg-white/90 px-3.5 py-2.5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Gauge
                        size={17}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <p className="text-[8px] font-extrabold uppercase tracking-[0.15em] text-slate-400">{t("Quality Focus" )}</p>

                      <p className="mt-0.5 text-[11px] font-bold text-slate-900">{t("Performance" )}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          TESTING CAPABILITIES
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-10 sm:py-12 lg:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-72 w-72 rounded-full bg-emerald-100/50 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          {/* HEADER */}

          <div className="relative mb-7 max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-emerald-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">{t("Testing Capabilities" )}</span>
            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Testing designed around{" "}
              <span className="text-emerald-700">{t("real-world performance." )}</span>
            </h2>

            <p className="mt-2.5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">{t("Multiple testing and inspection practices help evaluate performance, consistency and product readiness." )}</p>
          </div>

          {/* HORIZONTAL PREMIUM CARDS */}

          <div className="relative grid grid-cols-1 gap-3.5 lg:grid-cols-2">
            {testing.map(
              ({
                icon: Icon,
                title,
                text,
                bg,
                color,
                border,
              }) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.09)]"
                >
                  <div className="flex items-start gap-3.5">

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${border} ${bg} ${color} transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-heading text-base font-extrabold text-slate-950">
                          {title}
                        </h3>

                        <ArrowRight
                          size={16}
                          className={`${color} shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100`}
                        />
                      </div>

                      <p className="mt-1.5 text-sm leading-5.5 text-slate-500">
                        {text}
                      </p>

                      <div
                        className={`mt-3 h-1 w-9 rounded-full ${color.replace(
                          "text-",
                          "bg-",
                        )} opacity-40 transition-all duration-300 group-hover:w-16 group-hover:opacity-100`}
                      />
                    </div>

                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          QUALITY PROCESS
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        <div className="relative w-full px-[30px] sm:px-[30px]">
          {/* HEADER */}

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-emerald-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">{t("Quality Process" )}</span>

              <span className="h-[2px] w-9 rounded-full bg-emerald-600" />
            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              From verification to{" "}
              <span className="text-emerald-700">{t("final release." )}</span>
            </h2>

            <p className="mx-auto mt-2.5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">{t("Quality checks are integrated throughout the product journey, helping maintain consistency from incoming materials to finished products." )}</p>
          </div>

          {/* PROCESS */}

          <div className="relative mt-8">

            {/* Connecting line */}

            <div className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-emerald-100 via-blue-100 to-amber-100 lg:block" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {qualityProcess.map(
                ({
                  number,
                  icon: Icon,
                  title,
                  text,
                  bg,
                  color,
                  border,
                }) => (
                  <article
                    key={number}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(15,23,42,0.09)]"
                  >
                    {/* Number */}

                    <span className="absolute right-3 top-3 font-heading text-3xl font-black text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                      {number}
                    </span>

                    {/* Icon */}

                    <div
                      className={`relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border ${border} ${bg} ${color} transition-all duration-500 group-hover:scale-110`}
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.7}
                      />

                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-950 text-[8px] font-extrabold text-white">
                        {number}
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-base font-extrabold text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-5.5 text-slate-500">
                      {text}
                    </p>

                    <div
                      className={`mx-auto mt-4 h-1 w-8 rounded-full ${color.replace(
                        "text-",
                        "bg-",
                      )} opacity-30 transition-all duration-300 group-hover:w-14 group-hover:opacity-100`}
                    />
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUALITY PRINCIPLES
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-10 sm:py-12 lg:py-14">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-emerald-500/15 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">

            {/* LEFT */}

            <div className="lg:col-span-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-9 rounded-full bg-emerald-400" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-400">{t("Quality Principles" )}</span>
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Quality is not a final check.{" "}
                <span className="text-emerald-400">{t("It is a process." )}</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">{t("EKACEL's quality approach is built around controlled processes, structured testing and continuous attention to product consistency and reliability." )}</p>

              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {qualityPrinciples.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-2.5 transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.07]"
                  >
                    <CircleCheck
                      size={16}
                      className="mt-0.5 shrink-0 text-emerald-400"
                      strokeWidth={1.8}
                    />

                    <span className="text-xs font-medium leading-5 text-slate-300">
                      {t(point)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT PREMIUM CARD */}

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.22)] sm:p-6">

                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-[70px]" />

                <div className="relative">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-slate-950">
                      <BatteryCharging
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-emerald-400">{t("EKACEL STANDARD" )}</p>

                      <h3 className="mt-0.5 font-heading text-lg font-extrabold text-white">{t("Built for confidence" )}</h3>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3.5">

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-300">{t("Process Control" )}</span>

                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-400">{t("Continuous" )}</span>
                      </div>

                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[92%] rounded-full bg-emerald-500" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-300">{t("Testing Discipline" )}</span>

                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-blue-400">{t("Structured" )}</span>
                      </div>

                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[88%] rounded-full bg-blue-500" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-300">{t("Product Reliability" )}</span>

                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-violet-400">{t("Priority" )}</span>
                      </div>

                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[95%] rounded-full bg-violet-500" />
                      </div>
                    </div>

                  </div>

                  <div className="mt-5 flex items-start gap-3 border-t border-white/10 pt-4">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />

                    <p className="text-xs leading-5.5 text-slate-500">{t("Every stage contributes to the larger objective of delivering consistent, dependable energy products." )}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA BANNER
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        <div className="w-full px-[30px] sm:px-[30px]">
          <div className="relative overflow-hidden rounded-3xl bg-emerald-700 px-6 py-7 shadow-[0_25px_65px_rgba(16,185,129,0.16)] sm:px-8 lg:px-10">

            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-emerald-950/20 blur-[80px]" />

            <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-12">

              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck
                    size={19}
                    className="text-emerald-100"
                    strokeWidth={1.8}
                  />

                  <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-100">{t("Quality You Can Build On" )}</span>
                </div>

                <h2 className="mt-2.5 max-w-3xl font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Developing dependable energy solutions through{" "}
                  <span className="text-emerald-100">{t("disciplined quality practices." )}</span>
                </h2>

                <p className="mt-2.5 max-w-2xl text-sm leading-6 text-emerald-50/90">{t("Discover EKACEL's growing portfolio of battery and energy solutions designed around performance, consistency and evolving application requirements." )}</p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <a
                  href="/products"
                  className="group inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-xs font-extrabold text-black shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.18)]"
                >
                  Explore Our Products

                  <ArrowRight
                    size={15}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
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

