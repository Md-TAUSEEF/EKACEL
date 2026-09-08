import { useLanguage } from "../../context/LanguageContext.jsx";
import { Phone, Verified, Headset } from "lucide-react";

const strengths = [
  {
    icon: Phone,
    title: "Professional Support",
    subtitle: "99999 33039",
  },
  {
    icon: Verified,
    title: "Quality You",
    subtitle: "Can Trust",
  },
  {
    icon: Headset,
    title: "Online Support",
    subtitle: "24/7 Exclusive Support",
  },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#f8f9fa] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* SECTION TITLE */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {t("Why Choose Us?")}
          </h2>
        </div>

        {/* STRENGTHS GRID WITH VERTICAL DIVIDERS */}
        <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          {strengths.map(({ icon: Icon, title, subtitle }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 text-center"
            >
              {/* ICON */}
              <div className="mb-4 text-slate-800">
                <Icon size={48} strokeWidth={1.2} />
              </div>

              {/* TITLE */}
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                {t(title)}
              </h3>

              {/* SUBTITLE / DETAIL */}
              <p className="mt-1 text-sm text-slate-600">
                {t(subtitle)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}