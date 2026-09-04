import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAdmin =
    localStorage.getItem("adminAuth") === "true";

  if (!isAdmin) {
    return (
      <Navigate
        to="/admin-login"
        replace
      />
    );
  }

  return <Outlet />;
}