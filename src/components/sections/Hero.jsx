import { useLanguage } from "../../context/LanguageContext.jsx";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Factory,
  ShieldCheck,
  Users,
  Box,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   HERO SLIDES DATA
========================================================= */

const heroSlides = [
  {
    id: 1,
    image: "/images/hero-1.png",
    position: "center",

    eyebrow: "POWERING A BETTER TOMORROW",

    title: "POWER THAT",
    highlight: "PERFORMS.",

    description:
      "Reliable battery and energy solutions engineered for homes, businesses and industries.",

    text: "text-slate-950",
    muted: "text-slate-700",
    accent: "text-green-700",

    overlay:
      "bg-gradient-to-r from-white/60 via-white/20 via-[45%] to-transparent",
  },

  {
    id: 2,
    image: "/images/hero-2.png",
    position: "center",

    eyebrow: "SMART ENERGY FOR A BETTER FUTURE",

    title: "SMART ENERGY",
    highlight: "FOR A BETTER FUTURE.",

    description:
      "Advanced battery and energy storage solutions designed for dependable and efficient power.",

    text: "text-white",
    muted: "text-white/85",
    accent: "text-[#F7D84A]",

    overlay:
      "bg-gradient-to-r from-black/48 via-black/18 via-[45%] to-transparent",
  },

  {
    id: 3,
    image: "/images/hero-3.png",
    position: "center",

    eyebrow: "POWER TODAY. SUSTAIN TOMORROW.",

    title: "POWER TODAY.",
    highlight: "SUSTAIN TOMORROW.",

    description:
      "Smarter and more sustainable energy solutions built for a cleaner and more efficient future.",

    text: "text-slate-950",
    muted: "text-slate-700",
    accent: "text-green-700",

    overlay:
      "bg-gradient-to-r from-white/60 via-white/20 via-[45%] to-transparent",
  },

  {
    id: 4,
    image: "/images/hero-4.png",
    position: "center",

    eyebrow: "GLOBAL ENERGY. STRONGER TOGETHER.",

    title: "GLOBAL ENERGY",
    highlight: "STRONGER TOGETHER.",

    description:
      "Dependable battery and energy solutions supporting homes, businesses and industries.",

    text: "text-white",
    muted: "text-white/85",
    accent: "text-[#F7D84A]",

    overlay:
      "bg-gradient-to-r from-black/46 via-black/18 via-[45%] to-transparent",
  },
];

/* =========================================================
   TRUST ITEMS
========================================================= */

const trustItems = [
  {
    icon: Users,
    value: "RELIABLE",
    label: "ENGINEERED FOR",
    subLabel: "PERFORMANCE",
  },
  {
    icon: Globe2,
    value: "SMART",
    label: "ADVANCED",
    subLabel: "ENERGY SOLUTIONS",
  },
  {
    icon: Factory,
    value: "QUALITY",
    label: "QUALITY-FOCUSED",
    subLabel: "MANUFACTURING",
  },
  {
    icon: ShieldCheck,
    value: "SAFE",
    label: "BUILT AROUND",
    subLabel: "SAFETY",
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    title: (
      <>
        Home & <br />
        Hi-Capacity UPS
      </>
    ),
    image: "/hero/category-ups.png",
  },
  {
    title: (
      <>
        Inverter
        <br />
        Batteries
      </>
    ),
    image: "/hero/category-inverter-battery.png",
  },
  {
    title: (
      <>
        Solar
        <br />
        Inverters
      </>
    ),
    image: "/hero/category-solar-inverter.png",
  },
  {
    title: (
      <>
        Solar
        <br />
        Panels
      </>
    ),
    image: "/hero/category-solar-panel.png",
  },
  {
    title: (
      <>
        Solar
        <br />
        Batteries
      </>
    ),
    image: "/hero/category-solar-battery.png",
  },
  {
    title: (
      <>
        E-Rickshaw
        <br />
        Batteries
      </>
    ),
    image: "/hero/category-erickshaw.png",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Hero() {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = heroSlides[activeSlide];

  /* Auto-slide Timer */
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide.id}
            src={currentSlide.image}
            alt={t("Energy Solutions")}
            initial={{ opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeInOut" },
              scale: { duration: 6, ease: "easeOut" },
            }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`overlay-${currentSlide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`pointer-events-none absolute inset-0 z-[1] ${currentSlide.overlay}`}
        />
      </AnimatePresence>

      {/* Bottom Fade Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Main Container Wrapper */}
      <div className="relative z-10 w-full min-h-[680px] px-[30px] sm:min-h-[700px]">
        
        {/* Top Header Section */}
        <div className="flex items-center justify-between gap-6 pt-7 lg:pt-9">
          {/* Logo */}
          <div className="shrink-0">
            <img
              src="/images/logo1.png"
              alt={t("Energy Solutions")}
              className="h-auto w-[165px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.18)] sm:w-[195px] lg:w-[225px]"
            />
          </div>

          {/* Desktop Trust Bar */}
          <div className="hidden items-center lg:flex">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={t(item.value)}
                  className={`flex items-center gap-3 px-4 xl:px-6 ${
                    index !== trustItems.length - 1
                      ? "border-r border-white/30"
                      : ""
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F7D84A]/80 bg-black/10 text-[#F7D84A] backdrop-blur-sm">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div className="leading-none">
                    <p className={`text-[9px] font-semibold uppercase tracking-[0.12em] ${currentSlide.muted}`}>
                      {t(item.label)}
                    </p>
                    <p className={`mt-1 text-[15px] font-extrabold uppercase tracking-wide ${t(currentSlide.text)}`}>
                      {t(item.value)}
                    </p>
                    <p className={`mt-1 text-[8px] font-semibold uppercase tracking-[0.12em] ${currentSlide.muted}`}>
                      {t(item.subLabel)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Trust Bar */}
        <div className="mt-5 flex w-full overflow-hidden rounded-lg border border-white/20 bg-black/10 backdrop-blur-[3px] lg:hidden">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={t(item.value)}
                className={`flex flex-1 items-center justify-center gap-1.5 px-2 py-2 ${
                  index !== trustItems.length - 1 ? "border-r border-white/20" : ""
                }`}
              >
                <Icon size={14} className="shrink-0 text-[#F7D84A]" strokeWidth={2} />
                <span className={`text-[8px] font-bold uppercase ${t(currentSlide.text)}`}>
                  {t(item.value)}
                </span>
              </div>
            );
          })}
        </div>

        {/* Hero Content Section */}
        <div className="flex min-h-[570px] items-center pb-20 pt-12 sm:pt-16 lg:min-h-[570px] lg:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hero-content"
            >
              {/* Eyebrow Label */}
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl font-black text-[#F7D84A] backdrop-blur-sm">
                  ⚡
                </span>
                <span className={`text-[11px] font-bold uppercase tracking-[0.16em] sm:text-sm ${t(currentSlide.text)}`}>
                  {t(currentSlide.eyebrow)}
                </span>
              </div>

              {/* Main Heading (Screenshot Font Style) */}
              <h1 className={`hero-heading ${t(currentSlide.text)}`}>
                {t(currentSlide.title)}{" "}
                <span className={currentSlide.accent}>
                  {t(currentSlide.highlight)}
                </span>
              </h1>

              {/* Subheading / Description */}
              <p className={`mt-6 max-w-[620px] text-[16px] font-normal leading-[1.6] sm:text-[18px] ${currentSlide.muted}`}>
                {t(currentSlide.description)}
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="group inline-flex h-13 items-center gap-3 rounded-lg bg-green-700 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_25px_rgba(21,128,61,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800"
                >
                  <Box size={18} />
                  <span>{t("Explore Products" )}</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  className={`group inline-flex h-13 items-center gap-3 rounded-lg border border-white/50 bg-black/10 px-7 py-3.5 text-sm font-bold uppercase tracking-wide backdrop-blur-[3px] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F7D84A] hover:bg-black/20 hover:text-[#F7D84A] ${t(currentSlide.text)}`}
                >
                  <Globe2 size={18} />
                  <span>{t("Request a Quote" )}</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-24 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-500 ${
                activeSlide === index
                  ? "h-2.5 w-9 bg-[#F7D84A]"
                  : "h-2.5 w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Slider Navigation Arrows */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label={t("Previous slide")}
          className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#F7D84A] hover:bg-[#F7D84A] hover:text-black sm:left-5 sm:h-11 sm:w-11"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label={t("Next slide")}
          className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#F7D84A] hover:bg-[#F7D84A] hover:text-black sm:right-5 sm:h-11 sm:w-11"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Category Strip */}
      <div className="relative z-30 mx-auto -mt-10 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1500px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.14)] sm:flex-row">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group flex min-h-[115px] flex-1 items-center justify-center gap-4 px-5 py-5 transition-all duration-300 hover:bg-green-50 ${
                index !== categories.length - 1
                  ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center">
                <img
                  src={category.image}
                  alt=""
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-center text-sm font-bold leading-5 text-slate-900">
                {t(category.title)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}