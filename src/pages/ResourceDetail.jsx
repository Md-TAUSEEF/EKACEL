import { useLanguage } from "../context/LanguageContext.jsx";
import { useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import { resourceItems } from "../data/resources";

const defaultHighlights = [
  { title: "Always Current", text: "Updated as products and specifications evolve." },
  { title: "Built for Specifiers", text: "Formatted for engineers, dealers and procurement teams." },
  { title: "Available on Request", text: "Contact our team for anything not yet listed here." },
];

export default function ResourceDetail() {
  const { t } = useLanguage();
  const { slug } = useParams();
  const resource = resourceItems.find((r) => r.slug === slug);

  return (
    <DetailPage
      eyebrow="Resources"
      title={resource?.name || "Resource"}
      description={
        resource?.description ||
        "This resource is being finalized. Get in touch with our team for what you need."
      }
      breadcrumb={[
        { label: "Resources", href: "/resources" },
        { label: resource?.name || "Resource", href: `/resources/${slug}` },
      ]}
      image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop"
      highlights={defaultHighlights}
    />
  );
}
