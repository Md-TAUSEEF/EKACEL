import { useLanguage } from "../../context/LanguageContext.jsx";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ImageCard from "../ui/ImageCard";
import Button from "../ui/Button";
import { productCategories } from "../../data/products";

export default function BatterySolutions() {
  const { t } = useLanguage();
  return (
    <section className="w-full max-w-full bg-slate-surface py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              title={t("Battery Solutions Built Around Real-World Performance.")}
              description="From two-wheelers to critical infrastructure, every category is engineered for the duty cycle it actually faces."
            />
            <Button to="/products" variant="ghost" className="flex-shrink-0">{t("View All Solutions" )}</Button>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((product) => (
              <ImageCard
                key={product.slug}
                image={product.image}
                name={t(product.name)}
                description={t(product.description)}
                href={product.href}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
