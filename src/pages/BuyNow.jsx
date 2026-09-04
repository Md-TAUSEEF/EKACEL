import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  PackageCheck,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { products } from "../data/products";

const BUY_NOW_KEY = "buyNowProduct";
const ORDERS_KEY = "orders";
const CART_KEY = "voltnova_cart";

export default function BuyNow() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  /* =========================================================
     LOAD BUY NOW PRODUCT
  ========================================================= */

  useEffect(() => {
    try {
      const storedProduct = localStorage.getItem(BUY_NOW_KEY);

      if (storedProduct) {
        const parsedProduct = JSON.parse(storedProduct);
        setProduct(parsedProduct);
      }
    } catch (error) {
      console.error("Failed to load Buy Now product:", error);
      setProduct(null);
    }
  }, []);

  /* =========================================================
     RELATED PRODUCTS
  ========================================================= */

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    const sameCategory = products.filter(
      (item) =>
        item.id !== product.id &&
        item.category === product.category
    );

    const otherProducts = products.filter(
      (item) =>
        item.id !== product.id &&
        item.category !== product.category
    );

    return [...sameCategory, ...otherProducts].slice(0, 4);
  }, [product]);

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     ADD RELATED PRODUCT TO CART
  ========================================================= */

  const addToCart = (relatedProduct) => {
    try {
      const existingCart = JSON.parse(
        localStorage.getItem(CART_KEY) || "[]"
      );

      const existingIndex = existingCart.findIndex(
        (item) => item.id === relatedProduct.id
      );

      let updatedCart;

      if (existingIndex !== -1) {
        updatedCart = existingCart.map((item, index) =>
          index === existingIndex
            ? {
                ...item,
                quantity: Number(item.quantity || 1) + 1,
              }
            : item
        );
      } else {
        updatedCart = [
          ...existingCart,
          {
            ...relatedProduct,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        CART_KEY,
        JSON.stringify(updatedCart)
      );

      // Navbar / Cart sync
      window.dispatchEvent(new Event("cartUpdated"));

      alert(`${relatedProduct.name} added to cart.`);
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  /* =========================================================
     CREATE ORDER
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product) {
      return;
    }

    const orderId = `ORD-${Date.now()}`;

    const order = {
      id: orderId,

      product: {
        id: product.id,
        name: product.name,
        slug: product.slug,
        category: product.category,
        price: Number(product.price),
        image: product.image,
        quantity: Number(product.quantity || 1),
        capacity: product.capacity || "",
        warranty: product.warranty || "",
        technology: product.technology || "",
        voltage: product.voltage || "",
      },

      customer: {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        address: form.address.trim(),
        city: form.city.trim(),
        state: form.state.trim(),
        pincode: form.pincode.trim(),
      },

      pricing: {
        subtotal:
          Number(product.price) *
          Number(product.quantity || 1),

        delivery: 0,

        total:
          Number(product.price) *
          Number(product.quantity || 1),
      },

      status: "Order Placed",

      paymentStatus: "Pending",

      createdAt: new Date().toISOString(),
    };

    /* =======================================================
       SAVE ORDER
    ======================================================= */

    try {
      const existingOrders = JSON.parse(
        localStorage.getItem(ORDERS_KEY) || "[]"
      );

      const updatedOrders = [
        order,
        ...existingOrders,
      ];

      localStorage.setItem(
        ORDERS_KEY,
        JSON.stringify(updatedOrders)
      );

      /*
        Buy Now temporary product remove
      */
     window.dispatchEvent(new Event("ordersUpdated"));

      localStorage.removeItem(BUY_NOW_KEY);

      /*
        SUCCESS ALERT
      */

      alert(
        `Order placed successfully!\n\nThank you, ${
          form.name.trim() || "Customer"
        }.\n\nOrder ID: ${orderId}`
      );

      /*
        Alert OK ke baad Order Success page
      */

      navigate("/order-success", {
        state: {
          orderId,
          customerName: form.name.trim(),
          productName: product.name,
          quantity: Number(product.quantity || 1),
          total:
            Number(product.price) *
            Number(product.quantity || 1),
        },
      });
    } catch (error) {
      console.error("Failed to create order:", error);

      alert(
        "Something went wrong while placing your order."
      );
    }
  };

  /* =========================================================
     NO PRODUCT
  ========================================================= */

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-[30px]">
        <div className="text-center">

          <ShoppingBag
            size={48}
            className="mx-auto text-slate-300"
          />

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            {t("No Product Selected")}
          </h1>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            {t(
              "Please select a product before continuing with your order."
            )}
          </p>

          <Link
            to="/products"
            className="
              mt-6
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
              transition
              hover:bg-teal-700
            "
          >
            <ArrowLeft size={16} />
            {t("Browse Products")}
          </Link>

        </div>
      </main>
    );
  }

  const quantity = Number(product.quantity || 1);
  const price = Number(product.price || 0);
  const total = price * quantity;

  return (
    <main className="min-h-screen bg-[#f7f9f8]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="bg-slate-950">

        <div className="w-full px-[30px] py-10 sm:px-[30px] sm:py-12">

          <Link
            to={`/products/${product.slug}`}
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              font-semibold
              text-slate-400
              transition
              hover:text-white
            "
          >
            <ArrowLeft size={14} />
            {t("Back to Product")}
          </Link>

          <div className="mt-6">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-400">
              {t("Secure Checkout")}
            </p>

            <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              {t("Complete Your Order")}
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              {t(
                "Enter your details to continue with your purchase."
              )}
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="w-full px-[30px] py-12 sm:px-[30px] sm:py-14 lg:py-16">

        <div className="grid gap-8 lg:grid-cols-12">

          {/* =================================================
              PRODUCT SUMMARY
          ================================================= */}

          <div className="lg:col-span-5">

            <div className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              {/* PRODUCT IMAGE */}

              <div className="
                flex
                h-64
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                bg-slate-50
              ">

                <img
                  src={product.image}
                  alt={t(product.name)}
                  className="
                    max-h-full
                    max-w-full
                    object-contain
                    p-7
                  "
                />

              </div>

              {/* CATEGORY */}

              <p className="
                mt-5
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-teal-700
              ">
                {t(product.category)}
              </p>

              {/* NAME */}

              <h2 className="
                mt-2
                text-xl
                font-bold
                leading-snug
                text-slate-900
              ">
                {t(product.name)}
              </h2>

              {/* PRODUCT INFO */}

              <div className="
                mt-5
                grid
                grid-cols-2
                gap-3
                border-t
                border-slate-100
                pt-5
              ">

                {product.capacity && (
                  <ProductInfo
                    label="Capacity"
                    value={product.capacity}
                  />
                )}

                {product.voltage && (
                  <ProductInfo
                    label="Voltage"
                    value={product.voltage}
                  />
                )}

                {product.warranty && (
                  <ProductInfo
                    label="Warranty"
                    value={product.warranty}
                  />
                )}

                {product.technology && (
                  <ProductInfo
                    label="Technology"
                    value={product.technology}
                  />
                )}

              </div>

              {/* QUANTITY + TOTAL */}

              <div className="mt-5 space-y-3">

                <div className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  bg-slate-50
                  px-4
                  py-3
                ">

                  <span className="text-sm text-slate-500">
                    {t("Quantity")}
                  </span>

                  <span className="font-bold text-slate-900">
                    {quantity}
                  </span>

                </div>

                <div className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-teal-100
                  bg-teal-50
                  px-4
                  py-4
                ">

                  <span className="text-sm font-medium text-slate-600">
                    {t("Total")}
                  </span>

                  <span className="text-xl font-extrabold text-slate-950">
                    ₹{total.toLocaleString("en-IN")}
                  </span>

                </div>

              </div>

              {/* TRUST POINTS */}

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Check
                    size={15}
                    className="shrink-0 text-teal-700"
                  />
                  {t("Secure order process")}
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck
                    size={15}
                    className="shrink-0 text-teal-700"
                  />
                  {t("Product warranty included")}
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <PackageCheck
                    size={15}
                    className="shrink-0 text-teal-700"
                  />
                  {t("Reliable product delivery")}
                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <form
            onSubmit={handleSubmit}
            className="
              lg:col-span-7
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:p-7
            "
          >

            {/* FORM HEADER */}

            <div className="mb-7">

              <p className="
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-teal-700
              ">
                {t("Delivery Details")}
              </p>

              <h2 className="mt-2 text-xl font-bold text-slate-900">
                {t("Delivery Information")}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {t(
                  "Please provide your contact and delivery details."
                )}
              </p>

            </div>

            {/* FORM FIELDS */}

            <div className="grid gap-5 sm:grid-cols-2">

              <Input
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                t={t}
              />

              <Input
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                t={t}
              />

              <Input
                label="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                t={t}
              />

              <Input
                label="City"
                name="city"
                value={form.city}
                onChange={handleChange}
                required
                t={t}
              />

              <div className="sm:col-span-2">

                <Input
                  label="Delivery Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  t={t}
                />

              </div>

              <Input
                label="State"
                name="state"
                value={form.state}
                onChange={handleChange}
                required
                t={t}
              />

              <Input
                label="PIN Code"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                required
                t={t}
              />

            </div>

            {/* DELIVERY NOTICE */}

            <div className="
              mt-7
              rounded-xl
              border
              border-teal-100
              bg-teal-50
              p-4
            ">

              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-teal-700"
                />

                <div>

                  <p className="text-sm font-semibold text-slate-800">
                    {t("Delivery Information")}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {t(
                      "Your delivery details will be used only for processing your order. Payment gateway and backend order processing can be connected later."
                    )}
                  </p>

                </div>

              </div>

            </div>

            {/* ORDER TOTAL */}

            <div className="
              mt-6
              flex
              items-center
              justify-between
              border-t
              border-slate-100
              pt-6
            ">

              <div>

                <p className="text-xs text-slate-500">
                  {t("Order Total")}
                </p>

                <p className="mt-1 text-2xl font-extrabold text-slate-950">
                  ₹{total.toLocaleString("en-IN")}
                </p>

              </div>

              <div className="text-right">

                <p className="text-xs text-slate-500">
                  {t("Delivery")}
                </p>

                <p className="mt-1 text-sm font-bold text-teal-700">
                  {t("Free")}
                </p>

              </div>

            </div>

            {/* CONFIRM BUTTON */}

            <button
              type="submit"
              className="
                mt-6
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#F7E135]
                py-4
                text-sm
                font-bold
                text-slate-950
                transition
                hover:bg-[#eab308]
                active:scale-[0.99]
              "
            >
              {t("Confirm Order")}
              <Check size={17} />
            </button>

          </form>

        </div>

        {/* =====================================================
            RELATED PRODUCTS
        ===================================================== */}

        {relatedProducts.length > 0 && (
          <section className="mt-14">

            <div className="mb-7">
              <p className="
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-teal-700
              ">
                {t("You May Also Like")}
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                {t("Related Products")}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {t(
                  "Add another product to your cart before completing your purchase."
                )}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  {/* IMAGE */}

                  <div className="
                    flex
                    h-52
                    items-center
                    justify-center
                    overflow-hidden
                    bg-slate-50
                    p-6
                  ">
                    <img
                      src={item.image}
                      alt={t(item.name)}
                      className="
                        h-full
                        w-full
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* CONTENT */}

                  <div className="p-4">

                    <p className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-teal-700
                    ">
                      {t(item.category)}
                    </p>

                    <h3 className="
                      mt-2
                      min-h-[42px]
                      text-sm
                      font-bold
                      leading-5
                      text-slate-900
                    ">
                      {t(item.name)}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">

                      <p className="text-lg font-extrabold text-teal-700">
                        ₹{Number(item.price).toLocaleString("en-IN")}
                      </p>

                      {item.warranty && (
                        <span className="text-[10px] font-semibold text-slate-400">
                          {item.warranty}
                        </span>
                      )}

                    </div>

                    {/* ADD TO CART */}

                    <button
                      type="button"
                      onClick={() => addToCart(item)}
                      className="
                        mt-4
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-teal-200
                        bg-teal-50
                        px-4
                        py-3
                        text-xs
                        font-bold
                        text-teal-700
                        transition
                        hover:bg-teal-700
                        hover:text-white
                      "
                    >
                      <ShoppingCart size={15} />
                      {t("Add to Cart")}
                    </button>

                  </div>

                </div>
              ))}

            </div>
          </section>
        )}

      </section>

    </main>
  );
}

/* =========================================================
   INPUT COMPONENT
========================================================= */

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  t,
}) {
  return (
    <div>

      <label className="mb-2 block text-xs font-bold text-slate-700">
        {t(label)}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          h-12
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          px-4
          text-sm
          text-slate-900
          outline-none
          transition
          placeholder:text-slate-400
          focus:border-teal-500
          focus:ring-2
          focus:ring-teal-500/10
        "
      />

    </div>
  );
}

/* =========================================================
   PRODUCT INFO
========================================================= */

function ProductInfo({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">

      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-xs font-bold text-slate-800">
        {value}
      </p>

    </div>
  );
}