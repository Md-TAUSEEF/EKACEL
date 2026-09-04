import { useLanguage } from "../context/LanguageContext.jsx";
import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Zap,
  ShieldCheck,
  BatteryCharging,
  Cpu,
} from "lucide-react";

import { products } from "../data/products";
const CART_KEY = "voltnova_cart";

export default function ProductDetails() {
  const { t } = useLanguage();
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.slug === slug);

  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState("description");

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-[30px] sm:px-[30px]">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
            <BatteryCharging size={28} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            {t("Product Not Found")}
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            {t("The product you're looking for could not be found.")}
          </p>

          <Link
            to="/products"
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-slate-950
              px-5
              py-3
              text-sm
              font-bold
              text-white
              transition-all
              hover:bg-teal-700
            "
          >
            <ArrowLeft size={16} />
            {t("Back to Products")}
          </Link>
        </div>
      </main>
    );
  }

  /* =====================================================
     RELATED PRODUCTS
  ====================================================== */

  const relatedProducts = useMemo(() => {
  if (!product) return [];

  const sameCategory = products.filter(
    (item) =>
      item.id !== product.id &&
      item.category === product.category,
  );

  const otherProducts = products.filter(
    (item) =>
      item.id !== product.id &&
      item.category !== product.category,
  );

  return [...sameCategory, ...otherProducts].slice(0, 3);
}, [product]);

if (!product) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-[30px] sm:px-[30px]">
      {/* tumhara existing not-found content */}
    </main>
  );
}

  /* =====================================================
     ADD TO CART
  ====================================================== */

  const addToCart = () => {
  try {
    const existingCart = JSON.parse(
      localStorage.getItem(CART_KEY) || "[]",
    );

    const existingProduct = existingCart.find(
      (item) => item.id === product.id,
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity:
                (Number(item.quantity) || 0) + quantity,
            }
          : item,
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          slug: product.slug,
          category: product.category,
          capacity: product.capacity,
          warranty: product.warranty,
          technology: product.technology,
        },
      ];
    }

    localStorage.setItem(
      CART_KEY,
      JSON.stringify(updatedCart),
    );

    // Navbar cart badge update
    window.dispatchEvent(
      new Event("cartUpdated"),
    );

    alert(t("Product added to cart."));
  } catch (error) {
    console.error("Failed to add product to cart:", error);
    alert(t("Unable to add product to cart."));
  }
};

  /* =====================================================
     BUY NOW
  ====================================================== */

 const buyNow = () => {
  const buyProduct = {
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.category,
    price: Number(product.price),
    image: product.image,
    quantity: Number(quantity || 1),
    capacity: product.capacity || "",
    warranty: product.warranty || "",
    technology: product.technology || "",
    voltage: product.voltage || "",
  };

  localStorage.setItem(
    "buyNowProduct",
    JSON.stringify(buyProduct)
  );

  navigate("/buy-now");
};

  /* =====================================================
     ACCORDION
  ====================================================== */

  const toggleSection = (section) => {
    setOpenSection((current) => (current === section ? null : section));
  };

  return (
    <main className="w-full bg-white">
      {/* =====================================================
          COMPACT PRODUCT HERO
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-slate-950">
        {/* TEAL GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            right-[5%]
            top-1/2
            h-64
            w-64
            -translate-y-1/2
            rounded-full
            bg-teal-400/15
            blur-[90px]
          "
        />

        {/* BACKGROUND GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_78%_35%,rgba(20,184,166,0.16),transparent_35%)]
          "
        />

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
          {/* BREADCRUMB */}

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <Link
              to="/"
              className="
                text-slate-400
                transition-colors
                hover:text-teal-400
              "
            >
              {t("Home")}
            </Link>

            <span className="text-slate-600">/</span>

            <Link
              to="/products"
              className="
                text-slate-400
                transition-colors
                hover:text-teal-400
              "
            >
              {t("Products")}
            </Link>

            <span className="text-slate-600">/</span>

            <span className="text-teal-400">{t(product.name)}</span>
          </div>

          {/* HERO CONTENT */}

          <div className="grid items-center gap-5 lg:grid-cols-[1fr_280px]">
            <div>
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-teal-400
                  sm:text-xs
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />

                {t(product.category)}
              </span>

              <h1
                className="
                  mt-2
                  text-2xl
                  font-bold
                  leading-[1.08]
                  tracking-[-0.02em]
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                {t(product.name)}
              </h1>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-6
                  text-slate-300
                  sm:leading-7
                "
              >
                {t(product.shortDescription)}
              </p>
            </div>

            {/* HERO PRODUCT IMAGE */}

            <div
              className="
                hidden
                h-28
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-sm
                lg:flex
              "
            >
              <img
                src={product.image}
                alt={t(product.name)}
                className="
                  h-full
                  max-w-full
                  object-contain
                  p-3
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT MAIN
      ====================================================== */}

      <section
        className="
    w-full
    bg-white
    px-[30px]
    py-10
    sm:px-[30px]
    sm:py-12
    lg:py-14
  "
      >
        <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-10">
          {/* =================================================
              PRODUCT IMAGE
          ================================================= */}

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div
              className="
                relative
                flex
                min-h-[340px]
                items-center
                justify-center
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-[0_10px_40px_rgba(15,23,42,0.05)]
                sm:min-h-[400px]
                sm:p-9
              "
            >
              {/* IMAGE GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-52
                  w-52
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-teal-400/10
                  blur-3xl
                "
              />

              {/* TOP BADGE */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  z-20
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-teal-100
                  bg-teal-50
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-teal-700
                "
              >
                <BatteryCharging size={13} />
                {t("Energy Solution")}
              </div>

              <img
                src={product.image}
                alt={t(product.name)}
                className="
                  relative
                  z-10
                  max-h-[340px]
                  max-w-full
                  object-contain
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* SMALL TRUST CARDS */}

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <BatteryCharging size={16} />
                </div>

                <p className="mt-2 text-[10px] font-bold text-slate-700">
                  {t("Reliable")}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <ShieldCheck size={16} />
                </div>

                <p className="mt-2 text-[10px] font-bold text-slate-700">
                  {t("Trusted")}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                  <Zap size={16} />
                </div>

                <p className="mt-2 text-[10px] font-bold text-slate-700">
                  {t("Efficient")}
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              PRODUCT INFO
          ================================================= */}

          <div>
            {/* RATING */}

            <div className="flex items-center gap-2">
              <div
                className="
                  flex
                  items-center
                  gap-1.5
                  rounded-lg
                  bg-amber-50
                  px-2.5
                  py-1.5
                "
              >
                <Star
                  size={15}
                  fill="currentColor"
                  className="text-amber-400"
                />

                <span className="text-sm font-bold text-slate-800">
                  {product.rating}
                </span>
              </div>

              <span className="text-sm text-slate-400">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* PRODUCT NAME */}

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                tracking-[-0.025em]
                text-slate-950
                sm:text-4xl
              "
            >
              {t(product.name)}
            </h2>

            <p
              className="
                mt-3
                max-w-xl
                text-sm
                leading-7
                text-slate-500
              "
            >
              {t(product.shortDescription)}
            </p>

            {/* =================================================
                PRICE
            ================================================= */}

            <div
              className="
                mt-5
                border-y
                border-slate-200
                py-5
              "
            >
              <span className="text-xs font-semibold text-slate-400">
                {t("Product Price")}
              </span>

              <div className="mt-1 flex flex-wrap items-end gap-3">
                <span className="text-3xl font-extrabold text-slate-950">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>

                <span className="pb-1 text-xs text-slate-400">
                  {t("Inclusive of standard pricing")}
                </span>
              </div>
            </div>

            {/* =================================================
                KEY SPECS
            ================================================= */}

            <div
              className="
                mt-5
                grid
                grid-cols-3
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
              "
            >
              <SpecBox
                title={t("Capacity")}
                value={product.capacity}
                icon={<BatteryCharging size={15} />}
                iconClass="bg-emerald-50 text-emerald-600"
              />

              <SpecBox
                title={t("Warranty")}
                value={t(product.warranty)}
                icon={<ShieldCheck size={15} />}
                iconClass="bg-blue-50 text-blue-600"
              />

              <SpecBox
                title={t("Technology")}
                value={t(product.technology)}
                icon={<Cpu size={15} />}
                iconClass="bg-violet-50 text-violet-600"
              />
            </div>

            {/* =================================================
                KEY BENEFITS
            ================================================= */}

            <div className="mt-6">
              <h3
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-400
                "
              >
                {t("Key Benefits")}
              </h3>

              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {product.features.slice(0, 4).map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-start
                      gap-2.5
                      rounded-xl
                      border
                      border-transparent
                      p-2
                      transition-colors
                      hover:border-teal-100
                      hover:bg-teal-50/50
                    "
                  >
                    <span
                      className="
                        mt-0.5
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-teal-50
                        text-teal-700
                      "
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>

                    <span
                      className="
                        text-sm
                        font-medium
                        leading-5
                        text-slate-600
                      "
                    >
                      {t(feature)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                QUANTITY
            ================================================= */}

            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm font-bold text-slate-700">
                {t("Quantity")}
              </span>

              <div
                className="
                  flex
                  items-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                "
              >
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    text-slate-600
                    transition-colors
                    hover:bg-teal-50
                    hover:text-teal-700
                  "
                >
                  <Minus size={15} />
                </button>

                <span
                  className="
                    flex
                    h-11
                    w-12
                    items-center
                    justify-center
                    border-x
                    border-slate-200
                    text-sm
                    font-bold
                    text-slate-900
                  "
                >
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    text-slate-600
                    transition-colors
                    hover:bg-teal-50
                    hover:text-teal-700
                  "
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {/* ADD TO CART */}

              <button
                onClick={addToCart}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-300
                  bg-white
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-slate-900
                  transition-all
                  hover:border-teal-600
                  hover:bg-teal-50
                  hover:text-teal-700
                "
              >
                <ShoppingCart
                  size={18}
                  className="transition-transform group-hover:scale-110"
                />
                {t("Add to Cart")}
              </button>

              {/* BUY NOW */}

              <button
                onClick={buyNow}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#F7D84A]
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-black
                  shadow-sm
                  transition-all
                  hover:bg-[#FFE36A]
                  hover:shadow-md
                "
              >
                Buy Now
                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            ACCORDION INFORMATION
        ====================================================== */}

        <div className="mt-12 border-t border-slate-200 pt-8 lg:mt-14">
          {/* DESCRIPTION */}

          <ProductAccordion
            title={t("Product Description")}
            icon={<BatteryCharging size={14} />}
            open={openSection === "description"}
            onClick={() => toggleSection("description")}
          >
            <p className="text-sm leading-7 text-slate-600">
              {t(product.description)}
            </p>
          </ProductAccordion>

          {/* FEATURES */}

          <ProductAccordion
            title={t("Features")}
            icon={<Zap size={14} />}
            open={openSection === "features"}
            onClick={() => toggleSection("features")}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-100
                    bg-slate-50
                    p-3.5
                    transition-colors
                    hover:border-teal-100
                    hover:bg-teal-50/40
                  "
                >
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-teal-50
                      text-teal-700
                    "
                  >
                    <Check size={14} strokeWidth={3} />
                  </span>

                  <span className="text-sm font-medium text-slate-600">
                    {t(feature)}
                  </span>
                </div>
              ))}
            </div>
          </ProductAccordion>

          {/* SPECIFICATION */}

          <ProductAccordion
            title={t("Specification")}
            icon={<Cpu size={14} />}
            open={openSection === "specification"}
            onClick={() => toggleSection("specification")}
          >
            <div className="overflow-hidden rounded-xl border border-slate-200">
              {product.specifications.map(([label, value], index) => (
                <div
                  key={label}
                  className={`
                      grid
                      grid-cols-2
                      px-4
                      py-3.5
                      text-sm
                      ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}
                    `}
                >
                  <span className="font-semibold text-slate-500">
                    {t(label)}
                  </span>

                  <span className="font-bold text-slate-900">{t(value)}</span>
                </div>
              ))}
            </div>
          </ProductAccordion>
        </div>

        {/* =====================================================
            RELATED PRODUCTS
        ====================================================== */}

        {relatedProducts.length > 0 && (
          <section className="mt-12 lg:mt-14">
            {/* HEADER */}

            <div className="mb-6 flex items-end justify-between">
              <div>
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-teal-700
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                  {t("You May Also Like")}
                </span>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    tracking-tight
                    text-slate-950
                    sm:text-3xl
                  "
                >
                  {t("Related Products")}
                </h2>
              </div>

              <Link
                to="/products"
                className="
                  hidden
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-teal-700
                  transition-colors
                  hover:text-teal-900
                  sm:flex
                "
              >
                View All
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* RELATED PRODUCT GRID */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.slug}`}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-teal-200
                    hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      h-44
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-xl
                      bg-gradient-to-br
                      from-slate-50
                      to-teal-50/50
                    "
                  >
                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-24
                        w-24
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-teal-400/10
                        blur-2xl
                      "
                    />

                    <img
                      src={item.image}
                      alt={t(item.name)}
                      className="
                        relative
                        z-10
                        max-h-full
                        max-w-full
                        object-contain
                        p-5
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="p-2 pt-4">
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-teal-700
                      "
                    >
                      {t(item.category)}
                    </p>

                    <h3
                      className="
                        mt-1.5
                        text-lg
                        font-bold
                        text-slate-900
                        transition-colors
                        group-hover:text-teal-700
                      "
                    >
                      {t(item.name)}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-lg font-extrabold text-slate-950">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-slate-950
                          text-white
                          transition-all
                          duration-300
                          group-hover:bg-teal-700
                        "
                      >
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

/* =========================================================
   SPEC BOX
========================================================= */

function SpecBox({ title, value, icon, iconClass }) {
  return (
    <div
      className="
        min-w-0
        border-r
        border-slate-200
        bg-slate-50
        p-3.5
        last:border-r-0
        sm:p-4
      "
    >
      <div
        className={`
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-lg
          ${iconClass}
        `}
      >
        {icon}
      </div>

      <p
        className="
          mt-2.5
          text-[10px]
          font-bold
          uppercase
          tracking-wider
          text-slate-400
        "
      >
        {title}
      </p>

      <p
        className="
          mt-1.5
          truncate
          text-sm
          font-extrabold
          text-slate-900
        "
      >
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   ACCORDION
========================================================= */

function ProductAccordion({ title, icon, open, onClick, children }) {
  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={onClick}
        className="
          flex
          w-full
          items-center
          justify-between
          py-4.5
          text-left
          transition-colors
        "
      >
        <span
          className="
            flex
            items-center
            gap-3
            text-base
            font-bold
            text-slate-900
          "
        >
          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              bg-teal-50
              text-teal-700
            "
          >
            {icon}
          </span>

          {title}
        </span>

        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-slate-50
            text-slate-400
            transition-all
          "
        >
          <ChevronDown
            size={17}
            className={`
              transition-transform
              duration-300
              ${open ? "rotate-180 text-teal-700" : ""}
            `}
          />
        </span>
      </button>

      {open && <div className="pb-5">{children}</div>}
    </div>
  );
}
