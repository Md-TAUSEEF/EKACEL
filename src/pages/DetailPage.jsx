import { useLanguage } from "../context/LanguageContext.jsx";
import React from "react";
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  CircleCheck,
  Factory,
  FlaskConical,
  Gauge,
  Home,
  Leaf,
  Microscope,
  Network,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Sun,
  Thermometer,
  Zap,
  Settings,
TrendingUp,
Search,
Layers,

} from "lucide-react";
import { Link } from "react-router-dom";

import { products } from "../data/products";
import {
  globalProductMap,
  industryProductMap,
  solutionProductMap,
} from "../data/relatedProducts";

import PageHero from "../components/sections/PageHero";

/* =========================================================
   SOLUTION CONTENT
========================================================= */

const solutionContent = {
  residential: {
    label: "Residential Energy Solutions",

    introTitle: "Reliable Power for Modern Homes",

    intro:
      "Advanced battery solutions designed to provide dependable backup power, efficient energy storage, and uninterrupted electricity for modern residential applications.",

    highlights: [
      "Reliable backup power",
      "Long service life",
      "Low maintenance",
      "Safe and efficient operation",
    ],

    imageLabel: "Residential Energy",

    imageTitle: "Powering Homes with Confidence",

    benefits: [
      {
        icon: Home,
        title: "Home Backup",
        text: "Reliable backup power for essential household appliances and systems.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
      {
        icon: ShieldCheck,
        title: "Enhanced Safety",
        text: "Engineered with advanced safety features for dependable residential use.",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        border: "border-emerald-100",
      },
      {
        icon: Zap,
        title: "High Efficiency",
        text: "Efficient energy storage and delivery for everyday power requirements.",
        bg: "bg-yellow-50",
        color: "text-yellow-600",
        border: "border-yellow-100",
      },
      {
        icon: BatteryCharging,
        title: "Long Life",
        text: "Durable battery technology designed for consistent long-term performance.",
        bg: "bg-purple-50",
        color: "text-purple-600",
        border: "border-purple-100",
      },
    ],

    applications: [
      "Residential Backup Systems",
      "Home Inverter Systems",
      "Solar Home Storage",
      "Emergency Power Systems",
    ],

    process: [
      {
        icon: Gauge,
        title: "Assess",
        text: "Understand the home's energy consumption and backup requirements.",
      },
      {
        icon: BatteryCharging,
        title: "Store",
        text: "Store electrical energy efficiently for future use.",
      },
      {
        icon: Zap,
        title: "Deliver",
        text: "Provide stable power whenever the primary supply is unavailable.",
      },
      {
        icon: ShieldCheck,
        title: "Protect",
        text: "Maintain safe and reliable operation through intelligent protection.",
      },
    ],

    principles: [
      "Reliable residential power",
      "Energy efficiency",
      "Safe operation",
      "Long-term performance",
    ],
  },

  commercial: {
    label: "Commercial Energy Solutions",

    introTitle: "Reliable Energy for Businesses",

    intro:
      "Scalable battery systems designed to support commercial operations with dependable backup power, efficient energy management, and improved operational continuity.",

    highlights: [
      "Business continuity",
      "Scalable energy storage",
      "Reduced downtime",
      "Efficient power management",
    ],

    imageLabel: "Commercial Energy",

    imageTitle: "Keeping Businesses Powered",

    benefits: [
      {
        icon: Factory,
        title: "Business Continuity",
        text: "Maintain critical business operations during power interruptions.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
      {
        icon: Zap,
        title: "Power Efficiency",
        text: "Optimize stored energy for efficient commercial power requirements.",
        bg: "bg-yellow-50",
        color: "text-yellow-600",
        border: "border-yellow-100",
      },
      {
        icon: ShieldCheck,
        title: "Reliable Protection",
        text: "Designed to deliver dependable performance in demanding environments.",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        border: "border-emerald-100",
      },
      {
        icon: Network,
        title: "Scalable Systems",
        text: "Flexible solutions that can support different commercial energy requirements.",
        bg: "bg-purple-50",
        color: "text-purple-600",
        border: "border-purple-100",
      },
    ],

    applications: [
      "Commercial Backup Systems",
      "Office Power Backup",
      "Retail Energy Systems",
      "Critical Business Infrastructure",
    ],

    process: [
      {
        icon: Gauge,
        title: "Analyze",
        text: "Evaluate commercial energy consumption and operational requirements.",
      },
      {
        icon: PackageCheck,
        title: "Configure",
        text: "Select and configure the right energy storage solution.",
      },
      {
        icon: BatteryCharging,
        title: "Deploy",
        text: "Implement the battery system for reliable commercial operation.",
      },
      {
        icon: ShieldCheck,
        title: "Monitor",
        text: "Maintain dependable performance through continuous monitoring.",
      },
    ],

    principles: [
      "Operational continuity",
      "Energy efficiency",
      "Scalability",
      "Reliable performance",
    ],
  },

  industrial: {
    label: "Industrial Energy Solutions",

    introTitle: "Powering Demanding Industrial Operations",

    intro:
      "High-performance battery solutions engineered for industrial applications where reliability, durability, and consistent power delivery are essential.",

    highlights: [
      "Heavy-duty performance",
      "High reliability",
      "Industrial durability",
      "Consistent power delivery",
    ],

    imageLabel: "Industrial Energy",

    imageTitle: "Engineered for Industrial Performance",

    benefits: [
      {
        icon: Factory,
        title: "Industrial Strength",
        text: "Designed to perform reliably across demanding industrial applications.",
        bg: "bg-orange-50",
        color: "text-orange-600",
        border: "border-orange-100",
      },
      {
        icon: ShieldCheck,
        title: "High Reliability",
        text: "Dependable battery performance for mission-critical operations.",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        border: "border-emerald-100",
      },
      {
        icon: Thermometer,
        title: "Stable Performance",
        text: "Engineered for consistent operation across challenging conditions.",
        bg: "bg-red-50",
        color: "text-red-600",
        border: "border-red-100",
      },
      {
        icon: Gauge,
        title: "High Output",
        text: "Efficient energy delivery for demanding industrial requirements.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
    ],

    applications: [
      "Industrial Backup Power",
      "Manufacturing Facilities",
      "Heavy Equipment",
      "Critical Infrastructure",
    ],

    process: [
      {
        icon: Microscope,
        title: "Evaluate",
        text: "Analyze the operational and energy requirements of the facility.",
      },
      {
        icon: FlaskConical,
        title: "Engineer",
        text: "Develop the appropriate battery configuration for the application.",
      },
      {
        icon: Factory,
        title: "Deploy",
        text: "Install and integrate the system into the industrial environment.",
      },
      {
        icon: ShieldCheck,
        title: "Maintain",
        text: "Ensure reliable long-term operation and performance.",
      },
    ],

    principles: [
      "Industrial reliability",
      "Durability",
      "Performance consistency",
      "Operational safety",
    ],
  },

  "solar-storage": {
    label: "Solar Energy Storage",

    introTitle: "Store Solar Energy for When You Need It",

    intro:
      "Advanced battery storage solutions designed to capture solar energy and make clean power available whenever it is required.",

    highlights: [
      "Solar energy storage",
      "Day-to-night energy availability",
      "Efficient energy utilization",
      "Reduced grid dependency",
    ],

    imageLabel: "Solar Storage",

    imageTitle: "Turning Solar Energy into Reliable Power",

    benefits: [
      {
        icon: Sun,
        title: "Solar Integration",
        text: "Efficiently integrate battery storage with solar energy systems.",
        bg: "bg-yellow-50",
        color: "text-yellow-600",
        border: "border-yellow-100",
      },
      {
        icon: BatteryCharging,
        title: "Energy Storage",
        text: "Store generated solar energy for use when sunlight is unavailable.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
      {
        icon: Leaf,
        title: "Clean Energy",
        text: "Support greater utilization of renewable energy for everyday power needs.",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        border: "border-emerald-100",
      },
      {
        icon: Zap,
        title: "Energy Independence",
        text: "Improve energy availability and reduce dependence on conventional power sources.",
        bg: "bg-purple-50",
        color: "text-purple-600",
        border: "border-purple-100",
      },
    ],

    applications: [
      "Residential Solar Storage",
      "Commercial Solar Storage",
      "Solar Backup Systems",
      "Renewable Energy Projects",
    ],

    process: [
      {
        icon: Sun,
        title: "Generate",
        text: "Solar panels generate clean electrical energy during daylight hours.",
      },
      {
        icon: BatteryCharging,
        title: "Store",
        text: "Excess solar energy is stored inside the battery system.",
      },
      {
        icon: Zap,
        title: "Use",
        text: "Stored energy is supplied when solar generation is unavailable.",
      },
      {
        icon: Leaf,
        title: "Optimize",
        text: "Maximize renewable energy utilization and overall system efficiency.",
      },
    ],

    principles: [
      "Renewable energy utilization",
      "Efficient storage",
      "Energy independence",
      "Sustainable power",
    ],
  },

  ess: {
    label: "Energy Storage Systems",

    introTitle: "Intelligent Energy Storage for a Changing Grid",

    intro:
      "Flexible energy storage solutions designed to improve power availability, energy efficiency, and resilience across modern energy infrastructure.",

    highlights: [
      "Scalable energy storage",
      "Grid resilience",
      "Peak demand support",
      "Intelligent energy management",
    ],

    imageLabel: "Energy Storage",

    imageTitle: "Smarter Energy. Greater Resilience.",

    benefits: [
      {
        icon: BatteryCharging,
        title: "Energy Storage",
        text: "Store electrical energy and make it available when demand requires it.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
      {
        icon: Network,
        title: "Grid Support",
        text: "Support modern electrical infrastructure with flexible energy storage.",
        bg: "bg-purple-50",
        color: "text-purple-600",
        border: "border-purple-100",
      },
      {
        icon: Gauge,
        title: "Peak Management",
        text: "Help manage peak energy requirements and improve energy efficiency.",
        bg: "bg-yellow-50",
        color: "text-yellow-600",
        border: "border-yellow-100",
      },
      {
        icon: ShieldCheck,
        title: "Resilience",
        text: "Improve power resilience for critical and high-demand applications.",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        border: "border-emerald-100",
      },
    ],

    applications: [
      "Grid Energy Storage",
      "Commercial Energy Storage",
      "Renewable Energy Storage",
      "Backup Energy Systems",
    ],

    process: [
      {
        icon: Zap,
        title: "Generate",
        text: "Energy is generated from available conventional or renewable sources.",
      },
      {
        icon: BatteryCharging,
        title: "Store",
        text: "Excess energy is stored for later use.",
      },
      {
        icon: Gauge,
        title: "Manage",
        text: "Stored energy is intelligently managed according to demand.",
      },
      {
        icon: Network,
        title: "Distribute",
        text: "Energy is delivered where and when it is needed.",
      },
    ],

    principles: [
      "Energy flexibility",
      "Grid resilience",
      "Efficient storage",
      "Intelligent management",
    ],
  },

  hybrid: {
    label: "Hybrid Energy Solutions",

    introTitle: "Combining Multiple Energy Sources",

    intro:
      "Hybrid energy solutions combine renewable generation, battery storage, and conventional power sources to create flexible and reliable energy systems.",

    highlights: [
      "Multiple energy sources",
      "Flexible operation",
      "Improved efficiency",
      "Reliable backup",
    ],

    imageLabel: "Hybrid Energy",

    imageTitle: "Flexible Power from Multiple Sources",

    benefits: [
      {
        icon: Network,
        title: "Integrated Energy",
        text: "Combine multiple energy sources into a coordinated power system.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
      {
        icon: Sun,
        title: "Renewable Integration",
        text: "Efficiently integrate renewable energy generation into the power system.",
        bg: "bg-yellow-50",
        color: "text-yellow-600",
        border: "border-yellow-100",
      },
      {
        icon: BatteryCharging,
        title: "Battery Storage",
        text: "Store surplus energy and make it available when required.",
        bg: "bg-purple-50",
        color: "text-purple-600",
        border: "border-purple-100",
      },
      {
        icon: ShieldCheck,
        title: "Reliable Backup",
        text: "Maintain energy availability through intelligent source management.",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        border: "border-emerald-100",
      },
    ],

    applications: [
      "Hybrid Solar Systems",
      "Remote Power Systems",
      "Commercial Hybrid Energy",
      "Backup and Renewable Systems",
    ],

    process: [
      {
        icon: Network,
        title: "Integrate",
        text: "Connect different energy sources into a unified system.",
      },
      {
        icon: Sun,
        title: "Generate",
        text: "Use available renewable energy whenever possible.",
      },
      {
        icon: BatteryCharging,
        title: "Store",
        text: "Store surplus energy for future consumption.",
      },
      {
        icon: Zap,
        title: "Optimize",
        text: "Intelligently balance energy sources according to demand.",
      },
    ],

    principles: [
      "Energy flexibility",
      "Renewable integration",
      "Efficient storage",
      "Reliable operation",
    ],
  },

  "clean-energy": {
    label: "Clean Energy Solutions",

    introTitle: "Building a Cleaner Energy Future",

    intro:
      "Battery and energy solutions designed to support renewable energy adoption, efficient power usage, and a more sustainable energy ecosystem.",

    highlights: [
      "Clean energy integration",
      "Efficient energy storage",
      "Reduced emissions",
      "Sustainable power systems",
    ],

    imageLabel: "Clean Energy",

    imageTitle: "Powering a More Sustainable Future",

    benefits: [
      {
        icon: Leaf,
        title: "Sustainable Energy",
        text: "Support the transition toward cleaner and more sustainable energy systems.",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        border: "border-emerald-100",
      },
      {
        icon: Sun,
        title: "Renewable Integration",
        text: "Enable greater utilization of solar and other renewable energy sources.",
        bg: "bg-yellow-50",
        color: "text-yellow-600",
        border: "border-yellow-100",
      },
      {
        icon: BatteryCharging,
        title: "Smart Storage",
        text: "Store clean energy efficiently and make it available when needed.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
      {
        icon: Sparkles,
        title: "Future Ready",
        text: "Support modern energy infrastructure with cleaner and smarter solutions.",
        bg: "bg-purple-50",
        color: "text-purple-600",
        border: "border-purple-100",
      },
    ],

    applications: [
      "Renewable Energy Projects",
      "Solar Energy Storage",
      "Clean Backup Power",
      "Sustainable Energy Infrastructure",
    ],

    process: [
      {
        icon: Sun,
        title: "Generate",
        text: "Produce electricity through renewable energy sources.",
      },
      {
        icon: BatteryCharging,
        title: "Store",
        text: "Store clean energy for later consumption.",
      },
      {
        icon: Zap,
        title: "Utilize",
        text: "Use stored renewable energy when it is needed.",
      },
      {
        icon: Leaf,
        title: "Sustain",
        text: "Improve overall energy efficiency and sustainability.",
      },
    ],

    principles: [
      "Clean energy",
      "Renewable integration",
      "Energy efficiency",
      "Sustainability",
    ],
  },
};
/* =========================================================
   DEFAULT CONTENT
========================================================= */

const defaultContent = {
  label: "Advanced Energy Solutions",

  introTitle: "Reliable Energy. Built for the Future.",

  intro:
    "Advanced battery and energy solutions engineered to deliver dependable performance, efficient energy storage, and reliable power across a wide range of applications.",

  highlights: [
    "Reliable performance",
    "Advanced technology",
    "Long service life",
    "Safe and efficient operation",
  ],

  imageLabel: "Energy Solutions",

  imageTitle: "Powering Progress with Reliable Energy",

  benefits: [
    {
      icon: BatteryCharging,
      title: "Reliable Power",
      text:
        "Dependable energy solutions designed to provide consistent power when you need it most.",
      bg: "bg-blue-50",
      color: "text-blue-600",
      border: "border-blue-100",
    },
    {
      icon: ShieldCheck,
      title: "Built for Safety",
      text:
        "Engineered with advanced protection and safety features for dependable operation.",
      bg: "bg-emerald-50",
      color: "text-emerald-600",
      border: "border-emerald-100",
    },
    {
      icon: Gauge,
      title: "High Efficiency",
      text:
        "Optimized energy performance helps improve efficiency across different applications.",
      bg: "bg-yellow-50",
      color: "text-yellow-600",
      border: "border-yellow-100",
    },
    {
      icon: Sparkles,
      title: "Advanced Technology",
      text:
        "Modern battery technology designed for evolving energy requirements.",
      bg: "bg-purple-50",
      color: "text-purple-600",
      border: "border-purple-100",
    },
  ],

  applications: [
    "Backup Power Systems",
    "Energy Storage Systems",
    "Renewable Energy Applications",
    "Industrial Power Solutions",
  ],

  process: [
    {
      icon: Microscope,
      title: "Understand",
      text:
        "Identify the application's energy requirements and operating conditions.",
    },
    {
      icon: FlaskConical,
      title: "Engineer",
      text:
        "Select and configure the right battery technology for the application.",
    },
    {
      icon: BatteryCharging,
      title: "Deploy",
      text:
        "Implement the energy solution for reliable and efficient operation.",
    },
    {
      icon: ShieldCheck,
      title: "Support",
      text:
        "Maintain dependable performance through proper monitoring and support.",
    },
  ],

  principles: [
    "Reliability",
    "Safety",
    "Efficiency",
    "Innovation",
  ],
};


/* =========================================================
   DETAIL PAGE
========================================================= */

export default function DetailPage({
  eyebrow,
  title,
  description,
  breadcrumb = [],
  image,
  slug,
  contentData,
  highlights,
  pageType,
}) {
  const { t } = useLanguage();
  /* -------------------------------------------------------
     CONTENT
  ------------------------------------------------------- */

  const rawContent =
    contentData?.[slug] ||
    solutionContent[slug] ||
    defaultContent;


  /* -------------------------------------------------------
     SAFE CONTENT NORMALIZATION
     
     GlobalDetail / other pages may provide applications
     as objects:
     
     {
       title: "...",
       text: "..."
     }
     
     While solutionContent may provide strings.
     
     This converts both formats into a safe structure.
  ------------------------------------------------------- */

  const content = {
    ...defaultContent,
    ...rawContent,

    highlights:
      Array.isArray(rawContent?.highlights)
        ? rawContent.highlights
        : defaultContent.highlights,

    benefits:
      Array.isArray(rawContent?.benefits)
        ? rawContent.benefits
        : defaultContent.benefits,

    applications:
      Array.isArray(rawContent?.applications)
        ? rawContent.applications
        : defaultContent.applications,

    process:
      Array.isArray(rawContent?.process)
        ? rawContent.process
        : defaultContent.process,

    principles:
      Array.isArray(rawContent?.principles)
        ? rawContent.principles
        : defaultContent.principles,
  };


  /* -------------------------------------------------------
     PAGE HIGHLIGHTS
  ------------------------------------------------------- */

  const pageHighlights =
    Array.isArray(highlights) && highlights.length > 0
      ? highlights
      : content.highlights;


  /* -------------------------------------------------------
     RELATED PRODUCT SLUGS
  ------------------------------------------------------- */

  const productSlugs =
    pageType === "industry"
      ? industryProductMap[slug] || []
      : pageType === "global"
        ? globalProductMap[slug] || []
        : solutionProductMap[slug] || [];


  /* -------------------------------------------------------
     RELATED PRODUCTS
  ------------------------------------------------------- */

  const relatedProducts = productSlugs
    .map((productSlug) =>
      products.find(
        (product) => product.slug === productSlug
      )
    )
    .filter(Boolean);


  /* =======================================================
     SAFE HELPERS
  ======================================================= */

  const getApplicationTitle = (application) => {
    if (typeof application === "string") {
      return application;
    }

    if (
      application &&
      typeof application === "object"
    ) {
      return application.title || "";
    }

    return "";
  };


  const getApplicationText = (application) => {
    if (
      application &&
      typeof application === "object"
    ) {
      return application.text || "";
    }

    return "";
  };


  const getHighlightText = (highlight) => {
    if (typeof highlight === "string") {
      return highlight;
    }

    if (
      highlight &&
      typeof highlight === "object"
    ) {
      return (
        highlight.title ||
        highlight.text ||
        ""
      );
    }

    return "";
  };


  const getPrincipleText = (principle) => {
    if (typeof principle === "string") {
      return principle;
    }

    if (
      principle &&
      typeof principle === "object"
    ) {
      return (
        principle.title ||
        principle.text ||
        ""
      );
    }

    return "";
  };


  /* =======================================================
     ICON FALLBACK
     
     If contentData accidentally contains undefined icon,
     React will no longer crash.
  ======================================================= */

  const getSafeIcon = (icon) => {
    return icon || CheckCircle2;
  };


  return (
    <>
      {/* ===================================================
          HERO
      =================================================== */}

      <PageHero
        eyebrow={eyebrow}
        title={t(title)}
        description={t(description)}
        breadcrumb={breadcrumb}
        image={image}
      />


      {/* ===================================================
          INTRODUCTION
      =================================================== */}

      <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-yellow-100/40 blur-3xl" />

        <div className="relative w-full px-[30px] sm:px-[30px]">

          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

            {/* LEFT */}

            <div className="max-w-3xl">

              {content.label && (
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  {t(content.label)}
                </div>
              )}

              <h2 className="text-2xl font-black leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
                {t(content.introTitle)}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {t(content.intro)}
              </p>

              {/* HIGHLIGHTS */}

              {pageHighlights?.length > 0 && (
                <div className="mt-6 grid gap-2 sm:grid-cols-2">

                  {pageHighlights.map((highlight, index) => {
                    const highlightText =
                      getHighlightText(highlight);

                    return (
                      <div
                        key={`${highlightText || "highlight"}-${index}`}
                        className="flex items-center gap-2.5"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                          <CheckCircle2 className="h-4 w-4" />
                        </span>

                        <span className="text-sm font-semibold text-slate-700">
                          {highlightText}
                        </span>
                      </div>
                    );
                  })}

                </div>
              )}

            </div>


            {/* RIGHT IMAGE */}

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">

              {image ? (
                <img
                  src={image}
                  alt={t(content.imageTitle || title)}
                  className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[350px]"
                />
              ) : (
                <div className="flex h-[260px] items-center justify-center bg-slate-100 sm:h-[320px] lg:h-[350px]">
                  <BatteryCharging className="h-16 w-16 text-teal-500" />
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                {content.imageLabel && (
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
                    {t(content.imageLabel)}
                  </p>
                )}

                <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  {t(content.imageTitle)}
                </h3>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ===================================================
          KEY BENEFITS
      =================================================== */}

      <section className="w-full bg-slate-50 py-10 sm:py-12 lg:py-14">
  <div className="w-full px-[30px] sm:px-[30px]">

    {/* HEADER */}
    <div className="mb-7 max-w-3xl">
      <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-600">{t("Why It Matters" )}</span>

      <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">{t("Key Benefits" )}</h2>

      <p className="mt-2 text-sm leading-6 text-slate-600">{t("Designed to deliver dependable performance, efficiency, safety, and long-term value across demanding energy applications." )}</p>
    </div>

    {/* BENEFITS */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.isArray(content?.benefits) &&
        content.benefits.map((benefit, index) => {

          const isString = typeof benefit === "string";

          const title = isString
            ? benefit
            : benefit?.title || `Benefit ${index + 1}`;

          const text = isString
            ? ""
            : benefit?.text || benefit?.description || "";

          /*
           * Different icon + color for every benefit
           */
          const benefitStyles = [
            {
              icon: ShieldCheck,
              iconColor: "text-teal-600",
              iconBg: "bg-teal-50",
              border: "border-teal-100",
              hoverBorder: "hover:border-teal-300",
            },
            {
              icon: Zap,
              iconColor: "text-amber-500",
              iconBg: "bg-amber-50",
              border: "border-amber-100",
              hoverBorder: "hover:border-amber-300",
            },
            {
              icon: Settings,
              iconColor: "text-blue-600",
              iconBg: "bg-blue-50",
              border: "border-blue-100",
              hoverBorder: "hover:border-blue-300",
            },
            {
              icon: TrendingUp,
              iconColor: "text-emerald-600",
              iconBg: "bg-emerald-50",
              border: "border-emerald-100",
              hoverBorder: "hover:border-emerald-300",
            },
          ];

          const fallbackStyle =
            benefitStyles[index % benefitStyles.length];

          const Icon = isString
            ? fallbackStyle.icon
            : getSafeIcon(benefit?.icon);

          const iconColor =
            !isString && benefit?.color
              ? benefit.color
              : fallbackStyle.iconColor;

          const iconBg =
            !isString && benefit?.iconBg
              ? benefit.iconBg
              : fallbackStyle.iconBg;

          const border =
            !isString && benefit?.border
              ? benefit.border
              : fallbackStyle.border;

          const hoverBorder = fallbackStyle.hoverBorder;

          return (
            <div
              key={`${title}-${index}`}
              className={`
                group
                rounded-2xl
                border
                ${border}
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                ${hoverBorder}
                hover:shadow-xl
              `}
            >

              {/* ICON */}
              <div
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  ${iconBg}
                  shadow-sm
                  transition-all
                  duration-300
                  group-hover:scale-105
                `}
              >
                <Icon
                  className={`h-6 w-6 ${iconColor}`}
                  strokeWidth={2}
                />
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-base font-extrabold leading-6 text-slate-900">
                {t(title)}
              </h3>

              {/* DESCRIPTION */}
              {text && (
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              )}

              {/* STRING BENEFIT */}
              {isString && (
                <div className="mt-3 flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${iconColor.replace(
                      "text-",
                      "bg-"
                    )}`}
                  />

                  <span className="text-xs font-semibold text-slate-500">{t("EKACEL Energy Solutions" )}</span>
                </div>
              )}

            </div>
          );
        })}
    </div>
  </div>
</section>
            {/* ===================================================
          APPLICATIONS
      =================================================== */}

      <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
        <div className="w-full px-[30px] sm:px-[30px]">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            {/* LEFT CONTENT */}

            <div className="max-w-xl">

              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-600">{t("Applications" )}</span>

              <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{t("Built for Real-World Energy Applications" )}</h2>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{t("Our energy solutions are designed to support a wide range of applications with reliable performance, efficient energy utilization, and dependable power delivery." )}</p>

              <div className="mt-6 rounded-2xl bg-teal-700 p-5 shadow-xl sm:p-6">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-slate-950">
                    <Zap className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-100">{t("Energy That Works" )}</p>

                    <h3 className="mt-1 text-lg font-black text-white sm:text-xl">{t("Reliable solutions for every requirement." )}</h3>

                    <p className="mt-2 text-sm leading-6 text-teal-50">{t("From residential backup to industrial energy infrastructure, our solutions are engineered to deliver dependable performance." )}</p>
                  </div>

                </div>

                <Link
                  to="/contact"
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-yellow-400
                    px-5
                    py-2.5
                    text-sm
                    font-extrabold
                    text-slate-950
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-yellow-300
                  "
                >
                  Talk to Our Experts
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

            </div>


            {/* RIGHT APPLICATIONS */}

            <div className="grid gap-3 sm:grid-cols-2">

              {content.applications.map((application, index) => {

                const applicationTitle =
                  getApplicationTitle(application);

                const applicationText =
                  getApplicationText(application);

                return (
                  <div
                    key={`${applicationTitle || "application"}-${index}`}
                    className="
                      group
                      flex
                      items-start
                      gap-4
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-4
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-teal-200
                      hover:shadow-xl
                      sm:p-5
                    "
                  >

                    {/* NUMBER */}

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-teal-50
                        text-sm
                        font-black
                        text-teal-700
                        transition-all
                        duration-300
                        group-hover:bg-teal-600
                        group-hover:text-white
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>


                    {/* TEXT */}

                    <div className="min-w-0 flex-1">

                      <p
                        className="
                          text-sm
                          font-extrabold
                          text-slate-800
                          transition-colors
                          duration-300
                          group-hover:text-teal-800
                          sm:text-base
                        "
                      >
                        {applicationTitle}
                      </p>

                      {applicationText && (
                        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                          {applicationText}
                        </p>
                      )}

                    </div>


                    {/* ARROW */}

                    <div
                      className="
                        mt-0.5
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-slate-100
                        text-slate-500
                        transition-all
                        duration-300
                        group-hover:bg-yellow-400
                        group-hover:text-slate-950
                      "
                    >
                      <ArrowRight className="h-4 w-4" />
                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </section>


      {/* ===================================================
          RECOMMENDED PRODUCTS
      =================================================== */}

      {relatedProducts.length > 0 && (
        <section className="w-full bg-slate-50 py-10 sm:py-12 lg:py-14">
          <div className="w-full px-[30px] sm:px-[30px]">

            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div className="max-w-2xl">

                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-600">{t("Recommended Products" )}</span>

                <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">{t("Products for This Application" )}</h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">{t("Explore products designed to meet the performance, reliability, and energy requirements of this application." )}</p>

              </div>

              <Link
                to="/products"
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-teal-200
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-bold
                  text-teal-700
                  transition-all
                  duration-300
                  hover:border-teal-600
                  hover:bg-teal-600
                  hover:text-white
                "
              >
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>


            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {relatedProducts.map((product, index) => (
                <Link
                  key={`${product.slug || "product"}-${index}`}
                  to={`/products/${product.slug}`}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-teal-200
                    hover:shadow-xl
                  "
                >

                  {/* PRODUCT IMAGE */}

                  <div className="relative h-44 overflow-hidden bg-slate-100">

                    {product.image ? (
                      <img
                        src={product.image}
                        alt={t(product.name || "Product")}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <BatteryCharging className="h-12 w-12 text-teal-500" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                  </div>


                  {/* PRODUCT CONTENT */}

                  <div className="p-4">

                    <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-teal-600">{t("Energy Solution" )}</p>

                    <h3 className="mt-1 text-base font-black text-slate-900 transition-colors duration-300 group-hover:text-teal-700">
                      {product.name || "Energy Product"}
                    </h3>

                    {product.description && (
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                        {t(product.description)}
                      </p>
                    )}

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-700">
                      Explore Product
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                  </div>

                </Link>
              ))}

            </div>

          </div>
        </section>
      )}


      {/* ===================================================
          HOW IT WORKS
      =================================================== */}

     <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
  <div className="w-full px-[30px] sm:px-[30px]">

    {/* HEADER */}
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-600">{t("Our Approach" )}</span>

      <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">{t("How It Works" )}</h2>

      <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{t("A structured approach helps us deliver energy solutions that match real-world requirements." )}</p>
    </div>

    {/* PROCESS */}
    <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">

      {/* CONNECTING LINE */}
      <div className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-slate-200 lg:block" />

      {Array.isArray(content?.process) &&
        content.process.map((step, index) => {

          /*
           * Different icon + color for every process step
           */
          const processStyles = [
            {
              icon: Search,
              iconColor: "text-blue-600",
              iconBg: "bg-blue-50",
              border: "border-blue-100",
              hoverBorder: "hover:border-blue-300",
            },
            {
              icon: Settings,
              iconColor: "text-teal-600",
              iconBg: "bg-teal-50",
              border: "border-teal-100",
              hoverBorder: "hover:border-teal-300",
            },
            {
              icon: Layers,
              iconColor: "text-amber-500",
              iconBg: "bg-amber-50",
              border: "border-amber-100",
              hoverBorder: "hover:border-amber-300",
            },
            {
              icon: TrendingUp,
              iconColor: "text-emerald-600",
              iconBg: "bg-emerald-50",
              border: "border-emerald-100",
              hoverBorder: "hover:border-emerald-300",
            },
          ];

          const fallbackStyle =
            processStyles[index % processStyles.length];

          const Icon =
            step?.icon || fallbackStyle.icon;

          const iconColor =
            step?.color || fallbackStyle.iconColor;

          const iconBg =
            step?.iconBg || fallbackStyle.iconBg;

          const border =
            step?.border || fallbackStyle.border;

          return (
            <div
              key={`${step?.title || "step"}-${index}`}
              className={`
                relative
                rounded-2xl
                border
                ${border}
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                ${fallbackStyle.hoverBorder}
                hover:shadow-xl
              `}
            >

              {/* ICON + NUMBER */}
              <div className="relative z-10 flex items-center justify-between">

                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    ${iconBg}
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:scale-105
                  `}
                >
                  <Icon
                    className={`h-6 w-6 ${iconColor}`}
                    strokeWidth={2}
                  />
                </div>

                <span className="text-3xl font-black text-slate-100">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              {/* TITLE */}
              <h3 className="mt-5 text-base font-black text-slate-900">
                {step?.title || ""}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step?.text || step?.description || ""}
              </p>

            </div>
          );
        })}

    </div>
  </div>
</section>


      {/* ===================================================
          ENERGY PRINCIPLES
      =================================================== */}

      <section className="w-full bg-slate-950 py-10 sm:py-12 lg:py-14">
        <div className="w-full px-[30px] sm:px-[30px]">

          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT */}

            <div>

              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-yellow-400">{t("Our Principles" )}</span>

              <h2 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">{t("Energy Solutions Built Around What Matters" )}</h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">{t("Every solution is developed around reliability, safety, efficiency, and long-term performance." )}</p>

            </div>


            {/* RIGHT */}

            <div className="grid gap-3 sm:grid-cols-2">

              {content.principles.map((principle, index) => {

                const principleText =
                  getPrincipleText(principle);

                return (
                  <div
                    key={`${principleText || "principle"}-${index}`}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      p-4
                      transition-all
                      duration-300
                      hover:border-teal-400/40
                      hover:bg-white/10
                    "
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/15 text-teal-400">
                      <CircleCheck className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-bold text-slate-200">
                      {principleText}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </section>


      {/* ===================================================
          FINAL CTA
      =================================================== */}

      <section className="w-full bg-white py-10 sm:py-12">
        <div className="w-full px-[30px] sm:px-[30px]">

          <div className="relative overflow-hidden rounded-3xl bg-teal-700 px-5 py-8 shadow-2xl sm:px-8 sm:py-10 lg:px-10">

            {/* DECORATION */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal-500/30 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />


            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* TEXT */}

              <div className="max-w-2xl">

                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-yellow-300">{t("Let's Build Better Energy" )}</span>

                <h2 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">{t("Ready to Find the Right Energy Solution?" )}</h2>

                <p className="mt-3 text-sm leading-6 text-teal-50 sm:text-base">{t("Talk to our team about your requirements and discover a solution designed around your application." )}</p>

              </div>


              {/* CTA */}

              <div className="shrink-0">

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-yellow-400
                    px-6
                    py-3
                    text-sm
                    font-black
                    text-slate-950
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-yellow-300
                  "
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

    </>
  );
}