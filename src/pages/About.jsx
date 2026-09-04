import { useLanguage } from "../context/LanguageContext.jsx";

import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/FAQItem";
import {
  Factory,
  FlaskConical,
  Globe2,
  Cpu,
  ShieldCheck,
  BatteryCharging,
  SunMedium,
  ArrowUpRight,
  Users,
} from "lucide-react";

/* =========================================================
   CORE PILLARS
========================================================= */

const pillars = [
  {
    icon: Factory,
    title: "Quality Manufacturing",
    text: "Quality-focused manufacturing and disciplined processes designed to deliver dependable battery and energy solutions for diverse applications.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    hover: "group-hover:bg-blue-600",
  },
  {
    icon: Cpu,
    title: "Smart Engineering",
    text: "Engineering-led solutions developed around real-world power requirements across residential, commercial, industrial and mobility applications.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    hover: "group-hover:bg-violet-600",
  },
  {
    icon: FlaskConical,
    title: "Technology & Innovation",
    text: "A forward-looking approach to battery technologies, energy storage and renewable integration for the evolving global energy landscape.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    hover: "group-hover:bg-amber-500",
  },
  {
    icon: Globe2,
    title: "Global Energy Vision",
    text: "Building EKACEL as a trusted energy brand from India with solutions designed to serve changing power needs across markets.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    hover: "group-hover:bg-emerald-600",
  },
];

/* =========================================================
   ENERGY SOLUTIONS
========================================================= */

const solutions = [
  {
    icon: BatteryCharging,
    title: "Battery Solutions",
    text: "Reliable battery solutions for backup power, mobility, commercial requirements and modern energy storage applications.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    hover: "group-hover:bg-emerald-600",
    glow: "bg-emerald-50",
  },
  {
    icon: SunMedium,
    title: "Solar Energy",
    text: "Solar inverters, panels and batteries designed to support efficient renewable energy systems and cleaner power generation.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    hover: "group-hover:bg-amber-500",
    glow: "bg-amber-50",
  },
  {
    icon: ShieldCheck,
    title: "Power Reliability",
    text: "Solutions focused on dependable performance, safety and consistent power availability across different applications.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    hover: "group-hover:bg-blue-600",
    glow: "bg-blue-50",
  },
];

/* =========================================================
   ABOUT QUICK LINKS
========================================================= */

const aboutCards = [
  {
    title: "Our Team",
    description: "Meet the people driving EKACEL forward.",
    href: "/about/leadership",
    image: "/images/battrey.png",
    icon: Users,
    accent: "text-emerald-400",
    overlay: "from-emerald-950/90",
  },
  {
    title: "Manufacturing",
    description: "Explore our manufacturing capabilities.",
    href: "/about/manufacturing",
    image: "/images/battery-manufacturing.jpg",
    icon: Factory,
    accent: "text-blue-400",
    overlay: "from-blue-950/90",
  },
  {
    title: "Technology & Innovation",
    description: "Discover the technology behind our solutions.",
    href: "/about/technology",
    image: "/images/Advanced.png",
    icon: Cpu,
    accent: "text-violet-400",
    overlay: "from-violet-950/90",
  },
  {
    title: "Quality & Testing",
    description: "Built around quality, safety and performance.",
    href: "/about/quality",
    image: "/images/quality-testing1.jpg",
    icon: FlaskConical,
    accent: "text-amber-400",
    overlay: "from-amber-950/90",
  },
];

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  const { t } = useLanguage();
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        eyebrow="About EKACEL"
        title={t("Powering today. Building a smarter energy tomorrow.")}
        description="EKACEL develops battery and energy solutions for homes, businesses, mobility and modern power requirements — combining dependable performance, practical engineering and a vision for a cleaner, more connected energy future."
        breadcrumb={[{ label: "About Us", href: "/about" }]}
        image="/images/hero-4.png"
      />

      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        {/* Decorative Background */}

        <div className="pointer-events-none absolute -right-40 top-16 h-80 w-80 rounded-full bg-green-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-emerald-50 blur-3xl" />

        <div className="relative w-full px-[30px] sm:px-[30px]">
          {/* =================================================
              STORY GRID
          ================================================== */}

          <div className="grid grid-cols-1 gap-9 lg:grid-cols-12 lg:gap-10 xl:gap-12">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">{t("Who We Are" )}</span>
              </div>

              <h2 className="max-w-3xl font-heading text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-navy sm:text-4xl lg:text-5xl">
                Energy solutions built around{" "}
                <span className="text-teal-700">{t("reliability, performance and progress." )}</span>
              </h2>

              <div className="mt-5 space-y-4">
                <p className="max-w-3xl text-base leading-7 text-slate-muted sm:text-lg">{t("EKACEL is an energy solutions brand focused on delivering dependable batteries and power products for the evolving needs of modern consumers, businesses and industries. Our portfolio is built around practical energy requirements, from everyday backup power to electric mobility and renewable energy applications." )}</p>

                <p className="max-w-3xl text-base leading-7 text-slate-muted sm:text-lg">{t("Our solutions bring together battery technologies, inverter systems and solar energy products within a growing energy ecosystem. We believe dependable power should combine performance, efficiency, safety and long-term value." )}</p>

                <p className="max-w-3xl text-base leading-7 text-slate-muted sm:text-lg">{t("As the global energy landscape continues to evolve, EKACEL is focused on smarter energy storage, renewable integration and reliable power technologies that can support a more connected and sustainable future." )}</p>
              </div>
            </div>

            {/* =================================================
                RIGHT — 4 PREMIUM IMAGE CARDS
            ================================================== */}

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                {aboutCards.map(
                  ({
                    title,
                    description,
                    href,
                    image,
                    icon: Icon,
                    accent,
                    overlay,
                  }) => (
                    <a
                      key={title}
                      href={href}
                      className="
                        group
                        relative
                        h-[190px]
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-900
                        shadow-[0_12px_35px_rgba(15,23,42,0.10)]
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:shadow-[0_20px_45px_rgba(15,23,42,0.18)]
                        sm:h-[205px]
                      "
                    >
                      {/* IMAGE */}

                      <img
                        src={image}
                        alt={t(title)}
                        loading="lazy"
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-110
                        "
                      />

                      {/* DARK GRADIENT */}

                      <div
                        className={`
                          absolute
                          inset-0
                          bg-gradient-to-t
                          ${overlay}
                          via-slate-950/35
                          to-slate-950/10
                          transition-opacity
                          duration-300
                          group-hover:opacity-95
                        `}
                      />

                      {/* TOP ICON */}

                      <div
                        className="
                          absolute
                          left-3.5
                          top-3.5
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/20
                          bg-black/20
                          text-white
                          backdrop-blur-md
                          transition-all
                          duration-300
                          group-hover:scale-105
                          group-hover:bg-white/15
                        "
                      >
                        <Icon size={17} strokeWidth={1.8} />
                      </div>

                      {/* ARROW */}

                      <div
                        className="
                          absolute
                          right-3.5
                          top-3.5
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
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:bg-white
                          group-hover:text-slate-950
                        "
                      >
                        <ArrowUpRight size={15} />
                      </div>

                      {/* CONTENT */}

                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <div className="mb-1.5 flex items-center gap-2">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${accent.replace(
                              "text-",
                              "bg-",
                            )}`}
                          />

                          <span
                            className={`
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[0.18em]
                              ${accent}
                            `}
                          >{t("EKACEL" )}</span>
                        </div>

                        <h3 className="text-[15px] font-bold leading-tight text-white sm:text-base">
                          {title}
                        </h3>

                        <p className="mt-1.5 line-clamp-2 text-[10px] leading-4 text-white/65 sm:text-[11px]">
                          {description}
                        </p>

                        <div
                          className="
                            mt-3
                            flex
                            items-center
                            gap-1.5
                            text-[10px]
                            font-bold
                            text-white/70
                            transition-all
                            duration-300
                            group-hover:text-white
                          "
                        >
                          Explore
                          <ArrowUpRight
                            size={12}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </div>
                      </div>

                      {/* BOTTOM ACCENT */}

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
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* =================================================
              ENERGY SOLUTIONS
          ================================================== */}

          <div className="relative mt-12 border-t border-slate-200 pt-10 sm:mt-14 sm:pt-12">
            <div className="mb-7 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">{t("Our Focus" )}</span>

              <h2 className="mt-2.5 font-heading text-2xl font-bold text-navy sm:text-3xl">{t("Designed for today's energy needs" )}</h2>

              <p className="mt-2.5 max-w-xl text-sm leading-6 text-slate-muted sm:text-base">{t("A growing portfolio of energy solutions designed to support reliable power, renewable integration and electric mobility." )}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {solutions.map(
                ({
                  icon: Icon,
                  title,
                  text,
                  color,
                  bg,
                  hover,
                  glow,
                }) => (
                  <div
                    key={title}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
                  >
                    {/* Glow */}

                    <div
                      className={`absolute right-0 top-0 h-24 w-24 rounded-full ${glow} opacity-70 blur-2xl transition-all duration-300`}
                    />

                    <div className="relative">
                      {/* Icon */}

                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg} ${color} ${hover} transition-all duration-300 group-hover:text-white`}
                      >
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-muted">
                        {text}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* =================================================
              CORE PILLARS
          ================================================== */}

          <div className="relative mt-12 border-t border-slate-200 pt-10 sm:mt-14 sm:pt-12">
            <div className="mb-7 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">{t("What Drives Us" )}</span>

              <h2 className="mt-2.5 font-heading text-2xl font-bold text-navy sm:text-3xl">{t("Four pillars behind EKACEL" )}</h2>

              <p className="mt-2.5 max-w-xl text-sm leading-6 text-slate-muted sm:text-base">{t("The principles that shape how we approach products, technology, quality and the future of energy." )}</p>
            </div>

            <div className="grid grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map(
                (
                  {
                    icon: Icon,
                    title,
                    text,
                    color,
                    bg,
                    hover,
                  },
                  index,
                ) => (
                  <div key={title} className="group relative">
                    <div className="mb-4 flex items-center justify-between">
                      {/* Colored Icon */}

                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg} ${color} shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:text-white group-hover:shadow-lg ${hover}`}
                      >
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <span className="text-xs font-bold tracking-wider text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-heading text-base font-bold text-navy">
                      {title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-6 text-slate-muted">
                      {text}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* =================================================
              PREMIUM CTA / CATALOG
          ================================================== */}

          <div className="relative mt-12 overflow-hidden rounded-3xl bg-teal-700 px-6 py-8 shadow-[0_22px_55px_rgba(21,128,61,0.18)] sm:px-8 sm:py-10 lg:mt-14">
            {/* Decorative Glow */}

            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-52 w-52 rounded-full bg-emerald-950/10 blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* CTA CONTENT */}

              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-100">{t("The EKACEL Vision" )}</p>

                <h2 className="mt-2.5 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">{t("Reliable energy for a more connected and sustainable future." )}</h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-green-50/90 sm:text-base">{t("Discover EKACEL's growing range of batteries, inverters, solar and energy solutions built for modern power requirements." )}</p>
              </div>

              {/* BUTTONS */}

              <div className="flex shrink-0 flex-wrap items-center gap-3">
                {/* DOWNLOAD CATALOG */}

                <a
                  href="/files/ekacel-catalog.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-green-800 hover:shadow-lg"
                >{t("Download Catalog" )}</a>

                {/* EXPLORE PRODUCTS */}

                <a
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-green-800 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:shadow-xl"
                >
                  Explore Products

                  <ArrowUpRight size={17} />
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
