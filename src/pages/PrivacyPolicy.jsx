import { useLanguage } from "../context/LanguageContext.jsx";
import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        title={t("Privacy Policy")}
        description="How Voltnova Energy collects, uses and protects information."
        breadcrumb={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
      />
      <section className="w-full max-w-full bg-white py-16 sm:py-20">
        <Container>
          <p className="max-w-2xl text-base leading-relaxed text-slate-muted">{t("Our full privacy policy is being finalized. Contact our team for questions about how your information is handled." )}</p>
        </Container>
      </section>
    </>
  );
}
