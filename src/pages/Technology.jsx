import { useLanguage } from "../context/LanguageContext.jsx";

import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/FAQItem";

import {
  Beaker,
  BatteryCharging,
  Waves,
  Cpu,
  FlaskConical,
  CircuitBoard,
  Thermometer,
  Activity,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Microscope,
  Zap,
  ShieldCheck,
  Gauge,
} from "lucide-react";

/* =========================================================
   TECHNOLOGY FOCUS
========================================================= */

const focus = [
  {
    icon: Beaker,
    title: "Cell Chemistry",
    text: "Ongoing work across lithium and advanced lead-acid technologies with attention to application requirements and performance.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    hoverBg: "group-hover:bg-emerald-600",
  },
  {
    icon: BatteryCharging,
    title: "Pack Design",
    text: "Battery pack architecture considers electrical performance, protection, thermal behaviour and practical deployment requirements.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
  },
  {
    icon: Waves,
    title: "Energy Storage",
    text: "Storage architectures designed to support dependable energy availability across residential, commercial and industrial applications.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    hoverBg: "group-hover:bg-violet-600",
  },
  {
    icon: Cpu,
    title: "Smart Diagnostics",
    text: "Monitoring and diagnostic concepts help improve visibility into battery condition, operating behaviour and system performance.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    hoverBg: "group-hover:bg-amber-500",
  },
];

/* =========================================================
   TECHNOLOGY JOURNEY
========================================================= */

const technologyJourney = [
  {
    number: "01",
    icon: Microscope,
    title: "Research",
    text: "Understanding chemistry, materials and application requirements before moving toward product development.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
    border: "border-emerald-100",
  },
  {
    number: "02",
    icon: CircuitBoard,
    title: "Engineering",
    text: "Translating research into practical cell, pack and system architectures designed for real-world applications.",
    bg: "bg-blue-50",
    color: "text-blue-600",
    border: "border-blue-100",
  },
  {
    number: "03",
    icon: Thermometer,
    title: "Validation",
    text: "Evaluating thermal, electrical and operational behaviour through structured development and testing.",
    bg: "bg-violet-50",
    color: "text-violet-600",
    border: "border-violet-100",
  },
  {
    number: "04",
    icon: Activity,
    title: "Optimization",
    text: "Refining designs and processes around reliability, usability, performance and application needs.",
    bg: "bg-amber-50",
    color: "text-amber-600",
    border: "border-amber-100",
  },
];

/* =========================================================
   RESEARCH AREAS
========================================================= */

const researchAreas = [
  {
    icon: FlaskConical,
    title: "Material & Chemistry",
    text: "Exploring battery chemistry and material combinations aligned with different energy applications.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    icon: Zap,
    title: "Power & Performance",
    text: "Engineering around charging, discharge, efficiency and dependable energy delivery.",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    icon: Gauge,
    title: "System Intelligence",
    text: "Developing smarter approaches to monitoring, diagnostics and battery system visibility.",
    bg: "bg-violet-50",
    color: "text-violet-600",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "Technology development remains focused on creating products suited to demanding operating environments.",
    bg: "bg-amber-50",
    color: "text-amber-600",
  },
];

/* =========================================================
   TECHNOLOGY PAGE
========================================================= */

export default function Technology() {
  const { t } = useLanguage();
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        eyebrow="About Us"
        title={t("R&D & Technology")}
        description="Every solution begins in the lab — chemistry, cell design and system architecture worked through before it reaches the field."
        breadcrumb={[
          { label: "About Us", href: "/about" },
          {
            label: "R&D & Technology",
            href: "/about/technology",
          },
        ]}
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop"
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

            {/* LEFT CONTENT */}

            <div className="lg:col-span-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-9 rounded-full bg-emerald-600" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">{t("Technology & Innovation" )}</span>
              </div>

              <h2 className="max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
                Engineering better energy through{" "}
                <span className="text-emerald-700">{t("research and innovation." )}</span>
              </h2>

              <div className="mt-4 max-w-2xl space-y-2.5">
                <p className="text-sm leading-6.5 text-slate-500 sm:text-[15px]">{t("EKACEL approaches technology development with a practical focus on battery chemistry, cell architecture, pack design and energy storage systems." )}</p>

                <p className="text-sm leading-6.5 text-slate-500 sm:text-[15px]">{t("The objective is simple — understand the technical challenge, engineer the right solution and continuously improve its performance, reliability and usability." )}</p>

                <p className="text-sm leading-6.5 text-slate-500 sm:text-[15px]">{t("From individual cells to complete energy systems, technology remains an important foundation for building the next generation of dependable energy solutions." )}</p>
              </div>

              {/* SMALL HIGHLIGHTS */}

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Battery Chemistry",
                  "Cell Engineering",
                  "Energy Storage",
                  "Smart Monitoring",
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

            {/* RIGHT IMAGE CARD */}

            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.09)]">

                <div className="relative h-[280px] overflow-hidden rounded-[19px] bg-slate-900 sm:h-[310px]">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
                    alt={t("EKACEL technology and electronics research")}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/50 px-3 py-1.5 backdrop-blur-md">
                    <Sparkles
                      size={13}
                      className="text-emerald-400"
                    />

                    <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white">{t("EKACEL R&D" )}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-emerald-400">{t("Research · Engineering · Innovation" )}</p>

                    <h3 className="mt-1.5 max-w-md font-heading text-lg font-extrabold leading-tight text-white sm:text-xl">{t("Technology designed for the energy demands of tomorrow." )}</h3>
                  </div>
                </div>

                {/* Floating mini card */}

                <div className="absolute bottom-5 right-4 rounded-2xl border border-white/30 bg-white/90 px-3.5 py-2.5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <BatteryCharging
                        size={17}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <p className="text-[8px] font-extrabold uppercase tracking-[0.15em] text-slate-400">{t("Technology Focus" )}</p>

                      <p className="mt-0.5 text-[11px] font-bold text-slate-900">{t("Energy Systems" )}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY FOCUS
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-10 sm:py-12 lg:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-72 w-72 rounded-full bg-emerald-100/50 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="relative mb-7 max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-emerald-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">{t("Technology Focus" )}</span>
            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Technology built around{" "}
              <span className="text-emerald-700">{t("real energy challenges." )}</span>
            </h2>

            <p className="mt-2.5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">{t("Our technology focus brings together chemistry, battery engineering, storage architecture and intelligent monitoring." )}</p>
          </div>

          {/* HORIZONTAL CARDS */}

          <div className="relative grid grid-cols-1 gap-3.5 lg:grid-cols-2">
            {focus.map(
              ({
                icon: Icon,
                title,
                text,
                iconBg,
                iconColor,
                hoverBg,
              }) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconBg} ${iconColor} ${hoverBg} transition-all duration-300 group-hover:text-white`}
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
                          className={`${iconColor} shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100`}
                        />
                      </div>

                      <p className="mt-1.5 text-sm leading-5.5 text-slate-500">
                        {text}
                      </p>

                      <div
                        className={`mt-3 h-1 w-9 rounded-full ${iconBg.replace(
                          "bg-",
                          "bg-",
                        )} transition-all duration-300 group-hover:w-14`}
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
          TECHNOLOGY JOURNEY
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-emerald-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">{t("Technology Journey" )}</span>

              <span className="h-[2px] w-9 rounded-full bg-emerald-600" />
            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              From research to{" "}
              <span className="text-emerald-700">{t("real-world solutions." )}</span>
            </h2>

            <p className="mx-auto mt-2.5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">{t("A structured technology journey connects research, engineering, validation and continuous improvement." )}</p>
          </div>

          <div className="relative mt-8">
            {/* Connecting line */}

            <div className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-emerald-100 via-blue-100 to-amber-100 lg:block" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {technologyJourney.map(
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
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(15,23,42,0.09)]"
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
          RESEARCH AREAS
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-10 sm:py-12 lg:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-blue-100/40 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">

            {/* LEFT */}

            <div className="lg:col-span-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-9 rounded-full bg-emerald-600" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">{t("Research Areas" )}</span>
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Exploring the technology behind{" "}
                <span className="text-emerald-700">{t("dependable energy." )}</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">{t("R&D at EKACEL is focused on understanding the technical building blocks that influence battery performance, safety, usability and long-term reliability." )}</p>

              <div className="mt-5 rounded-2xl border border-emerald-100 bg-white p-4 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Sparkles
                      size={18}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-xs font-extrabold text-slate-950">{t("Innovation with purpose" )}</p>

                    <p className="mt-1 text-xs leading-5.5 text-slate-500">{t("Technology development remains closely connected to practical energy requirements and evolving customer applications." )}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {researchAreas.map(
                  ({ icon: Icon, title, text, bg, color }) => (
                    <article
                      key={title}
                      className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg} ${color} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.8}
                        />
                      </div>

                      <h3 className="mt-3 font-heading text-base font-extrabold text-slate-950">
                        {title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5.5 text-slate-500">
                        {text}
                      </p>
                    </article>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SMART ENERGY VISION
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
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] px-5 py-7 shadow-[0_25px_70px_rgba(0,0,0,0.2)] sm:px-7 lg:px-10 lg:py-8">

            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">

              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-slate-950">
                    <Cpu
                      size={19}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-emerald-400">{t("Smart Energy Vision" )}</p>

                    <p className="mt-0.5 text-xs font-bold text-white">{t("Connecting battery technology with intelligent systems" )}</p>
                  </div>
                </div>

                <h2 className="mt-4 max-w-3xl font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  The future of energy is{" "}
                  <span className="text-emerald-400">{t("smarter, more connected and more efficient." )}</span>
                </h2>

                <p className="mt-2.5 max-w-2xl text-sm leading-6 text-slate-400">{t("EKACEL's technology direction is focused on combining battery engineering with better monitoring, system intelligence and application-oriented design." )}</p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <a
                  href="/products"
                  className="group inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-xs font-extrabold text-black shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
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

