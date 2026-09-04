import { useLanguage } from "../context/LanguageContext.jsx";

import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Search,
  SlidersHorizontal,
  Star,
  X,
  BatteryCharging,
  Zap,
  ShieldCheck,
} from "lucide-react";

import { categories, products } from "../data/products";

export default function Products() {
  const { t } = useLanguage();
  /* =====================================================
     CATEGORY FROM URL
  ====================================================== */

  const location = useLocation();

  const categorySlug = location.pathname.startsWith("/products/")
    ? location.pathname.split("/")[2]
    : null;

  const categoryMap = {
    automotive: "Automotive Battery",
    inverter: "Inverter Battery",
    "e-rickshaw": "E-Rickshaw Battery",
    solar: "Solar Battery",
    lithium: "Lithium Battery",
    industrial: "Industrial Battery",
    ev: "EV Battery",
    "energy-storage": "Energy Storage",
    telecom: "Telecom Battery",
    "critical-power": "Critical Power",
  };

  const initialCategory =
    categorySlug && categoryMap[categorySlug]
      ? categoryMap[categorySlug]
      : "All";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [budget, setBudget] = useState("all");
  const [rating, setRating] = useState("all");
  const [sort, setSort] = useState("featured");
  const [mobileFilter, setMobileFilter] = useState(false);

  /* =====================================================
     SET CATEGORY FROM URL
  ====================================================== */

  useEffect(() => {
    if (categorySlug && categoryMap[categorySlug]) {
      setCategory(categoryMap[categorySlug]);
    } else {
      setCategory("All");
    }
  }, [categorySlug]);

  /* =====================================================
     FILTER PRODUCTS
  ====================================================== */

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }

    if (budget === "under-15000") {
      result = result.filter((product) => product.price < 15000);
    }

    if (budget === "15000-25000") {
      result = result.filter(
        (product) => product.price >= 15000 && product.price <= 25000,
      );
    }

    if (budget === "above-25000") {
      result = result.filter((product) => product.price > 25000);
    }

    if (rating === "4.5") {
      result = result.filter((product) => product.rating >= 4.5);
    }

    if (rating === "4") {
      result = result.filter((product) => product.rating >= 4);
    }

    if (sort === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, budget, rating, sort]);

  /* =====================================================
     CLEAR FILTERS
  ====================================================== */

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setBudget("all");
    setRating("all");
    setSort("featured");
  };

  return (
    <main className="w-full bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-white">
        {/* BACKGROUND IMAGE */}

        <img
          src="/images/hero-4.png"
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

        {/* DARK OVERLAY */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-black/90
            via-black/75
            via-[48%]
            to-black/25
          "
        />

        {/* TEAL GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            right-[5%]
            top-1/2
            hidden
            h-72
            w-72
            -translate-y-1/2
            rounded-full
            bg-teal-400/15
            blur-[90px]
            lg:block
          "
        />

        {/* HERO CONTENT */}

        <div
          className="
            relative
            flex
            w-full
            flex-col
            gap-2
            px-[20px]
            py-4
            sm:px-[20px]
            sm:py-6
            lg:gap-3
            lg:py-7
          "
        >
          {/* BREADCRUMB */}

          <div className="flex items-center gap-2 text-xs font-semibold text-white/55">
            <Link
              to="/"
              className="transition-colors duration-200 hover:text-teal-400"
            >{t("Home" )}</Link>

            <span>/</span>

            <span className="text-teal-400">{t("Products" )}</span>
          </div>

          {/* HERO CONTENT */}

          <div className="max-w-3xl">
            <span
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-teal-400
                sm:text-sm
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />{t("Our Product Range" )}</span>

            <h1
              className="
                mt-1.5
                text-3xl
                font-bold
                leading-[1.05]
                tracking-[-0.03em]
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >{t("Advanced Energy Products" )}</h1>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-white/70
                sm:text-base
                sm:leading-7
              "
            >{t("Explore our range of reliable battery and energy solutions engineered for homes, mobility, solar, commercial and industrial applications." )}</p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT AREA
      ====================================================== */}

      <section
        className="
          w-full
          px-[20px]
          py-7
          sm:px-[20px]
          sm:py-8
          lg:py-9
        "
      >
        <div className="grid w-full gap-5 lg:grid-cols-[220px_1fr]">
          {/* =================================================
              DESKTOP FILTER
          ================================================= */}

          <aside className="hidden lg:block">
            <div
              className="
                sticky
                top-24
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-[0_10px_35px_rgba(15,23,42,0.06)]
              "
            >
              {/* FILTER HEADER */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-xl
                      bg-teal-50
                      text-teal-700
                    "
                  >
                    <SlidersHorizontal size={16} />
                  </span>

                  <h3 className="text-sm font-bold text-slate-900">{t("Filters" )}</h3>
                </div>

                <button
                  onClick={clearFilters}
                  className="
                    text-xs
                    font-bold
                    text-teal-700
                    transition-colors
                    hover:text-teal-900
                  "
                >{t("Clear" )}</button>
              </div>

              <FilterContent
                category={category}
                setCategory={setCategory}
                budget={budget}
                setBudget={setBudget}
                rating={rating}
                setRating={setRating}
              />
            </div>
          </aside>

          {/* =================================================
              PRODUCTS CONTENT
          ================================================= */}

          <div className="min-w-0">
            {/* SEARCH + SORT */}

            <div className="mb-4 flex flex-col gap-2.5 sm:flex-row">
              {/* SEARCH */}

              <div className="relative flex-1">
                <Search
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t("Search products...")}
                  className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    pl-11
                    pr-4
                    text-sm
                    text-slate-900
                    shadow-sm
                    outline-none
                    transition-all
                    placeholder:text-slate-400
                    focus:border-teal-500
                    focus:ring-2
                    focus:ring-teal-500/10
                  "
                />
              </div>

              {/* MOBILE FILTER */}

              <button
                onClick={() => setMobileFilter(true)}
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  text-sm
                  font-bold
                  text-slate-700
                  shadow-sm
                  transition-all
                  hover:border-teal-200
                  hover:text-teal-700
                  lg:hidden
                "
              >
                <SlidersHorizontal size={17} />{t("Filters" )}</button>

              {/* SORT */}

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="
                    h-11
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    pr-10
                    text-sm
                    font-semibold
                    text-slate-700
                    shadow-sm
                    outline-none
                    transition-all
                    focus:border-teal-500
                    focus:ring-2
                    focus:ring-teal-500/10
                    sm:w-48
                  "
                >
                  <option value="featured">{t("Sort: Featured" )}</option>
                  <option value="name-asc">{t("Name: A–Z" )}</option>
                  <option value="price-low">{t("Price: Low to High" )}</option>
                  <option value="price-high">{t("Price: High to Low" )}</option>
                  <option value="rating">{t("Rating" )}</option>
                </select>

                <ChevronDown
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />
              </div>
            </div>

            {/* RESULT COUNT */}

            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  {filteredProducts.length} Products
                </p>

                <p className="mt-0.5 text-xs text-slate-500">{t("Find the right energy solution for your needs" )}</p>
              </div>
            </div>

            {/* =================================================
                PRODUCT GRID
            ================================================= */}

            {filteredProducts.length > 0 ? (
              <div
                className="
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                  xl:grid-cols-3
                "
              >
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.slug}`}
                    className="
                      group
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      shadow-[0_6px_25px_rgba(15,23,42,0.04)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-teal-200
                      hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]
                    "
                  >
                    {/* =================================================
                        PRODUCT IMAGE AREA
                    ================================================== */}

                    <div
                      className="
                        relative
                        h-64
                        w-full
                        overflow-hidden
                        bg-gradient-to-br
                        from-slate-50
                        via-white
                        to-teal-50/40
                      "
                    >
                      {/* IMAGE GLOW */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          left-1/2
                          top-1/2
                          h-40
                          w-40
                          -translate-x-1/2
                          -translate-y-1/2
                          rounded-full
                          bg-teal-400/10
                          blur-3xl
                        "
                      />

                      {/* =================================================
                          PRODUCT NAME OVER IMAGE
                      ================================================== */}

                      <div
                        className="
                          absolute
                          left-0
                          right-0
                          top-0
                          z-20
                          bg-gradient-to-b
                          from-slate-950/80
                          via-slate-950/35
                          to-transparent
                          px-4
                          pb-8
                          pt-4
                        "
                      >
                        <h3
                          className="
                            pr-2
                            text-base
                            font-extrabold
                            leading-tight
                            text-white
                            drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]
                            transition-colors
                            group-hover:text-teal-200
                          "
                        >
                          {t(product.name)}
                        </h3>
                      </div>

                      {/* =================================================
                          CATEGORY
                      ================================================== */}

                      <span
                        className="
                          absolute
                          bottom-3
                          left-3
                          z-20
                          max-w-[80%]
                          rounded-full
                          border
                          border-teal-100
                          bg-white/95
                          px-3
                          py-1.5
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-teal-700
                          shadow-sm
                        "
                      >
                        {t(product.category)}
                      </span>

                      {/* =================================================
                          PRODUCT IMAGE
                      ================================================== */}

                      <div
                        className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          px-5
                          pb-2
                          pt-10
                        "
                      >
                        <img
                          src={product.image}
                          alt={t(product.name)}
                          className="
                            relative
                            z-10
                            h-full
                            w-full
                            object-contain
                            object-center
                            transition-transform
                            duration-500
                            ease-out
                            group-hover:scale-[1.04]
                          "
                        />
                      </div>
                    </div>

                    {/* =================================================
                        PRODUCT CONTENT
                    ================================================== */}

                    <div className="p-4">
                      {/* RATING */}

                      <div className="mb-2 flex items-center gap-1.5">
                        <span
                          className="
                            flex
                            h-6
                            w-6
                            items-center
                            justify-center
                            rounded-lg
                            bg-amber-50
                            text-amber-500
                          "
                        >
                          <Star size={13} fill="currentColor" />
                        </span>

                        <span className="text-xs font-bold text-slate-700">
                          {product.rating}
                        </span>

                        <span className="text-xs text-slate-400">
                          ({product.reviews})
                        </span>
                      </div>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          line-clamp-2
                          text-sm
                          leading-6
                          text-slate-500
                        "
                      >
                        {t(product.shortDescription)}
                      </p>

                      {/* PRICE + ACTION */}

                      <div className="mt-3 flex items-end justify-between">
                        <div>
                          <span className="text-[11px] font-medium text-slate-400">{t("Starting from" )}</span>

                          <p className="mt-0.5 text-xl font-extrabold text-slate-950">
                            ₹{product.price.toLocaleString("en-IN")}
                          </p>
                        </div>

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
                            group-hover:shadow-lg
                            group-hover:shadow-teal-700/20
                          "
                        >
                          <ArrowRight
                            size={17}
                            className="
                              transition-transform
                              duration-300
                              group-hover:translate-x-0.5
                            "
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              /* =================================================
                 NO PRODUCTS
              ================================================= */

              <div
                className="
                  rounded-2xl
                  border
                  border-dashed
                  border-slate-300
                  bg-white
                  px-5
                  py-12
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-teal-50
                    text-teal-700
                  "
                >
                  <BatteryCharging size={25} />
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">{t("No products found" )}</h3>

                <p className="mt-2 text-sm text-slate-500">{t("Try changing your search or filters." )}</p>

                <button
                  onClick={clearFilters}
                  className="
                    mt-4
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
                >{t("Clear Filters" )}</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE FILTER DRAWER
      ====================================================== */}

      {mobileFilter && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          {/* BACKDROP */}

          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setMobileFilter(false)}
          />

          {/* DRAWER */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              max-h-[85vh]
              overflow-y-auto
              rounded-t-3xl
              border-t
              border-teal-100
              bg-white
              p-5
              shadow-[0_-20px_60px_rgba(15,23,42,0.20)]
            "
          >
            {/* DRAWER HEADER */}

            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-teal-50
                    text-teal-700
                  "
                >
                  <SlidersHorizontal size={17} />
                </span>

                <h3 className="text-lg font-bold text-slate-900">{t("Filters" )}</h3>
              </div>

              <button
                onClick={() => setMobileFilter(false)}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-100
                  text-slate-600
                  transition-all
                  hover:bg-teal-50
                  hover:text-teal-700
                "
              >
                <X size={18} />
              </button>
            </div>

            <FilterContent
              category={category}
              setCategory={setCategory}
              budget={budget}
              setBudget={setBudget}
              rating={rating}
              setRating={setRating}
            />

            {/* APPLY */}

            <button
              onClick={() => setMobileFilter(false)}
              className="
                mt-5
                w-full
                rounded-xl
                bg-teal-700
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-teal-700/15
                transition-all
                hover:bg-teal-800
              "
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

/* =========================================================
   FILTER CONTENT
========================================================= */

function FilterContent({
  category,
  setCategory,
  budget,
  setBudget,
  rating,
  setRating,
}) {
  const { t } = useLanguage();
  return (
    <div className="mt-5 space-y-5">
      {/* =====================================================
          CATEGORY
      ====================================================== */}

      <div>
        <label
          className="
            mb-2.5
            block
            text-[11px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-slate-400
          "
        >{t("Category" )}</label>

        <div className="space-y-1">
          {categories.map((item) => (
            <label
              key={item}
              className="
                group
                flex
                cursor-pointer
                items-center
                gap-3
                rounded-lg
                px-2
                py-1.5
                text-sm
                text-slate-700
                transition-colors
                hover:bg-teal-50
                hover:text-teal-800
              "
            >
              <input
                type="radio"
                name="category"
                checked={category === item}
                onChange={() => setCategory(item)}
                className="accent-teal-600"
              />

              <span className="flex-1">{t(item)}</span>
            </label>
          ))}
        </div>
      </div>

      {/* =====================================================
          BUDGET
      ====================================================== */}

      <div>
        <label
          className="
            mb-2.5
            block
            text-[11px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-slate-400
          "
        >{t("Budget" )}</label>

        <div className="relative">
          <Zap
            size={15}
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-amber-500
            "
          />

          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              py-2.5
              pl-9
              pr-3
              text-sm
              font-medium
              text-slate-700
              outline-none
              transition-all
              focus:border-teal-500
              focus:ring-2
              focus:ring-teal-500/10
            "
          >
            <option value="all">{t("All Prices" )}</option>

            <option value="under-15000">{t("Under ₹15,000" )}</option>

            <option value="15000-25000">₹15,000 – ₹25,000</option>

            <option value="above-25000">{t("Above ₹25,000" )}</option>
          </select>
        </div>
      </div>

      {/* =====================================================
          RATING
      ====================================================== */}

      <div>
        <label
          className="
            mb-2.5
            block
            text-[11px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-slate-400
          "
        >{t("Rating" )}</label>

        <div className="space-y-1">
          {/* ALL */}

          <label
            className="
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-lg
              px-2
              py-1.5
              text-sm
              text-slate-700
              transition-colors
              hover:bg-teal-50
            "
          >
            <input
              type="radio"
              name="rating"
              checked={rating === "all"}
              onChange={() => setRating("all")}
              className="accent-teal-600"
            />

            All Ratings
          </label>

          {/* 4.5 */}

          <label
            className="
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-lg
              px-2
              py-1.5
              text-sm
              text-slate-700
              transition-colors
              hover:bg-teal-50
            "
          >
            <input
              type="radio"
              name="rating"
              checked={rating === "4.5"}
              onChange={() => setRating("4.5")}
              className="accent-teal-600"
            />

            <span className="flex items-center gap-1">
              <Star
                size={13}
                fill="currentColor"
                className="text-amber-400"
              />{t("4.5★ & above" )}</span>
          </label>

          {/* 4 */}

          <label
            className="
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-lg
              px-2
              py-1.5
              text-sm
              text-slate-700
              transition-colors
              hover:bg-teal-50
            "
          >
            <input
              type="radio"
              name="rating"
              checked={rating === "4"}
              onChange={() => setRating("4")}
              className="accent-teal-600"
            />

            <span className="flex items-center gap-1">
              <Star
                size={13}
                fill="currentColor"
                className="text-amber-400"
              />{t("4★ & above" )}</span>
          </label>
        </div>
      </div>

      {/* =====================================================
          TRUST MINI STRIP
      ====================================================== */}

      <div className="border-t border-slate-100 pt-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-teal-50 p-2.5">
            <BatteryCharging size={18} className="text-teal-600" />

            <p className="mt-1.5 text-[10px] font-bold text-teal-800">{t("Reliable" )}</p>
          </div>

          <div className="rounded-xl bg-teal-50 p-2.5">
            <ShieldCheck size={18} className="text-teal-600" />

            <p className="mt-1.5 text-[10px] font-bold text-teal-800">{t("Trusted" )}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

