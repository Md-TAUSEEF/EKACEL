import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  Eye,
  IndianRupee,
  Package,
  Phone,
  RefreshCw,
  ShoppingBag,
  Trash2,
  User,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ORDERS_KEY = "orders";

function StatusBadge({ children, type = "default" }) {
  const styles = {
    success:
      "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning:
      "bg-amber-50 text-amber-700 border-amber-200",
    danger:
      "bg-red-50 text-red-700 border-red-200",
    info:
      "bg-blue-50 text-blue-700 border-blue-200",
    default:
      "bg-slate-50 text-slate-700 border-slate-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${
        styles[type] || styles.default
      }`}
    >
      {children}
    </span>
  );
}

function getStatusType(status) {
  const value = String(status || "").toLowerCase();

  if (
    value.includes("delivered") ||
    value.includes("completed") ||
    value.includes("confirmed")
  ) {
    return "success";
  }

  if (
    value.includes("pending") ||
    value.includes("placed") ||
    value.includes("processing")
  ) {
    return "warning";
  }

  if (
    value.includes("cancel") ||
    value.includes("failed")
  ) {
    return "danger";
  }

  return "info";
}

function formatDate(date) {
  if (!date) return "—";

  try {
    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "—";
  }
}

function formatCurrency(value) {
  return `₹${Number(value || 0).toLocaleString("en-IN")}`;
}

export default function Dashboard() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const loadOrders = () => {
    try {
      const savedOrders = JSON.parse(
        localStorage.getItem(ORDERS_KEY) || "[]"
      );

      if (Array.isArray(savedOrders)) {
        setOrders(savedOrders);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error("Failed to load orders:", error);
      setOrders([]);
    }
  };

  useEffect(() => {
    loadOrders();

    const handleOrdersUpdated = () => {
      loadOrders();
    };

    window.addEventListener(
      "ordersUpdated",
      handleOrdersUpdated
    );

    window.addEventListener(
      "storage",
      handleOrdersUpdated
    );

    return () => {
      window.removeEventListener(
        "ordersUpdated",
        handleOrdersUpdated
      );

      window.removeEventListener(
        "storage",
        handleOrdersUpdated
      );
    };
  }, []);

  const stats = useMemo(() => {
    const totalOrders = orders.length;

    const totalSales = orders.reduce(
      (sum, order) =>
        sum + Number(order?.pricing?.total || 0),
      0
    );

    const pendingPayments = orders.filter(
      (order) =>
        String(order?.paymentStatus || "").toLowerCase() ===
        "pending"
    ).length;

    const placedOrders = orders.filter(
      (order) =>
        String(order?.status || "").toLowerCase() ===
        "order placed"
    ).length;

    return {
      totalOrders,
      totalSales,
      pendingPayments,
      placedOrders,
    };
  }, [orders]);

  const handleDeleteOrder = (orderId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmed) return;

    const updatedOrders = orders.filter(
      (order) => order.id !== orderId
    );

    localStorage.setItem(
      ORDERS_KEY,
      JSON.stringify(updatedOrders)
    );

    setOrders(updatedOrders);

    if (selectedOrder?.id === orderId) {
      setSelectedOrder(null);
    }

    window.dispatchEvent(new Event("ordersUpdated"));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");

    setSelectedOrder(null);

    navigate("/admin-login", {
      replace: true,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white">
                <Activity size={19} />
              </div>

              <h1 className="text-xl font-bold text-slate-900">
                Admin Dashboard
              </h1>
            </div>

            <p className="mt-1 hidden text-sm text-slate-500 sm:block">
              Manage VoltNova customer orders
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadOrders}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <RefreshCw size={16} />
              <span className="hidden sm:inline">
                Refresh
              </span>
            </button>

            <button
              onClick={handleLogout}
              className="rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* PAGE TITLE */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Monitor your orders and sales activity.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {/* TOTAL ORDERS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total Orders
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {stats.totalOrders}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <ShoppingBag size={21} />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1 text-xs font-medium text-slate-500">
              <ArrowUpRight size={14} />
              All customer orders
            </div>
          </div>

          {/* SALES */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total Sales
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {formatCurrency(stats.totalSales)}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <IndianRupee size={21} />
              </div>
            </div>

            <div className="mt-4 text-xs font-medium text-slate-500">
              Order value
            </div>
          </div>

          {/* PENDING PAYMENT */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Pending Payments
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {stats.pendingPayments}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <CreditCard size={21} />
              </div>
            </div>

            <div className="mt-4 text-xs font-medium text-slate-500">
              Awaiting payment
            </div>
          </div>

          {/* ORDER PLACED */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  New Orders
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {stats.placedOrders}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <CheckCircle2 size={21} />
              </div>
            </div>

            <div className="mt-4 text-xs font-medium text-slate-500">
              Order placed
            </div>
          </div>
        </div>

        {/* ORDERS */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* SECTION HEADER */}
          <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Recent Orders
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {orders.length} order
                {orders.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <button
              onClick={loadOrders}
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw size={16} />
              Refresh Orders
            </button>
          </div>

          {/* EMPTY */}
          {orders.length === 0 ? (
            <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <Package size={30} />
              </div>

              <h4 className="mt-5 text-lg font-bold text-slate-900">
                No orders yet
              </h4>

              <p className="mt-2 max-w-md text-sm text-slate-500">
                Customer orders will appear here automatically
                after they complete the Buy Now process.
              </p>
            </div>
          ) : (
            <>
              {/* DESKTOP TABLE */}
              <div className="hidden overflow-x-auto lg:block">
                <table className="w-full min-w-[1000px]">
                  <thead className="bg-slate-50">
                    <tr className="border-b border-slate-200">
                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                        Order
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                        Customer
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                        Product
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                        Amount
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                        Payment
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                        Status
                      </th>

                      <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wide text-slate-500">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {orders.map((order) => (
                      <tr
                        key={order.id}
                        className="transition hover:bg-slate-50/70"
                      >
                        {/* ORDER */}
                        <td className="px-5 py-5">
                          <p className="font-bold text-slate-900">
                            {order.id || "—"}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {formatDate(order.createdAt)}
                          </p>
                        </td>

                        {/* CUSTOMER */}
                        <td className="px-5 py-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                              <User size={17} />
                            </div>

                            <div className="min-w-0">
                              <p className="truncate font-semibold text-slate-900">
                                {order.customer?.name || "Customer"}
                              </p>

                              <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                                <Phone size={12} />
                                {order.customer?.phone || "—"}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* PRODUCT */}
                        <td className="px-5 py-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50">
                              {order.product?.image ? (
                                <img
                                  src={order.product.image}
                                  alt={
                                    order.product?.name ||
                                    "Product"
                                  }
                                  className="h-full w-full object-contain p-1"
                                />
                              ) : (
                                <Package
                                  size={20}
                                  className="text-slate-400"
                                />
                              )}
                            </div>

                            <div className="min-w-0">
                              <p className="max-w-[220px] truncate font-semibold text-slate-900">
                                {order.product?.name ||
                                  "Product"}
                              </p>

                              <p className="mt-1 text-xs text-slate-500">
                                Qty:{" "}
                                {order.product?.quantity || 1}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* AMOUNT */}
                        <td className="px-5 py-5">
                          <p className="font-bold text-slate-900">
                            {formatCurrency(
                              order.pricing?.total
                            )}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {formatCurrency(
                              order.product?.price
                            )}{" "}
                            ×{" "}
                            {order.product?.quantity || 1}
                          </p>
                        </td>

                        {/* PAYMENT */}
                        <td className="px-5 py-5">
                          <StatusBadge
                            type={
                              String(
                                order.paymentStatus
                              ).toLowerCase() ===
                              "pending"
                                ? "warning"
                                : "success"
                            }
                          >
                            {order.paymentStatus ||
                              "Pending"}
                          </StatusBadge>
                        </td>

                        {/* STATUS */}
                        <td className="px-5 py-5">
                          <StatusBadge
                            type={getStatusType(
                              order.status
                            )}
                          >
                            {order.status ||
                              "Order Placed"}
                          </StatusBadge>
                        </td>

                        {/* ACTION */}
                        <td className="px-5 py-5">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() =>
                                setSelectedOrder(order)
                              }
                              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-600"
                              title="View Order"
                            >
                              <Eye size={17} />
                            </button>

                            <button
                              onClick={() =>
                                handleDeleteOrder(
                                  order.id
                                )
                              }
                              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-100 text-red-500 transition hover:bg-red-50"
                              title="Delete Order"
                            >
                              <Trash2 size={17} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* MOBILE / TABLET CARDS */}
              <div className="divide-y divide-slate-100 lg:hidden">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="p-5 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-slate-900">
                          {order.id || "—"}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {formatDate(order.createdAt)}
                        </p>
                      </div>

                      <StatusBadge
                        type={getStatusType(
                          order.status
                        )}
                      >
                        {order.status || "Order Placed"}
                      </StatusBadge>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50">
                        {order.product?.image ? (
                          <img
                            src={order.product.image}
                            alt={
                              order.product?.name ||
                              "Product"
                            }
                            className="h-full w-full object-contain p-1"
                          />
                        ) : (
                          <Package
                            size={20}
                            className="text-slate-400"
                          />
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate font-semibold text-slate-900">
                          {order.product?.name ||
                            "Product"}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          Qty:{" "}
                          {order.product?.quantity || 1}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-xs text-slate-500">
                          Customer
                        </p>

                        <p className="mt-1 truncate text-sm font-semibold text-slate-900">
                          {order.customer?.name ||
                            "Customer"}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-xs text-slate-500">
                          Total
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-900">
                          {formatCurrency(
                            order.pricing?.total
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <StatusBadge
                        type={
                          String(
                            order.paymentStatus
                          ).toLowerCase() === "pending"
                            ? "warning"
                            : "success"
                        }
                      >
                        {order.paymentStatus ||
                          "Pending"}
                      </StatusBadge>

                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            setSelectedOrder(order)
                          }
                          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                        >
                          <Eye size={16} />
                          View
                        </button>

                        <button
                          onClick={() =>
                            handleDeleteOrder(order.id)
                          }
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-100 text-red-500 hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      </main>

      {/* ORDER MODAL */}
      {selectedOrder && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedOrder(null);
            }
          }}
        >
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
            {/* MODAL HEADER */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                  Order Details
                </p>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {selectedOrder.id}
                </h3>
              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-6 p-5 sm:p-6">
              {/* PRODUCT */}
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-50">
                    {selectedOrder.product?.image ? (
                      <img
                        src={selectedOrder.product.image}
                        alt={
                          selectedOrder.product?.name ||
                          "Product"
                        }
                        className="h-full w-full object-contain p-2"
                      />
                    ) : (
                      <Package
                        size={30}
                        className="text-slate-400"
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-xl font-bold text-slate-900">
                        {selectedOrder.product?.name ||
                          "Product"}
                      </h4>

                      <StatusBadge
                        type={getStatusType(
                          selectedOrder.status
                        )}
                      >
                        {selectedOrder.status ||
                          "Order Placed"}
                      </StatusBadge>
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                      {selectedOrder.product?.category ||
                        "—"}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <div>
                        <p className="text-xs text-slate-500">
                          Price
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                          {formatCurrency(
                            selectedOrder.product?.price
                          )}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">
                          Quantity
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                          {selectedOrder.product?.quantity ||
                            1}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">
                          Capacity
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                          {selectedOrder.product
                            ?.capacity || "—"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">
                          Voltage
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                          {selectedOrder.product
                            ?.voltage || "—"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <p className="text-xs text-slate-500">
                          Warranty
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                          {selectedOrder.product
                            ?.warranty || "—"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">
                          Technology
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                          {selectedOrder.product
                            ?.technology || "—"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CUSTOMER */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <User
                    size={18}
                    className="text-teal-600"
                  />

                  <h4 className="font-bold text-slate-900">
                    Customer Information
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Name
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      {selectedOrder.customer?.name ||
                        "—"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Phone
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      {selectedOrder.customer?.phone ||
                        "—"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 break-all font-semibold text-slate-900">
                      {selectedOrder.customer?.email ||
                        "—"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Pincode
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      {selectedOrder.customer?.pincode ||
                        "—"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4 sm:col-span-2">
                    <p className="text-xs text-slate-500">
                      Address
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      {selectedOrder.customer?.address ||
                        "—"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      City
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      {selectedOrder.customer?.city ||
                        "—"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      State
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      {selectedOrder.customer?.state ||
                        "—"}
                    </p>
                  </div>
                </div>
              </div>

              {/* PRICING */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <IndianRupee
                    size={18}
                    className="text-teal-600"
                  />

                  <h4 className="font-bold text-slate-900">
                    Pricing
                  </h4>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex justify-between gap-4 py-2 text-sm">
                    <span className="text-slate-500">
                      Subtotal
                    </span>

                    <span className="font-semibold text-slate-900">
                      {formatCurrency(
                        selectedOrder.pricing?.subtotal
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 py-2 text-sm">
                    <span className="text-slate-500">
                      Delivery
                    </span>

                    <span className="font-semibold text-emerald-600">
                      {Number(
                        selectedOrder.pricing?.delivery || 0
                      ) === 0
                        ? "FREE"
                        : formatCurrency(
                            selectedOrder.pricing?.delivery
                          )}
                    </span>
                  </div>

                  <div className="my-2 border-t border-slate-200" />

                  <div className="flex justify-between gap-4 py-2">
                    <span className="font-bold text-slate-900">
                      Total
                    </span>

                    <span className="text-xl font-bold text-teal-600">
                      {formatCurrency(
                        selectedOrder.pricing?.total
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* STATUS */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-teal-600"
                  />

                  <h4 className="font-bold text-slate-900">
                    Order Status
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Order Status
                    </p>

                    <div className="mt-2">
                      <StatusBadge
                        type={getStatusType(
                          selectedOrder.status
                        )}
                      >
                        {selectedOrder.status ||
                          "Order Placed"}
                      </StatusBadge>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Payment Status
                    </p>

                    <div className="mt-2">
                      <StatusBadge
                        type={
                          String(
                            selectedOrder.paymentStatus
                          ).toLowerCase() ===
                          "pending"
                            ? "warning"
                            : "success"
                        }
                      >
                        {selectedOrder.paymentStatus ||
                          "Pending"}
                      </StatusBadge>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Order Date
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      {formatDate(
                        selectedOrder.createdAt
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="sticky bottom-0 border-t border-slate-200 bg-white px-5 py-4 sm:px-6">
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}