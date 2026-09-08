import { useLanguage } from "../../context/LanguageContext.jsx";

import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  BatteryCharging,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    question: "What products and energy solutions does EKACEL offer?",
    answer:
      "EKACEL provides battery and energy solutions for residential, commercial, industrial and mobility applications. Our portfolio includes battery systems, inverter solutions, solar energy products and energy storage solutions designed around dependable power requirements.",
  },
  {
    question: "Which applications are EKACEL batteries suitable for?",
    answer:
      "EKACEL battery solutions are developed for a wide range of applications including homes, offices, commercial establishments, industrial environments, backup power systems, mobility and other modern energy requirements.",
  },
  {
    question: "How do I choose the right battery for my requirement?",
    answer:
      "The right battery depends on your application, load requirement, desired backup time, usage pattern and installation environment. EKACEL can help identify a suitable solution based on your specific power and energy requirements.",
  },
  {
    question: "Does EKACEL provide energy storage solutions?",
    answer:
      "Yes. EKACEL is focused on modern energy storage and power solutions that support reliable electricity availability, efficient energy management and renewable energy integration across different applications.",
  },
  {
    question: "How does EKACEL focus on battery safety and reliability?",
    answer:
      "Safety, durability and dependable performance are key considerations in our product approach. EKACEL solutions are developed with attention to quality, engineering, performance and reliable operation for their intended applications.",
  },
  {
    question: "Can EKACEL solutions be used for commercial and industrial applications?",
    answer:
      "Yes. EKACEL solutions are designed to support a broad range of requirements, from residential backup and commercial power systems to industrial applications where dependable and consistent energy performance is important.",
  },
  {
    question: "Does EKACEL support solar and renewable energy applications?",
    answer:
      "Yes. EKACEL's growing energy portfolio is designed to support renewable energy applications through solar panels, solar inverters, battery systems and energy storage solutions.",
  },
  {
    question: "Does EKACEL work with dealers, distributors and business partners?",
    answer:
      "EKACEL aims to build long-term relationships with dealers, distributors, system integrators and business partners by providing dependable products, responsive support and practical energy solutions.",
  },
  {
    question: "Does EKACEL serve international markets?",
    answer:
      "EKACEL is building an international energy brand from India with a long-term vision to serve customers and business partners across global markets through reliable battery, solar, power and energy storage solutions.",
  },
  {
    question: "How can I contact EKACEL for product or business enquiries?",
    answer:
      "You can contact the EKACEL team for product information, technical requirements, business enquiries, distribution opportunities and solution recommendations. Share your requirement with us and our team can guide you toward an appropriate energy solution.",
  },
];

/* =========================================================
   FAQ ITEM
========================================================= */

function FAQItem({ faq, id, isOpen, onClick }) {
  const { t } = useLanguage();
  return (
    <div
      className={`
        group
        overflow-hidden
        rounded-2xl
        border
        bg-white
        transition-all
        duration-300
        ${
          isOpen
            ? "border-teal-200 shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
            : "border-slate-200 shadow-[0_5px_20px_rgba(15,23,42,0.035)] hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-[0_14px_35px_rgba(15,23,42,0.07)]"
        }
      `}
    >
      {/* QUESTION */}

      <button
        type="button"
        onClick={onClick}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-4
          px-4
          py-4
          text-left
          sm:px-5
          sm:py-4
        "
        aria-expanded={isOpen}
      >
        <div className="flex min-w-0 items-center gap-3">
          {/* Number */}

          <span
            className={`
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-xl
              text-[10px]
              font-extrabold
              tracking-wider
              transition-all
              duration-300
              ${
                isOpen
                  ? "bg-teal-600 text-white shadow-[0_6px_18px_rgba(13,148,136,0.22)]"
                  : "bg-slate-100 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-700"
              }
            `}
          >
            {String(id).padStart(2, "0")}
          </span>

          {/* Question */}

          <span
            className={`
              text-sm
              font-bold
              leading-5
              transition-colors
              duration-300
              sm:text-[15px]
              ${
                isOpen
                  ? "text-slate-950"
                  : "text-slate-800 group-hover:text-teal-800"
              }
            `}
          >
            {t(faq.question)}
          </span>
        </div>

        {/* Arrow */}

        <span
          className={`
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            transition-all
            duration-300
            ${
              isOpen
                ? "rotate-180 bg-teal-600 text-white shadow-[0_6px_18px_rgba(13,148,136,0.2)]"
                : "bg-slate-100 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-700"
            }
          `}
        >
          <ChevronDown size={15} strokeWidth={2.5} />
        </span>
      </button>

      {/* ANSWER */}

      <div
        className={`
          grid
          transition-all
          duration-300
          ease-in-out
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 px-4 pb-4 pt-3.5 sm:px-5 sm:pb-5">
            <div className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />

              <p className="max-w-3xl text-xs leading-5.5 text-slate-500 sm:text-sm sm:leading-6">
                {t(faq.answer)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FAQ PAGE / SECTION
========================================================= */

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-10
        sm:py-12
        lg:py-14
      "
    >
      {/* =====================================================
          PREMIUM BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-44
          top-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-teal-100/40
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-44
          bottom-0
          h-[380px]
          w-[380px]
          rounded-full
          bg-teal-100/30
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-40
          w-40
          -translate-x-1/2
          rounded-full
          bg-blue-50/40
          blur-[90px]
        "
      />

      {/* =====================================================
          MAIN WRAPPER
      ====================================================== */}

      <div className="relative z-10 w-full px-[30px] sm:px-[30px]">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-teal-500" />

            <span className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
              <HelpCircle
                size={14}
                className="text-teal-600"
                strokeWidth={2}
              />{t("Frequently Asked Questions" )}</span>

            <span className="h-px w-8 bg-teal-500" />
          </div>

          {/* Heading */}

          <h2
            className="
              font-heading
              text-3xl
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-slate-950
              sm:text-4xl
              lg:text-[46px]
            "
          >
            Everything You Need to Know

            <span className="block text-teal-700">{t("About EKACEL" )}</span>
          </h2>

          {/* Premium Accent */}

          <div className="mx-auto mt-3 flex items-center justify-center gap-1.5">
            <span className="h-1 w-2 rounded-full bg-teal-400" />
            <span className="h-1 w-8 rounded-full bg-teal-600" />
            <span className="h-1 w-2 rounded-full bg-teal-400" />
          </div>

          {/* Description */}

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6.5 text-slate-500 sm:text-base sm:leading-7">{t("Find answers to common questions about EKACEL batteries, energy storage, solar solutions, applications, reliability, partnerships and our growing international energy vision." )}</p>
        </div>

        {/* =================================================
            TRUST STRIP
        ================================================== */}

        <div
          className="
            mx-auto
            mt-6
            grid
            max-w-4xl
            grid-cols-3
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white/90
            shadow-[0_12px_40px_rgba(15,23,42,0.06)]
            backdrop-blur-sm
          "
        >
          {/* Battery */}

          <div
            className="
              flex
              flex-col
              items-center
              gap-1.5
              border-r
              border-slate-100
              px-2
              py-3
              text-center
            "
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50">
              <BatteryCharging
                size={18}
                className="text-emerald-600"
                strokeWidth={2}
              />
            </div>

            <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-500 sm:text-[10px]">{t("Battery Solutions" )}</span>
          </div>

          {/* Reliability */}

          <div
            className="
              flex
              flex-col
              items-center
              gap-1.5
              border-r
              border-slate-100
              px-2
              py-3
              text-center
            "
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
              <ShieldCheck
                size={18}
                className="text-blue-600"
                strokeWidth={2}
              />
            </div>

            <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-500 sm:text-[10px]">{t("Reliable Performance" )}</span>
          </div>

          {/* Energy */}

          <div
            className="
              flex
              flex-col
              items-center
              gap-1.5
              px-2
              py-3
              text-center
            "
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50">
              <Zap
                size={18}
                className="text-violet-600"
                strokeWidth={2}
              />
            </div>

            <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-500 sm:text-[10px]">{t("Energy Solutions" )}</span>
          </div>
        </div>

        {/* =================================================
            FAQ GRID
        ================================================== */}

        <div
          className="
            mx-auto
            mt-7
            grid
            max-w-6xl
            grid-cols-1
            gap-3
            lg:grid-cols-2
            lg:gap-4
          "
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              id={index + 1}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(
                  openIndex === index ? -1 : index
                )
              }
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-7
            flex
            max-w-6xl
            flex-col
            items-center
            justify-between
            gap-4
            overflow-hidden
            rounded-2xl
            border
            border-teal-100
            bg-gradient-to-r
            from-slate-50
            via-white
            to-teal-50/60
            px-5
            py-5
            shadow-[0_10px_35px_rgba(15,23,42,0.045)]
            sm:flex-row
            sm:px-7
            sm:py-5
          "
        >
          {/* CTA Glow */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-16
              -top-20
              h-48
              w-48
              rounded-full
              bg-teal-100/50
              blur-3xl
            "
          />

          {/* Content */}

          <div className="relative text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-teal-700">{t("Need assistance?" )}</span>
            </div>

            <h3 className="mt-1.5 text-base font-bold text-slate-950 sm:text-lg">{t("Still have questions?" )}</h3>

            <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm">{t("Our team can help you identify the right EKACEL battery, solar, inverter or energy storage solution for your requirements." )}</p>
          </div>

          {/* CTA Button */}

          <a
            href="/contact"
            className="
              group
              relative
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-full
              bg-[#F7D84A]
              px-6
              py-3
              text-xs
              font-extrabold
              text-black
              shadow-[0_8px_22px_rgba(180,140,0,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#eab308]
              hover:shadow-[0_12px_28px_rgba(180,140,0,0.25)]
            "
          >
            <span>{t("Talk to EKACEL" )}</span>

            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

