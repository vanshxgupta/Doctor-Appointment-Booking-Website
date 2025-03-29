import React, { useState, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();
  const { token, settoken } = useContext(AppContext); 
  const [showmenu, setshowmenu] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-1.5 px-6 rounded-3xl backdrop-blur-[17.5px] bg-opacity-80 w-full max-w-full flex-wrap sm:flex-nowrap sm:py-4 sm:px-10 bg-[#ffffffff] border border-gray-300 shadow-lg">
      <div className="flex gap-8 justify-between items-center py-1.5 my-auto w-full sm:w-auto">
        <div className="flex justify-center items-center px-0.5">
          <img
            onClick={() => navigate("/")}
            loading="lazy"
            src={assets.logo}
            className="scale-200 aspect-[1] w-[50px]"
            alt="Logo"
          />
        </div>
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer my-auto uppercase font-extrabold text-lg text-blue-800 nav-logo"
        >
          MEDICAL
        </div>
      </div>

      <div className="sm:hidden flex items-center">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <img src={assets.menu_icon} alt="Menu" className="w-8" />
        </button>
      </div>

      <nav
        className={`sm:flex gap-8 justify-center items-center self-stretch my-auto text-base text-center text-neutral-900 font-medium w-full sm:w-auto nav-links ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "py-2 text-blue-800 font-extrabold underline underline-offset-4 decoration-2 transition-all duration-300"
              : "py-2"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive
              ? "py-2 text-blue-800 font-extrabold underline underline-offset-4 decoration-2 transition-all duration-300"
              : "py-2"
          }
        >
          Doctors
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "py-2 text-blue-800 font-extrabold underline underline-offset-4 decoration-2 transition-all duration-300"
              : "py-2"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "py-2 text-blue-800 font-extrabold underline underline-offset-4 decoration-2 transition-all duration-300"
              : "py-2"
          }
        >
          Contact
        </NavLink>
      </nav>

      {token ? (
        <div
          className="relative flex gap-1 group cursor-pointer"
          onMouseEnter={() => setshowmenu(true)}
          onMouseLeave={() => setshowmenu(false)}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex justify-center items-center">
            {userPhoto ? (
              <img
                src={userPhoto}
                alt="User"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500 text-xl">U</span>
            )}
          </div>
          <img className="w-2.5" src={assets.dropdown_icon} alt="^" />
          {showmenu && (
            <ul className="absolute right-0 mt-10 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <li
                className="px-4 py-2 hover:bg-gray-100"
                onClick={() => navigate("/my-profile")}
              >
                My Profile
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100"
                onClick={() => navigate("/my-appointments")}
              >
                My Appointments
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100"
                onClick={() => settoken(false)}
              >
                Logout
              </li>
            </ul>
          )}
        </div>
      ) : (
        <Link
          to="/login"
          className="justify-center self-stretch sm:self-auto px-4 py-3 text-base leading-6 text-center text-white rounded-2xl bg-blue-800 hover:bg-blue-600 transition-all duration-300 ease-in-out max-md:px-5 font-light w-full sm:w-auto"
        >
          Create Account
        </Link>
      )}

      {sidebarOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-lg z-10">
          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </NavLink>
          <NavLink to="/doctors" className="block px-4 py-2 hover:bg-gray-100">
            Doctors
          </NavLink>
          <NavLink to="/about" className="block px-4 py-2 hover:bg-gray-100">
            About
          </NavLink>
          <NavLink to="/contact" className="block px-4 py-2 hover:bg-gray-100">
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;