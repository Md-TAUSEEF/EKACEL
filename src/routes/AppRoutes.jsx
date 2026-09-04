import { Routes, Route } from "react-router-dom";

/* =========================================================
   HOME
========================================================= */
import Home from "../pages/Home";

/* =========================================================
   ABOUT
========================================================= */
import About from "../pages/About";
import Leadership from "../pages/Leadership";
import Manufacturing from "../pages/Manufacturing";
import Technology from "../pages/Technology";
import Quality from "../pages/Quality";
import Innovation from "../pages/Innovation";
import GroupCompanies from "../pages/GroupCompanies";
import OrderSuccess from "../pages/OrderSuccess";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminLogin from "../pages/AdminLogin";
/* =========================================================
   PRODUCTS
========================================================= */
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";

/* =========================================================
   CART / CHECKOUT
========================================================= */
import Cart from "../pages/Cart";
import BuyNow from "../pages/BuyNow";

/* =========================================================
   SOLUTIONS
========================================================= */
import Solutions from "../pages/Solutions";
import SolutionDetail from "../pages/SolutionDetail";

/* =========================================================
   INDUSTRIES
========================================================= */
import Industries from "../pages/Industries";
import IndustryDetail from "../pages/IndustryDetail";

/* =========================================================
   GLOBAL
========================================================= */
import Global from "../pages/Global";
import GlobalDetail from "../pages/GlobalDetail";

/* =========================================================
   RESOURCES
========================================================= */
import Resources from "../pages/Resources";
import ResourceDetail from "../pages/ResourceDetail";

/* =========================================================
   OTHER
========================================================= */
import Contact from "../pages/Contact";
import Partner from "../pages/Partner";
import DealerLocator from "../pages/DealerLocator";

import Support from "../pages/Support";
import SupportDetail from "../pages/SupportDetail";

import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";

import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>

      {/* =====================================================
          HOME
      ====================================================== */}

      <Route path="/" element={<Home />} />
<Route
  path="/order-success"
  element={<OrderSuccess />}
/>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <Route path="/about" element={<About />} />

      <Route path="/about/leadership" element={<Leadership />} />

      <Route path="/about/manufacturing" element={<Manufacturing />} />

      <Route path="/about/technology" element={<Technology />} />

      <Route path="/about/quality" element={<Quality />} />

      <Route path="/about/innovation" element={<Innovation />} />
<Route
  path="/admin-login"
  element={<AdminLogin />}
/>

<Route element={<ProtectedRoute />}>
  <Route
    path="/dashboard"
    element={<Dashboard />}
  />
</Route>
      <Route
        path="/about/group-companies"
        element={<GroupCompanies />}
      />


      {/* =====================================================
          ALL PRODUCTS
      ====================================================== */}

      <Route
        path="/products"
        element={<Products />}
      />


      {/* =====================================================
          PRODUCT CATEGORY PAGES

          These routes open the Products page with the
          selected category automatically filtered.

          Example:

          /products/automotive
              ↓
          Automotive Battery products

          /products/inverter
              ↓
          Inverter Battery products
      ====================================================== */}

      <Route
        path="/products/automotive"
        element={<Products />}
      />

      <Route
        path="/products/inverter"
        element={<Products />}
      />

      <Route
        path="/products/e-rickshaw"
        element={<Products />}
      />

      <Route
        path="/products/solar"
        element={<Products />}
      />

      <Route
        path="/products/lithium"
        element={<Products />}
      />

      <Route
        path="/products/industrial"
        element={<Products />}
      />

      <Route
        path="/products/ev"
        element={<Products />}
      />

      <Route
        path="/products/energy-storage"
        element={<Products />}
      />

      <Route
        path="/products/telecom"
        element={<Products />}
      />

      <Route
        path="/products/critical-power"
        element={<Products />}
      />


      {/* =====================================================
          PRODUCT DETAILS

          Individual products will still open normally.

          Example:

          /products/ib-tubular-200
          /products/auto-2-wheeler
          /products/lithium-100

          These go to ProductDetail.
      ====================================================== */}

      <Route
        path="/products/automotive/:sub"
        element={<ProductDetail />}
      />

      <Route
        path="/products/inverter/:sub"
        element={<ProductDetail />}
      />

      <Route
        path="/products/:slug"
        element={<ProductDetail />}
      />


      {/* =====================================================
          CART
      ====================================================== */}

      <Route
        path="/cart"
        element={<Cart />}
      />


      {/* =====================================================
          BUY NOW / CHECKOUT
      ====================================================== */}

      <Route
        path="/buy-now"
        element={<BuyNow />}
      />


      {/* =====================================================
          ENERGY SOLUTIONS
      ====================================================== */}

      <Route
        path="/solutions"
        element={<Solutions />}
      />

      <Route
        path="/solutions/:slug"
        element={<SolutionDetail />}
      />


      {/* =====================================================
          INDUSTRIES
      ====================================================== */}

      <Route
        path="/industries"
        element={<Industries />}
      />

      <Route
        path="/industries/:slug"
        element={<IndustryDetail />}
      />


      {/* =====================================================
          GLOBAL
      ====================================================== */}

      <Route
        path="/global"
        element={<Global />}
      />

      <Route
        path="/global/:slug"
        element={<GlobalDetail />}
      />


      {/* =====================================================
          RESOURCES
      ====================================================== */}

      <Route
        path="/resources"
        element={<Resources />}
      />

      <Route
        path="/resources/:slug"
        element={<ResourceDetail />}
      />


      {/* =====================================================
          CONTACT / PARTNER / DEALER
      ====================================================== */}

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/partner"
        element={<Partner />}
      />

      <Route
        path="/dealer-locator"
        element={<DealerLocator />}
      />


      {/* =====================================================
          SUPPORT
      ====================================================== */}

      <Route
        path="/support"
        element={<Support />}
      />

      <Route
        path="/support/:topic"
        element={<SupportDetail />}
      />


      {/* =====================================================
          LEGAL
      ====================================================== */}

      <Route
        path="/privacy-policy"
        element={<PrivacyPolicy />}
      />

      <Route
        path="/terms"
        element={<Terms />}
      />


      {/* =====================================================
          404
      ====================================================== */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}