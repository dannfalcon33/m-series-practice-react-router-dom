import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../constants";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none"
    >
      <Link
        to="/"
        className="text-red-600 font-bold text-3xl tracking-tighter uppercase pointer-events-auto cursor-pointer"
      >
        M-SERIES
      </Link>

      <div className="flex gap-8 pointer-events-auto">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
};
