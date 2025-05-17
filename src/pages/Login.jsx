import React from 'react'
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side (form) */}
      <div className="md:w-1/2 flex items-center justify-center bg-white p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-6 text-left"
        >
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <p className="text-gray-500">Login to your account.</p>

          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">E-mail Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label>
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Reset Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign In
          </button>

          <p className="text-sm text-gray-600">
          Don&#39;t have an account yet?
          {" "}
            <a href="#" className="text-blue-600 hover:underline">
              Join KRIS today.
            </a>
          </p>
        </form>
      </div>

      {/* Right side (image + text) */}
      <div className="hidden md:flex md:w-1/2 bg-blue-900 text-white items-center justify-center p-6 relative">
        <div className="absolute bottom-4 left-4 flex gap-2">
          <div className="w-3 h-1 rounded bg-white" />
          <div className="w-3 h-1 rounded bg-yellow-400" />
          <div className="w-3 h-1 rounded bg-white" />
        </div>
        <div className="text-center max-w-xs">
          <h3 className="text-xl font-semibold leading-relaxed">
            Manage all <span className="text-yellow-400">HR Operations</span> from
            the comfort of your home.
          </h3>
        </div>
      </div>
    </div>
  );
}

