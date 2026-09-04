import { useLanguage } from "../context/LanguageContext.jsx";
import React from "react";
import {
  ArrowRight,
  BatteryCharging,
  Factory,
  Globe2,
  ShieldCheck,
} from "lucide-react";

const featureTiles = [
  {
    title: "Advanced Battery Technology",
    image: "/images/Advanced.png",
    icon: BatteryCharging,
    tone: "emerald",
  },
  {
    title: "Smart Manufacturing",
    image: "/images/battery-manufacturing.jpg",
    icon: Factory,
    tone: "blue",
  },
  {
    title: "Quality & Reliability",
    image: "/images/iso-certified-quality.jpg",
    icon: ShieldCheck,
    tone: "amber",
  },
];

const TrustItem = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
      <Icon className="h-5 w-5 text-teal-700" />
    </div>

    <span className="text-sm font-semibold text-slate-700">
      {title}
    </span>
  </div>
);

const InnovationSection = () => {
  const { t } = useLanguage();
  return (
    <section
      id="4s94pz"
      className="w-full bg-white py-10 font-sans sm:py-14 lg:py-20"
    >
      <div
        id="ztbj1d"
        className="w-full space-y-16 px-[30px] sm:px-[30px] lg:space-y-20"
      >
        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}

        <div
          id="8d7lmy"
          className="grid items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-12 xl:gap-14"
        >
          {/* =====================================================
              LEFT CONTENT - 55%
          ===================================================== */}

          <div id="1z5gsp" className="w-full">
            {/* Eyebrow */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-gradient-to-r from-amber-50 via-yellow-50 to-emerald-50 px-4 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f4b400] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f4b400]" />
              </span>

              <span className="bg-gradient-to-r from-[#d89000] via-[#4d8b59] to-[#1687a7] bg-clip-text text-xs font-extrabold uppercase tracking-[0.18em] text-transparent">{t("Engineered For The Future" )}</span>
            </div>

            {/* Heading */}

            <h2 className="max-w-none text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[52px]">
              Powering Progress
              <span className="block text-teal-700">{t("Through Smarter Energy" )}</span>
            </h2>

            {/* Description */}

            <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>{t("At EKACEL, we are building reliable energy solutions designed for the evolving needs of modern India and global markets." )}</p>

              <p>{t("From advanced battery technology to intelligent energy solutions, our focus is on delivering dependable performance, practical innovation and long-term value." )}</p>

              <p>{t("Our approach combines dependable battery performance, modern manufacturing practices and application-focused engineering to create solutions that support a more efficient and resilient energy future." )}</p>

              <p>{t("We continuously focus on improving technology, product experience and reliability so that our solutions can meet the changing demands of homes, businesses, mobility and industrial applications." )}</p>

              <p className="font-semibold text-slate-800">{t("Built with innovation. Driven by reliability. Ready for tomorrow's energy needs." )}</p>
            </div>

            {/* CTA Buttons */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Distributor Button */}

              <a
                href="#distributor"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7E135] px-5 py-3 text-sm font-bold text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eab308] hover:shadow-xl hover:shadow-yellow-500/25"
              >
                Become A Distributor

                <ArrowRight className="h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Explore Products Button */}

              <a
                href="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7E135] px-5 py-3 text-sm font-bold text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eab308] hover:shadow-xl hover:shadow-yellow-500/25"
              >
                Explore Products

                <ArrowRight className="h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT CONTENT - 45%
          ===================================================== */}

          <div id="right-visual" className="w-full">
            <div className="relative ml-auto w-full max-w-[620px]">
              {/* =================================================
                  MAIN IMAGE
              ================================================= */}

              <div
                id="xwyun3"
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
              >
                <div className="aspect-[16/10]">
                  <img
                    src="/images/battery-manufacturing.jpg"
                    alt={t("EKACEL battery technology")}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Image Overlay */}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent p-6 pt-16">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md ring-1 ring-white/20">
                      <BatteryCharging className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">{t("Advanced Energy Solutions" )}</p>

                      <p className="mt-0.5 text-xs text-white/75">{t("Designed for dependable performance" )}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FEATURE TILES
              ================================================= */}

              <div
                id="538f3v"
                className="relative z-10 -mt-7 grid gap-3 px-3 sm:grid-cols-3 sm:px-5"
              >
                {featureTiles.map((tile) => {
                  const Icon = tile.icon;

                  return (
                    <div
                      key={t(tile.title)}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                    >
                      {/* Tile Image */}

                      <div className="relative h-24 overflow-hidden">
                        <img
                          src={tile.image}
                          alt={t(tile.title)}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-slate-950/20" />

                        <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 shadow-sm backdrop-blur">
                          <Icon className="h-4 w-4 text-teal-700" />
                        </div>
                      </div>

                      {/* Tile Content */}

                      <div className="p-3.5">
                        <h3 className="text-sm font-bold leading-5 text-slate-800">
                          {t(tile.title)}
                        </h3>

                        <div className="mt-2 h-0.5 w-7 rounded-full bg-teal-700 transition-all duration-300 group-hover:w-12" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            TRUST STRIP
        ========================================================= */}

        <div
          id="5oxrnm"
          className="border-t border-slate-200 pt-7"
        >
          <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-6">
            <TrustItem
              icon={BatteryCharging}
              title={t("Advanced Technology")}
            />

            <TrustItem
              icon={Factory}
              title={t("Smart Manufacturing")}
            />

            <TrustItem
              icon={ShieldCheck}
              title={t("Reliable Performance")}
            />

            <TrustItem
              icon={Globe2}
              title={t("Built For Global Markets")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;