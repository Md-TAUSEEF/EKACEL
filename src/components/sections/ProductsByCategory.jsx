import { useLanguage } from "../../context/LanguageContext.jsx";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   TRUST POINTS
========================================================= */

const trustPoints = [
  "Advanced Battery Technology",
  "Engineered for Long-Lasting Performance",
  "Reliable Service & Support",
  "Complete Power & Energy Solutions",
];

/* =========================================================
   PRODUCT CATEGORY TABS
========================================================= */

const categories = [
  "Inverter Battery",
  "Automotive Battery",
  "E-Rickshaw Battery",
  "Solar Battery",
  "Lithium Battery",
  "Industrial Battery",
  "EV Battery",
  "Energy Storage",
  "Telecom Battery",
  "Critical Power",
];

/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [
  /* -------------------------------------------------------
     INVERTER / HOME UPS
  ------------------------------------------------------- */

  {
    id: "IB-TUBULAR-200",
    name: "Tubular Inverter Battery",
    category: "Inverter Battery",
    capacity: "200 Ah",
    warranty: "60 Months",
    type: "Tubular",
    image: "/products/inverter/inverter.png",
    path: "/products/inverter/tubular",
    featured: true,
  },

  {
    id: "IB-TUBULAR-150",
    name: "Advanced Home Backup Battery",
    category: "Inverter Battery",
    capacity: "150 Ah",
    warranty: "60 Months",
    type: "Tubular",
    image: "/products/inverter/Advancedhome.png",
    path: "/products/inverter/home",
    featured: true,
  },

  {
    id: "IB-HIGH-PERFORMANCE",
    name: "High Performance Inverter Battery",
    category: "Inverter Battery",
    capacity: "150 Ah",
    warranty: "60 Months",
    type: "High Performance",
    image: "/products/inverter/highperformance.png",
    path: "/products/inverter/high-performance",
    featured: false,
  },

  /* -------------------------------------------------------
     AUTOMOTIVE
  ------------------------------------------------------- */

  {
    id: "AUTO-2W",
    name: "2-Wheeler Battery",
    category: "Automotive Battery",
    capacity: "Vehicle Specific",
    warranty: "Product Specific",
    type: "Automotive",
    image: "/products/automotive/2 wheeler battery.png",
    path: "/products/automotive/2-wheeler",
    featured: true,
  },

  {
    id: "AUTO-PASSENGER",
    name: "Passenger Vehicle Battery",
    category: "Automotive Battery",
    capacity: "Vehicle Specific",
    warranty: "Product Specific",
    type: "Automotive",
    image: "/products/automotive/commercial vehicle battery.png",
    path: "/products/automotive/passenger",
    featured: false,
  },

  {
    id: "AUTO-COMMERCIAL",
    name: "Commercial Vehicle Battery",
    category: "Automotive Battery",
    capacity: "Vehicle Specific",
    warranty: "Product Specific",
    type: "Heavy Duty",
    image: "/products/automotive/heavy duty vehicle.png",
    path: "/products/automotive/commercial",
    featured: false,
  },

  {
    id: "AUTO-HEAVY-DUTY",
    name: "Heavy Duty Battery",
    category: "Automotive Battery",
    capacity: "Vehicle Specific",
    warranty: "Product Specific",
    type: "Heavy Duty",
    image: "/products/automotive/Passanger vehicle battery.png",
    path: "/products/automotive/heavy-duty",
    featured: true,
  },

  /* -------------------------------------------------------
     E-RICKSHAW
  ------------------------------------------------------- */

  {
    id: "ER-120",
    name: "E-Rickshaw Battery",
    category: "E-Rickshaw Battery",
    capacity: "120 Ah",
    warranty: "48 Months",
    type: "E-Rickshaw",
    image: "/products/e-rickshaw/e-rickshaw 120 mah.png",
    path: "/products/e-rickshaw",
    featured: true,
  },

  {
    id: "ER-150",
    name: "Heavy Duty E-Rickshaw Battery",
    category: "E-Rickshaw Battery",
    capacity: "150 Ah",
    warranty: "Product Specific",
    type: "E-Rickshaw",
    image: "/products/e-rickshaw/e-rickshaw heavy duty.png",
    path: "/products/e-rickshaw/heavy-duty",
    featured: false,
  },

  /* -------------------------------------------------------
     SOLAR
  ------------------------------------------------------- */

  {
    id: "SOLAR-TUBULAR",
    name: "Solar Tubular Battery",
    category: "Solar Battery",
    capacity: "180 Ah",
    warranty: "60 Months",
    type: "Solar",
    image: "/products/solar/solar_tubler_battery.png",
    path: "/products/solar/tubular",
    featured: true,
  },

  {
    id: "SOLAR-DEEP-CYCLE",
    name: "Solar Deep Cycle Battery",
    category: "Solar Battery",
    capacity: "Product Specific",
    warranty: "Product Specific",
    type: "Deep Cycle",
    image: "/products/solar/solar_tubler_battery.png",
    path: "/products/solar/deep-cycle",
    featured: false,
  },

  /* -------------------------------------------------------
     LITHIUM
  ------------------------------------------------------- */

  {
    id: "LITHIUM-100",
    name: "Lithium Battery Pack",
    category: "Lithium Battery",
    capacity: "100 Ah",
    warranty: "5 Years",
    type: "Lithium",
    image: "/products/lithium/lithium 100ah.png",
    path: "/products/lithium",
    featured: true,
  },

  {
    id: "LITHIUM-ESS",
    name: "Lithium Energy Storage Battery",
    category: "Lithium Battery",
    capacity: "Scalable",
    warranty: "Product Specific",
    type: "Li-ion",
    image: "/products/lithium/storage.png",
    path: "/products/lithium/storage",
    featured: false,
  },

  /* -------------------------------------------------------
     INDUSTRIAL
  ------------------------------------------------------- */

  {
    id: "INDUSTRIAL-POWER",
    name: "Industrial Battery System",
    category: "Industrial Battery",
    capacity: "Application Specific",
    warranty: "Product Specific",
    type: "Industrial",
    image: "/products/industrial/Industries.png",
    path: "/products/industrial",
    featured: true,
  },

  {
    id: "INDUSTRIAL-HEAVY",
    name: "Heavy Duty Industrial Battery",
    category: "Industrial Battery",
    capacity: "Application Specific",
    warranty: "Product Specific",
    type: "Industrial",
    image: "/products/industrial/Industries.png",
    path: "/products/industrial/heavy-duty",
    featured: false,
  },

  /* -------------------------------------------------------
     EV
  ------------------------------------------------------- */

  {
    id: "EV-BATTERY",
    name: "Electric Mobility Battery",
    category: "EV Battery",
    capacity: "Application Specific",
    warranty: "Product Specific",
    type: "EV",
    image: "/products/ev/ev mobility battery.png",
    path: "/products/ev",
    featured: true,
  },

  {
    id: "EV-POWER",
    name: "Advanced EV Power Pack",
    category: "EV Battery",
    capacity: "Application Specific",
    warranty: "Product Specific",
    type: "EV",
    image: "/products/ev/advanced ev.png",
    path: "/products/ev/power-pack",
    featured: false,
  },

  /* -------------------------------------------------------
     ENERGY STORAGE
  ------------------------------------------------------- */

  {
    id: "ESS-HOME",
    name: "Home Energy Storage System",
    category: "Energy Storage",
    capacity: "Scalable",
    warranty: "Product Specific",
    type: "ESS",
    image: "/products/energy-storage/home.png",
    path: "/products/energy-storage/home",
    featured: true,
  },

  {
    id: "ESS-COMMERCIAL",
    name: "Commercial Energy Storage System",
    category: "Energy Storage",
    capacity: "Scalable",
    warranty: "Product Specific",
    type: "ESS",
    image: "/products/energy-storage/comeercial.png",
    path: "/products/energy-storage/commercial",
    featured: false,
  },

  /* -------------------------------------------------------
     TELECOM
  ------------------------------------------------------- */

  {
    id: "TELECOM-BACKUP",
    name: "Telecom Backup Battery",
    category: "Telecom Battery",
    capacity: "Application Specific",
    warranty: "Product Specific",
    type: "Telecom",
    image: "/products/telecom/telecome battery.png",
    path: "/products/telecom",
    featured: true,
  },

  /* -------------------------------------------------------
     CRITICAL POWER
  ------------------------------------------------------- */

  {
    id: "UPS-CRITICAL",
    name: "Critical Power Battery",
    category: "Critical Power",
    capacity: "Application Specific",
    warranty: "Product Specific",
    type: "Critical Power",
    image: "/products/critical-power/critical power.png",
    path: "/products/critical-power",
    featured: true,
  },
];

/* =========================================================
   CATEGORY → PRODUCTS
========================================================= */

const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

/* =========================================================
   CATEGORY ROUTES
========================================================= */

const categoryRoutes = {
  "Inverter Battery": "/products/inverter",
  "Automotive Battery": "/products/automotive",
  "E-Rickshaw Battery": "/products/e-rickshaw",
  "Solar Battery": "/products/solar",
  "Lithium Battery": "/products/lithium",
  "Industrial Battery": "/products/industrial",
  "EV Battery": "/products/ev",
  "Energy Storage": "/products/energy-storage",
  "Telecom Battery": "/products/telecom",
  "Critical Power": "/products/critical-power",
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function EnergyProductsSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("Inverter Battery");

  const visibleProducts = useMemo(
    () => getProductsByCategory(activeTab),
    [activeTab],
  );

  return (
    <section className="w-full bg-white py-10 font-sans sm:py-12 lg:py-14">

      {/* =====================================================
          MAIN WRAPPER
      ====================================================== */}

      <div className="w-full space-y-10 px-[30px] sm:px-[30px] lg:space-y-12">

        {/* =====================================================
            1. COMPANY / ABOUT SECTION
        ====================================================== */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7"
          >

            {/* EYEBROW */}

            <div className="mb-3 flex items-center gap-3">
              <span className="h-[3px] w-9 bg-teal-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-700">{t("Energy • Technology • Reliability" )}</span>
            </div>

            {/* HEADING */}

            <div className="mb-4">

              <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[46px] lg:leading-[1.08]">
                Powering India with
                <span className="text-teal-700">
                  {" "}
                  Smarter Energy Solutions
                </span>
              </h1>

              <div className="mt-3 h-[4px] w-20 bg-[#F7E135]" />

            </div>

            {/* SUBTITLE */}

            <p className="mb-5 max-w-2xl text-sm font-medium leading-relaxed text-slate-500 sm:text-base">{t("Reliable Power. Advanced Technology. Energy for a Better Future." )}</p>

            {/* DESCRIPTION */}

            <div className="mb-6 max-w-2xl space-y-3 text-sm leading-6.5 text-slate-600 sm:text-[15px]">

              <p>{t("We are building a new generation of battery and energy solutions designed to deliver dependable performance for homes, businesses, mobility and modern industries." )}</p>

              <p>{t("From advanced batteries and backup power systems to solar energy and energy storage solutions, our portfolio is designed around performance, reliability, efficiency and long-term value." )}</p>

              <p>{t("With a strong focus on engineering, manufacturing, research and development, and responsible energy innovation, we aim to serve the evolving needs of the Indian market while building capabilities for international markets." )}</p>

            </div>

            {/* TRUST CHECKLIST */}

            <div className="mb-6 grid grid-cols-1 gap-y-2.5 sm:grid-cols-2 sm:gap-x-6">

              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2.5"
                >

                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white shadow-sm">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>

                  <span className="text-sm font-semibold text-slate-700">
                    {t(point)}
                  </span>

                </div>
              ))}

            </div>

            {/* BUTTON */}

            <Link
              to="/about"
              className="
                group
                inline-flex
                items-center
                gap-3
                bg-[#F7E135]
                px-6
                py-3
                text-sm
                font-extrabold
                text-slate-950
                transition-all
                duration-300
                hover:bg-yellow-400
                hover:shadow-lg
              "
            >

              <span>{t("Discover Our Story" )}</span>

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

          </motion.div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5"
          >

            <div className="group relative overflow-hidden bg-slate-100 shadow-[0_18px_50px_rgba(15,23,42,0.11)]">

              <img
                src="/images/battrey.png"
                alt={t("Advanced Battery and Energy Solutions")}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

            </div>

          </motion.div>

        </div>

        {/* =====================================================
            2. POWER & SOLAR SOLUTIONS
        ====================================================== */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* POWER */}

          <Link
            to="/solutions"
            className="
              group
              relative
              h-[280px]
              w-full
              overflow-hidden
              bg-slate-950
              sm:h-[320px]
            "
          >

            <img
              src="/images/power-solutions-bg.jpg"
              alt={t("Power Solutions")}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/5" />

            <div className="absolute left-5 top-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-300 sm:left-7 sm:top-7">

              <Zap size={14} />{t("Power Solutions" )}</div>

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">

              <h3 className="text-2xl font-extrabold sm:text-3xl">{t("Reliable Power Systems" )}</h3>

              <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-slate-200 sm:text-base">{t("Reliable battery and backup power solutions for homes, businesses and critical applications." )}</p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold">

                Explore Solutions

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </div>

            </div>

          </Link>

          {/* SOLAR */}

          <Link
            to="/solutions/solar-storage"
            className="
              group
              relative
              h-[280px]
              w-full
              overflow-hidden
              bg-slate-950
              sm:h-[320px]
            "
          >

            <img
              src="/images/solar-solutions-bg.jpg"
              alt={t("Solar Energy Solutions")}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/5" />

            <div className="absolute left-5 top-5 text-xs font-bold uppercase tracking-[0.15em] text-lime-300 sm:left-7 sm:top-7">{t("Solar • Storage • Sustainability" )}</div>

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">

              <h3 className="text-2xl font-extrabold sm:text-3xl">{t("Solar & Energy Storage" )}</h3>

              <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-slate-200 sm:text-base">{t("Harness renewable energy with smart solar and energy storage technologies." )}</p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold">

                Explore Solar Solutions

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </div>

            </div>

          </Link>

        </div>

        {/* =====================================================
            3. EXPLORE PRODUCTS
        ====================================================== */}

        <div className="overflow-hidden border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.07)]">

          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* =================================================
                LEFT INTRO
            ================================================== */}

            <div className="relative flex flex-col justify-between overflow-hidden bg-[#D1D5DB] p-6 sm:p-7 lg:col-span-3">

              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/20 blur-2xl" />

              <div className="relative">

                <div className="mb-3 flex items-center gap-2">

                  <span className="h-[3px] w-8 bg-teal-700" />

                  <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-slate-600">{t("Our Portfolio" )}</span>

                </div>

                <h2 className="text-3xl font-extrabold leading-[1.05] text-slate-950 sm:text-4xl">
                  Explore
                  <br />{t("Products" )}</h2>

                <div className="mt-3 h-[3px] w-14 bg-white" />

                <p className="mt-5 text-sm font-medium leading-6 text-slate-700">{t("Discover advanced batteries, backup systems, solar storage and energy solutions engineered for diverse applications." )}</p>

              </div>

              <div className="relative mt-6">

                <div className="mb-4 grid grid-cols-2 gap-2">

                  <div className="border border-white/60 bg-white/30 p-3">

                    <p className="text-lg font-extrabold text-slate-950">
                      10+
                    </p>

                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-600">{t("Categories" )}</p>

                  </div>

                  <div className="border border-white/60 bg-white/30 p-3">

                    <p className="text-lg font-extrabold text-slate-950">
                      360°
                    </p>

                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-600">{t("Solutions" )}</p>

                  </div>

                </div>

                <Link
                  to="/products"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    bg-[#F7E135]
                    px-5
                    py-3
                    text-sm
                    font-extrabold
                    text-slate-950
                    transition-all
                    hover:bg-yellow-400
                    hover:shadow-lg
                  "
                >

                  Explore Products

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </Link>

              </div>

            </div>

            {/* =================================================
                RIGHT PRODUCTS
            ================================================== */}

            <div className="bg-[#FAFBFB] p-4 sm:p-6 lg:col-span-9">

              {/* HEADER */}

              <div className="mb-5 flex flex-col gap-2.5 sm:flex-row sm:items-end sm:justify-between">

                <div>

                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-teal-700">{t("Battery & Energy Portfolio" )}</p>

                  <h3 className="mt-1 text-xl font-extrabold text-slate-950 sm:text-2xl">{t("Find the right solution" )}</h3>

                </div>

                <Link
                  to={categoryRoutes[activeTab]}
                  className="
                    hidden
                    items-center
                    gap-1
                    text-xs
                    font-bold
                    text-teal-700
                    transition-colors
                    hover:text-teal-900
                    sm:inline-flex
                  "
                >

                  View Category

                  <ChevronRight size={14} />

                </Link>

              </div>

              {/* CATEGORY TABS */}

              <div className="mb-6 overflow-x-auto border-b border-slate-200 scrollbar-none">

                <div className="flex min-w-max gap-5">

                  {categories.map((tab) => {

                    const active = activeTab === tab;

                    return (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`
                          relative
                          whitespace-nowrap
                          pb-3
                          text-xs
                          font-bold
                          transition-colors
                          sm:text-sm
                          ${
                            active
                              ? "text-slate-950"
                              : "text-slate-500 hover:text-slate-800"
                          }
                        `}
                      >

                        {tab}

                        {active && (
                          <motion.span
                            layoutId="product-category-indicator"
                            className="absolute bottom-0 left-0 right-0 h-[3px] bg-teal-700"
                          />
                        )}

                      </button>
                    );

                  })}

                </div>

              </div>

              {/* =================================================
                  PRODUCT GRID
              ================================================== */}

              {visibleProducts.length > 0 ? (

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

                  {visibleProducts.map((item, index) => (

                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.04,
                      }}
                      className="
                        group
                        relative
                        flex
                        min-h-[255px]
                        flex-col
                        overflow-hidden
                        border
                        border-slate-200
                        bg-white
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-teal-200
                        hover:shadow-[0_15px_35px_rgba(15,23,42,0.10)]
                      "
                    >

                      {/* FEATURED BADGE */}

                      {item.featured && (
                        <div className="absolute left-2 top-2 z-10 bg-teal-700 px-2 py-1 text-[8px] font-extrabold uppercase tracking-wider text-white">{t("Featured" )}</div>
                      )}

                      {/* PRODUCT IMAGE */}

                      <Link
                        to="/products"
                        className="
                          flex
                          h-[140px]
                          items-center
                          justify-center
                          bg-gradient-to-b
                          from-slate-50
                          to-white
                          p-4
                        "
                        title={t("View All Products")}
                      >

                        <img
                          src={item.image}
                          alt={t(item.name)}
                          loading="lazy"
                          className="
                            max-h-full
                            max-w-full
                            object-contain
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                        />

                      </Link>

                      {/* CONTENT */}

                      <div className="flex flex-1 flex-col justify-between border-t border-slate-100 p-3">

                        <div>

                          <p className="mb-1 text-[8px] font-extrabold uppercase tracking-[0.12em] text-teal-700">
                            {item.type}
                          </p>

                          <h4 className="line-clamp-2 min-h-[34px] text-xs font-extrabold leading-4 text-slate-950 sm:text-sm">
                            {t(item.name)}
                          </h4>

                        </div>

                        <div className="mt-2.5 space-y-1.5">

                          {/* CAPACITY */}

                          <div className="flex items-center justify-between gap-2">

                            <span className="text-[9px] text-slate-400">{t("Capacity" )}</span>

                            <span className="text-[9px] font-bold text-slate-700">
                              {item.capacity}
                            </span>

                          </div>

                          {/* WARRANTY */}

                          <div className="flex items-center justify-between gap-2">

                            <span className="text-[9px] text-slate-400">{t("Warranty" )}</span>

                            <span className="text-[9px] font-bold text-teal-700">
                              {t(item.warranty)}
                            </span>

                          </div>

                          {/* VIEW ALL PRODUCTS */}

                          <Link
                            to="/products"
                            className="
                              mt-2.5
                              flex
                              items-center
                              justify-between
                              border-t
                              border-slate-100
                              pt-2
                              text-[9px]
                              font-extrabold
                              uppercase
                              tracking-wider
                              text-slate-600
                              transition-colors
                              hover:text-teal-700
                            "
                          >

                            View All Products

                            <ArrowUpRight
                              size={12}
                              className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                              "
                            />

                          </Link>

                        </div>

                      </div>

                    </motion.div>

                  ))}

                </div>

              ) : (

                <div className="flex min-h-[200px] items-center justify-center">

                  <p className="text-sm font-medium text-slate-500">{t("Products coming soon." )}</p>

                </div>

              )}

              {/* MOBILE CATEGORY BUTTON */}

              <div className="mt-5 flex justify-center sm:hidden">

                <Link
                  to={categoryRoutes[activeTab]}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-3
                    text-xs
                    font-extrabold
                    text-slate-900
                    shadow-sm
                    transition-colors
                    hover:border-teal-200
                    hover:text-teal-700
                  "
                >

                  View {activeTab}

                  <ArrowRight size={14} />

                </Link>

              </div>

              {/* PAGINATION STYLE */}

              <div className="mt-6 flex items-center justify-center gap-2">

                <span className="h-1.5 w-7 rounded-full bg-teal-700" />

                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />

                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

