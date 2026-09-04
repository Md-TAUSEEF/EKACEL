import { useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import { globalPages } from "../data/global";
import { globalContent } from "../data/globalContent";

export default function GlobalDetail() {
  const { slug } = useParams();

  const region = globalPages.find(
    (item) => item.slug === slug
  );

  return (
    <DetailPage
      eyebrow="Global"
      title={region?.name || "Global Market"}
      description={
        region?.description ||
        "Details for this global market are being finalized. Get in touch with the EKACEL team to learn more."
      }
      breadcrumb={[
        {
          label: "Global",
          href: "/global",
        },
        {
          label: region?.name || "Global Market",
          href: `/global/${slug}`,
        },
      ]}
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1800&auto=format&fit=crop"
      slug={slug}
      contentData={globalContent}
      pageType="global"
    />
  );
}