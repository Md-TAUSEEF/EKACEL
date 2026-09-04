import { useLanguage } from "../../context/LanguageContext.jsx";

import {
  Globe,
  BatteryCharging,
  Building2,
  Factory,
  ShieldCheck,
  CheckCircle2,
  Truck,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function GlobalPresenceExact() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full overflow-hidden bg-[#030712] py-10 font-sans text-white sm:py-12 lg:py-14">

      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#030712] to-[#020617] opacity-90" />

      {/* =====================================================
          MAIN WRAPPER
      ====================================================== */}

      <div className="relative z-10 w-full space-y-3 px-[30px] sm:px-[30px] lg:space-y-4">

        {/* ================= 1. HEADER SECTION ================= */}

        <div className="space-y-1.5 text-center">

          <div className="flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#F7D84A]">

            <span className="h-[1px] w-7 bg-[#F7D84A]/40" />

            <span>{t("OUR GLOBAL PRESENCE" )}</span>

            <span className="h-[1px] w-7 bg-[#F7D84A]/40" />

          </div>

          <h2 className="font-serif text-2xl font-medium leading-tight tracking-wide text-white sm:text-3xl lg:text-[34px]">

            Powering Energy Solutions

            <br />

            <span className="font-normal italic text-[#F7D84A]">{t("Across Markets & Industries" )}</span>

          </h2>

          <p className="mx-auto max-w-2xl pt-0.5 text-[11px] leading-relaxed text-slate-400 sm:text-xs">{t("Delivering dependable battery, backup and energy storage solutions designed for homes, businesses and industrial applications." )}</p>

        </div>

        {/* ================= 2. MAP AREA ================= */}

        <div className="relative flex min-h-[270px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#070D18] shadow-2xl sm:min-h-[300px] lg:min-h-[320px]">

          {/* World Map Image Background */}

          <img
            src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=2000&auto=format&fit=crop"
            alt={t("Global Energy Network")}
            className="absolute inset-0 h-full w-full object-cover opacity-20 brightness-125 contrast-125 filter"
          />

          {/* Global Energy Lines */}

          <svg
            className="pointer-events-none absolute inset-0 z-10 h-full w-full stroke-[#F7D84A]/50"
            fill="none"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
          >

            <path
              d="M 680 280 Q 400 120 300 180"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-pulse"
            />

            <path
              d="M 680 280 Q 550 150 510 160"
              strokeWidth="1.5"
            />

            <path
              d="M 680 280 Q 620 220 590 240"
              strokeWidth="1.5"
            />

            <path
              d="M 680 280 Q 750 200 810 210"
              strokeWidth="1.5"
            />

            <path
              d="M 680 280 Q 800 350 860 380"
              strokeWidth="1.5"
            />

          </svg>

          {/* --- TOP LEFT GLASS CARD --- */}

          <div className="absolute left-3 top-3 z-20 w-40 rounded-xl border border-white/15 bg-slate-950/60 p-2.5 shadow-2xl backdrop-blur-md sm:left-4 sm:top-4 sm:w-48 sm:p-3">

            <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-300">{t("Global Energy" )}</span>

            <div className="mt-0.5 font-serif text-xl font-bold text-[#F7D84A] sm:text-2xl">{t("Global" )}</div>

            <p className="mb-1.5 text-[10px] font-medium text-[#F7D84A] sm:text-[11px]">{t("Energy Solutions" )}</p>

            <div className="border-t border-white/10 pt-1.5">

              <p className="text-[10px] font-bold text-white sm:text-[11px]">{t("Built for Every Market" )}</p>

              <p className="mt-0.5 text-[8px] leading-snug text-slate-400 sm:text-[9px]">{t("Scalable energy solutions for residential, commercial and industrial applications." )}</p>

            </div>

          </div>

          {/* --- INDIA HUB --- */}

          <div className="absolute left-[68%] top-[52%] z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">

            <div className="relative flex items-center justify-center">

              <span className="absolute inline-flex h-10 w-10 animate-ping rounded-full bg-[#F7D84A] opacity-40" />

              <span className="absolute inline-flex h-7 w-7 animate-pulse rounded-full bg-[#F7D84A] opacity-60" />

              <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-tr from-[#B8860B] via-[#F7D84A] to-[#FFF4A8] shadow-[0_0_18px_rgba(247,216,74,0.8)]">

                <Zap className="h-4 w-4 stroke-[2.5] text-slate-950" />

              </div>

            </div>

          </div>

          {/* --- COUNTRY / MARKET PINS --- */}

          <div className="absolute left-[28%] top-[30%] z-20 hidden items-center gap-1 rounded-full border border-[#F7D84A]/60 bg-slate-900/80 px-2 py-0.5 shadow-lg backdrop-blur-sm sm:flex">
            <span className="text-xs">🌎</span>
            <span className="text-[9px] font-medium text-white">{t("North America" )}</span>
          </div>

          <div className="absolute left-[49%] top-[27%] z-20 hidden items-center gap-1 rounded-full border border-[#F7D84A]/60 bg-slate-900/80 px-2 py-0.5 shadow-lg backdrop-blur-sm sm:flex">
            <span className="text-xs">🌍</span>
            <span className="text-[9px] font-medium text-white">{t("Europe" )}</span>
          </div>

          <div className="absolute left-[59%] top-[45%] z-20 hidden items-center gap-1 rounded-full border border-[#F7D84A]/60 bg-slate-900/80 px-2 py-0.5 shadow-lg backdrop-blur-sm sm:flex">
            <span className="text-xs">⚡</span>
            <span className="text-[9px] font-medium text-white">{t("Middle East" )}</span>
          </div>

          <div className="absolute left-[68%] top-[56%] z-20 hidden items-center gap-1 rounded-full border border-[#F7D84A]/60 bg-slate-900/80 px-2 py-0.5 shadow-lg backdrop-blur-sm sm:flex">
            <span className="text-xs">🇮🇳</span>
            <span className="text-[9px] font-medium text-white">{t("India" )}</span>
          </div>

          <div className="absolute left-[80%] top-[38%] z-20 hidden items-center gap-1 rounded-full border border-[#F7D84A]/60 bg-slate-900/80 px-2 py-0.5 shadow-lg backdrop-blur-sm sm:flex">
            <span className="text-xs">🌏</span>
            <span className="text-[9px] font-medium text-white">{t("Asia Pacific" )}</span>
          </div>

          <div className="absolute left-[85%] top-[72%] z-20 hidden items-center gap-1 rounded-full border border-[#F7D84A]/60 bg-slate-900/80 px-2 py-0.5 shadow-lg backdrop-blur-sm sm:flex">
            <span className="text-xs">⚙️</span>
            <span className="text-[9px] font-medium text-white">{t("Australia" )}</span>
          </div>

        </div>

        {/* ================= 3. STATS CARDS ================= */}

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">

          {/* Left Stats */}

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:col-span-8">

            <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 py-2.5 text-center backdrop-blur-md transition-colors hover:border-[#F7D84A]/50">

              <BatteryCharging className="mb-1 h-5 w-5 text-[#F7D84A]" />

              <div className="font-serif text-lg font-bold text-white sm:text-xl">{t("Battery" )}</div>

              <div className="text-[9px] text-slate-400">{t("Energy Solutions" )}</div>

            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 py-2.5 text-center backdrop-blur-md transition-colors hover:border-[#F7D84A]/50">

              <Building2 className="mb-1 h-5 w-5 text-[#F7D84A]" />

              <div className="font-serif text-lg font-bold text-white sm:text-xl">{t("Home" )}</div>

              <div className="text-[9px] text-slate-400">{t("Residential Power" )}</div>

            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 py-2.5 text-center backdrop-blur-md transition-colors hover:border-[#F7D84A]/50">

              <Factory className="mb-1 h-5 w-5 text-[#F7D84A]" />

              <div className="font-serif text-lg font-bold text-white sm:text-xl">{t("Business" )}</div>

              <div className="text-[9px] text-slate-400">{t("Commercial & Industrial" )}</div>

            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 py-2.5 text-center backdrop-blur-md transition-colors hover:border-[#F7D84A]/50">

              <ShieldCheck className="mb-1 h-5 w-5 text-[#F7D84A]" />

              <div className="font-serif text-lg font-bold text-white sm:text-xl">{t("Reliable" )}</div>

              <div className="text-[9px] text-slate-400">{t("Engineered Performance" )}</div>

            </div>

          </div>

          {/* Right Technology / Focus Box */}

          <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-3 shadow-xl backdrop-blur-md lg:col-span-4">

            <h3 className="mb-1.5 text-[9px] font-bold uppercase tracking-wider text-[#F7D84A]">{t("Energy Focus" )}</h3>

            <div className="flex items-center justify-between gap-3">

              <div className="flex-1 space-y-1 text-[10px]">

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F7D84A]" />{t("Backup Power" )}</span>
                  <span className="font-bold text-white">{t("Core" )}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />{t("Energy Storage" )}</span>
                  <span className="font-bold text-white">{t("Core" )}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#64748B]" />{t("Industrial Power" )}</span>
                  <span className="font-bold text-white">{t("Core" )}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />{t("Smart Monitoring" )}</span>
                  <span className="font-bold text-white">{t("Smart" )}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />{t("Sustainability" )}</span>
                  <span className="font-bold text-white">{t("Focus" )}</span>
                </div>

              </div>

              {/* Energy Ring */}

              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#F7D84A_0%_30%,_#3B82F6_30%_55%,_#64748B_55%_75%,_#F59E0B_75%_90%,_#10B981_90%_100%)] p-1.5">

                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#080E1A]">
                  <BatteryCharging className="h-3.5 w-3.5 text-slate-400" />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= 4. BOTTOM PROMISE BAR ================= */}

        <div className="flex flex-col items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md lg:flex-row">

          {/* Promise */}

          <div className="flex items-center gap-2.5">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F7D84A]/40 bg-[#F7D84A]/10 text-[#F7D84A]">

              <Globe className="h-3.5 w-3.5" />

            </div>

            <div>

              <h4 className="font-serif text-[10px] font-bold tracking-wide text-white">{t("Our Commitment Across Markets" )}</h4>

              <p className="text-[9px] text-slate-400">{t("Reliable Energy. Smart Technology. Long-Term Value." )}</p>

            </div>

          </div>

          {/* Features */}

          <div className="grid w-full grid-cols-2 gap-3 border-y border-white/10 py-1.5 text-center sm:grid-cols-4 sm:border-x sm:border-y-0 sm:px-4 lg:w-auto">

            <div className="flex flex-col items-center gap-0.5">
              <BatteryCharging className="h-3 w-3 text-[#F7D84A]" />
              <span className="text-[9px] text-slate-300">{t("Battery Solutions" )}</span>
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <ShieldCheck className="h-3 w-3 text-[#F7D84A]" />
              <span className="text-[9px] text-slate-300">{t("Quality Focus" )}</span>
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <CheckCircle2 className="h-3 w-3 text-[#F7D84A]" />
              <span className="text-[9px] text-slate-300">{t("Tested Performance" )}</span>
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <Truck className="h-3 w-3 text-[#F7D84A]" />
              <span className="text-[9px] text-slate-300">{t("Reliable Delivery" )}</span>
            </div>

          </div>

          {/* CTA */}

          <a
            href="#partner"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F7D84A] px-4 py-2 text-[10px] font-bold text-black shadow-md transition-all hover:bg-[#FFE36A] lg:w-auto"
          >
            <span>{t("Partner With Us" )}</span>
            <ArrowRight size={12} />
          </a>

        </div>

      </div>

    </section>
  );
}
