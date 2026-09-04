import { useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import { energySolutions } from "../data/solutions";

export default function SolutionDetail() {
  const { slug } = useParams();

  const solution = energySolutions.find(
    (item) => item.slug === slug
  );

  return (
   <DetailPage
  eyebrow="Energy Solutions"
  title={solution?.name || "Energy Solution"}
  slug={slug}
  description={
    solution?.description ||
    "Details for this energy solution are being finalized. Get in touch with our team to learn more."
  }
  breadcrumb={[
    {
      label: "Energy Solutions",
      href: "/solutions",
    },
    {
      label: solution?.name || "Solution",
      href: `/solutions/${slug}`,
    },
  ]}
  image={solution?.image}
  pageType="solution"
/>
  );
}