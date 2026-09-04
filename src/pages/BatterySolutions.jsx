import { useLanguage } from "../context/LanguageContext.jsx";
import SectionHeading from "../components/ui/SectionHeading";
import ImageCard from "../components/ui/ImageCard";
import Button from "../components/ui/Button";
import {
  BatteryCharging,
  CarFront,
  Zap,
  Factory,
  ArrowUpRight,
  Globe2,
} from "lucide-react";
import { productCategories } from "../data/productCategories";

export default function BatterySolutions() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-slate-surface py-14 sm:py-16 lg:py-20">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-amber-100/30 blur-3xl" />

      <div className="relative w-full px-[30px] sm:px-[30px]">
        <div className="flex flex-col gap-12 lg:gap-14">

          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">

            <div className="max-w-4xl">
              <SectionHeading
                eyebrow="Battery Solutions"
                title={
                  <>
                    Battery Solutions Built for Every{" "}
                    <span className="text-teal-700">{t("Power Need." )}</span>
                  </>
                }
                description="From automotive and electric mobility to backup, solar storage and critical infrastructure, EKACEL delivers dependable battery solutions engineered for Indian and global applications."
              />
            </div>

           <Button
  to="/products"
  variant="ghost"
  className="group w-fit flex-shrink-0 !bg-[#F7E135] !text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:!bg-[#eab308] hover:shadow-xl hover:shadow-yellow-500/25"
>
  <span>{t("View All Solutions" )}</span>

  <ArrowUpRight className="ml-1 h-4 w-4 text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
</Button>

          </div>

          {/* =====================================================
              BATTERY CATEGORY CARDS
          ====================================================== */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {productCategories.map((product) => (
              <ImageCard
                key={product.slug}
                image={product.image}
                name={t(product.name)}
                description={t(product.description)}
                href={product.href}
              />
            ))}

          </div>

          {/* =====================================================
              APPLICATION / MARKET STRIP
          ====================================================== */}

          <div className="border-t border-slate-line pt-8 lg:pt-10">

            <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#4d8b59]">{t("Built Around Your Needs" )}</p>

                <h3 className="mt-1 text-xl font-bold tracking-tight text-navy sm:text-2xl">{t("Powering Every Application" )}</h3>
              </div>

              <p className="max-w-xl text-sm leading-6 text-slate-muted">{t("Purpose-built battery solutions for mobility, energy storage and critical power applications." )}</p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-7">

              {/* =================================================
                  AUTOMOTIVE
              ================================================== */}

              <div className="group rounded-2xl border border-slate-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] sm:p-6">

                <div className="flex items-start gap-4">

                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-100 ring-1 ring-teal-100 transition-all duration-300 group-hover:shadow-[0_8px_25px_rgba(13,148,136,0.20)]">
                    <CarFront className="h-5 w-5 text-teal-700" />

                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-teal-500 ring-2 ring-white" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-navy sm:text-base">{t("Mobility & Automotive" )}</h3>

                    <p className="mt-1 text-xs font-medium text-teal-700">{t("Built for movement" )}</p>
                  </div>

                </div>

                <p className="mt-5 text-sm leading-6 text-slate-muted">{t("Battery solutions for two-wheelers, passenger vehicles, commercial fleets, heavy-duty applications and electric mobility." )}</p>

                <div className="mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 transition-all duration-300 group-hover:w-16" />

              </div>

              {/* =================================================
                  STORAGE
              ================================================== */}

              <div className="group rounded-2xl border border-slate-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] sm:p-6">

                <div className="flex items-start gap-4">

                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-lime-100 ring-1 ring-emerald-100 transition-all duration-300 group-hover:shadow-[0_8px_25px_rgba(16,185,129,0.20)]">
                    <BatteryCharging className="h-5 w-5 text-emerald-700" />

                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-navy sm:text-base">{t("Backup & Energy Storage" )}</h3>

                    <p className="mt-1 text-xs font-medium text-teal-700">{t("Store. Backup. Perform." )}</p>
                  </div>

                </div>

                <p className="mt-5 text-sm leading-6 text-slate-muted">{t("Reliable batteries for homes, businesses, solar systems and distributed energy storage applications." )}</p>

                <div className="mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 transition-all duration-300 group-hover:w-16" />

              </div>

              {/* =================================================
                  INDUSTRIAL
              ================================================== */}

              <div className="group rounded-2xl border border-slate-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] sm:p-6">

                <div className="flex items-start gap-4">

                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 ring-1 ring-amber-100 transition-all duration-300 group-hover:shadow-[0_8px_25px_rgba(245,158,11,0.20)]">
                    <Factory className="h-5 w-5 text-amber-700" />

                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-navy sm:text-base">{t("Industrial & Critical Power" )}</h3>

                    <p className="mt-1 text-xs font-medium text-amber-700">{t("Power when it matters" )}</p>
                  </div>

                </div>

                <p className="mt-5 text-sm leading-6 text-slate-muted">{t("Engineered power solutions for telecom networks, industrial operations, data centres and critical infrastructure." )}</p>

                <div className="mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 transition-all duration-300 group-hover:w-16" />

              </div>

            </div>
          </div>

          {/* =====================================================
              GLOBAL MARKET MESSAGE
          ====================================================== */}

          <div className="relative overflow-hidden rounded-[24px] border border-slate-line bg-white px-6 py-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:px-8 sm:py-8 lg:px-10">

            {/* Decorative glow */}

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-100/50 blur-3xl" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">

              <div className="min-w-0">

                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-teal-700" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-teal-700">{t("India & Global Markets" )}</p>
                </div>

                <h3 className="mt-2 max-w-3xl text-lg font-bold tracking-tight text-navy sm:text-xl lg:text-2xl">{t("Power solutions designed to perform wherever energy is needed." )}</h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-muted">{t("EKACEL focuses on dependable performance, practical engineering and scalable battery solutions for evolving energy requirements across diverse markets and applications." )}</p>

              </div>

              <Button
  to="/products"
  variant="primary"
  className="group w-fit flex-shrink-0 !bg-[#F7E135] !text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:!bg-[#eab308] hover:shadow-xl hover:shadow-yellow-500/25"
>
  <span>{t("Explore Products" )}</span>

  <ArrowUpRight className="ml-1 h-4 w-4 text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
</Button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}