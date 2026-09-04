import { useLanguage } from "../context/LanguageContext.jsx";

import HubPage from "./HubPage";
import { resourceItems } from "../data/resources";

export default function Resources() {
  const { t } = useLanguage();
  return (
    <HubPage
      eyebrow="Resources"
      title={t("Knowledge for Better Energy Decisions.")}
      description="Explore product information, technical resources, application guides and insights to help you evaluate, specify, install and support EKACEL energy solutions."
      breadcrumb={[
        {
          label: "Resources",
          href: "/resources",
        },
      ]}
      image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop"
      items={resourceItems}
      variant="list"
    />
  );
}

