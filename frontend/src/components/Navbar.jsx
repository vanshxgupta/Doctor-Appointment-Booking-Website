import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();
  const { token, settoken } = useContext(AppContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="top-0 left-0 w-full z-20 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 sm:px-10">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img
            onClick={() => navigate("/")}
            src={assets.logo}
            alt="Logo"
            className="w-12 cursor-pointer"
          />
          <h1
            onClick={() => navigate("/")}
            className="text-l sm:text-2xl font-bold text-blue-800 cursor-pointer"
          >
            MEDICAL
          </h1>
        </div>

        {/* Mobile Menu Button */}
        {/* hidden for the large screens */}
        <div className="flex items-center gap-4 md:hidden">
          {token ? (
            <div
              className="relative"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <img
                src={assets.robot} // Replace with the user's profile picture if available
                alt="Profile"
                className="w-10 h-10 object-cover rounded-full border border-gray-300 cursor-pointer"
              />
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => navigate("/my-profile")}
                  >
                    My Profile
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => navigate("/my-appointments")}
                  >
                    My Appointments
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => settoken(false)}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div
              onClick={() => navigate("/login")}
              className="cursor-pointer text-blue-800 hover:text-blue-600 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-3xl">
                account_circle
              </span>
            </div>
          )}
          <button
            className="focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <img src={assets.menu_icon} alt="Menu" className="w-8" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden sm:flex gap-8 text-lg font-medium">
          <NavLink to="/" className="hover:text-blue-800">
            Home
          </NavLink>
          <NavLink to="/doctors" className="hover:text-blue-800">
            Doctors
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-800">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-800">
            Contact
          </NavLink>
        </nav>

        {/* Desktop Profile Section */}
        {token ? (
          <div
            className="relative hidden md:block cursor-pointer"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <img
              src={assets.robot} // Replace with the user's profile picture if available
              alt="Profile"
              className="w-10 h-10 object-cover rounded-full border border-gray-300"
            />
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <button
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => navigate("/my-profile")}
                >
                  My Profile
                </button>
                <button
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => navigate("/my-appointments")}
                >
                  My Appointments
                </button>
                <button
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => settoken(false)}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div
          onClick={() => navigate("/login")}
          className="hidden sm:block"
        >
          <span className=" cursor-pointer material-symbols-outlined text-gray-400 text-8xl hover:text-gray-900">
            account_circle
          </span>
        </div>
        )}
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`sm:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 focus:outline-none"
          onClick={() => setSidebarOpen(false)}
        >
        <span className="material-symbols-outlined text-gray-600 text-2xl">close</span>
        </button>
        <nav className="mt-20 flex flex-col gap-4 px-6">
          <NavLink
            onClick={() => setSidebarOpen(false)}
            to="/"
            className="py-2 hover:text-blue-800"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setSidebarOpen(false)}
            to="/doctors"
            className="py-2 hover:text-blue-800"
          >
            Doctors
          </NavLink>
          <NavLink
            onClick={() => setSidebarOpen(false)}
            to="/about"
            className="py-2 hover:text-blue-800"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setSidebarOpen(false)}
            to="/contact"
            className="py-2 hover:text-blue-800"
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Overlay for Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Navbar;