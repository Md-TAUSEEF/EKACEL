import { useLanguage } from "../../context/LanguageContext.jsx";
import {
  Cog,
  ShieldCheck,
  Cpu,
  Factory,
  HeartHandshake,
  Leaf,
} from "lucide-react";

const strengths = [
  {
    icon: Cog,
    title: "Engineered for Real-World Power",
    text: "Battery and energy solutions designed around practical power requirements, demanding duty cycles and dependable everyday performance.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Safe Performance",
    text: "Built with a strong focus on safety, durability and consistent performance across residential, commercial and industrial applications.",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    icon: Cpu,
    title: "Advanced Energy Technology",
    text: "Modern battery technologies and intelligent energy systems designed for efficient power management, monitoring and reliable operation.",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
  },
  {
    icon: Factory,
    title: "Quality-Focused Manufacturing",
    text: "Quality-driven production processes help maintain consistency, durability and dependable performance across our energy solutions.",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centric Approach",
    text: "We focus on responsive support, practical energy solutions and long-term relationships with customers, dealers and business partners.",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50",
  },
  {
    icon: Leaf,
    title: "Built for a Smarter Future",
    text: "Energy efficiency, responsible product development and sustainable thinking guide the way we build better power and storage solutions.",
    iconColor: "text-teal-600",
    iconBg: "bg-teal-50",
  },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();
  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="w-full space-y-10 px-[30px] sm:px-[30px] lg:space-y-12">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mx-auto max-w-5xl text-center">

          {/* EYEBROW */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-200" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t("WHY CHOOSE US" )}</span>

            <span className="h-px w-8 bg-slate-200" />
          </div>

         {/* TITLE - 2 ROWS */}
<h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-[#000200] sm:text-4xl lg:text-[46px]">
  <span className="block">{t("Powering Confidence Through" )}</span>
  <span className="block text-teal-700">{t("Better Energy Solutions." )}</span>
</h2>
          {/* GREEN HALF LINE */}
          <div className="mx-auto mt-4 h-[3px] w-24 rounded-full bg-[#4d8b59]" />

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-500 sm:text-[15px]">{t("From dependable batteries to advanced energy storage systems, we combine engineering, quality and customer-focused thinking to deliver solutions built for the way energy is used today." )}</p>

        </div>

        {/* =====================================================
            STRENGTHS GRID
        ====================================================== */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">

          {strengths.map(
            ({
              icon: Icon,
              title,
              text,
              iconColor,
              iconBg,
            }) => (
              <div
                key={title}
                className="
                  group
                  flex
                  flex-col
                  gap-2.5
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-4.5
                  shadow-[0_5px_20px_rgba(15,23,42,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#F7D84A]/50
                  hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]
                "
              >

                {/* ICON */}
                <span
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${iconBg}
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  `}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                    className={iconColor}
                  />
                </span>

                {/* TITLE */}
                <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-slate-950">
                  {title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs leading-5 text-slate-500">
                  {text}
                </p>

                {/* YELLOW ACCENT */}
                <div
                  className="
                    mt-0.5
                    h-[2px]
                    w-7
                    rounded-full
                    bg-[#F7D84A]
                    transition-all
                    duration-300
                    group-hover:w-12
                  "
                />

              </div>
            )
          )}

        </div>
      </div>
    </section>
  );
}