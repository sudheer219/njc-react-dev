import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex gap-6">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
        About
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
        Contact
      </NavLink>
    </nav>
  );
}