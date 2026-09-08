
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calculator,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import BatteryChargingFullRoundedIcon from "@mui/icons-material/BatteryChargingFullRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import SolarPowerRoundedIcon from "@mui/icons-material/SolarPowerRounded";
import FactoryRoundedIcon from "@mui/icons-material/FactoryRounded";
import ElectricCarRoundedIcon from "@mui/icons-material/ElectricCarRounded";
import CellTowerRoundedIcon from "@mui/icons-material/CellTowerRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";

/* =========================================================
   PRODUCT CATEGORIES DATA
========================================================= */

export const productCategories = [
  {
    slug: "automotive",
    name: "Automotive Batteries",
    description:
      "Starter batteries engineered for two-wheelers, passenger cars, commercial fleets and heavy-duty vehicles.",
    href: "/products/automotive",
    icon: DirectionsCarRoundedIcon,
  },
  {
    slug: "inverter",
    name: "Inverter Batteries",
    description:
      "Deep-cycle power backup batteries built for long, dependable backup during grid outages.",
    href: "/products/inverter",
    icon: BatteryChargingFullRoundedIcon,
  },
  {
    slug: "lithium",
    name: "Lithium Batteries",
    description:
      "Lightweight, high-density lithium solutions for modern mobility and stationary energy storage.",
    href: "/products/lithium",
    icon: BoltRoundedIcon,
  },
  {
    slug: "solar-storage",
    name: "Solar Storage",
    description:
      "Energy storage solutions designed to pair with solar systems for dependable clean power.",
    href: "/products/solar",
    icon: SolarPowerRoundedIcon,
  },
  {
    slug: "industrial",
    name: "Industrial Batteries",
    description:
      "Heavy-duty battery solutions designed for industrial operations, backup systems and demanding applications.",
    href: "/products/industrial",
    icon: FactoryRoundedIcon,
  },
  {
    slug: "ev",
    name: "EV Batteries",
    description:
      "Traction battery solutions engineered for electric two, three and four-wheelers.",
    href: "/products/ev",
    icon: ElectricCarRoundedIcon,
  },
  {
    slug: "telecom",
    name: "Telecom Batteries",
    description:
      "Reliable backup power solutions for telecom towers, exchanges and network infrastructure.",
    href: "/products/telecom",
    icon: CellTowerRoundedIcon,
  },
  {
    slug: "critical-power",
    name: "Critical Power",
    description:
      "Mission-critical battery backup solutions for hospitals, data centres and essential infrastructure.",
    href: "/products/critical-power",
    icon: HealthAndSafetyRoundedIcon,
  },
];

/* =========================================================
   HERO SLIDES DATA
========================================================= */

const heroSlides = [
  {
    id: 1,
    image: "/images/hero-1.png",
  },
  {
    id: 2,
    image: "/images/hero-2.png",
  },
  {
    id: 3,
    image: "/images/hero-3.png",
  },
  {
    id: 4,
    image: "/images/hero-4.png",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Hero() {
  const { t } = useLanguage();

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* =======================================================
     AUTO SLIDE
  ======================================================= */

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide(
        (prev) => (prev + 1) % heroSlides.length
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  /* =======================================================
     NEXT SLIDE
  ======================================================= */

  const nextSlide = () => {
    setActiveSlide(
      (prev) => (prev + 1) % heroSlides.length
    );
  };

  /* =======================================================
     PREVIOUS SLIDE
  ======================================================= */

  const previousSlide = () => {
    setActiveSlide(
      (prev) =>
        (prev - 1 + heroSlides.length) %
        heroSlides.length
    );
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =====================================================
          FLOATING LOAD CALCULATOR CTA
      ===================================================== */}

      <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2 shadow-xl">
        <Link
          to="/load-calculator"
          aria-label={t("Load Calculator")}
          className="group flex items-center gap-2 rounded-l-md bg-emerald-600 px-3 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:pl-4"
          style={{
            writingMode: "vertical-rl",
          }}
        >
          <Calculator
            size={18}
            className="shrink-0 rotate-90 transition-transform duration-300 group-hover:scale-105"
          />

          <span>{t("Load Calculator")}</span>
        </Link>
      </div>

      {/* =====================================================
          HERO BANNER CAROUSEL
      ===================================================== */}

      <div className="relative w-full overflow-hidden bg-white">
        <div className="relative w-full bg-white">
          {heroSlides.map((slide, index) => (
            <motion.img
              key={slide.id}
              src={slide.image}
              alt={t("Banner Image")}
              initial={false}
              animate={{
                opacity: activeSlide === index ? 1 : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className={
                index === 0
                  ? "relative block w-full object-cover object-center"
                  : "absolute inset-0 block h-full w-full object-cover object-center"
              }
              style={{
                zIndex:
                  activeSlide === index ? 2 : 1,
                pointerEvents:
                  activeSlide === index
                    ? "auto"
                    : "none",
              }}
            />
          ))}
        </div>

        {/* ===================================================
            NAVIGATION DOTS
        =================================================== */}

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "h-2 w-8 bg-emerald-500"
                  : "h-2 w-2 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* ===================================================
            PREVIOUS BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={previousSlide}
          aria-label={t("Previous slide")}
          className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-emerald-600"
        >
          <ChevronLeft size={22} />
        </button>

        {/* ===================================================
            NEXT BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label={t("Next slide")}
          className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-emerald-600"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* =====================================================
          BATTERY SOLUTIONS CATEGORY CTA
      ===================================================== */}

      <div className="relative z-30 bg-white">
        <div className="border-y border-slate-100 bg-white">
          <div className="grid grid-cols-2 gap-px border-l border-slate-100 sm:grid-cols-4 lg:grid-cols-8">
            {productCategories.map((product) => {
              const Icon = product.icon;

              return (
                <Link
                  key={product.slug}
                  to={product.href}
                  className="group flex flex-col items-center justify-center border-r border-slate-100 bg-white p-3 text-center transition-all duration-300 hover:bg-emerald-50/40 hover:shadow-md"
                >
                  {/* ICON */}

                  <div className="mb-2 flex h-20 w-full items-center justify-center p-2 text-emerald-700 transition-colors duration-300 group-hover:text-emerald-600">
                    <Icon
                      sx={{
                        fontSize: 60,
                        color: "currentColor",
                      }}
                    />
                  </div>

                  {/* CATEGORY NAME */}

                  <span className="text-[11px] font-semibold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">
                    {t(product.name)}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
