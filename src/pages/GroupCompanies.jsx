import { useLanguage } from "../context/LanguageContext.jsx";

import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/FAQItem";

import {
  Building2,
  Factory,
  BatteryCharging,
  Globe2,
  ArrowRight,
  ShieldCheck,
  Layers3,
  CheckCircle2,
  BriefcaseBusiness,
  Network,
} from "lucide-react";

/* =========================================================
   GROUP COMPANY AREAS
========================================================= */

const companyAreas = [
  {
    icon: BatteryCharging,
    number: "01",
    title: "Battery Solutions",
    text: "Focused on dependable battery products and energy storage solutions for diverse applications.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
    border: "border-emerald-100",
  },
  {
    icon: Factory,
    number: "02",
    title: "Energy Solutions",
    text: "Supporting evolving energy requirements through practical and application-focused solutions.",
    bg: "bg-blue-50",
    color: "text-blue-600",
    border: "border-blue-100",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Technology & Innovation",
    text: "Exploring technology, product development and new opportunities across the energy ecosystem.",
    bg: "bg-violet-50",
    color: "text-violet-600",
    border: "border-violet-100",
  },
  {
    icon: Globe2,
    number: "04",
    title: "Market & Distribution",
    text: "Building relationships and channels that help energy products reach markets and applications efficiently.",
    bg: "bg-amber-50",
    color: "text-amber-600",
    border: "border-amber-100",
  },
];

/* =========================================================
   GROUP PRINCIPLES
========================================================= */

const groupPrinciples = [
  "Complementary business capabilities",
  "Shared focus on energy solutions",
  "Application-driven approach",
  "Operational collaboration",
  "Long-term business development",
  "Growing energy ecosystem",
];

/* =========================================================
   GROUP COMPANIES
========================================================= */

export default function GroupCompanies() {
  const { t } = useLanguage();
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        eyebrow="About Us"
        title={t("Group Companies")}
        description="A growing business ecosystem built around batteries, energy solutions, technology and long-term opportunities."
        breadcrumb={[
          { label: "About Us", href: "/about" },
          {
            label: "Group Companies",
            href: "/about/group-companies",
          },
        ]}
        image="/images/group-companies.jpg"
      />

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        {/* Decorative glows */}

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
            {/* LEFT */}

            <div className="lg:col-span-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-9 rounded-full bg-teal-600" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal-700">{t("Our Business Ecosystem" )}</span>
              </div>

              <h2 className="max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
                Different capabilities.{" "}
                <span className="text-teal-700">{t("One energy direction." )}</span>
              </h2>

              <div className="mt-4 max-w-2xl space-y-3">
                <p className="text-sm leading-7 text-slate-500 sm:text-[15px]">{t("EKACEL is part of a broader business ecosystem focused on building capabilities across batteries, energy solutions, technology and related opportunities." )}</p>

                <p className="text-sm leading-7 text-slate-500 sm:text-[15px]">{t("Our group approach allows different areas of expertise to work alongside one another while maintaining a common focus on dependable products, practical solutions and long-term growth." )}</p>

                <p className="text-sm leading-7 text-slate-500 sm:text-[15px]">{t("As the organisation continues to develop, group businesses and strategic capabilities are being structured to support the changing requirements of the energy market." )}</p>
              </div>

              {/* HIGHLIGHTS */}

              <div className="mt-6 flex flex-wrap gap-2.5">
                {[
                  "Energy Focus",
                  "Business Synergy",
                  "Technology",
                  "Long-Term Growth",
                ].map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-teal-600"
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
              <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
                <div className="relative h-[300px] overflow-hidden rounded-[22px] bg-slate-900 sm:h-[330px]">
                  {/* YOUR IMAGE */}

                  <img
                    src="/images/group-companies1.jpg"
                    alt={t("EKACEL group companies and business ecosystem")}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Premium Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top Label */}

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/50 px-3 py-1.5 backdrop-blur-md">
                    <Building2
                      size={13}
                      className="text-teal-400"
                      strokeWidth={1.8}
                    />

                    <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white">{t("EKACEL GROUP" )}</span>
                  </div>

                  {/* Bottom Content */}

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-teal-400">{t("Connect · Collaborate · Grow" )}</p>

                    <h3 className="mt-2 max-w-md font-heading text-xl font-extrabold leading-tight text-white sm:text-2xl">{t("Building a connected energy ecosystem." )}</h3>
                  </div>
                </div>

                {/* Floating Badge */}

                <div className="absolute bottom-6 right-5 rounded-2xl border border-white/30 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                      <Network
                        size={18}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-400">{t("Group Focus" )}</p>

                      <p className="mt-0.5 text-xs font-bold text-slate-900">{t("Connected Growth" )}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS AREAS
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-slate-50 py-10 sm:py-12 lg:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-teal-100/50 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          {/* HEADER */}

          <div className="relative mb-8 max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-teal-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal-700">{t("Group Capabilities" )}</span>
            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Building capabilities across{" "}
              <span className="text-teal-700">{t("energy and technology." )}</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">{t("Our group ecosystem brings together complementary areas that support the development, delivery and growth of energy-focused solutions." )}</p>
          </div>

          {/* CARDS */}

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {companyAreas.map(
              ({
                icon: Icon,
                number,
                title,
                text,
                bg,
                color,
                border,
              }) => (
                <article
                  key={number}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-all duration-500 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
                >
                  {/* Number */}

                  <span className="absolute right-5 top-4 font-heading text-3xl font-black text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                    {number}
                  </span>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${border} ${bg} ${color} transition-all duration-300 group-hover:scale-105`}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-4 font-heading text-base font-extrabold text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {text}
                  </p>

                  <div
                    className={`mt-4 h-[2px] w-9 rounded-full ${color.replace(
                      "text-",
                      "bg-",
                    )} opacity-50 transition-all duration-500 group-hover:w-16 group-hover:opacity-100`}
                  />
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          GROUP APPROACH
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-teal-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal-700">{t("Group Approach" )}</span>

              <span className="h-[2px] w-9 rounded-full bg-teal-600" />
            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Strength through{" "}
              <span className="text-teal-700">{t("collaboration." )}</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">{t("A connected group structure creates opportunities to combine expertise, improve capabilities and respond to changing energy requirements." )}</p>
          </div>

          {/* APPROACH GRID */}

          <div className="relative mt-9">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-teal-100 via-blue-100 to-violet-100 lg:block" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  icon: BriefcaseBusiness,
                  title: "Shared Expertise",
                  text: "Bringing complementary capabilities together across business areas.",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                  border: "border-emerald-100",
                },
                {
                  number: "02",
                  icon: Network,
                  title: "Connected Operations",
                  text: "Creating stronger links between products, technology and market opportunities.",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                  border: "border-blue-100",
                },
                {
                  number: "03",
                  icon: ShieldCheck,
                  title: "Dependable Foundation",
                  text: "Maintaining a consistent focus on quality, reliability and responsible growth.",
                  color: "text-violet-600",
                  bg: "bg-violet-50",
                  border: "border-violet-100",
                },
                {
                  number: "04",
                  icon: Globe2,
                  title: "Future Ready",
                  text: "Developing capabilities with a long-term perspective on the energy market.",
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                  border: "border-amber-100",
                },
              ].map(
                ({
                  number,
                  icon: Icon,
                  title,
                  text,
                  color,
                  bg,
                  border,
                }) => (
                  <article
                    key={number}
                    className="group relative rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(15,23,42,0.09)]"
                  >
                    <div
                      className={`relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border ${border} ${bg} ${color} transition-all duration-500 group-hover:scale-110`}
                    >
                      <Icon size={24} strokeWidth={1.7} />

                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-950 text-[8px] font-extrabold text-white">
                        {number}
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-base font-extrabold text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
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
          GROUP PRINCIPLES
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-slate-950 py-10 sm:py-12 lg:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-teal-500/15 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* LEFT */}

            <div className="lg:col-span-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-9 rounded-full bg-teal-400" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal-400">{t("Group Principles" )}</span>
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                One ecosystem.{" "}
                <span className="text-teal-400">{t("Long-term direction." )}</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">{t("The group approach is designed to create a stronger foundation for sustainable business development while keeping every capability connected to practical energy requirements." )}</p>

              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {groupPrinciples.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-2.5 transition-all duration-300 hover:border-teal-400/30 hover:bg-white/[0.07]"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-teal-400"
                      strokeWidth={1.8}
                    />

                    <span className="text-xs font-medium leading-5 text-slate-300">
                      {t(point)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CARD */}

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.22)] sm:p-6">
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-teal-500/10 blur-[70px]" />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500 text-slate-950">
                      <Building2 size={23} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-teal-400">{t("EKACEL ECOSYSTEM" )}</p>

                      <h3 className="mt-1 font-heading text-xl font-extrabold text-white">{t("Built to grow together" )}</h3>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2.5">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-400/10 text-teal-400">
                          <BatteryCharging size={17} />
                        </div>

                        <div>
                          <p className="text-xs font-bold text-white">{t("Energy Capabilities" )}</p>

                          <p className="mt-0.5 text-[10px] text-slate-500">{t("Battery and energy-focused businesses." )}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400">
                          <Layers3 size={17} />
                        </div>

                        <div>
                          <p className="text-xs font-bold text-white">{t("Complementary Businesses" )}</p>

                          <p className="mt-0.5 text-[10px] text-slate-500">{t("Capabilities working toward common opportunities." )}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-400/10 text-violet-400">
                          <Globe2 size={17} />
                        </div>

                        <div>
                          <p className="text-xs font-bold text-white">{t("Future Perspective" )}</p>

                          <p className="mt-0.5 text-[10px] text-slate-500">{t("Building for evolving energy markets." )}</p>
                        </div>
                      </div>
                    </div>
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

      <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12">
        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="relative overflow-hidden rounded-3xl bg-teal-700 px-6 py-8 shadow-[0_25px_65px_rgba(13,148,136,0.16)] sm:px-8 sm:py-9 lg:px-10">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-teal-950/20 blur-[80px]" />

            <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <Network
                    size={19}
                    className="text-teal-100"
                    strokeWidth={1.8}
                  />

                  <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal-100">{t("Explore EKACEL" )}</span>
                </div>

                <h2 className="mt-3 max-w-3xl font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Discover the products and capabilities behind our{" "}
                  <span className="text-teal-100">{t("energy ecosystem." )}</span>
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-teal-50/90">{t("Explore EKACEL's battery and energy solutions and learn more about the capabilities we are building for a changing energy landscape." )}</p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <a
                  href="/products"
                  className="group inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 text-xs font-extrabold text-black shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.18)]"
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

