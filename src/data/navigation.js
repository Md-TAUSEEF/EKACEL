// Central navigation data.
// Editing this file updates the desktop dropdowns,
// mobile accordion menu, and footer link groups.

export const utilityLinks = [
  { label: "Become a Partner", href: "/partner" },
  { label: "Dealer Locator", href: "/dealer-locator" },
  { label: "Service & Support", href: "/support" },
  { label: "Downloads", href: "/resources/downloads" },
  { label: "Global Presence", href: "/global" },
];

export const primaryNav = [
  // =========================================================
  // ABOUT US
  // =========================================================
  {
    key: "about",
    label: "About Us",
    href: "/about",
    items: [
      {
        label: "Company Overview",
        href: "/about",
      },
      {
        label: "Key Team",
        href: "/about/leadership",
      },
      {
        label: "Manufacturing & R&D",
        children: [
          {
            label: "Manufacturing",
            href: "/about/manufacturing",
          },
          {
            label: "R&D & Technology",
            href: "/about/technology",
          },
          {
            label: "Quality & Testing",
            href: "/about/quality",
          },
          {
            label: "Innovation",
            href: "/about/innovation",
          },
        ],
      },
      {
        label: "Group Companies",
        href: "/about/group-companies",
      },
    ],
  },

  // =========================================================
  // BATTERY & ENERGY
  // =========================================================
  {
    key: "battery",
    label: "Battery & Energy",
    href: "/products",

    items: [
      // -----------------------------------------------------
      // AUTOMOTIVE
      // -----------------------------------------------------
      {
        label: "Automotive",
        children: [
          {
            label: "2-Wheeler Battery",
            href: "/products/auto-2-wheeler",
          },
          {
            label: "Passenger Vehicle Battery",
            href: "/products/auto-passenger",
          },
          {
            label: "Commercial Vehicle Battery",
            href: "/products/auto-commercial",
          },
          {
            label: "Heavy Duty Battery",
            href: "/products/auto-heavy-duty",
          },
        ],
      },

      // -----------------------------------------------------
      // INVERTER BATTERIES
      // -----------------------------------------------------
      {
        label: "Inverter Batteries",
        children: [
          {
            label: "Tubular Battery",
            href: "/products/ib-tubular-200",
          },
          {
            label: "Home Backup Battery",
            href: "/products/ib-tubular-150",
          },
          {
            label: "High Performance Battery",
            href: "/products/ib-high-performance",
          },

          // Product not currently available
          {
            label: "Solar Backup",
            href: "/products/coming-soon/solar-backup",
          },
        ],
      },

      // -----------------------------------------------------
      // E-RICKSHAW & EV
      // -----------------------------------------------------
      {
        label: "E-Rickshaw & EV",
        children: [
          {
            label: "E-Rickshaw Battery 120Ah",
            href: "/products/er-120",
          },
          {
            label: "Heavy Duty E-Rickshaw Battery",
            href: "/products/er-heavy-duty",
          },
          {
            label: "Electric Mobility Battery",
            href: "/products/ev-battery",
          },
          {
            label: "Advanced EV Power Pack",
            href: "/products/ev-power-pack",
          },
        ],
      },

      // -----------------------------------------------------
      // SOLAR & LITHIUM
      // -----------------------------------------------------
      {
        label: "Solar & Lithium",
        children: [
          {
            label: "Solar Tubular Battery",
            href: "/products/solar-tubular",
          },
          {
            label: "Solar Deep Cycle Battery",
            href: "/products/solar-deep-cycle",
          },
          {
            label: "Lithium Battery Pack",
            href: "/products/lithium-100",
          },
          {
            label: "Lithium Energy Storage Battery",
            href: "/products/lithium-storage",
          },
        ],
      },

      // -----------------------------------------------------
      // INDUSTRIAL & BACKUP
      // -----------------------------------------------------
      {
        label: "Industrial & Backup",
        children: [
          {
            label: "Industrial Battery System",
            href: "/products/industrial-power",
          },
          {
            label: "Heavy Duty Industrial Battery",
            href: "/products/industrial-heavy-duty",
          },
          {
            label: "Home Energy Storage System",
            href: "/products/ess-home",
          },
          {
            label: "Commercial Energy Storage System",
            href: "/products/ess-commercial",
          },
          {
            label: "Telecom Backup Battery",
            href: "/products/telecom-backup",
          },
          {
            label: "Critical Power Battery",
            href: "/products/critical-power",
          },
        ],
      },

      // -----------------------------------------------------
      // ENERGY SOLUTIONS
      // -----------------------------------------------------
      {
        label: "Energy Solutions",
        children: [
          {
            label: "Residential",
            href: "/solutions/residential",
          },
          {
            label: "Commercial",
            href: "/solutions/commercial",
          },
          {
            label: "Industrial",
            href: "/solutions/industrial",
          },
          {
            label: "Solar + Storage",
            href: "/solutions/solar-storage",
          },
          {
            label: "Energy Storage Systems",
            href: "/solutions/ess",
          },
          {
            label: "Hybrid Energy",
            href: "/solutions/hybrid",
          },
          {
            label: "Clean Energy",
            href: "/solutions/clean-energy",
          },
        ],
      },
    ],
  },

  // =========================================================
  // INDUSTRIES
  // =========================================================
  {
    key: "industries",
    label: "Industries",
    href: "/industries",
    items: [
      {
        label: "Automotive",
        href: "/industries/automotive",
      },
      {
        label: "Telecom & Infrastructure",
        href: "/industries/telecom",
      },
      {
        label: "Commercial & Industrial",
        href: "/industries/commercial-industrial",
      },
      {
        label: "Renewable & Solar",
        href: "/industries/solar",
      },
      {
        label: "Energy Storage",
        href: "/industries/storage",
      },
      {
        label: "Electric Mobility",
        href: "/industries/mobility",
      },
      {
        label: "EV Infrastructure",
        href: "/industries/ev-infrastructure",
      },
    ],
  },

  // =========================================================
  // GLOBAL
  // =========================================================
  {
    key: "global",
    label: "Global",
    href: "/global",

    items: [
      {
        label: "Global Markets",
        children: [
          {
            label: "India",
            href: "/global/india",
          },
          {
            label: "Asia Pacific",
            href: "/global/apac",
          },
          {
            label: "Middle East",
            href: "/global/middle-east",
          },
          {
            label: "Africa",
            href: "/global/africa",
          },
          {
            label: "Europe",
            href: "/global/europe",
          },
        ],
      },

      {
        label: "Global Network",
        children: [
          {
            label: "International Partners",
            href: "/global/partners",
          },
          {
            label: "Global Opportunities",
            href: "/global/opportunities",
          },
        ],
      },

      {
        label: "Global Enquiries",
        children: [
          {
            label: "International Enquiries",
            href: "/contact",
          },
          {
            label: "Become a Partner",
            href: "/partner",
          },
          {
            label: "Dealer Locator",
            href: "/dealer-locator",
          },
        ],
      },
    ],
  },
];

// =========================================================
// SECONDARY NAV
// =========================================================

export const secondaryNav = [
  {
    key: "resources",
    label: "Resources",
    href: "/resources",
  },
  {
    key: "contact",
    label: "Contact",
    href: "/contact",
  },
];
