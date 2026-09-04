import { useLanguage } from "../context/LanguageContext.jsx";
import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  ShieldCheck,
  Truck,
  Headphones,
  BadgeCheck,
  PackageCheck,
  RotateCcw,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";

/* =========================================================
   CART STORAGE
========================================================= */

const CART_KEY = "voltnova_cart";

/* =========================================================
   EKACEL BRAND COLORS
========================================================= */

const BRAND_YELLOW = "#F7E135";
const BRAND_YELLOW_HOVER = "#EAB308";
const BRAND_TEAL = "#0F766E";

/* =========================================================
   READ CART
========================================================= */

const readCart = () => {
  try {
    const savedCart = localStorage.getItem(CART_KEY);

    if (!savedCart) {
      return [];
    }

    const parsedCart = JSON.parse(savedCart);

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    console.error("Failed to read cart:", error);
    return [];
  }
};

/* =========================================================
   SAVE CART
========================================================= */

const saveCart = (cart) => {
  try {
    localStorage.setItem(
      CART_KEY,
      JSON.stringify(cart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  } catch (error) {
    console.error("Failed to save cart:", error);
  }
};

/* =========================================================
   CART PAGE
========================================================= */

export default function Cart() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  /* =======================================================
     CART STATE

     IMPORTANT:
     We read the cart only once when Cart mounts.
     We DO NOT save automatically inside useEffect.
  ======================================================== */

  const [cartItems, setCartItems] = useState(
    () => readCart()
  );

  /* =======================================================
     SYNC CART FROM OTHER PAGES / TABS

     This only listens for changes.
     It does NOT save cart again when Cart mounts.
  ======================================================== */

  useEffect(() => {
    const syncCart = () => {
      setCartItems(readCart());
    };

    window.addEventListener(
      "cartUpdated",
      syncCart
    );

    window.addEventListener(
      "storage",
      syncCart
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        syncCart
      );

      window.removeEventListener(
        "storage",
        syncCart
      );
    };
  }, []);

  /* =======================================================
     UPDATE QUANTITY
  ======================================================== */

  const updateQuantity = (id, change) => {
    setCartItems((currentItems) => {
      const updatedItems = currentItems.map(
        (item) => {
          if (item.id !== id) {
            return item;
          }

          const currentQuantity =
            Number(item.quantity) || 1;

          return {
            ...item,
            quantity: Math.max(
              1,
              currentQuantity + change
            ),
          };
        }
      );

      saveCart(updatedItems);

      return updatedItems;
    });
  };

  /* =======================================================
     REMOVE ITEM
  ======================================================== */

  const removeItem = (id) => {
    setCartItems((currentItems) => {
      const updatedItems =
        currentItems.filter(
          (item) => item.id !== id
        );

      saveCart(updatedItems);

      return updatedItems;
    });
  };

  /* =======================================================
     CLEAR CART
  ======================================================== */

  const clearCart = () => {
    localStorage.removeItem(CART_KEY);

    setCartItems([]);

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  /* =======================================================
     ADD RELATED PRODUCT
  ======================================================== */

  const addRelatedProduct = (product) => {
    setCartItems((currentItems) => {
      const existingProduct =
        currentItems.find(
          (item) => item.id === product.id
        );

      let updatedItems;

      if (existingProduct) {
        updatedItems = currentItems.map(
          (item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity:
                    (Number(item.quantity) || 1) +
                    1,
                }
              : item
        );
      } else {
        updatedItems = [
          ...currentItems,
          {
            id: product.id,
            name: product.name,
            price: Number(product.price) || 0,
            image: product.image,
            quantity: 1,
            slug: product.slug,
            category: product.category,
            capacity: product.capacity,
            warranty: product.warranty,
            technology: product.technology,
            voltage: product.voltage,
          },
        ];
      }

      saveCart(updatedItems);

      return updatedItems;
    });
  };

  /* =======================================================
     TOTAL ITEMS
  ======================================================== */

  const totalItems = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total +
        (Number(item.quantity) || 1),
      0
    );
  }, [cartItems]);

  /* =======================================================
     SUBTOTAL
  ======================================================== */

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => {
        const price =
          Number(item.price) || 0;

        const quantity =
          Number(item.quantity) || 1;

        return total + price * quantity;
      },
      0
    );
  }, [cartItems]);

  /* =======================================================
     DELIVERY
  ======================================================== */

  const deliveryCharge =
    subtotal > 0 ? 0 : 0;

  /* =======================================================
     TOTAL
  ======================================================== */

  const total =
    subtotal + deliveryCharge;

  /* =======================================================
     FORMAT PRICE
  ======================================================== */

  const formatPrice = (price) => {
    const amount =
      Number(price) || 0;

    return `₹${amount.toLocaleString(
      "en-IN"
    )}`;
  };

  /* =======================================================
     RELATED PRODUCTS
  ======================================================== */

  const relatedProducts = useMemo(() => {
    const cartIds = new Set(
      cartItems.map((item) => item.id)
    );

    const cartCategories = new Set(
      cartItems.map(
        (item) => item.category
      )
    );

    const sameCategory =
      products.filter(
        (product) =>
          !cartIds.has(product.id) &&
          cartCategories.has(
            product.category
          )
      );

    const otherProducts =
      products.filter(
        (product) =>
          !cartIds.has(product.id) &&
          !cartCategories.has(
            product.category
          )
      );

    return [
      ...sameCategory,
      ...otherProducts,
    ].slice(0, 4);
  }, [cartItems]);

  /* =======================================================
     EMPTY CART
  ======================================================== */

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#f7f9f8] pt-24 sm:pt-28">

        {/* HEADER */}

        <section className="border-b border-slate-200 bg-white">
          <div className="w-full px-[30px] py-[30px]">

            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-teal-700">

              <span
                className="h-[3px] w-8"
                style={{
                  backgroundColor:
                    BRAND_TEAL,
                }}
              />

              {t("Shopping Cart")}

            </div>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              {t("Your Cart")}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">

              <Link
                to="/"
                className="transition-colors hover:text-teal-700"
              >
                {t("Home")}
              </Link>

              <span>/</span>

              <span className="font-semibold text-slate-900">
                {t("Cart")}
              </span>

            </div>

          </div>
        </section>

        {/* EMPTY STATE */}

        <section className="w-full px-[30px] py-[30px]">

          <div className="flex min-h-[420px] items-center justify-center">

            <div className="w-full max-w-xl border border-slate-200 bg-white p-8 text-center shadow-[0_15px_50px_rgba(15,23,42,0.06)] sm:p-12">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal-50">

                <ShoppingCart
                  size={34}
                  className="text-teal-700"
                />

              </div>

              <h2 className="mt-6 text-2xl font-extrabold text-slate-950">
                {t("Your cart is empty")}
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
                {t(
                  "Looks like you haven't added any products to your cart yet. Explore our battery and energy solutions and find the right product for your needs."
                )}
              </p>

              <Link
                to="/products"
                className="group mt-7 inline-flex items-center gap-3 px-6 py-3.5 text-sm font-extrabold text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/25"
                style={{
                  backgroundColor:
                    BRAND_YELLOW,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    BRAND_YELLOW_HOVER;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    BRAND_YELLOW;
                }}
              >

                {t("Explore Products")}

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

        </section>

      </main>
    );
  }

  /* =======================================================
     MAIN CART
  ======================================================== */

  return (
    <main className="min-h-screen bg-[#f7f9f8] pt-24 sm:pt-28">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="w-full px-[30px] py-[30px]">

          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-teal-700">

            <span
              className="h-[3px] w-8"
              style={{
                backgroundColor:
                  BRAND_TEAL,
              }}
            />

            {t("Shopping Cart")}

          </div>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                {t("Your Cart")}
              </h1>

              <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">

                <Link
                  to="/"
                  className="transition-colors hover:text-teal-700"
                >
                  {t("Home")}
                </Link>

                <span>/</span>

                <Link
                  to="/products"
                  className="transition-colors hover:text-teal-700"
                >
                  {t("Products")}
                </Link>

                <span>/</span>

                <span className="font-semibold text-slate-900">
                  {t("Cart")}
                </span>

              </div>

            </div>

            <div className="text-sm font-semibold text-slate-500">

              {totalItems}{" "}

              {totalItems === 1
                ? t("Item")
                : t("Items")}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CART TOP AREA
      ====================================================== */}

      <section className="w-full px-[30px] py-[30px]">

        <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-12">

          {/* =================================================
              LEFT — CART PRODUCTS
          ================================================== */}

          <div className="lg:col-span-8">

            <div className="border border-slate-200 bg-white">

              {/* HEADER */}

              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">

                <div>

                  <h2 className="text-lg font-extrabold text-slate-950">
                    {t("Cart Items")}
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    {t(
                      "Review your selected products before checkout."
                    )}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs font-bold text-red-500 transition-colors hover:text-red-700"
                >
                  {t("Clear Cart")}
                </button>

              </div>

              {/* ITEMS */}

              <div className="divide-y divide-slate-100">

                {cartItems.map((item) => {

                  const quantity =
                    Number(item.quantity) || 1;

                  const price =
                    Number(item.price) || 0;

                  const itemTotal =
                    price * quantity;

                  const canonicalProduct =
                    products.find(
                      (product) =>
                        product.id === item.id
                    );

                  const product =
                    canonicalProduct || item;

                  const productPath =
                    product.path ||
                    `/products/${
                      product.slug ||
                      product.id
                    }`;

                  return (
                    <div
                      key={item.id}
                      className="p-5 sm:p-6"
                    >

                      {/* PRODUCT INFORMATION */}

                      <div className="flex flex-col gap-5 sm:flex-row">

                        {/* IMAGE */}

                        <Link
                          to={productPath}
                          className="flex h-40 w-full shrink-0 items-center justify-center border border-slate-200 bg-slate-50 p-5 sm:h-36 sm:w-36"
                        >

                          <img
                            src={
                              product.image ||
                              product.img
                            }
                            alt={
                              product.name ||
                              product.id
                            }
                            className="max-h-full max-w-full object-contain"
                          />

                        </Link>

                        {/* INFO */}

                        <div className="min-w-0 flex-1">

                          <div className="flex items-start justify-between gap-3">

                            <div>

                              {product.category && (
                                <p className="mb-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-teal-700">
                                  {t(
                                    product.category
                                  )}
                                </p>
                              )}

                              <Link
                                to={productPath}
                                className="line-clamp-2 text-base font-extrabold text-slate-950 transition-colors hover:text-teal-700 sm:text-lg"
                              >
                                {product.name ||
                                  product.id}
                              </Link>

                              {product.technology && (
                                <p className="mt-1 text-xs text-slate-500">
                                  {
                                    product.technology
                                  }
                                </p>
                              )}

                            </div>

                            {/* REMOVE */}

                            <button
                              type="button"
                              onClick={() =>
                                removeItem(
                                  item.id
                                )
                              }
                              className="flex h-9 w-9 shrink-0 items-center justify-center border border-slate-200 text-slate-400 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                              aria-label={`${t(
                                "Remove"
                              )} ${
                                product.name ||
                                product.id
                              }`}
                            >
                              <Trash2 size={15} />
                            </button>

                          </div>

                          {/* SPECS */}

                          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">

                            {product.capacity && (
                              <div className="border border-slate-100 bg-slate-50 px-3 py-2.5">

                                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                  {t("Capacity")}
                                </p>

                                <p className="mt-1 text-xs font-extrabold text-slate-800">
                                  {
                                    product.capacity
                                  }
                                </p>

                              </div>
                            )}

                            {product.voltage && (
                              <div className="border border-slate-100 bg-slate-50 px-3 py-2.5">

                                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                  {t("Voltage")}
                                </p>

                                <p className="mt-1 text-xs font-extrabold text-slate-800">
                                  {
                                    product.voltage
                                  }
                                </p>

                              </div>
                            )}

                            {product.warranty && (
                              <div className="border border-teal-100 bg-teal-50/60 px-3 py-2.5">

                                <p className="text-[9px] font-bold uppercase tracking-wider text-teal-600">
                                  {t("Warranty")}
                                </p>

                                <p className="mt-1 text-xs font-extrabold text-teal-700">
                                  {t(
                                    product.warranty
                                  )}
                                </p>

                              </div>
                            )}

                            {product.technology && (
                              <div className="border border-slate-100 bg-slate-50 px-3 py-2.5">

                                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                  {t("Technology")}
                                </p>

                                <p className="mt-1 line-clamp-1 text-xs font-extrabold text-slate-800">
                                  {
                                    product.technology
                                  }
                                </p>

                              </div>
                            )}

                          </div>

                          {/* QUANTITY + PRICE */}

                          <div className="mt-5 flex flex-wrap items-end justify-between gap-5">

                            {/* QUANTITY */}

                            <div>

                              <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                {t("Quantity")}
                              </p>

                              <div className="flex h-10 items-center border border-slate-200">

                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      item.id,
                                      -1
                                    )
                                  }
                                  className="flex h-full w-10 items-center justify-center text-slate-500 transition-colors hover:bg-teal-50 hover:text-teal-700"
                                  aria-label={t(
                                    "Decrease quantity"
                                  )}
                                >
                                  <Minus size={15} />
                                </button>

                                <span className="flex h-full min-w-12 items-center justify-center border-x border-slate-200 px-3 text-sm font-extrabold text-slate-900">
                                  {quantity}
                                </span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      item.id,
                                      1
                                    )
                                  }
                                  className="flex h-full w-10 items-center justify-center text-slate-500 transition-colors hover:bg-teal-50 hover:text-teal-700"
                                  aria-label={t(
                                    "Increase quantity"
                                  )}
                                >
                                  <Plus size={15} />
                                </button>

                              </div>

                            </div>

                            {/* UNIT PRICE */}

                            <div className="text-right">

                              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                {t("Unit Price")}
                              </p>

                              <p className="mt-1 text-sm font-bold text-slate-600">
                                {formatPrice(price)}
                              </p>

                            </div>

                            {/* ITEM TOTAL */}

                            <div className="text-right">

                              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                {t("Item Total")}
                              </p>

                              <p className="mt-1 text-lg font-extrabold text-slate-950">
                                {formatPrice(
                                  itemTotal
                                )}
                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                      {/* PRODUCT SERVICES */}

                      <div className="mt-6 border-t border-slate-100 pt-5">

                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">

                          {/* WARRANTY */}

                          <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50">

                              <BadgeCheck
                                size={18}
                                className="text-teal-700"
                              />

                            </div>

                            <div>

                              <p className="text-[11px] font-extrabold text-slate-800">
                                {t(
                                  "Manufacturer Warranty"
                                )}
                              </p>

                              <p className="mt-0.5 text-[9px] text-slate-500">
                                {product.warranty
                                  ? t(
                                      product.warranty
                                    )
                                  : t(
                                      "Product Warranty"
                                    )}
                              </p>

                            </div>

                          </div>

                          {/* GENUINE */}

                          <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50">

                              <CheckCircle2
                                size={18}
                                className="text-teal-700"
                              />

                            </div>

                            <div>

                              <p className="text-[11px] font-extrabold text-slate-800">
                                {t(
                                  "Genuine Product"
                                )}
                              </p>

                              <p className="mt-0.5 text-[9px] text-slate-500">
                                {t(
                                  "Quality assured"
                                )}
                              </p>

                            </div>

                          </div>

                          {/* SUPPORT */}

                          <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50">

                              <Headphones
                                size={18}
                                className="text-teal-700"
                              />

                            </div>

                            <div>

                              <p className="text-[11px] font-extrabold text-slate-800">
                                {t(
                                  "Customer Support"
                                )}
                              </p>

                              <p className="mt-0.5 text-[9px] text-slate-500">
                                {t(
                                  "Expert assistance"
                                )}
                              </p>

                            </div>

                          </div>

                          {/* DELIVERY */}

                          <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50">

                              <Truck
                                size={18}
                                className="text-teal-700"
                              />

                            </div>

                            <div>

                              <p className="text-[11px] font-extrabold text-slate-800">
                                {t(
                                  "Reliable Delivery"
                                )}
                              </p>

                              <p className="mt-0.5 text-[9px] text-slate-500">
                                {t(
                                  "Safe product delivery"
                                )}
                              </p>

                            </div>

                          </div>

                          {/* PACKAGING */}

                          <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50">

                              <PackageCheck
                                size={18}
                                className="text-teal-700"
                              />

                            </div>

                            <div>

                              <p className="text-[11px] font-extrabold text-slate-800">
                                {t(
                                  "Secure Packaging"
                                )}
                              </p>

                              <p className="mt-0.5 text-[9px] text-slate-500">
                                {t(
                                  "Carefully handled"
                                )}
                              </p>

                            </div>

                          </div>

                          {/* AFTER SALES */}

                          <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50">

                              <RotateCcw
                                size={18}
                                className="text-teal-700"
                              />

                            </div>

                            <div>

                              <p className="text-[11px] font-extrabold text-slate-800">
                                {t(
                                  "After-Sales Support"
                                )}
                              </p>

                              <p className="mt-0.5 text-[9px] text-slate-500">
                                {t(
                                  "Support when you need it"
                                )}
                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* CONTINUE SHOPPING */}

            <Link
              to="/products"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition-colors hover:text-teal-700"
            >

              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />

              {t("Continue Shopping")}

            </Link>

          </div>

          {/* =================================================
              RIGHT — ORDER SUMMARY
          ================================================== */}

          <aside className="lg:col-span-4">

            <div className="sticky top-28 border border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.06)]">

              {/* HEADER */}

              <div className="border-b border-slate-200 px-5 py-5 sm:px-6">

                <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-teal-700">
                  {t("Order Summary")}
                </p>

                <h2 className="mt-1 text-xl font-extrabold text-slate-950">
                  {t("Checkout Summary")}
                </h2>

              </div>

              {/* PRICE */}

              <div className="space-y-4 px-5 py-5 sm:px-6">

                <div className="flex items-center justify-between text-sm">

                  <span className="text-slate-500">
                    {t("Items")}
                  </span>

                  <span className="font-bold text-slate-900">
                    {totalItems}
                  </span>

                </div>

                <div className="flex items-center justify-between text-sm">

                  <span className="text-slate-500">
                    {t("Subtotal")}
                  </span>

                  <span className="font-bold text-slate-900">
                    {formatPrice(subtotal)}
                  </span>

                </div>

                <div className="flex items-center justify-between text-sm">

                  <span className="text-slate-500">
                    {t("Delivery")}
                  </span>

                  <span className="font-bold text-teal-700">
                    {t("FREE")}
                  </span>

                </div>

                <div className="border-t border-dashed border-slate-200 pt-4">

                  <div className="flex items-end justify-between">

                    <span className="text-sm font-bold text-slate-700">
                      {t("Total")}
                    </span>

                    <span className="text-2xl font-extrabold text-slate-950">
                      {formatPrice(total)}
                    </span>

                  </div>

                </div>

                {/* BUY NOW */}

                <button
                  type="button"
                  onClick={() =>
                    navigate("/buy-now")
                  }
                  className="group flex w-full items-center justify-center gap-3 px-5 py-4 text-sm font-extrabold text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/25"
                  style={{
                    backgroundColor:
                      BRAND_YELLOW,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      BRAND_YELLOW_HOVER;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      BRAND_YELLOW;
                  }}
                >

                  {t("Proceed to Buy")}

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

                {/* SECURE CHECKOUT */}

                <div className="flex items-start gap-3 border border-teal-100 bg-teal-50/60 p-3">

                  <ShieldCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-teal-700"
                  />

                  <div>

                    <p className="text-xs font-extrabold text-slate-900">
                      {t("Secure Checkout")}
                    </p>

                    <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                      {t(
                        "Your order information is handled securely."
                      )}
                    </p>

                  </div>

                </div>

              </div>

              {/* WHY BUY FROM US */}

              <div className="border-t border-slate-100 bg-slate-50 px-5 py-5 sm:px-6">

                <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.22em] text-slate-400">
                  {t("Why Buy From Us")}
                </p>

                <div className="space-y-4">

                  {/* WARRANTY */}

                  <div className="flex items-center gap-3">

                    <BadgeCheck
                      size={17}
                      className="shrink-0 text-teal-700"
                    />

                    <div>

                      <p className="text-xs font-extrabold text-slate-800">
                        {t(
                          "Manufacturer Warranty"
                        )}
                      </p>

                      <p className="text-[10px] text-slate-500">
                        {t(
                          "Warranty support for eligible products."
                        )}
                      </p>

                    </div>

                  </div>

                  {/* SUPPORT */}

                  <div className="flex items-center gap-3">

                    <Headphones
                      size={17}
                      className="shrink-0 text-teal-700"
                    />

                    <div>

                      <p className="text-xs font-extrabold text-slate-800">
                        {t("Customer Support")}
                      </p>

                      <p className="text-[10px] text-slate-500">
                        {t(
                          "Expert assistance whenever you need it."
                        )}
                      </p>

                    </div>

                  </div>

                  {/* DELIVERY */}

                  <div className="flex items-center gap-3">

                    <Truck
                      size={17}
                      className="shrink-0 text-teal-700"
                    />

                    <div>

                      <p className="text-xs font-extrabold text-slate-800">
                        {t(
                          "Reliable Delivery"
                        )}
                      </p>

                      <p className="text-[10px] text-slate-500">
                        {t(
                          "Safe and reliable product delivery."
                        )}
                      </p>

                    </div>

                  </div>

                  {/* QUALITY */}

                  <div className="flex items-center gap-3">

                    <ShieldCheck
                      size={17}
                      className="shrink-0 text-teal-700"
                    />

                    <div>

                      <p className="text-xs font-extrabold text-slate-800">
                        {t("Quality Assured")}
                      </p>

                      <p className="text-[10px] text-slate-500">
                        {t(
                          "Products selected for dependable performance."
                        )}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </aside>

        </div>

      </section>

      {/* =====================================================
          RELATED PRODUCTS
      ====================================================== */}

      {relatedProducts.length > 0 && (
        <section className="w-full px-[30px] pb-[30px]">

          <div className="border-t border-slate-200 pt-[30px]">

            {/* HEADER */}

            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-teal-700">

                  <span
                    className="h-[3px] w-8"
                    style={{
                      backgroundColor:
                        BRAND_TEAL,
                    }}
                  />

                  {t("Recommended")}

                </div>

                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                  {t("You May Also Like")}
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  {t(
                    "Explore related products that may complement your energy requirements."
                  )}
                </p>

              </div>

              <Link
                to="/products"
                className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-teal-700"
              >

                {t("View All")}

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>

            {/* PRODUCT GRID */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {relatedProducts.map(
                (product) => {

                  const alreadyInCart =
                    cartItems.some(
                      (item) =>
                        item.id ===
                        product.id
                    );

                  return (
                    <div
                      key={product.id}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
                    >

                      {/* IMAGE */}

                      <Link
                        to={`/products/${product.slug}`}
                        className="relative flex h-48 items-center justify-center bg-slate-50 p-6"
                      >

                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* RATING */}

                        {product.rating && (
                          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-slate-700 shadow-sm">

                            <Star
                              size={11}
                              className="fill-current text-yellow-500"
                            />

                            {product.rating}

                          </div>
                        )}

                      </Link>

                      {/* CONTENT */}

                      <div className="p-5">

                        <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-teal-700">
                          {t(
                            product.category
                          )}
                        </p>

                        <Link
                          to={`/products/${product.slug}`}
                          className="mt-1 block line-clamp-2 text-sm font-extrabold text-slate-950 transition-colors hover:text-teal-700"
                        >
                          {product.name}
                        </Link>

                        {/* SPECS */}

                        <div className="mt-3 flex flex-wrap gap-2">

                          {product.capacity && (
                            <span className="rounded-md bg-slate-50 px-2 py-1 text-[9px] font-bold text-slate-600">
                              {
                                product.capacity
                              }
                            </span>
                          )}

                          {product.voltage && (
                            <span className="rounded-md bg-slate-50 px-2 py-1 text-[9px] font-bold text-slate-600">
                              {
                                product.voltage
                              }
                            </span>
                          )}

                          {product.warranty && (
                            <span className="rounded-md bg-teal-50 px-2 py-1 text-[9px] font-bold text-teal-700">
                              {
                                product.warranty
                              }
                            </span>
                          )}

                        </div>

                        {/* PRICE + BUTTON */}

                        <div className="mt-5 flex items-end justify-between gap-3">

                          <div>

                            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                              {t("Price")}
                            </p>

                            <p className="mt-0.5 text-lg font-extrabold text-slate-950">
                              {formatPrice(
                                product.price
                              )}
                            </p>

                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              addRelatedProduct(
                                product
                              )
                            }
                            className={`inline-flex items-center gap-2 px-3.5 py-2.5 text-[10px] font-extrabold text-black transition-all ${
                              alreadyInCart
                                ? "bg-teal-50 !text-teal-700 hover:bg-teal-100"
                                : "shadow-md shadow-yellow-500/10 hover:shadow-lg hover:shadow-yellow-500/20"
                            }`}
                            style={
                              alreadyInCart
                                ? undefined
                                : {
                                    backgroundColor:
                                      BRAND_YELLOW,
                                  }
                            }
                            onMouseEnter={(e) => {
                              if (
                                !alreadyInCart
                              ) {
                                e.currentTarget.style.backgroundColor =
                                  BRAND_YELLOW_HOVER;
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (
                                !alreadyInCart
                              ) {
                                e.currentTarget.style.backgroundColor =
                                  BRAND_YELLOW;
                              }
                            }}
                          >

                            <ShoppingCart
                              size={14}
                            />

                            {alreadyInCart
                              ? t("Add More")
                              : t(
                                  "Add to Cart"
                                )}

                          </button>

                        </div>

                      </div>

                    </div>
                  );
                }
              )}

            </div>

          </div>

        </section>
      )}

    </main>
  );
}