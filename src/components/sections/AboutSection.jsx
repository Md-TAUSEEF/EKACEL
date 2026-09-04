import { useLanguage } from "../../context/LanguageContext.jsx";
import { Factory, FlaskConical, Globe2, Cpu } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const pillars = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Cpu, label: "Engineering" },
  { icon: FlaskConical, label: "Technology" },
  { icon: Globe2, label: "Global Ambition" },
];

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full max-w-full bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
                alt={t("Engineers inspecting battery cell production at a Voltnova facility")}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-7 lg:pl-6">
            <span className="text-sm font-semibold tracking-wide text-teal-light">{t("About Us" )}</span>
            <h2 className="text-display-md font-heading font-semibold text-navy">{t("Engineering dependable energy for a changing world." )}</h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-slate-muted sm:text-lg">
              <p>{t("Voltnova Energy designs and manufactures battery and energy storage systems for automotive, industrial, telecom and residential customers. Our work spans starter batteries, lithium storage and grid-support systems built for real-world duty cycles." )}</p>
              <p>{t("From our manufacturing base in India, we combine in-house R&D, rigorous testing and a growing distribution network to serve customers across domestic and international markets, with a long-term focus on cleaner, more resilient energy." )}</p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-slate-line pt-8 sm:grid-cols-4">
              {pillars.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col gap-3">
                  <Icon size={22} className="text-teal-light" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-navy">{t(label)}</span>
                </div>
              ))}
            </div>

            <div>
              <Button to="/about" variant="dark">{t("Discover Our Story" )}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
