import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { useState } from 'react'
import { Spinner } from '../../Dashboard/modules/Loader'

const Login = ({ change, onclick }) => {

    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const { error, loading, login } = useAuth()

    const handelSubmit = async (e) => {
        e.preventDefault()
        const res = await login(form)
        
    }
if(loading) return (
    <div className="flex items-center justify-center h-screen">
      <Spinner className="size-8 text-purple-500" />
    </div>
  )

    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">

      {/* Glass Card */}
      <div
        className="w-full max-w-md rounded-2xl shadow-xl p-6 sm:p-8
                 bg-transparent backdrop-blur-xl border border-white/5
"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Login
        </h2>

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
                       bg-white/20 text-white placeholder-white/70
                       focus:outline-none focus:ring-2 focus:ring-white/60"
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
                       bg-white/20 text-white placeholder-white/70
                       focus:outline-none focus:ring-2 focus:ring-white/60"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handelSubmit}
          className="w-full bg-white/90 text-black py-2 rounded-lg
                     hover:bg-white transition duration-200 font-medium"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-sm text-center mt-4 text-white">
          Don’t have an account?
          <span
            className="ml-1 cursor-pointer underline hover:text-gray-200"
            onClick={() => onclick(!change)}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>

    )
}

export default Login
