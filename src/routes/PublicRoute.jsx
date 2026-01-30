import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const location = useLocation();

  if (
    token &&
    role === "admin" &&
    location.pathname === "/login"
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
