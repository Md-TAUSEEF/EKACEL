import { useLanguage } from "../context/LanguageContext.jsx";

import {
  ShieldCheck,
  Wrench,
  Headset,
  Settings,
  BatteryCharging,
  Store,
  PackageCheck,
  ClipboardCheck,
  HelpCircle,
  BookOpen,
  Download,
  PhoneCall,
} from "lucide-react";

import PageHero from "../components/sections/PageHero";
import ListGrid from "../components/sections/ListGrid";
import CTASection from "../components/sections/FAQItem";

/* =========================================================
   SUPPORT ITEMS
========================================================= */

const supportItems = [
  {
    slug: "warranty",
    name: "Warranty & Claims",
    description:
      "Understand warranty coverage, eligibility and the process for raising a product warranty claim.",
    href: "/support/warranty",
  },

  {
    slug: "service",
    name: "Service & Maintenance",
    description:
      "Get assistance with battery servicing, maintenance requirements and long-term product performance.",
    href: "/support/service",
  },

  {
    slug: "technical-support",
    name: "Technical Support",
    description:
      "Connect with our technical team for product, application, installation and troubleshooting assistance.",
    href: "/support/technical-support",
  },

  {
    slug: "installation",
    name: "Installation Support",
    description:
      "Access guidance for correct battery installation, commissioning, handling and application requirements.",
    href: "/support/installation",
  },

  {
    slug: "battery-care",
    name: "Battery Care & Maintenance",
    description:
      "Learn practical battery care, inspection and maintenance practices for dependable everyday operation.",
    href: "/support/battery-care",
  },

  {
    slug: "product-registration",
    name: "Product Registration",
    description:
      "Register your product and keep important product and purchase information available for future support.",
    href: "/support/product-registration",
  },

  {
    slug: "dealer-support",
    name: "Dealer & Distributor Support",
    description:
      "Dedicated resources and assistance for authorized dealers, distributors and business partners.",
    href: "/support/dealer-support",
  },

  {
    slug: "spare-parts",
    name: "Parts & Replacement",
    description:
      "Get guidance on compatible replacement parts, product requirements and support for service needs.",
    href: "/support/spare-parts",
  },

  {
    slug: "safety",
    name: "Safety & Handling",
    description:
      "Important information for safe battery handling, installation, storage, transportation and operation.",
    href: "/support/safety",
  },

  {
    slug: "faqs",
    name: "Frequently Asked Questions",
    description:
      "Find quick answers to common questions about batteries, applications, charging, maintenance and support.",
    href: "/support/faqs",
  },

  {
    slug: "downloads",
    name: "Technical Downloads",
    description:
      "Access available product information, technical documentation, application guides and support material.",
    href: "/support/downloads",
  },

  {
    slug: "contact",
    name: "Contact Support",
    description:
      "Reach the EKACEL support team with your product, service, technical or application enquiry.",
    href: "/support/contact",
  },
];

/* =========================================================
   SUPPORT ICONS
========================================================= */

export const supportIcons = {
  warranty: ShieldCheck,
  service: Wrench,
  "technical-support": Headset,
  installation: Settings,
  "battery-care": BatteryCharging,
  "product-registration": ClipboardCheck,
  "dealer-support": Store,
  "spare-parts": PackageCheck,
  safety: ShieldCheck,
  faqs: HelpCircle,
  downloads: Download,
  contact: PhoneCall,
};

/* =========================================================
   SUPPORT PAGE
========================================================= */

export default function Support() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow="Support"
        title={t("Support That Keeps Your Energy Moving.")}
        description="From product selection and installation to maintenance, warranty and technical assistance, EKACEL provides practical support for customers, dealers and energy partners."
        breadcrumb={[
          {
            label: "Support",
            href: "/support",
          },
        ]}
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1800&auto=format&fit=crop"
      />

      {/* SUPPORT GRID */}
      <ListGrid items={supportItems} />

      {/* CTA */}
      <CTASection />
    </>
  );
}

