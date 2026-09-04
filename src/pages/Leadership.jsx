import { useLanguage } from "../context/LanguageContext.jsx";

import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/FAQItem";

import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Building2,
  Cpu,
  Factory,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

/* =========================================================
   LEADERSHIP ROLES
========================================================= */

const team = [
  {
    role: "Managing Director",
    department: "Strategy & Operations",
    description:
      "Driving business direction, operational excellence and long-term growth across EKACEL's energy portfolio.",
    icon: Building2,
    accent: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    hover: "group-hover:bg-blue-600",
  },
  {
    role: "Chief Technology Officer",
    department: "R&D & Product Engineering",
    description:
      "Leading technology development, product engineering and innovation across battery and energy-storage solutions.",
    icon: Cpu,
    accent: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    hover: "group-hover:bg-violet-600",
  },
  {
    role: "Head of Manufacturing",
    department: "Manufacturing & Quality",
    description:
      "Overseeing manufacturing processes, production discipline, quality systems and operational performance.",
    icon: Factory,
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    hover: "group-hover:bg-emerald-600",
  },
  {
    role: "Head of Global Sales",
    department: "International Markets",
    description:
      "Building international partnerships and developing market opportunities for EKACEL energy solutions.",
    icon: Globe2,
    accent: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    hover: "group-hover:bg-cyan-600",
  },
];

/* =========================================================
   LEADERSHIP PRINCIPLES
========================================================= */

const principles = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    text: "Every product and process is approached with a strong focus on reliability, consistency and customer confidence.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    text: "We keep exploring better technologies, smarter storage and improved energy solutions for changing market needs.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    text: "Our thinking extends beyond domestic markets, with products and partnerships designed for a growing international footprint.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

/* =========================================================
   LEADERSHIP PAGE
========================================================= */

export default function Leadership() {
  const { t } = useLanguage();
  return (
    <>
      {/* =====================================================
          PAGE HERO
      ====================================================== */}

      <PageHero
        eyebrow="About EKACEL"
        title={t("Leadership built for the next generation of energy.")}
        description="A multidisciplinary leadership approach bringing together strategy, technology, manufacturing, quality and global market development."
        breadcrumb={[
          { label: "About Us", href: "/about" },
          {
            label: "Key Team",
            href: "/about/leadership",
          },
        ]}
        image="/images/hero-2.png"
      />

      {/* =====================================================
          INTRO / LEADERSHIP HEADER
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        {/* Background decoration */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-emerald-100/40 blur-[110px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-50 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="relative grid grid-cols-1 items-center gap-9 lg:grid-cols-12 lg:gap-10 xl:gap-12">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="lg:col-span-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-10 rounded-full bg-emerald-600" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-teal-700">{t("Leadership & Vision" )}</span>
              </div>

              <h2 className="max-w-2xl font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                People behind the{" "}
                <span className="text-teal-700">{t("power of tomorrow." )}</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">{t("EKACEL's leadership brings together strategic thinking, engineering expertise, manufacturing discipline and market understanding to build a dependable energy business for India and international markets." )}</p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">{t("Our approach is built around long-term thinking — developing reliable products, strengthening capabilities and creating partnerships that can support EKACEL's growth across the evolving global energy landscape." )}</p>

              {/* Leadership highlights */}

              <div className="mt-6 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <Users
                    size={20}
                    className="text-blue-600"
                    strokeWidth={1.8}
                  />

                  <p className="mt-2.5 text-xs font-bold text-slate-900">{t("Multi-disciplinary" )}</p>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">{t("Leadership expertise" )}</p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <Globe2
                    size={20}
                    className="text-teal-700"
                    strokeWidth={1.8}
                  />

                  <p className="mt-2.5 text-xs font-bold text-slate-900">{t("Global Outlook" )}</p>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">{t("International growth" )}</p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <Zap
                    size={20}
                    className="text-violet-600"
                    strokeWidth={1.8}
                  />

                  <p className="mt-2.5 text-xs font-bold text-slate-900">{t("Energy Focused" )}</p>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">{t("Built for tomorrow" )}</p>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT GROUP IMAGE
            ================================================== */}

            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-[560px]">
                {/* Decorative glow */}

                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl"
                />

                {/* Main image frame */}

                <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-2 shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <img
                      src="/images/leadership-team.jpg"
                      alt={t("EKACEL leadership team")}
                      className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* Image overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                    {/* Image bottom information */}

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <div className="flex items-end justify-between gap-5">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-300">{t("EKACEL ENERGY" )}</p>

                          <h3 className="mt-1.5 font-heading text-xl font-bold text-white sm:text-2xl">{t("Leadership with purpose." )}</h3>

                          <p className="mt-1.5 max-w-md text-xs leading-5 text-white/70">{t("Strategy, technology, manufacturing and global market development working together." )}</p>
                        </div>

                        <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-md sm:flex">
                          <BatteryCharging
                            size={23}
                            strokeWidth={1.8}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}

                <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-white/70 bg-white px-4 py-3 shadow-[0_15px_40px_rgba(15,23,42,0.15)] sm:flex">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Globe2 size={18} />
                  </div>

                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">{t("Global Vision" )}</p>

                    <p className="text-xs font-bold text-slate-900">{t("India & International Markets" )}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP TEAM
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-slate-50 py-10 sm:py-12 lg:py-14">
        {/* Background Decoration */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-emerald-100/40 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-slate-200/50 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          {/* =================================================
              SECTION HEADER
          ================================================== */}

          <div className="relative mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-9 rounded-full bg-teal-600" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal-700">{t("Leadership Team" )}</span>
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Experience guiding{" "}
                <span className="text-teal-700">{t("EKACEL forward." )}</span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">{t("Our leadership brings together strategic vision, engineering, manufacturing, quality and international market expertise to build a reliable and future-ready energy business." )}</p>
            </div>

            {/* Premium Badge */}

            <div className="hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-[0_8px_25px_rgba(15,23,42,0.05)] lg:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-teal-700">
                <Users size={19} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-slate-400">{t("Leadership" )}</p>

                <p className="mt-0.5 text-xs font-bold text-slate-900">{t("One Team · One Vision" )}</p>
              </div>
            </div>
          </div>

          {/* =================================================
              LEADERSHIP CARDS — 4 IN ONE ROW
          ================================================== */}

          <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(
              (
                {
                  role,
                  department,
                  description,
                  image,
                  icon: Icon,
                  accent,
                  bg,
                  border,
                },
                index,
              ) => (
                <article
                  key={role}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    ${border}
                    bg-white
                    shadow-[0_8px_30px_rgba(15,23,42,0.055)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_25px_55px_rgba(15,23,42,0.12)]
                  `}
                >
                  {/* TOP — IMAGE HALF */}

                  <div className="relative h-64 overflow-hidden bg-slate-900 sm:h-60 lg:h-64">
                    {image ? (
                      <img
                        src={image}
                        alt={`${t(role)} - EKACEL`}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          object-center
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-105
                        "
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
                        <div
                          className={`
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-2xl
                            ${bg}
                            ${accent}
                          `}
                        >
                          <Icon size={34} strokeWidth={1.5} />
                        </div>
                      </div>
                    )}

                    {/* Image Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-slate-950/10" />

                    {/* EKACEL Badge */}

                    <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/55 px-3 py-1.5 backdrop-blur-md">
                      <span className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-white">{t("EKACEL ENERGY" )}</span>
                    </div>

                    {/* Number */}

                    <div className="absolute bottom-4 right-4">
                      <span className="font-heading text-3xl font-black text-white/25">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* BOTTOM — CONTENT HALF */}

                  <div className="relative flex min-h-[245px] flex-col p-5">
                    {/* Soft Glow */}

                    <div
                      aria-hidden="true"
                      className={`
                        pointer-events-none
                        absolute
                        -right-16
                        -top-16
                        h-36
                        w-36
                        rounded-full
                        ${bg}
                        opacity-50
                        blur-[55px]
                      `}
                    />

                    <div className="relative">
                      {/* Icon + Department */}

                      <div className="flex items-center justify-between gap-3">
                        <div
                          className={`
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            ${bg}
                            ${accent}
                            transition-all
                            duration-300
                            group-hover:scale-105
                          `}
                        >
                          <Icon size={20} strokeWidth={1.8} />
                        </div>

                        <span className="text-right text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">{t("Leadership" )}</span>
                      </div>

                      {/* Role */}

                      <h3 className="mt-5 font-heading text-lg font-extrabold leading-tight text-slate-950">
                        {t(role)}
                      </h3>

                      {/* Department */}

                      <p
                        className={`
                          mt-1.5
                          text-[11px]
                          font-bold
                          ${accent}
                        `}
                      >
                        {t(department)}
                      </p>

                      {/* Description */}

                      <p className="mt-3 text-xs leading-6 text-slate-500">
                        {t(description)}
                      </p>
                    </div>

                    {/* Bottom */}

                    <div className="relative mt-auto pt-5">
                      <div className="border-t border-slate-100 pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[8px] font-extrabold uppercase tracking-[0.15em] text-slate-400">{t("EKACEL" )}</p>

                            <p className="mt-0.5 text-[10px] font-bold text-slate-700">{t("Energy Solutions" )}</p>
                          </div>

                          <div
                            className={`
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-full
                              ${bg}
                              ${accent}
                              transition-all
                              duration-300
                              group-hover:translate-x-1
                              group-hover:scale-110
                            `}
                          >
                            <ArrowUpRight
                              size={14}
                              strokeWidth={2}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>

          {/* =================================================
              LEADERSHIP NOTE
          ================================================== */}

          <div className="relative mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_6px_25px_rgba(15,23,42,0.035)] sm:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-teal-700">
                  <ShieldCheck size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-950">{t("Built around responsible leadership" )}</h4>

                  <p className="mt-1 max-w-3xl text-xs leading-5 text-slate-500 sm:text-sm">{t("EKACEL brings together the capabilities required to develop dependable battery and energy solutions, strengthen operations and build lasting relationships across domestic and international markets." )}</p>
                </div>
              </div>

              <a
                href="/contact"
                className="
                  group
                  inline-flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-full
                  bg-yellow-400
                  px-5
                  py-2.5
                  text-xs
                  font-extrabold
                  text-black
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-yellow-300
                  hover:shadow-md
                "
              >
                Connect with us

                <ArrowRight
                  size={14}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP TEAM
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-slate-50 py-10 sm:py-12 lg:py-14">
        <div className="w-full px-[30px] sm:px-[30px]">
          {/* Section heading */}

          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-teal-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal-700">{t("Our Leadership" )}</span>

              <span className="h-[2px] w-8 rounded-full bg-teal-600" />
            </div>

            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">{t("Expertise across every part of the energy journey." )}</h2>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">{t("A leadership structure designed to connect business strategy, product innovation, manufacturing excellence and international market development." )}</p>
          </div>

          {/* Team cards */}

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(
              ({
                role,
                department,
                description,
                icon: Icon,
                accent,
                bg,
                border,
                hover,
              }) => (
                <div
                  key={role}
                  className={`group relative overflow-hidden rounded-3xl border ${border} bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(15,23,42,0.10)]`}
                >
                  {/* Top accent */}

                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

                  {/* Icon */}

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bg} ${accent} transition-all duration-300 group-hover:-translate-y-1 ${hover} group-hover:text-white`}
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  {/* Content */}

                  <div className="mt-5">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">{t("Leadership" )}</p>

                    <h3 className="mt-1.5 font-heading text-lg font-bold leading-tight text-slate-950">
                      {t(role)}
                    </h3>

                    <p className={`mt-1.5 text-xs font-bold ${accent}`}>
                      {t(department)}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {t(description)}
                    </p>
                  </div>

                  {/* Bottom */}

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{t("EKACEL Energy" )}</span>

                    <ArrowUpRight
                      size={16}
                      className={`${accent} opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100`}
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP PRINCIPLES
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        <div className="w-full px-[30px] sm:px-[30px]">
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-12 lg:items-center lg:gap-10">
            {/* Left */}

            <div className="lg:col-span-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-10 rounded-full bg-teal-600" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal-700">{t("How We Lead" )}</span>
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Building an energy business with a{" "}
                <span className="text-teal-700">{t("long-term perspective." )}</span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">{t("Leadership at EKACEL is focused not only on today's requirements, but also on the technologies, capabilities and relationships needed to compete in tomorrow's energy markets." )}</p>

              <a
                href="/about"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-emerald-700"
              >
                Learn more about EKACEL

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Right principles */}

            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
              {principles.map(
                ({
                  icon: Icon,
                  title,
                  text,
                  color,
                  bg,
                }) => (
                  <div
                    key={title}
                    className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${bg} ${color} transition-all duration-300 group-hover:scale-105`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-4 font-heading text-base font-bold text-slate-950">
                      {t(title)}
                    </h3>

                    <p className="mt-2.5 text-xs leading-6 text-slate-500">
                      {text}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GLOBAL OPERATIONS STRIP
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-slate-950 py-9 sm:py-11 lg:py-12">
        {/* Glow */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]"
        />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          <div className="relative grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-center lg:gap-10">
            {/* Text */}

            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <Globe2
                  size={22}
                  className="text-teal-400"
                  strokeWidth={1.8}
                />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal-700">{t("Global Growth" )}</span>
              </div>

              <h2 className="mt-3 max-w-2xl font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">{t("From India to international energy markets." )}</h2>

              <p className="mt-2.5 max-w-2xl text-sm leading-6 text-slate-400">{t("EKACEL is building capabilities and partnerships with a forward-looking approach to international battery, backup power, solar and energy-storage opportunities." )}</p>
            </div>

            {/* Metrics */}

            <div className="grid grid-cols-3 gap-3 lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                <Factory
                  size={18}
                  className="text-emerald-400"
                  strokeWidth={1.8}
                />

                <p className="mt-2.5 text-xs font-bold text-white">{t("Manufacturing" )}</p>

                <p className="mt-1 text-[10px] text-slate-500">{t("Quality focused" )}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                <Cpu
                  size={18}
                  className="text-blue-400"
                  strokeWidth={1.8}
                />

                <p className="mt-2.5 text-xs font-bold text-white">{t("Technology" )}</p>

                <p className="mt-1 text-[10px] text-slate-500">{t("Innovation driven" )}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                <Globe2
                  size={18}
                  className="text-violet-400"
                  strokeWidth={1.8}
                />

                <p className="mt-2.5 text-xs font-bold text-white">{t("Markets" )}</p>

                <p className="mt-1 text-[10px] text-slate-500">{t("Global outlook" )}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        <div className="w-full px-[30px] sm:px-[30px]">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-700 via-emerald-700 to-teal-800 px-6 py-8 shadow-[0_25px_70px_rgba(5,150,105,0.18)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            {/* Decorative elements */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-emerald-950/20 blur-3xl"
            />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-100">{t("Partner With EKACEL" )}</p>

                <h2 className="mt-2.5 font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">{t("Let's build the future of dependable energy together." )}</h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-emerald-50/85 sm:text-base">{t("Connect with EKACEL for product enquiries, distribution opportunities, international partnerships and energy solution requirements." )}</p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7D84A] px-6 py-3.5 text-sm font-extrabold text-black shadow-[0_10px_30px_rgba(247,216,74,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFE36A] hover:shadow-[0_15px_35px_rgba(247,216,74,0.28)]"
                >
                  Contact Our Team

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-emerald-800"
                >
                  Explore Products

                  <ArrowUpRight size={16} />
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
