import { useLanguage } from "../context/LanguageContext.jsx";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <section className="flex w-full max-w-full flex-col items-center justify-center bg-white px-5 py-28 text-center">
      <Container className="flex flex-col items-center gap-5">
        <span className="text-sm font-semibold tracking-wide text-teal-light">404</span>
        <h1 className="text-display-sm font-heading font-semibold text-navy">{t("Page not found." )}</h1>
        <p className="max-w-md text-base leading-relaxed text-slate-muted">{t("The page you're looking for doesn't exist or may have moved." )}</p>
        <Button to="/" variant="dark">{t("Back to Home" )}</Button>
      </Container>
    </section>
  );
}
