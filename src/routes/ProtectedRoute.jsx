import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // check if token exists

  if (!token) {
    // redirect to login if not authenticated
    return <Navigate to="/admin/login" />;
  }

  // else render the protected component(s)
  return <Outlet />;
};

export default ProtectedRoute;
