import PageHero from "../components/sections/PageHero";
import CardGrid from "../components/sections/CardGrid";
import ListGrid from "../components/sections/ListGrid";
import CTASection from "../components/sections/FAQItem";

export default function HubPage({ eyebrow, title, description, breadcrumb, image, items, variant = "cards" }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} breadcrumb={breadcrumb} image={image} />
      {variant === "cards" ? <CardGrid items={items} /> : <ListGrid items={items} />}
      <CTASection />
    </>
  );
}
