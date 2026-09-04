import { useLanguage } from "../context/LanguageContext.jsx";
import React, { useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Zap,
  ShieldCheck,
} from "lucide-react";

export default function DownloadCatalogueSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    category: "",
    email: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Catalogue Request:", formData);

    // Add your catalogue download/API logic here
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
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
          bg-emerald-100/40
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
          bg-green-100/35
          blur-[110px]
        "
      />

      {/* =====================================================
          MAIN WRAPPER
          LEFT / RIGHT = 30px
      ====================================================== */}
      <div className="relative w-full px-[30px] sm:px-[30px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">

          {/* =====================================================
              LEFT — CONTENT / FORM
          ====================================================== */}

          <div className="space-y-5 lg:col-span-7">

            {/* =================================================
                EYEBROW
            ================================================== */}

            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-emerald-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-slate-500">{t("EKACEL PRODUCTS" )}</span>
            </div>

            {/* =================================================
                TITLE
            ================================================== */}

            <div>
              <h2
                className="
                  max-w-2xl
                  font-heading
                  text-3xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-slate-950
                  sm:text-4xl
                  lg:text-[46px]
                "
              >
                Explore the EKACEL
                <span className="block text-emerald-700">{t("Product Catalogue" )}</span>
              </h2>

              {/* Premium Accent */}

              <div className="mt-3 flex items-center gap-1.5">
                <span className="h-1 w-2 rounded-full bg-emerald-400" />
                <span className="h-1 w-10 rounded-full bg-emerald-600" />
                <span className="h-1 w-2 rounded-full bg-emerald-400" />
              </div>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <div className="max-w-2xl space-y-2.5 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                Explore the growing range of{" "}
                <strong className="font-bold text-slate-900">{t("EKACEL battery, power and energy solutions" )}</strong>{" "}
                developed for residential, commercial, industrial and mobility
                applications.
              </p>

              <p className="text-xs leading-6 text-slate-500 sm:text-sm">{t("Discover batteries, inverter solutions, solar products and energy storage technologies designed to support reliable power requirements across India and international markets." )}</p>
            </div>

            {/* =================================================
                QUICK HIGHLIGHTS
            ================================================== */}

            <div className="grid max-w-2xl grid-cols-1 gap-3 pt-0.5 sm:grid-cols-3">

              {/* Battery */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50/70
                  px-3
                  py-2.5
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-emerald-200
                  hover:bg-emerald-50/50
                "
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                  <BatteryCharging
                    size={18}
                    className="text-emerald-600"
                    strokeWidth={2}
                  />
                </div>

                <span className="text-[11px] font-semibold text-slate-700">{t("Battery Solutions" )}</span>
              </div>

              {/* Energy */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50/70
                  px-3
                  py-2.5
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-violet-200
                  hover:bg-violet-50/50
                "
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50">
                  <Zap
                    size={18}
                    className="text-violet-600"
                    strokeWidth={2}
                  />
                </div>

                <span className="text-[11px] font-semibold text-slate-700">{t("Energy Storage" )}</span>
              </div>

              {/* Reliability */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50/70
                  px-3
                  py-2.5
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-200
                  hover:bg-blue-50/50
                "
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                  <ShieldCheck
                    size={18}
                    className="text-blue-600"
                    strokeWidth={2}
                  />
                </div>

                <span className="text-[11px] font-semibold text-slate-700">{t("Reliable Power" )}</span>
              </div>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">

                {/* CATEGORY */}

                <div>
                  <select
                    name="category"
                    value={t(formData.category)}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-3.5
                      py-3
                      text-sm
                      text-slate-700
                      outline-none
                      transition-all
                      duration-300
                      focus:border-emerald-500
                      focus:ring-2
                      focus:ring-emerald-500/10
                    "
                  >
                    <option value="" disabled>{t("Select Product Category *" )}</option>

                    <option value="automotive">{t("Automotive Batteries" )}</option>

                    <option value="inverter">{t("Inverter & Backup Batteries" )}</option>

                    <option value="industrial">{t("Industrial Batteries" )}</option>

                    <option value="energy-storage">{t("Energy Storage Solutions" )}</option>

                    <option value="solar">{t("Solar Energy Solutions" )}</option>
                  </select>
                </div>

                {/* EMAIL */}

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("Your Email *")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-3.5
                      py-3
                      text-sm
                      text-slate-700
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-emerald-500
                      focus:ring-2
                      focus:ring-emerald-500/10
                    "
                  />
                </div>

                {/* NAME */}

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("Your Name *")}
                    value={t(formData.name)}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-3.5
                      py-3
                      text-sm
                      text-slate-700
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-emerald-500
                      focus:ring-2
                      focus:ring-emerald-500/10
                    "
                  />
                </div>

                {/* PHONE */}

                <div
                  className="
                    flex
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    transition-all
                    duration-300
                    focus-within:border-emerald-500
                    focus-within:ring-2
                    focus-within:ring-emerald-500/10
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-1
                      border-r
                      border-slate-200
                      bg-slate-50
                      px-3
                      text-sm
                      text-slate-600
                    "
                  >
                    <span className="text-base">🇮🇳</span>

                    <span>+91</span>
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("Phone Number *")}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      px-3
                      py-3
                      text-sm
                      text-slate-700
                      outline-none
                      placeholder:text-slate-400
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  PRIVACY NOTE
              ================================================== */}

              <div className="flex items-start gap-2 pt-0.5">
                <ShieldCheck
                  size={15}
                  className="mt-0.5 shrink-0 text-emerald-600"
                  strokeWidth={2}
                />

                <p className="text-[10px] leading-relaxed text-slate-400">{t("Your information is used only to process your catalogue request and provide relevant product information." )}</p>
              </div>

              {/* =================================================
                  DOWNLOAD BUTTON
              ================================================== */}

              <div className="pt-0.5">
                <button
                  type="submit"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-[#F7D84A]
                    px-6
                    py-3.5
                    text-sm
                    font-extrabold
                    text-black
                    shadow-[0_8px_22px_rgba(247,216,74,0.22)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#FFE36A]
                    hover:shadow-[0_12px_28px_rgba(247,216,74,0.3)]
                  "
                >
                  <span>{t("Download Catalogue" )}</span>

                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </div>
            </form>
          </div>

          {/* =====================================================
              RIGHT — PREMIUM CATALOGUE VISUAL
          ====================================================== */}

          <div className="relative flex items-center justify-center lg:col-span-5">

            <div className="relative aspect-[4/3] w-full max-w-[450px]">

              {/* =================================================
                  SOFT BACKGROUND
              ================================================== */}

              <div
                className="
                  absolute
                  inset-8
                  rounded-[2rem]
                  bg-emerald-100/40
                  blur-3xl
                "
              />

              {/* =================================================
                  SUBTLE BLUE GLOW
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-40
                  w-40
                  -translate-x-1/2
                  rounded-full
                  bg-blue-50/60
                  blur-3xl
                "
              />

              {/* =================================================
                  BACK CATALOGUE
              ================================================== */}

              <div
                className="
                  absolute
                  right-2
                  top-10
                  w-[58%]
                  rotate-3
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-[0_20px_50px_rgba(15,23,42,0.14)]
                  transition-transform
                  duration-500
                  hover:rotate-1
                "
              >
                <img
                  src="/images/ekacel-catalogue-energy.jpg"
                  alt={t("EKACEL Energy Solutions Catalogue")}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* =================================================
                  FRONT CATALOGUE
              ================================================== */}

              <div
                className="
                  absolute
                  left-2
                  top-0
                  z-10
                  w-[58%]
                  -rotate-3
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-[0_25px_60px_rgba(15,23,42,0.2)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:rotate-0
                  hover:shadow-[0_30px_70px_rgba(15,23,42,0.24)]
                "
              >
                <img
                  src="/images/ekacel-catalogue-battery.jpg"
                  alt={t("EKACEL Battery Solutions Catalogue")}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* =================================================
                  FLOATING BADGE
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-1
                  right-0
                  z-20
                  flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-2.5
                  shadow-[0_15px_35px_rgba(15,23,42,0.14)]
                "
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7D84A]">
                  <BatteryCharging
                    size={15}
                    className="text-black"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">{t("EKACEL" )}</p>

                  <p className="text-[10px] font-bold text-slate-900">{t("Powering Possibilities" )}</p>
                </div>
              </div>

              {/* =================================================
                  SMALL GLOBAL BADGE
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-12
                  left-0
                  z-20
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-100
                  bg-white/95
                  px-3.5
                  py-2
                  shadow-[0_12px_30px_rgba(15,23,42,0.1)]
                  backdrop-blur-sm
                  sm:flex
                "
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-600">{t("Energy Solutions • Global Vision" )}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}