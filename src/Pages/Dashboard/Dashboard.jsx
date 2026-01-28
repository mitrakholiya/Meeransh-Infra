import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { clearToken } from "../../utils/auth";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Add Blog", path: "/dashboard/add-blog" },
    { name: "View Estimate", path: "/dashboard/view-estimate" },
    { name: "View Contect", path: "/dashboard/view-contect" },
  ];
const navigator = useNavigate()

  const handelLogOut = () => {
    clearToken()
    navigator("/")
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Overlay (mobile only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-blue-400 text-white shadow-lg transform
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-blue-300">
          <span className="text-2xl font-bold">Dashboard</span>

          {/* Close button (mobile) */}
          <button
            className="md:hidden text-white text-2xl font-bold"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </button>
        </div>

        {/* Links */}
        <nav className="mt-4 flex flex-col gap-1 px-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setSidebarOpen(false)}
              className="px-4 py-2 rounded hover:bg-blue-500 transition font-semibold"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handelLogOut}
            className="sm:hidden px-3 py-2 bg-blue-500 rounded"
          >Log Out</button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:pl-64">
        {/* Top navbar */}
        <header className="flex items-center justify-between bg-blue-400 text-white shadow p-4">
          <button
            className="md:hidden px-3 py-2 bg-blue-500 rounded"
            onClick={() => setSidebarOpen(true)}
          >
            Menu
          </button>
          <h1 className="text-xl font-bold">Welcome Admin</h1>
          <button
          onClick={handelLogOut}
            className="hidden sm:block px-3 py-2 bg-blue-500 rounded"
          >Log Out</button>
        </header>

        {/* Page content */}
        <main className="p-4 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
