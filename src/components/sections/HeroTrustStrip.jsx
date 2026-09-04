import { useLanguage } from "../../context/LanguageContext.jsx";
import Container from "../ui/Container";
import StatCard from "../ui/StatCard";
import { globalStats } from "../../data/global";

export default function HeroTrustStrip() {
  const { t } = useLanguage();
  return (
    <section className="w-full max-w-full border-b border-slate-line bg-white">
      <Container className="py-10 sm:py-12">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-6">
          {globalStats.map((stat) => (
            <StatCard key={t(stat.label)} value={t(stat.value)} label={t(stat.label)} />
          ))}
        </div>
      </Container>
    </section>
  );
}
