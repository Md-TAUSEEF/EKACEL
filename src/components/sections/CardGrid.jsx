import { useLanguage } from "../../context/LanguageContext.jsx";
import Container from "../ui/Container";
import ImageCard from "../ui/ImageCard";

export default function CardGrid({ items, columns = 4 }) {
  const { t } = useLanguage();
  const colClass =
    columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="w-full max-w-full bg-white py-16 sm:py-20">
      <Container>
        <div className={`grid grid-cols-1 gap-5 ${colClass}`}>
          {items.map((item) => (
            <ImageCard
              key={item.slug || item.href}
              image={item.image}
              name={t(item.name)}
              description={t(item.description)}
              href={item.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
