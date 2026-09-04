import { useLanguage } from "../context/LanguageContext.jsx";
import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";

export default function Terms() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        title={t("Terms of Use")}
        description="The terms that govern use of the Voltnova Energy website."
        breadcrumb={[{ label: "Terms", href: "/terms" }]}
      />
      <section className="w-full max-w-full bg-white py-16 sm:py-20">
        <Container>
          <p className="max-w-2xl text-base leading-relaxed text-slate-muted">{t("Our full terms of use are being finalized. Contact our team with any questions." )}</p>
        </Container>
      </section>
    </>
  );
}
