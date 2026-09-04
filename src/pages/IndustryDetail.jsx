import { useParams } from "react-router-dom";

import DetailPage from "./DetailPage";
import { industries } from "../data/industries";
import { industryContent } from "../data/industryContent";

export default function IndustryDetail() {
  const { slug } = useParams();

  const industry = industries.find(
    (item) => item.slug === slug
  );

  return (
   <DetailPage
  eyebrow="Industries"
  title={industry?.name || "Industry"}
  description={
    industry?.description ||
    "Details for this industry are being finalized. Get in touch with our team to learn more."
  }
  breadcrumb={[
    {
      label: "Industries",
      href: "/industries",
    },
    {
      label: industry?.name || "Industry",
      href: `/industries/${slug}`,
    },
  ]}
  image={industry?.image}
  slug={slug}
  contentData={industryContent}
  pageType="industry"
/>
  );
}