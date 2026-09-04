import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CheckCircle2,
  Home,
  ShoppingBag,
  PackageCheck,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function OrderSuccess() {
  const { t } = useLanguage();
  const location = useLocation();

  const {
    orderId,
    customerName,
    productName,
    quantity,
    total,
  } = location.state || {};

  return (
    <main className="min-h-screen bg-[#f7f9f8] px-[30px] py-12 sm:py-16">

      <div className="mx-auto max-w-3xl">

        {/* SUCCESS CARD */}

        <div className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          text-center
          shadow-sm
          sm:p-10
        ">

          {/* ICON */}

          <div className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-teal-50
            text-teal-700
          ">
            <CheckCircle2 size={48} />
          </div>

          {/* TITLE */}

          <p className="
            mt-6
            text-xs
            font-bold
            uppercase
            tracking-[0.18em]
            text-teal-700
          ">
            {t("Order Confirmed")}
          </p>

          <h1 className="
            mt-3
            text-3xl
            font-extrabold
            text-slate-900
            sm:text-4xl
          ">
            {t("Thank You")},{" "}
            {customerName || t("Customer")}!
          </h1>

          <p className="
            mx-auto
            mt-3
            max-w-xl
            text-sm
            leading-6
            text-slate-500
          ">
            {t(
              "Your order has been placed successfully. We have received your order details and will process it shortly."
            )}
          </p>

          {/* ORDER ID */}

          {orderId && (
            <div className="
              mx-auto
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-slate-50
              px-5
              py-3
            ">
              <PackageCheck
                size={18}
                className="text-teal-700"
              />

              <span className="text-sm text-slate-500">
                {t("Order ID")}:
              </span>

              <span className="text-sm font-bold text-slate-900">
                {orderId}
              </span>
            </div>
          )}

          {/* ORDER DETAILS */}

          {(productName || total) && (
            <div className="
              mt-8
              rounded-2xl
              border
              border-slate-100
              bg-slate-50
              p-5
              text-left
            ">

              <h2 className="text-sm font-bold text-slate-900">
                {t("Order Details")}
              </h2>

              {productName && (
                <div className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-slate-200
                  pb-4
                ">
                  <span className="text-sm text-slate-500">
                    {t("Product")}
                  </span>

                  <span className="text-right text-sm font-bold text-slate-900">
                    {productName}
                  </span>
                </div>
              )}

              {quantity && (
                <div className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-slate-200
                  py-4
                ">
                  <span className="text-sm text-slate-500">
                    {t("Quantity")}
                  </span>

                  <span className="text-sm font-bold text-slate-900">
                    {quantity}
                  </span>
                </div>
              )}

              {typeof total === "number" && (
                <div className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  pt-4
                ">
                  <span className="text-sm font-semibold text-slate-600">
                    {t("Total Amount")}
                  </span>

                  <span className="text-xl font-extrabold text-teal-700">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              )}

            </div>
          )}

          {/* MESSAGE */}

          <div className="
            mt-7
            rounded-xl
            border
            border-teal-100
            bg-teal-50
            p-4
          ">
            <p className="text-sm font-semibold text-slate-800">
              {t("What happens next?")}
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              {t(
                "Our team will review your order and contact you using the details provided during checkout."
              )}
            </p>
          </div>

          {/* BUTTONS */}

          <div className="
            mt-8
            flex
            flex-col
            justify-center
            gap-3
            sm:flex-row
          ">

            <Link
              to="/"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-slate-950
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                transition
                hover:bg-teal-700
              "
            >
              <Home size={17} />
              {t("Go to Home")}
            </Link>

            <Link
              to="/products"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#F7E135]
                px-6
                py-3.5
                text-sm
                font-bold
                text-slate-950
                transition
                hover:bg-[#eab308]
              "
            >
              <ShoppingBag size={17} />
              {t("View Products")}
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}