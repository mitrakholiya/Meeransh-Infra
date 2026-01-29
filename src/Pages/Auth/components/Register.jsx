import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Register = ({ change, onclick }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { error, loading, register } = useAuth();

  const registerHandel = async () => {
  
    const res = await register(form);
    
    
  };

  return (
   <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
  
  {/* Glass Card */}
  <div
    className="w-full max-w-md rounded-2xl shadow-xl p-6 sm:p-8
               bg-transparent backdrop-blur-xl border border-white/5"
  >
    <h2 className="text-2xl font-semibold text-center mb-6 text-white">
      Register
    </h2>

    {error && (
      <p className="text-red-400 text-sm mb-4 text-center">
        {error}
      </p>
    )}

    {/* Email */}
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 text-white">
        Enter Email
      </label>
      <input
        type="email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        placeholder="example@email.com"
        className="w-full px-4 py-2 rounded-lg
                   bg-white/10 text-white placeholder-white/60
                   border border-white/10
                   focus:outline-none focus:ring-2 focus:ring-blue-400/60"
      />
    </div>

    {/* Password */}
    <div className="mb-6">
      <label className="block text-sm font-medium mb-1 text-white">
        Enter Password
      </label>
      <input
        type="password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
        placeholder="••••••••"
        className="w-full px-4 py-2 rounded-lg
                   bg-white/10 text-white placeholder-white/60
                   border border-white/10
                   focus:outline-none focus:ring-2 focus:ring-blue-400/60"
      />
    </div>

    {/* Register Button */}
    <button
      onClick={registerHandel}
      disabled={loading}
      className="w-full bg-blue-400 text-white py-2 rounded-lg
                 hover:bg-blue-500 transition duration-200 font-medium"
    >
      {loading ? "Registering..." : "Register"}
    </button>

    {/* Login Link */}
    <p className="text-sm text-center mt-4 text-white">
      Already have an account?
      <span
        className="ml-1 cursor-pointer underline hover:text-gray-200"
        onClick={() => onclick(!change)}
      >
        Log in
      </span>
    </p>
  </div>
</div>


  );
};

export default Register;
