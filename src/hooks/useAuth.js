// src/hooks/useAuth.js
import { useState } from "react";
import { loginApi, registerApi } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { setRole } from "../utils/auth";
import toast from "react-hot-toast";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null); // optional
  const navigate = useNavigate();

  // LOGIN
  const login = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await loginApi(data);
      localStorage.setItem("token", res.data.token);
      setRole(res.data.admin.role)

      // setUser(res.data.user);
      toast.success("Login successful");  
      navigate("/dashboard"); // redirect after login
    } catch (err) {
      toast.error("Login failed");
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // REGISTER
  const register = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await registerApi(data);
      localStorage.setItem("token", res.data.token);
      toast.success("Registration successful");
      // setUser(res.data.user);
      setRole(res.data.admin.role)
      navigate("/dashboard"); // redirect after registration
    } catch (err) {
      toast.error("Registration failed");
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    register,
    loading,
    error,
    user,
  };
};

export default useAuth;
