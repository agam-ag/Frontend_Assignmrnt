import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiMenu,
  FiLogOut,
  FiMessageSquare,
  FiBriefcase,
  FiUsers,
  FiFileText,
  FiUserCheck,
  FiBookOpen,
  FiBarChart2,
  FiCreditCard,
} from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menu = [
    {
      category: "Features",
      links: [{ label: "Dashboard", icon: <FiBarChart2 />, to: "/dashboard" }],
    },
    {
      category: "Recruitment",
      links: [
        { label: "Messages", icon: <FiMessageSquare />, badge: "13", to: "#" },
        { label: "Jobs", icon: <FiBriefcase />, to: "#" },
        { label: "Candidates", icon: <FiUsers />, to: "#" },
        { label: "Resumes", icon: <FiFileText />, to: "#" },
      ],
    },
    {
      category: "Organization",
      links: [
        { label: "Employee Management", icon: <FiUserCheck />, to: "/users" },
        { label: "Leave Management", icon: <FiBookOpen />, to: "#" },
        { label: "Performance Management", icon: <FiBarChart2 />, to: "#" },
      ],
    },
    {
      category: "KRIS Pay",
      links: [{ label: "Payroll Management", icon: <FiCreditCard />, to: "#" }],
    },
  ];

  return (
    <>
      {/* Hamburger for small screens */}
      <button className="md:hidden p-4 text-2xl" onClick={() => setOpen(!open)}>
        <FiMenu />
      </button>

      {/* Overlay on mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-20 top-0 left-0 h-full w-64 bg-[#0D1A3E] text-white p-4 overflow-y-auto transform transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center space-y-2 mb-8 ">
          <CgProfile/>
          <div className="text-center">
            <p className="font-bold">KRIS Admin</p>
            <p className="text-sm text-gray-300">Admin</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-6">
          {menu.map((group, idx) => (
            <div key={idx}>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                {group.category}
              </p>
              <ul className="space-y-2">
                {group.links.map((item, i) => (
                  <li key={i}>
                    {item.to && item.to !== "#" ? (
                      <NavLink
                        to={item.to}
                        onClick={() => setOpen(false)} // close sidebar on mobile
                        className={({ isActive }) =>
                          `flex items-center justify-between px-4 py-2 rounded-lg transition ${
                            isActive
                              ? "bg-yellow-400 text-black font-bold"
                              : "text-white hover:bg-white/10"
                          }`
                        }
                      >
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="bg-red-600 text-xs px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </NavLink>
                    ) : (
                      <div className="flex items-center justify-between px-4 py-2 rounded-lg text-white hover:bg-white/10">
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="bg-red-600 text-xs px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Logout button */}
        <button className="mt-10 w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg flex items-center justify-center gap-2">
          <FiLogOut /> Log Out
        </button>
      </aside>
    </>
  );
}
