import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  User,
  Building2,
  Mail,
  Phone,
  Globe2,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

const STORAGE_KEY = "battery_contact_popup_shown";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    requirement: "",
  });

  // -----------------------------------------
  // AUTO POPUP
  // -----------------------------------------
  useEffect(() => {
    // Don't show again during the same session
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);

    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "true");
    }, 40000);

    return () => clearTimeout(timer);
  }, []);

  // -----------------------------------------
  // EXIT INTENT - DESKTOP
  // -----------------------------------------
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);

    if (alreadyShown) return;

    const handleMouseLeave = (event) => {
      if (event.clientY <= 5) {
        setIsOpen(true);
        sessionStorage.setItem(STORAGE_KEY, "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // -----------------------------------------
  // INPUT CHANGE
  // -----------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -----------------------------------------
  // SUBMIT
  // -----------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    // Backend/API ko yahan connect kar sakte ho
    setSubmitted(true);

    setTimeout(() => {
      setIsOpen(false);

      setTimeout(() => {
        setSubmitted(false);

        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          country: "",
          requirement: "",
        });
      }, 400);
    }, 2200);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          onClick={closePopup}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: 30,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={closePopup}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md transition hover:bg-gray-100 hover:text-gray-900"
              aria-label="Close contact form"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-[0.85fr_1.15fr]">
              {/* -------------------------------- */}
              {/* LEFT SIDE */}
              {/* -------------------------------- */}
              <div className="relative hidden overflow-hidden bg-emerald-700 p-8 text-white md:block lg:p-10">
                {/* Background decoration */}
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />

                <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                      <MessageSquare size={25} />
                    </div>

                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
                      Let's Connect
                    </p>

                    <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
                      Need help choosing the right battery solution?
                    </h2>

                    <p className="mt-5 max-w-sm text-sm leading-7 text-emerald-50">
                      Tell us about your requirement and our team will help
                      you find the right energy solution for your application.
                    </p>
                  </div>

                  <div className="mt-10 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                        <CheckCircle2 size={18} />
                      </div>

                      <span className="text-sm">
                        Expert technical assistance
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                        <CheckCircle2 size={18} />
                      </div>

                      <span className="text-sm">
                        Application-based recommendations
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                        <CheckCircle2 size={18} />
                      </div>

                      <span className="text-sm">
                        Fast response from our team
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* -------------------------------- */}
              {/* RIGHT SIDE */}
              {/* -------------------------------- */}
              <div className="max-h-[90vh] overflow-y-auto p-6 sm:p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="mb-7 pr-8">
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
                          Get In Touch
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900">
                          Talk to our experts
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          Share your requirement and we'll get back to you.
                        </p>
                      </div>

                      <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        {/* NAME + COMPANY */}
                        <div className="grid gap-4 sm:grid-cols-2">
                          {/* NAME */}
                          <div>
                            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                              Full Name
                              <span className="text-red-500"> *</span>
                            </label>

                            <div className="relative">
                              <User
                                size={17}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                              />

                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                                className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/10"
                              />
                            </div>
                          </div>

                          {/* COMPANY */}
                          <div>
                            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                              Company
                            </label>

                            <div className="relative">
                              <Building2
                                size={17}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                              />

                              <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Company name"
                                className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/10"
                              />
                            </div>
                          </div>
                        </div>

                        {/* EMAIL + PHONE */}
                        <div className="grid gap-4 sm:grid-cols-2">
                          {/* EMAIL */}
                          <div>
                            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                              Email
                              <span className="text-red-500"> *</span>
                            </label>

                            <div className="relative">
                              <Mail
                                size={17}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                              />

                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="you@company.com"
                                className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/10"
                              />
                            </div>
                          </div>

                          {/* PHONE */}
                          <div>
                            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                              Phone / WhatsApp
                              <span className="text-red-500"> *</span>
                            </label>

                            <div className="relative">
                              <Phone
                                size={17}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                              />

                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="+91 98765 43210"
                                className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/10"
                              />
                            </div>
                          </div>
                        </div>

                        {/* COUNTRY */}
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                            Country
                          </label>

                          <div className="relative">
                            <Globe2
                              size={17}
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                              type="text"
                              name="country"
                              value={formData.country}
                              onChange={handleChange}
                              placeholder="India"
                              className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/10"
                            />
                          </div>
                        </div>

                        {/* REQUIREMENT */}
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                            Your Requirement
                            <span className="text-red-500"> *</span>
                          </label>

                          <div className="relative">
                            <MessageSquare
                              size={17}
                              className="absolute left-3 top-3 text-gray-400"
                            />

                            <textarea
                              name="requirement"
                              value={formData.requirement}
                              onChange={handleChange}
                              required
                              rows={4}
                              placeholder="Tell us about your battery / energy requirement..."
                              className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-3 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/10"
                            />
                          </div>
                        </div>

                        {/* SUBMIT */}
                        <button
                          type="submit"
                          className="group mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-[0.99]"
                        >
                          Send Enquiry

                          <Send
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </button>

                        <p className="text-center text-[11px] leading-5 text-gray-400">
                          By submitting this form, you agree to be contacted
                          regarding your enquiry.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="flex min-h-[430px] flex-col items-center justify-center text-center"
                    >
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                        <CheckCircle2
                          size={34}
                          className="text-emerald-600"
                        />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900">
                        Thank You!
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                        Your enquiry has been received successfully. Our team
                        will get in touch with you shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;