// src/components/NavBar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Sermons", path: "/sermons" },
    { name: "Topics", path: "/topics" },
    { name: "Bible Study", path: "/bible-study" },
    { name: "About Us", path: "/about" },
    { name: "Contribute", path: "/contribute" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `block text-lg font-medium transition-colors duration-300 ${
      isActive
        ? "text-primary border-b-2 border-primary"
        : "text-gray-700 hover:text-primary"
    }`;

  return (
    <nav className="bg-[#fffbfa] shadow-md px-6 py-0">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Church Logo" className="h-18 w-auto" />
        </Link>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkClasses}>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "max-h-96 opacity-100 mt-3 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="flex flex-col gap-4 pb-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={linkClasses}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}