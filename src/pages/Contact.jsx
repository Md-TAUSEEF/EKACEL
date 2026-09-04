import { useLanguage } from "../context/LanguageContext.jsx";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import PageHero from "../components/sections/PageHero";

const details = [
  {
    icon: MapPin,
    label: "Head Office",
    value: "New Delhi, India",
  },
  {
    icon: Phone,
    label: "Business Enquiries",
    value: "+91 XX XXXX XXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@yourcompany.com",
  },
];

const enquiryTypes = [
  "Product Enquiry",
  "International Distribution",
  "OEM / Partnership",
  "Bulk Requirement",
  "Technical Support",
  "Other",
];

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

      <PageHero
        eyebrow="Contact Us"
        title={t("Let's build the right energy solution together.")}
        description="Connect with our team for battery products, energy solutions, international distribution, partnerships, bulk requirements, or technical support."
        breadcrumb={[
          {
            label: "Contact",
            href: "/contact",
          },
        ]}
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1800&auto=format&fit=crop"
      />

      {/* =========================================================
          CONTACT SECTION
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
        {/* Decorative background */}

        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-yellow-100/30 blur-3xl" />

        <div className="relative w-full px-[30px] sm:px-[30px]">

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">

            {/* =====================================================
                LEFT SIDE
            ===================================================== */}

            <div className="lg:col-span-4">

              <div className="lg:sticky lg:top-24">

                {/* Heading */}

                <div className="max-w-md">

                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-teal-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />{t("Get in touch" )}</div>

                  <h2 className="text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{t("Let's discuss your energy requirements." )}</h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{t("Whether you're looking for batteries, energy storage systems, renewable energy solutions, or international supply partnerships, our team is ready to help." )}</p>

                </div>


                {/* Contact Details */}

                <div className="mt-7 flex flex-col gap-4">

                  {details.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="
                        group
                        flex
                        items-start
                        gap-4
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-4
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-teal-200
                        hover:shadow-lg
                      "
                    >

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-teal-50
                          text-teal-600
                          transition-all
                          duration-300
                          group-hover:bg-teal-600
                          group-hover:text-white
                        "
                      >
                        <Icon
                          className="h-5 w-5"
                          strokeWidth={2}
                        />
                      </div>

                      <div className="min-w-0">

                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                          {t(label)}
                        </p>

                        <p className="mt-1 break-words text-sm font-bold text-slate-800">
                          {t(value)}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>


                {/* International Business Card */}

                <div className="mt-5 overflow-hidden rounded-2xl bg-slate-950 p-5 shadow-xl">

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                      <Globe2 className="h-5 w-5" />
                    </div>

                    <div>

                      <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-yellow-400">{t("Global Reach" )}</p>

                      <h3 className="mt-1 text-base font-black text-white">{t("International Energy Partnerships" )}</h3>

                      <p className="mt-2 text-sm leading-6 text-slate-300">{t("Connect with us for international distribution, export opportunities, OEM partnerships, and large-scale energy requirements." )}</p>

                    </div>

                  </div>

                </div>


                {/* Trust Points */}

                <div className="mt-5 grid gap-2">

                  {[
                    "Product & technical consultation",
                    "Bulk and project requirements",
                    "International business enquiries",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600" />

                      <span className="text-sm font-medium text-slate-600">
                        {t(item)}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>


            {/* =====================================================
                RIGHT SIDE FORM
            ===================================================== */}

            <div className="lg:col-span-8">

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl sm:p-7 lg:p-8">

                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >

                    {/* FORM HEADER */}

                    <div className="border-b border-slate-100 pb-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                          <Send className="h-5 w-5" />
                        </div>

                        <div>

                          <h3 className="text-xl font-black text-slate-950">{t("Send us an enquiry" )}</h3>

                          <p className="mt-0.5 text-sm text-slate-500">{t("Tell us what you need and our team will get back to you." )}</p>

                        </div>

                      </div>

                    </div>


                    {/* NAME + EMAIL */}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                      <label className="flex flex-col gap-2 text-sm font-bold text-slate-800">

                        Full Name
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder={t("Enter your full name")}
                          className="
                            w-full
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-4
                            py-3
                            text-sm
                            text-slate-900
                            outline-none
                            transition-all
                            duration-200
                            placeholder:text-slate-400
                            focus:border-teal-500
                            focus:bg-white
                            focus:ring-4
                            focus:ring-teal-500/10
                          "
                        />

                      </label>


                      <label className="flex flex-col gap-2 text-sm font-bold text-slate-800">

                        Business Email
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder={t("you@company.com")}
                          className="
                            w-full
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-4
                            py-3
                            text-sm
                            text-slate-900
                            outline-none
                            transition-all
                            duration-200
                            placeholder:text-slate-400
                            focus:border-teal-500
                            focus:bg-white
                            focus:ring-4
                            focus:ring-teal-500/10
                          "
                        />

                      </label>

                    </div>


                    {/* PHONE + COMPANY */}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                      <label className="flex flex-col gap-2 text-sm font-bold text-slate-800">

                        Phone / WhatsApp
                        <input
                          type="tel"
                          name="phone"
                          placeholder={t("+91 XXXXX XXXXX")}
                          className="
                            w-full
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-4
                            py-3
                            text-sm
                            text-slate-900
                            outline-none
                            transition-all
                            duration-200
                            placeholder:text-slate-400
                            focus:border-teal-500
                            focus:bg-white
                            focus:ring-4
                            focus:ring-teal-500/10
                          "
                        />

                      </label>


                      <label className="flex flex-col gap-2 text-sm font-bold text-slate-800">

                        Company / Organization
                        <input
                          type="text"
                          name="company"
                          placeholder={t("Company name")}
                          className="
                            w-full
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-4
                            py-3
                            text-sm
                            text-slate-900
                            outline-none
                            transition-all
                            duration-200
                            placeholder:text-slate-400
                            focus:border-teal-500
                            focus:bg-white
                            focus:ring-4
                            focus:ring-teal-500/10
                          "
                        />

                      </label>

                    </div>


                    {/* COUNTRY + ENQUIRY */}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                      <label className="flex flex-col gap-2 text-sm font-bold text-slate-800">

                        Country / Region

                        <input
                          type="text"
                          name="country"
                          placeholder={t("e.g. UAE, Germany, India")}
                          className="
                            w-full
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-4
                            py-3
                            text-sm
                            text-slate-900
                            outline-none
                            transition-all
                            duration-200
                            placeholder:text-slate-400
                            focus:border-teal-500
                            focus:bg-white
                            focus:ring-4
                            focus:ring-teal-500/10
                          "
                        />

                      </label>


                      <label className="flex flex-col gap-2 text-sm font-bold text-slate-800">

                        Enquiry Type

                        <select
                          name="enquiryType"
                          defaultValue=""
                          className="
                            w-full
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-4
                            py-3
                            text-sm
                            text-slate-900
                            outline-none
                            transition-all
                            duration-200
                            focus:border-teal-500
                            focus:bg-white
                            focus:ring-4
                            focus:ring-teal-500/10
                          "
                        >
                          <option value="" disabled>{t("Select enquiry type" )}</option>

                          {enquiryTypes.map((type) => (
                            <option
                              key={type}
                              value={type}
                            >
                              {type}
                            </option>
                          ))}
                        </select>

                      </label>

                    </div>


                    {/* SUBJECT */}

                    <label className="flex flex-col gap-2 text-sm font-bold text-slate-800">

                      Subject

                      <input
                        type="text"
                        name="subject"
                        placeholder={t("How can we help you?")}
                        className="
                          w-full
                          rounded-xl
                          border
                          border-slate-200
                          bg-slate-50
                          px-4
                          py-3
                          text-sm
                          text-slate-900
                          outline-none
                          transition-all
                          duration-200
                          placeholder:text-slate-400
                          focus:border-teal-500
                          focus:bg-white
                          focus:ring-4
                          focus:ring-teal-500/10
                        "
                      />

                    </label>


                    {/* MESSAGE */}

                    <label className="flex flex-col gap-2 text-sm font-bold text-slate-800">

                      Message

                      <textarea
                        required
                        name="message"
                        rows={6}
                        placeholder={t("Tell us about your product requirement, application, quantity, project, destination market, or any other details...")}
                        className="
                          w-full
                          resize-none
                          rounded-xl
                          border
                          border-slate-200
                          bg-slate-50
                          px-4
                          py-3
                          text-sm
                          leading-6
                          text-slate-900
                          outline-none
                          transition-all
                          duration-200
                          placeholder:text-slate-400
                          focus:border-teal-500
                          focus:bg-white
                          focus:ring-4
                          focus:ring-teal-500/10
                        "
                      />

                    </label>


                    {/* SUBMIT */}

                    <div className="flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">

                      <div className="flex items-start gap-2">

                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />

                        <p className="max-w-md text-xs leading-5 text-slate-500">{t("Your enquiry will be reviewed by our team and routed to the appropriate business or technical contact." )}</p>

                      </div>


                      <button
                        type="submit"
                        className="
                          inline-flex
                          w-full
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          bg-yellow-400
                          px-6
                          py-3
                          text-sm
                          font-black
                          text-slate-950
                          shadow-lg
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:bg-yellow-300
                          hover:shadow-xl
                          sm:w-auto
                        "
                      >
                        Send Enquiry
                        <ArrowRight className="h-4 w-4" />
                      </button>

                    </div>

                  </form>
                ) : (

                  /* =================================================
                     SUCCESS MESSAGE
                  ================================================= */

                  <div className="flex min-h-[450px] flex-col items-center justify-center px-4 py-12 text-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <div className="mt-5">

                      <div className="mb-2 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-teal-600">
                        <Sparkles className="h-4 w-4" />{t("Enquiry Received" )}</div>

                      <h3 className="text-2xl font-black text-slate-950 sm:text-3xl">{t("Thank you for contacting us." )}</h3>

                      <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">{t("Your enquiry has been received. A member of our team will review your requirements and get back to you shortly." )}</p>

                    </div>


                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="
                        mt-7
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-5
                        py-2.5
                        text-sm
                        font-bold
                        text-slate-700
                        shadow-sm
                        transition-all
                        duration-300
                        hover:border-teal-300
                        hover:bg-teal-50
                        hover:text-teal-700
                      "
                    >
                      Send Another Enquiry
                      <ArrowRight className="h-4 w-4" />
                    </button>

                  </div>

                )}

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}