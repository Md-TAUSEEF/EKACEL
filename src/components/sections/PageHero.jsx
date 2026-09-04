import { useLanguage } from "../../context/LanguageContext";

import Breadcrumb from "../ui/Breadcrumb";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb = [],
  image,
}) {
  const { t } = useLanguage();
  const bgImage =
    image ||
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1800&auto=format&fit=crop";

  return (
    <section className="relative w-full max-w-full overflow-hidden bg-navy-dark">
      {/* Background Image */}
      <img
        src={bgImage}
        alt=""
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-black/70
          via-black/35
          via-[48%]
          to-transparent
        "
      />

      {/* Bottom Blend */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-10
          bg-gradient-to-t
          from-black/20
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          relative
          flex
          w-full
          flex-col
          gap-3
          px-[30px]
          py-6
          sm:px-[30px]
          sm:py-8
          lg:gap-4
          lg:py-10
        "
      >
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumb} />

        {/* Hero Content */}
        <div className="flex max-w-3xl flex-col gap-2">
          {/* Eyebrow */}
          {eyebrow && (
            <span className="text-xs font-semibold tracking-wide text-volt sm:text-sm">
              {t(eyebrow)}
            </span>
          )}

          {/* Title */}
          <h1
            className="
              max-w-3xl
              font-heading
              text-display-md
              font-semibold
              leading-[1.05]
              text-white
            "
          >
            {t(title)}
          </h1>

          {/* Description */}
          {description && (
            <p
              className="
                max-w-2xl
                text-sm
                leading-6
                text-white/80
                sm:text-base
                sm:leading-7
              "
            >
              {t(description)}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
