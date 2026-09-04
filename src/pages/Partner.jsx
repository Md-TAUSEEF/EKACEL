import { useLanguage } from "../context/LanguageContext.jsx";
import PageHero from "../components/sections/PageHero";
import {
  Handshake,
  TrendingUp,
  Truck,
  Headset,
  Globe2,
  Factory,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Building2,
  PackageCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    text: "Build a strong business relationship with EKACEL around dependable battery and energy solutions.",
    iconColor: "text-teal-600",
    iconBg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    icon: Globe2,
    title: "International Opportunities",
    text: "Explore distribution and market-development opportunities across regional and international energy markets.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Truck,
    title: "Supply & Product Access",
    text: "Access a growing portfolio of batteries and energy products for automotive, solar, backup and storage applications.",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Headset,
    title: "Technical & Business Support",
    text: "Get product guidance, application support and assistance throughout the partnership journey.",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

const partnershipTypes = [
  {
    icon: Building2,
    title: "Distributors & Dealers",
    text: "For businesses looking to represent and distribute EKACEL battery and energy products in their market.",
  },
  {
    icon: Factory,
    title: "OEM & Strategic Partners",
    text: "For businesses seeking battery technologies and energy solutions for integrated products or applications.",
  },
  {
    icon: PackageCheck,
    title: "Bulk & Project Buyers",
    text: "For commercial, industrial and infrastructure requirements involving larger-volume battery or energy solutions.",
  },
];

const requirements = [
  "Strong understanding of your local energy or mobility market",
  "Established distribution or customer network",
  "Commitment to product quality and customer service",
  "Ability to develop long-term business opportunities",
];

export default function Partner() {
  const { t } = useLanguage();
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        eyebrow="Partnerships"
        title={t("Build the next energy opportunity with EKACEL.")}
        description="Partner with EKACEL to bring dependable battery and energy solutions to customers across local, regional and international markets."
        breadcrumb={[
          {
            label: "Become a Partner",
            href: "/partner",
          },
        ]}
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop"
      />

      {/* =========================================================
          PARTNERSHIP INTRO
      ========================================================= */}
      <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
        <div className="w-full px-[30px] sm:px-[30px]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14">

            {/* LEFT */}
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-600">{t("Partner With EKACEL" )}</span>

              <h2 className="mt-2 max-w-3xl text-2xl font-black leading-tight text-slate-950 sm:text-3xl lg:text-4xl">{t("Strong partnerships. Reliable energy. Long-term growth." )}</h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{t("EKACEL is building a growing battery and energy portfolio designed for real-world applications across automotive, mobility, solar, backup power and energy storage." )}</p>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{t("We welcome conversations with distributors, dealers, OEMs, project businesses and strategic partners who want to build sustainable opportunities in their markets." )}</p>

              {/* TRUST POINTS */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Battery & energy portfolio",
                  "International market opportunities",
                  "Application-focused solutions",
                  "Long-term business relationships",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle2
                      className="h-5 w-5 flex-shrink-0 text-teal-600"
                      strokeWidth={2}
                    />

                    <span className="text-sm font-semibold text-slate-700">
                      {t(item)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 sm:p-8">

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-500/10 blur-2xl" />
                <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                    <Globe2
                      className="h-6 w-6"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-white">{t("A growing global network" )}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">{t("We aim to connect EKACEL's battery and energy portfolio with capable partners who understand their local markets and customer requirements." )}</p>

                  <div className="mt-6 h-px bg-white/10" />

                  <div className="mt-5 flex items-start gap-3">
                    <ShieldCheck
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-400"
                      strokeWidth={2}
                    />

                    <p className="text-sm leading-6 text-slate-300">{t("Our partnership approach is focused on reliability, application suitability and sustainable market growth." )}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section className="w-full bg-slate-50 py-10 sm:py-12 lg:py-14">
        <div className="w-full px-[30px] sm:px-[30px]">

          <div className="mb-7 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-600">{t("Why Partner With Us" )}</span>

            <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">{t("Partnership built around your market." )}</h2>

            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{t("From product access to technical support, we focus on creating practical value for our partners and their customers." )}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(
              ({
                icon: Icon,
                title,
                text,
                iconColor,
                iconBg,
                border,
              }) => (
                <div
                  key={title}
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
                    hover:shadow-xl
                  `}
                >
                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      ${iconBg}
                      ${iconColor}
                      shadow-sm
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    `}
                  >
                    <Icon
                      className="h-6 w-6"
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="mt-4 text-base font-black text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          PARTNERSHIP TYPES
      ========================================================= */}
      <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
        <div className="w-full px-[30px] sm:px-[30px]">

          <div className="mx-auto mb-8 max-w-3xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-600">{t("Who We Work With" )}</span>

            <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">{t("Partnership opportunities" )}</h2>

            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{t("Whether you distribute products, build energy systems or manage large-scale requirements, there may be an opportunity to work together." )}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {partnershipTypes.map(
              ({ icon: Icon, title, text }, index) => (
                <div
                  key={title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-teal-200
                    hover:shadow-xl
                  "
                >
                  <span className="absolute right-5 top-4 text-4xl font-black text-slate-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <Icon
                      className="h-6 w-6"
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="relative mt-5 text-lg font-black text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-teal-600">
                    Explore opportunity

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          PARTNER REQUIREMENTS
      ========================================================= */}
      <section className="w-full bg-slate-50 py-10 sm:py-12 lg:py-14">
        <div className="w-full px-[30px] sm:px-[30px]">

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">

            <div className="lg:col-span-5">
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-600">{t("Our Ideal Partner" )}</span>

              <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">{t("Let's create value in your market." )}</h2>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{t("We are interested in working with businesses that combine market knowledge, customer focus and a commitment to building long-term energy opportunities." )}</p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {requirements.map((item, index) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      p-4
                    "
                  >
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50 text-xs font-black text-teal-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-semibold leading-6 text-slate-700">
                      {t(item)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="w-full bg-slate-950 py-10 sm:py-12 lg:py-14">
        <div className="w-full px-[30px] sm:px-[30px]">

          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-400">{t("Start a Conversation" )}</span>

              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">{t("Have a market or partnership opportunity?" )}</h2>

              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">{t("Tell us about your business, market and requirements. Our team can explore the right way to work together." )}</p>
            </div>

            <a
              href="/contact"
              className="
                inline-flex
                w-fit
                flex-shrink-0
                items-center
                gap-2.5
                rounded-xl
                bg-yellow-400
                px-6
                py-3.5
                text-sm
                font-black
                text-slate-950
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-yellow-300
                hover:shadow-xl
              "
            >
              Become a Partner

              <ArrowRight
                className="h-4 w-4"
                strokeWidth={2.5}
              />
            </a>

          </div>
        </div>
      </section>
    </>
  );
}