import { useLanguage } from "../context/LanguageContext.jsx";
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  Factory,
  Home,
  Leaf,
  Network,
  ShieldCheck,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import { energySolutions } from "../data/solutions";

const iconMap = {
  residential: Home,
  commercial: Network,
  industrial: Factory,
  "solar-storage": Sun,
  ess: BatteryCharging,
  hybrid: Network,
  "clean-energy": Leaf,
};

const accentMap = {
  residential: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    line: "bg-emerald-500",
  },
  commercial: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    line: "bg-blue-500",
  },
  industrial: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100",
    line: "bg-orange-500",
  },
  "solar-storage": {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
    line: "bg-amber-500",
  },
  ess: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
    line: "bg-violet-500",
  },
  hybrid: {
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    border: "border-cyan-100",
    line: "bg-cyan-500",
  },
  "clean-energy": {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-100",
    line: "bg-green-500",
  },
};

const solutionTags = {
  residential: ["Home Backup", "Energy Storage"],
  commercial: ["Business Power", "Load Management"],
  industrial: ["Industrial Backup", "Heavy Duty"],
  "solar-storage": ["Solar Power", "Battery Storage"],
  ess: ["Scalable Storage", "Peak Support"],
  hybrid: ["Grid + Solar", "Smart Storage"],
  "clean-energy": ["Clean Power", "Efficient Storage"],
};

export default function Solutions() {
  const { t } = useLanguage();
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        eyebrow="Energy Solutions"
        title={t("A Broader Energy Ecosystem, Built to Fit.")}
        description="Storage and backup systems designed around how homes, businesses and industries actually consume power."
        breadcrumb={[
          {
            label: "Energy Solutions",
            href: "/solutions",
          },
        ]}
        image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1800&auto=format&fit=crop"
      />

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-emerald-100/50 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-100/40 blur-[100px]"
        />

        <Container>
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* LEFT */}

            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-9 rounded-full bg-emerald-600" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">{t("Energy Ecosystem" )}</span>
              </div>

              <h2 className="max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
                One energy platform.
                <br />
                <span className="text-emerald-700">{t("Multiple possibilities." )}</span>
              </h2>

              <div className="mt-5 h-[3px] w-16 rounded-full bg-emerald-600" />

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px]">{t("From everyday residential backup to demanding industrial applications, EKACEL develops energy solutions around the actual requirements of each environment." )}</p>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px]">{t("Explore our solutions to find the right combination of storage, backup, renewable integration and energy management for your application." )}</p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {[
                  "Reliable Energy",
                  "Smart Storage",
                  "Flexible Systems",
                  "Application Focused",
                ].map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2"
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

            {/* RIGHT */}

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 p-2 shadow-[0_25px_70px_rgba(15,23,42,0.13)]">
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop"
                    alt={t("Energy infrastructure")}
                    className="h-[330px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-slate-950/50 px-3 py-1.5 backdrop-blur-md">
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-emerald-400">{t("EKACEL ENERGY" )}</span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-emerald-400">{t("Store · Manage · Power" )}</p>

                    <h3 className="mt-2 max-w-md font-heading text-2xl font-extrabold leading-tight text-white">{t("Energy engineered around the way you use it." )}</h3>
                  </div>
                </div>

                <div className="absolute bottom-6 right-5 rounded-2xl border border-white/30 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <BatteryCharging size={18} />
                    </div>

                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-400">{t("Solutions" )}</p>

                      <p className="mt-0.5 text-xs font-bold text-slate-900">{t("Built to Fit" )}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          SOLUTION GRID
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-emerald-100/40 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/30 blur-[120px]"
        />

        <Container>
          {/* HEADER */}

          <div className="relative mb-10 max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-emerald-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">{t("Explore Solutions" )}</span>
            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Energy solutions for{" "}
              <span className="text-emerald-700">{t("every application." )}</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">{t("Choose an energy solution to explore its capabilities, applications and the way it can support your energy requirements." )}</p>
          </div>

          {/* CARDS */}

          <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {energySolutions.map((solution, index) => {
              const Icon = iconMap[solution.slug] || Zap;

              const accent =
                accentMap[solution.slug] || accentMap.residential;

              const tags =
                solutionTags[solution.slug] || [
                  "Energy Solution",
                  "Flexible System",
                ];

              return (
                <Link
                  key={solution.slug}
                  to={solution.href}
                  className="group block"
                >
                  <article className="relative h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white p-2 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.11)]">
                    {/* IMAGE */}

                    <div className="relative h-[235px] overflow-hidden rounded-[18px] bg-slate-900">
                      <img
                        src={solution.image}
                        alt={t(solution.name)}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                      {/* NUMBER */}

                      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-slate-950/45 backdrop-blur-md">
                        <span className="text-[10px] font-extrabold text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* ICON */}

                      <div
                        className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/90 shadow-lg backdrop-blur-md ${t(accent.text)}`}
                      >
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* CONTENT */}

                    <div className="px-4 pb-5 pt-5 sm:px-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p
                            className={`text-[9px] font-extrabold uppercase tracking-[0.18em] ${t(accent.text)}`}
                          >{t("Energy Solution" )}</p>

                          <h3 className="mt-1.5 font-heading text-xl font-extrabold tracking-tight text-slate-950">
                            {t(solution.name)}
                          </h3>
                        </div>

                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${accent.bg} ${t(accent.text)} transition-all duration-300 group-hover:translate-x-1`}
                        >
                          <ArrowRight
                            size={16}
                            strokeWidth={2.2}
                          />
                        </div>
                      </div>

                      <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                        {t(solution.description)}
                      </p>

                      {/* TAGS */}

                      <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full border ${accent.border} ${accent.bg} px-2.5 py-1 text-[9px] font-bold ${t(accent.text)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* BOTTOM LINE */}

                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">{t("Explore Solution" )}</span>

                        <span className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-700 transition-colors group-hover:text-emerald-700">
                          View Details
                          <ArrowRight
                            size={13}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      </div>

                      <div
                        className={`mt-4 h-1 w-10 rounded-full ${accent.line} opacity-40 transition-all duration-300 group-hover:w-20 group-hover:opacity-100`}
                      />
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =====================================================
          WHY EKACEL
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-[110px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[110px]"
        />

        <Container>
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* LEFT */}

            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-9 rounded-full bg-emerald-400" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-400">{t("Why EKACEL" )}</span>
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Energy solutions built around{" "}
                <span className="text-emerald-400">{t("real requirements." )}</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{t("Every application has a different energy profile. Our solutions are designed to provide the right combination of storage, backup, flexibility and energy management." )}</p>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm">
                <div className="space-y-3">
                  {[
                    {
                      icon: ShieldCheck,
                      text: "Dependable energy availability",
                    },
                    {
                      icon: Network,
                      text: "Application-focused system design",
                    },
                    {
                      icon: Zap,
                      text: "Flexible storage architecture",
                    },
                    {
                      icon: Leaf,
                      text: "Future-ready energy strategies",
                    },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.07]"
                    >
                      <Icon
                        size={17}
                        className="shrink-0 text-emerald-400"
                      />

                      <span className="text-xs font-semibold text-slate-300">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-14 sm:py-16">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-emerald-700 px-7 py-9 shadow-[0_25px_65px_rgba(16,185,129,0.16)] sm:px-10 lg:px-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[80px]" />

            <div className="relative grid grid-cols-1 items-center gap-7 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <Sparkles
                    size={18}
                    className="text-emerald-100"
                  />

                  <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-100">{t("Find Your Energy Solution" )}</span>
                </div>

                <h2 className="mt-3 max-w-3xl font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Not sure which solution fits your{" "}
                  <span className="text-emerald-100">{t("application?" )}</span>
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-emerald-50/90">{t("Tell us about your power requirements and operating environment. Our team can help identify the right energy solution for your application." )}</p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 text-xs font-extrabold text-black shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.18)]"
                >
                  Talk to an Expert

                  <ArrowRight
                    size={15}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}