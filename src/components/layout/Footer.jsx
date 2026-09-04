import { useLanguage } from "../../context/LanguageContext.jsx";

import { Link } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

/* =========================================================
   FOOTER COLUMNS
========================================================= */

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Manufacturing", href: "/about/manufacturing" },
      { label: "R&D & Technology", href: "/about/technology" },
      { label: "Group Companies", href: "/about/group-companies" },
    ],
  },
  {
    title: "Battery Solutions",
    links: [
      { label: "Automotive", href: "/products/automotive/passenger" },
      { label: "Inverter", href: "/products/inverter/home" },
      { label: "Lithium", href: "/products/lithium" },
      { label: "Solar Storage", href: "/products/solar-storage" },
      { label: "Industrial", href: "/products/industrial" },
      { label: "EV", href: "/products/ev" },
    ],
  },
  {
    title: "Energy Solutions",
    links: [
      { label: "Residential", href: "/solutions/residential" },
      { label: "Commercial", href: "/solutions/commercial" },
      { label: "Industrial", href: "/solutions/industrial" },
      { label: "ESS", href: "/solutions/ess" },
      { label: "Solar + Storage", href: "/solutions/solar-storage" },
    ],
  },
  {
    title: "Global",
    links: [
      { label: "India", href: "/global/india" },
      { label: "Asia Pacific", href: "/global/apac" },
      { label: "Middle East", href: "/global/middle-east" },
      { label: "Africa", href: "/global/africa" },
      { label: "Europe", href: "/global/europe" },
      { label: "Partners", href: "/global/partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Catalogue", href: "/resources/catalogue" },
      { label: "Datasheets", href: "/resources/datasheets" },
      { label: "Downloads", href: "/resources/downloads" },
      { label: "Insights", href: "/resources/insights" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
  },
];

/* =========================================================
   SOCIALS
========================================================= */

const socials = [
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "https://youtube.com",
    label: "YouTube",
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        bg-navy-dark
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-emerald-500/10
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[360px]
          w-[360px]
          rounded-full
          bg-green-500/10
          blur-[110px]
        "
      />

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          relative
          w-full
          px-[30px]
          py-10
          sm:px-[30px]
          sm:py-12
          lg:py-14
        "
      >
        <div
          className="
            grid
            grid-cols-2
            gap-x-7
            gap-y-9
            sm:grid-cols-3
            lg:grid-cols-6
            lg:gap-x-8
            lg:gap-y-0
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div
            className="
              col-span-2
              flex
              flex-col
              gap-4
              sm:col-span-3
              lg:col-span-1
            "
          >
            <Link
              to="/"
              className="
                group
                flex
                w-fit
                items-center
              "
            >
              <img
                src="/images/logo1.png"
                alt={t("PimsInfotech")}
                className="
                  h-10
                  w-auto
                  max-w-[175px]
                  object-contain
                  object-left
                  transition-transform
                  duration-300
                  group-hover:scale-[1.02]
                "
              />
            </Link>

            {/* Green Accent */}

            <div
              className="
                h-1
                w-10
                rounded-full
                bg-[#4d8b59]
              "
            />

            <p
              className="
                max-w-[240px]
                text-xs
                leading-6
                text-white/60
                sm:text-sm
              "
            >{t("Building modern digital experiences and reliable technology solutions with a focus on quality, performance and innovation." )}</p>

            {/* =================================================
                SOCIAL ICONS
            ================================================== */}

            <div className="flex items-center gap-2.5 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={t(label)}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-white/60
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#4d8b59]
                    hover:bg-[#4d8b59]
                    hover:text-white
                    hover:shadow-[0_8px_25px_rgba(77,139,89,0.35)]
                  "
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              FOOTER COLUMNS
          ================================================== */}

          {columns.map((col) => (
            <div
              key={t(col.title)}
              className="
                flex
                flex-col
                gap-3
              "
            >
              <h3
                className="
                  text-sm
                  font-bold
                  text-white
                "
              >
                {t(col.title)}
              </h3>

              {/* Green Accent */}

              <span
                className="
                  h-1
                  w-7
                  rounded-full
                  bg-[#4d8b59]
                "
              />

              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="
                        group
                        flex
                        w-fit
                        items-center
                        gap-1
                        text-xs
                        leading-5
                        text-white/55
                        transition-all
                        duration-200
                        hover:translate-x-1
                        hover:text-[#8fdaa0]
                        sm:text-sm
                      "
                    >
                      {t(link.label)}

                      <ArrowUpRight
                        size={11}
                        className="
                          opacity-0
                          transition-all
                          duration-200
                          group-hover:translate-x-0.5
                          group-hover:opacity-100
                        "
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div
        className="
          relative
          border-t
          border-white/10
          bg-black/10
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-between
            gap-3
            px-[30px]
            py-4
            text-center
            sm:flex-row
            sm:px-[30px]
            sm:text-left
          "
        >
          {/* Copyright */}

          <p
            className="
              text-[11px]
              leading-5
              text-white/45
              sm:text-xs
            "
          >
            © 2026 PimsInfotech. All rights reserved. Designed &amp;
            developed by{" "}
            <span className="font-semibold text-white/75">{t("PimsInfotech Pvt Ltd." )}</span>
          </p>

          {/* Legal */}

          <div
            className="
              flex
              items-center
              gap-5
              text-[11px]
              sm:text-xs
            "
          >
            <Link
              to="/privacy-policy"
              className="
                text-white/50
                transition-all
                duration-200
                hover:text-[#8fdaa0]
              "
            >{t("Privacy Policy" )}</Link>

            <span className="h-3 w-px bg-white/15" />

            <Link
              to="/terms"
              className="
                text-white/50
                transition-all
                duration-200
                hover:text-[#8fdaa0]
              "
            >{t("Terms" )}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

