import { useLanguage } from "../context/LanguageContext.jsx";
import { useParams } from "react-router-dom";
import DetailPage from "./DetailPage";

const content = {
  warranty: {
    title: "Warranty",
    description:
      "Voltnova batteries are covered by a manufacturer warranty against defects in material and workmanship. Terms vary by product category.",
    highlights: [
      { title: "Coverage", text: "Varies by product line — check your product's datasheet for terms." },
      { title: "Claims", text: "Raise a claim through your dealer or our support team." },
      { title: "Registration", text: "Register your purchase to speed up any future claim." },
    ],
  },
  service: {
    title: "Service",
    description:
      "Installation, maintenance and troubleshooting support from our authorized service network.",
    highlights: [
      { title: "Installation Support", text: "Guidance for correct setup of inverter and storage systems." },
      { title: "Maintenance", text: "Recommended upkeep to extend battery life." },
      { title: "Authorized Network", text: "Service handled through verified partners only." },
    ],
  },
  contact: {
    title: "Support Contact",
    description: "Reach our support team directly for anything not covered by warranty or service.",
    highlights: [
      { title: "Response Time", text: "Our team aims to respond within one business day." },
      { title: "What to Include", text: "Product model and a brief description of the issue." },
      { title: "Dealer First", text: "For fastest resolution, start with your local dealer." },
    ],
  },
};

export default function SupportDetail() {
  const { t } = useLanguage();
  const { topic } = useParams();
  const data = content[topic] || {
    title: "Support",
    description: "This support topic is being finalized. Get in touch with our team for help.",
    highlights: [],
  };

  return (
    <DetailPage
      eyebrow="Support"
      title={t(data.title)}
      description={t(data.description)}
      breadcrumb={[
        { label: "Support", href: "/support" },
        { label: data.title, href: `/support/${topic}` },
      ]}
      image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1800&auto=format&fit=crop"
      highlights={data.highlights}
    />
  );
}
