import { useLanguage } from "../context/LanguageContext.jsx";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Headphones,
  MapPin,
  Search,
  ShieldCheck,
  Store,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

import PageHero from "../components/sections/PageHero";

const partnerTypes = [
  {
    value: "all",
    label: "All Partners",
  },
  {
    value: "dealer",
    label: "Authorized Dealer",
  },
  {
    value: "distributor",
    label: "Distributor",
  },
  {
    value: "service",
    label: "Service Partner",
  },
];

const partnerHighlights = [
  {
    icon: ShieldCheck,
    title: "Authorized Network",
    text: "Connect with partners representing EKACEL battery and energy solutions.",
    iconColor: "text-teal-600",
    iconBg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    text: "Get application guidance and support for your battery and energy requirements.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Truck,
    title: "Product Availability",
    text: "Find the right channel for product enquiries, availability and local support.",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Globe2,
    title: "Growing Reach",
    text: "Our network is designed to connect customers with energy solutions across markets.",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

const supportOptions = [
  {
    icon: Store,
    title: "Authorized Dealer",
    text: "For product enquiries, purchases and local availability.",
  },
  {
    icon: Building2,
    title: "Distributor",
    text: "For regional supply, bulk requirements and business enquiries.",
  },
  {
    icon: Wrench,
    title: "Service Partner",
    text: "For installation, technical assistance and service support.",
  },
];

export default function DealerLocator() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [partnerType, setPartnerType] = useState("all");
  const [searched, setSearched] = useState(false);

  const searchLabel = useMemo(() => {
    if (!query.trim()) {
      return "Search our partner network";
    }

    return `Results for "${query.trim()}"`;
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearched(true);
  }

  function clearSearch() {
    setQuery("");
    setPartnerType("all");
    setSearched(false);
  }

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        eyebrow="Support"
        title={t("Find an EKACEL Partner Near You.")}
        description="Locate an authorized dealer, distributor or service partner for EKACEL battery and energy solutions."
        breadcrumb={[
          {
            label: "Dealer Locator",
            href: "/dealer-locator",
          },
        ]}
        image="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1800&auto=format&fit=crop"
      />

      {/* =========================================================
          LOCATOR
      ========================================================= */}
      <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
        <div className="w-full px-[30px] sm:px-[30px]">

          {/* HEADER */}
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-600">{t("Partner Locator" )}</span>

            <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl lg:text-4xl">{t("Find the right EKACEL partner." )}</h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{t("Search by city, PIN code, region or location to find the appropriate sales and service channel for your requirements." )}</p>
          </div>

          {/* SEARCH CARD */}
          <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">

            <div className="grid gap-3 lg:grid-cols-[1fr_220px_auto]">

              {/* SEARCH */}
              <form
                onSubmit={handleSubmit}
                className="
                  flex
                  min-h-[54px]
                  items-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-3
                  shadow-sm
                  transition-all
                  focus-within:border-teal-300
                  focus-within:ring-4
                  focus-within:ring-teal-500/10
                "
              >
                <MapPin
                  className="ml-1 h-5 w-5 flex-shrink-0 text-teal-600"
                  strokeWidth={2}
                />

                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSearched(false);
                  }}
                  placeholder={t("Enter city, PIN code or region")}
                  className="
                    w-full
                    bg-transparent
                    px-3
                    text-sm
                    font-medium
                    text-slate-900
                    outline-none
                    placeholder:text-slate-400
                  "
                  aria-label={t("Search location")}
                />

                <button
                  type="submit"
                  className="
                    flex
                    h-10
                    w-10
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-teal-600
                    text-white
                    transition-all
                    duration-300
                    hover:bg-teal-700
                    hover:shadow-lg
                  "
                  aria-label={t("Search dealers")}
                >
                  <Search
                    className="h-4 w-4"
                    strokeWidth={2.5}
                  />
                </button>
              </form>

              {/* PARTNER TYPE */}
              <div className="relative">
                <select
                  value={partnerType}
                  onChange={(e) => setPartnerType(e.target.value)}
                  className="
                    min-h-[54px]
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    pr-10
                    text-sm
                    font-semibold
                    text-slate-700
                    outline-none
                    transition-all
                    focus:border-teal-300
                    focus:ring-4
                    focus:ring-teal-500/10
                  "
                  aria-label={t("Partner type")}
                >
                  {partnerTypes.map((type) => (
                    <option
                      key={t(type.value)}
                      value={t(type.value)}
                    >
                      {t(type.label)}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    h-4
                    w-4
                    -translate-y-1/2
                    text-slate-400
                  "
                />
              </div>

              {/* SEARCH BUTTON */}
              <button
                type="button"
                onClick={handleSubmit}
                className="
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-yellow-400
                  px-6
                  text-sm
                  font-black
                  text-slate-950
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-yellow-300
                  hover:shadow-lg
                  lg:min-w-[150px]
                "
              >
                Find Partner
                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={2.5}
                />
              </button>

            </div>

            {/* SEARCH HELP */}
            <div className="mt-4 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-teal-600" />{t("Search by city, PIN code, region or country" )}</span>

              {(query || partnerType !== "all") && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="w-fit font-bold text-teal-600 hover:text-teal-700"
                >{t("Clear search" )}</button>
              )}
            </div>
          </div>

          {/* =====================================================
              RESULTS / EMPTY STATE
          ===================================================== */}
          <div className="mx-auto mt-6 max-w-5xl">

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

              {/* RESULT HEADER */}
              <div className="border-b border-slate-100 bg-slate-50 px-5 py-4 sm:px-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-sm font-black text-slate-900">
                      {searchLabel}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {partnerType === "all"
                        ? t("All partner categories")
                        : partnerTypes.find(
                            (item) => item.value === partnerType
                          )?.label}
                    </p>
                  </div>

                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />{t("Partner Network" )}</span>

                </div>
              </div>

              {/* EMPTY / SEARCH STATE */}
              <div className="flex min-h-[300px] flex-col items-center justify-center px-6 py-12 text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  {searched ? (
                    <Search
                      className="h-7 w-7"
                      strokeWidth={1.8}
                    />
                  ) : (
                    <MapPin
                      className="h-7 w-7"
                      strokeWidth={1.8}
                    />
                  )}
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-900">
                  {searched
                    ? t("Partner search is ready for integration")
                    : t("Search for a partner near you")}
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                  {searched
                    ? "Your search criteria has been captured. Connect this locator to your EKACEL dealer or partner database to display live locations, contact details and available services."
                    : t("Enter your location above to find an authorized EKACEL dealer, distributor or service partner.")}
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {[
                    "Authorized Dealers",
                    "Distributors",
                    "Service Partners",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        text-slate-600
                      "
                    >
                      {t(item)}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          PARTNER BENEFITS
      ========================================================= */}
      <section className="w-full bg-slate-50 py-10 sm:py-12 lg:py-14">
        <div className="w-full px-[30px] sm:px-[30px]">

          <div className="mb-7 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-600">{t("Why Use an Authorized Partner" )}</span>

            <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">{t("The right support for your energy requirements." )}</h2>

            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{t("Our partner network is designed to make it easier to access EKACEL products, application guidance and local support." )}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerHighlights.map(
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
          PARTNER TYPES
      ========================================================= */}
      <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
  <div className="w-full px-[30px] sm:px-[30px]">

    <div className="mx-auto mb-8 max-w-3xl text-center">
      <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-600">{t("Find The Right Channel" )}</span>

      <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">{t("How can our partner network help?" )}</h2>
    </div>

    <div className="grid gap-5 md:grid-cols-3">
      {supportOptions.map(
        ({ icon: Icon, title, text }, index) => {
          const iconStyles = [
            {
              bg: "bg-blue-50",
              color: "text-blue-600",
              border: "hover:border-blue-200",
              label: "text-blue-600",
            },
            {
              bg: "bg-amber-50",
              color: "text-amber-500",
              border: "hover:border-amber-200",
              label: "text-amber-500",
            },
            {
              bg: "bg-emerald-50",
              color: "text-emerald-600",
              border: "hover:border-emerald-200",
              label: "text-emerald-600",
            },
          ];

          const style =
            iconStyles[index % iconStyles.length];

          return (
            <div
              key={title}
              className={`
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
                ${style.border}
                hover:shadow-xl
              `}
            >
              {/* NUMBER */}
              <span className="absolute right-5 top-3 text-5xl font-black text-slate-100">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* ICON */}
              <div
                className={`
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  ${style.bg}
                  ${style.color}
                  shadow-sm
                  transition-all
                  duration-300
                  group-hover:scale-105
                `}
              >
                <Icon
                  className="h-6 w-6"
                  strokeWidth={1.9}
                />
              </div>

              {/* TITLE */}
              <h3 className="relative mt-5 text-lg font-black text-slate-900">
                {title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {text}
              </p>

              {/* FOOTER */}
              <div
                className={`
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  ${t(style.label)}
                `}
              >
                EKACEL Support

                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </div>
            </div>
          );
        }
      )}
    </div>

  </div>
</section>

      {/* =========================================================
          GLOBAL SUPPORT CTA
      ========================================================= */}
     <section className="w-full bg-teal-700 py-10 sm:py-12 lg:py-14">
  <div className="w-full px-[30px] sm:px-[30px]">

    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-teal-700 p-7 shadow-xl sm:p-9 lg:p-10">

      {/* DECORATION */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-teal-900/30 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">

        {/* CONTENT */}
        <div className="lg:col-span-8">

          {/* LABEL */}
          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-yellow-300 ring-1 ring-white/10">
              <Headphones
                className="h-5 w-5"
                strokeWidth={1.9}
              />
            </div>

            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-100">{t("Need Assistance?" )}</span>

          </div>

          {/* HEADING */}
          <h2 className="mt-5 max-w-2xl text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">{t("Can't find a partner in your area?" )}</h2>

          {/* DESCRIPTION */}
          <p className="mt-3 max-w-2xl text-sm leading-6 text-teal-50 sm:text-base">{t("Tell us where you are and what you need. Our team will help connect you with the right EKACEL dealer, distributor, or service partner for your requirement." )}</p>

          {/* TRUST POINTS */}
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">

            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 className="h-4 w-4 text-yellow-300" />{t("Dealer Assistance" )}</div>

            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 className="h-4 w-4 text-yellow-300" />{t("Distribution Support" )}</div>

            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 className="h-4 w-4 text-yellow-300" />{t("Technical Support" )}</div>

          </div>

        </div>

        {/* CTA */}
        <div className="lg:col-span-4 lg:flex lg:justify-end">

          <a
            href="/contact"
            className="
              inline-flex
              w-fit
              items-center
              gap-2.5
              rounded-xl
              bg-yellow-400
              px-6
              py-3.5
              text-sm
              font-black
              text-black
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-yellow-300
              hover:shadow-xl
              focus:outline-none
              focus:ring-2
              focus:ring-yellow-300
              focus:ring-offset-2
              focus:ring-offset-teal-700
            "
          >
            Contact Our Team

            <ArrowRight
              className="h-4 w-4"
              strokeWidth={2.5}
            />
          </a>

        </div>

      </div>
    </div>

  </div>
</section>
    </>
  );
}