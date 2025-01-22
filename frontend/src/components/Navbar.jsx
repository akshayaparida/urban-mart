import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/collection" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="logo" className="w-36" />

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {navLinks.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className="flex flex-col items-center gap-1"
          >
            <p>{name}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
        />

        {/* Profile Dropdown */}
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile"
            className="w-5 cursor-pointer"
          />
          <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              {["My Profile", "Orders", "Logout"].map((item) => (
                <p key={item} className="cursor-pointer hover:text-black">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-5 min-w-0.5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            0
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileMenuVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
        >
          <img src={assets.menu_icon} alt="menu" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full bg-white transition-transform transform ${
          isMobileMenuVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt="Back"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </button>

          {/* Mobile Links */}
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setMobileMenuVisible(false)}
              className="py-2 pl-6 border"
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
