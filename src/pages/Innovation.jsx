import { useLanguage } from "../context/LanguageContext.jsx";

import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/FAQItem";

import {
  Recycle,
  Zap,
  Factory,
  Route,
  Leaf,
  Lightbulb,
  BatteryCharging,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Sparkles,
  CircleGauge,
  Cpu,
  TrendingUp,
} from "lucide-react";

/* =========================================================
   INNOVATION AREAS
========================================================= */

const innovationAreas = [
  {
    icon: Zap,
    title: "Cleaner Energy",
    text: "Energy storage solutions designed to support efficient use of renewable and stored energy.",
    bg: "bg-amber-50",
    color: "text-amber-600",
    border: "border-amber-100",
  },
  {
    icon: Route,
    title: "Energy Efficiency",
    text: "Product thinking focused on improving energy utilisation and reducing avoidable losses.",
    bg: "bg-blue-50",
    color: "text-blue-600",
    border: "border-blue-100",
  },
  {
    icon: Factory,
    title: "Responsible Manufacturing",
    text: "Manufacturing practices built around process discipline, resource awareness and continuous improvement.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
    border: "border-emerald-100",
  },
  {
    icon: Recycle,
    title: "Circular Thinking",
    text: "A long-term approach toward responsible battery use, recovery and better resource utilisation.",
    bg: "bg-violet-50",
    color: "text-violet-600",
    border: "border-violet-100",
  },
];

/* =========================================================
   INNOVATION JOURNEY
========================================================= */

const innovationJourney = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Identify",
    text: "Understand changing energy requirements, application challenges and emerging opportunities.",
    bg: "bg-amber-50",
    color: "text-amber-600",
    border: "border-amber-100",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Explore",
    text: "Evaluate technologies, product concepts and system approaches that can address those needs.",
    bg: "bg-blue-50",
    color: "text-blue-600",
    border: "border-blue-100",
  },
  {
    number: "03",
    icon: BatteryCharging,
    title: "Develop",
    text: "Translate promising ideas into practical battery and energy solution concepts.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
    border: "border-emerald-100",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Improve",
    text: "Continue refining performance, efficiency and application suitability over time.",
    bg: "bg-violet-50",
    color: "text-violet-600",
    border: "border-violet-100",
  },
];

/* =========================================================
   INNOVATION PRINCIPLES
========================================================= */

const principles = [
  "Application-driven product development",
  "Focus on energy efficiency",
  "Battery and energy system innovation",
  "Responsible use of resources",
  "Continuous improvement mindset",
  "Long-term sustainability perspective",
];

/* =========================================================
   INNOVATION PAGE
========================================================= */

export default function Innovation() {
  const { t } = useLanguage();
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        eyebrow="About Us"
        title={t("Innovation")}
        description="Where sustainability, engineering and evolving energy needs come together to shape what EKACEL builds next."
        breadcrumb={[
          { label: "About Us", href: "/about" },
          {
            label: "Innovation",
            href: "/about/innovation",
          },
        ]}
        image="/images/innovation.jpg"
      />

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        {/* Decorative background */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-teal-100/50 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-blue-100/40 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">

            {/* LEFT CONTENT */}

            <div className="lg:col-span-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 rounded-full bg-teal-600" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-700">{t("Innovation & Sustainability" )}</span>
              </div>

              <h2 className="max-w-3xl font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
                Building what comes next in{" "}
                <span className="text-teal-700">{t("energy." )}</span>
              </h2>

              <div className="mt-4 max-w-2xl space-y-3">
                <p className="text-sm leading-7 text-slate-500 sm:text-[15px]">{t("Innovation at EKACEL is about understanding how energy requirements are changing and turning those insights into practical battery and energy solutions." )}</p>

                <p className="text-sm leading-7 text-slate-500 sm:text-[15px]">{t("Our approach connects technology, energy efficiency, application requirements and responsible product thinking to create solutions that can evolve with the market." )}</p>

                <p className="text-sm leading-7 text-slate-500 sm:text-[15px]">{t("We believe meaningful innovation should not only introduce new ideas, but also make energy solutions more useful, efficient and dependable." )}</p>
              </div>

              {/* HIGHLIGHTS */}

              <div className="mt-6 flex flex-wrap gap-2.5">
                {[
                  {
                    icon: Sparkles,
                    text: "Future Focused",
                  },
                  {
                    icon: BatteryCharging,
                    text: "Energy Solutions",
                  },
                  {
                    icon: Leaf,
                    text: "Sustainable Direction",
                  },
                  {
                    icon: Cpu,
                    text: "Technology Driven",
                  },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2"
                  >
                    <Icon
                      size={14}
                      className="text-teal-600"
                    />

                    <span className="text-[11px] font-bold text-slate-700">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT PREMIUM IMAGE CARD */}

            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">

                <div className="relative h-[300px] overflow-hidden rounded-[22px] bg-slate-900 sm:h-[330px]">

                  <img
                    src="/images/innovation12.jpg"
                    alt={t("EKACEL innovation and technology")}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />

                  {/* TOP LABEL */}

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/50 px-3 py-1.5 backdrop-blur-md">
                    <Lightbulb
                      size={13}
                      className="text-teal-400"
                    />

                    <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white">{t("EKACEL INNOVATION" )}</span>
                  </div>

                  {/* BOTTOM CONTENT */}

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-teal-400">{t("Explore · Develop · Improve" )}</p>

                    <h3 className="mt-2 max-w-md font-heading text-xl font-extrabold leading-tight text-white sm:text-2xl">{t("Ideas shaped for a changing energy landscape." )}</h3>
                  </div>
                </div>

                {/* FLOATING BADGE */}

                <div className="absolute bottom-6 right-5 rounded-2xl border border-white/30 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                      <CircleGauge
                        size={18}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-400">{t("Innovation Focus" )}</p>

                      <p className="mt-0.5 text-xs font-bold text-slate-900">{t("Performance" )}</p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INNOVATION AREAS
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-10 sm:py-12 lg:py-14">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-teal-100/50 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">

          {/* HEADER */}

          <div className="relative mb-7 max-w-3xl">

            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-teal-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-700">{t("Innovation Areas" )}</span>
            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Ideas shaped around{" "}
              <span className="text-teal-700">{t("better energy." )}</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">{t("Our innovation direction brings technology and sustainability together with the practical requirements of modern energy applications." )}</p>

          </div>

          {/* CARDS */}

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {innovationAreas.map(
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
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(15,23,42,0.09)]"
                >

                  {/* Decorative number */}

                  <span className="absolute right-4 top-3 font-heading text-3xl font-black text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                    {String(
                      innovationAreas.findIndex(
                        (item) => item.title === title,
                      ) + 1,
                    ).padStart(2, "0")}
                  </span>

                  {/* ICON */}

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${border} ${bg} ${color} transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-5 font-heading text-base font-extrabold text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {text}
                  </p>

                  <div
                    className={`mt-4 h-1 w-8 rounded-full ${color.replace(
                      "text-",
                      "bg-",
                    )} opacity-40 transition-all duration-300 group-hover:w-14 group-hover:opacity-100`}
                  />

                </article>
              ),
            )}

          </div>
        </div>
      </section>

      {/* =====================================================
          INNOVATION JOURNEY
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">

        <div className="relative w-full px-[30px] sm:px-[30px]">

          {/* HEADER */}

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-3 flex items-center justify-center gap-3">

              <span className="h-[2px] w-8 rounded-full bg-teal-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-700">{t("Innovation Journey" )}</span>

              <span className="h-[2px] w-8 rounded-full bg-teal-600" />

            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              From ideas to{" "}
              <span className="text-teal-700">{t("useful solutions." )}</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">{t("A practical innovation journey that connects energy needs, technology exploration, product development and continuous improvement." )}</p>

          </div>

          {/* JOURNEY */}

          <div className="relative mt-9">

            {/* Connecting line */}

            <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-amber-100 via-teal-100 to-violet-100 lg:block" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {innovationJourney.map(
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
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(15,23,42,0.09)]"
                  >

                    {/* NUMBER */}

                    <span className="absolute right-4 top-3 font-heading text-3xl font-black text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                      {number}
                    </span>

                    {/* ICON */}

                    <div
                      className={`relative mx-auto flex h-14 w-14 items-center justify-center rounded-xl border ${border} ${bg} ${color} transition-all duration-500 group-hover:scale-110 group-hover:rotate-2`}
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

                    <p className="mt-2 text-xs leading-6 text-slate-500">
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
          SUSTAINABLE INNOVATION
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-10 sm:py-12 lg:py-14">

        {/* GLOWS */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-teal-500/15 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">

          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">

            {/* LEFT */}

            <div className="lg:col-span-6">

              <div className="mb-3 flex items-center gap-3">

                <span className="h-[2px] w-8 rounded-full bg-teal-400" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-400">{t("Sustainable Innovation" )}</span>

              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Innovation with a{" "}
                <span className="text-teal-400">{t("responsible direction." )}</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">{t("The future of energy requires solutions that are capable, efficient and increasingly responsible. EKACEL's innovation direction keeps these priorities connected." )}</p>

              {/* PRINCIPLES */}

              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">

                {principles.map((point, index) => (
                  <div
                    key={point}
                    className="group flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-2.5 transition-all duration-300 hover:border-teal-400/30 hover:bg-white/[0.07]"
                  >

                    <CheckCircle2
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        index % 3 === 0
                          ? "text-teal-400"
                          : index % 3 === 1
                            ? "text-blue-400"
                            : "text-violet-400"
                      }`}
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

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:p-6">

                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-teal-500/10 blur-[70px]" />

                <div className="relative">

                  {/* CARD HEADER */}

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500 text-slate-950">
                      <Sparkles
                        size={21}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>

                      <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-teal-400">{t("EKACEL APPROACH" )}</p>

                      <h3 className="mt-1 font-heading text-lg font-extrabold text-white">{t("Think. Build. Improve." )}</h3>

                    </div>

                  </div>

                  {/* APPROACH ITEMS */}

                  <div className="mt-5 space-y-3">

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                          <Lightbulb size={17} />
                        </div>

                        <div>

                          <p className="text-xs font-bold text-white">{t("Think Forward" )}</p>

                          <p className="mt-0.5 text-[10px] leading-5 text-slate-500">{t("Understand changing energy requirements." )}</p>

                        </div>

                      </div>

                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-400/10 text-teal-400">
                          <BatteryCharging size={17} />
                        </div>

                        <div>

                          <p className="text-xs font-bold text-white">{t("Build Practically" )}</p>

                          <p className="mt-0.5 text-[10px] leading-5 text-slate-500">{t("Turn ideas into useful energy applications." )}</p>

                        </div>

                      </div>

                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-400/10 text-violet-400">
                          <Recycle size={17} />
                        </div>

                        <div>

                          <p className="text-xs font-bold text-white">{t("Improve Continuously" )}</p>

                          <p className="mt-0.5 text-[10px] leading-5 text-slate-500">{t("Keep efficiency and responsibility in focus." )}</p>

                        </div>

                      </div>

                    </div>

                  </div>

                  {/* BOTTOM NOTE */}

                  <div className="mt-5 flex items-start gap-3 border-t border-white/10 pt-4">

                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-teal-400"
                    />

                    <p className="text-xs leading-6 text-slate-500">{t("Innovation remains focused on practical outcomes, responsible development and evolving energy needs." )}</p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-12">

        <div className="relative w-full px-[30px] sm:px-[30px]">

          <div className="relative overflow-hidden rounded-3xl bg-teal-700 px-6 py-7 shadow-[0_25px_65px_rgba(13,148,136,0.16)] sm:px-9 sm:py-9 lg:px-12">

            {/* DECORATIVE */}

            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-teal-950/20 blur-[80px]" />

            <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-12">

              <div className="lg:col-span-8">

                <div className="flex items-center gap-3">

                  <Globe2
                    size={18}
                    className="text-teal-100"
                    strokeWidth={1.8}
                  />

                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-100">{t("Future Energy Vision" )}</span>

                </div>

                <h2 className="mt-3 max-w-3xl font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl">

                  Creating energy solutions for a{" "}

                  <span className="text-teal-100">{t("changing world." )}</span>

                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-teal-50/90">{t("Explore EKACEL's growing portfolio of battery and energy solutions developed around performance, application needs and the evolving energy landscape." )}</p>

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
