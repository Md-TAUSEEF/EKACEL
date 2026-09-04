import { useLanguage } from "../context/LanguageContext.jsx";
import HubPage from "./HubPage";
import { globalPages } from "../data/global";

export default function Global() {
  const { t } = useLanguage();
  return (
    <HubPage
      eyebrow="Global"
      title={t("From India to Global Energy Markets.")}
      description="Manufactured and engineered in India, with a distribution network reaching markets across Asia, the Middle East and beyond."
      breadcrumb={[{ label: "Global", href: "/global" }]}
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1800&auto=format&fit=crop"
      items={globalPages}
      variant="list"
    />
  );
}
