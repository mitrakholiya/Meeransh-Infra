// src/services/auth.js
import axiosClient from "../config/axios-client";

// REGISTER
export const registerApi = (data) => {
  return axiosClient.post("/admin/register", data);
};

// LOGIN
export const loginApi = (data) => {
  return axiosClient.post("/admin/login", data,
  );
};

// Optional LOGOUT (if API exists)
// export const logoutApi = () => {
//   return axiosClient.post("/admin/Logout");
// };
