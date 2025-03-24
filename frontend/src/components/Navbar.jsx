import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

function NavItem({ text, onClick }) {
  return (
    <div className="justify-center py-2 cursor-pointer" onClick={onClick}>
      {text}
    </div>
  );
}

function Navbar() {
  const navigate = useNavigate();

  const [navItems, setNavItems] = useState([
    { text: "Home", onClick: () => navigate("/") },
    { text: "Doctors", onClick: () => navigate("/doctors") },
    { text: "About", onClick: () => navigate("/about") },
    { text: "Contact", onClick: () => navigate("/contact") },
  ]);

  useEffect(() => {
    // Fetch navigation items from backend
    async function fetchNavItems() {
      try {
        const response = await fetch("/api/navItems");
        const data = await response.json();
        setNavItems(
          data.map((item) => ({
            ...item,
            onClick: () => navigate(`/${item.text.toLowerCase()}`),
          }))
        );
      } catch (error) {
        console.error("Failed to fetch navigation items", error);
      }
    }

    fetchNavItems();
  }, [navigate]);

  return (
    <div className="flex gap-5 justify-between items-center py-1.5 px-6 rounded-3xl backdrop-blur-[17.5px] bg-opacity-80 w-full max-w-full flex-wrap sm:flex-nowrap sm:py-4 sm:px-10 bg-[#ffffffff]">
      <div className="flex gap-2 justify-between items-center py-1.5 my-auto w-full sm:w-auto">
        <div className="flex justify-center items-center px-0.5">
          <img
            loading="lazy"
            src={assets.logo}
            className="aspect-[1] w-[50px]"
            alt="Logo"
          />
        </div>
        <div className="my-auto uppercase font-extrabold text-lg text-blue-800">
          MEDICAL
        </div>
      </div>
      <nav className="flex sm:flex-row flex-col gap-5 justify-center items-center self-stretch my-auto text-base text-center text-neutral-900 font-light w-full sm:w-auto">
        {navItems.map((item, index) => (
          <NavItem key={index} text={item.text} onClick={item.onClick} />
        ))}
      </nav>
      <button
        className="justify-center self-stretch sm:self-auto px-6 py-5 text-base leading-6 text-center text-white rounded-2xl bg-blue-800 hover:bg-blue-600 transition-all duration-300 ease-in-out max-md:px-5 font-light w-full sm:w-auto"
        onClick={() => navigate("/create-account")}
      >
        Create Account
      </button>
    </div>
  );
}

export default Navbar;