import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NAV_LINKS } from "../constants";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none"
    >
      <Link
        to="/"
        className="text-red-600 font-bold text-3xl tracking-tighter uppercase pointer-events-auto cursor-pointer z-[101]"
      >
        M-SERIES
      </Link>

      {/* Desktop Menu */}
      <div className="hidden min-[1084px]:flex gap-8 pointer-events-auto">
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

      {/* Toggle Button for Mobile */}
      <div className="min-[1084px]:hidden pointer-events-auto z-[101]">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-red-600 transition-colors"
        >
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full bg-red-600 z-[100] flex flex-col justify-center items-center pointer-events-auto overflow-hidden"
          >
            <div className="flex flex-col gap-8 items-center">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className="text-white text-2xl font-bold tracking-widest uppercase hover:text-black transition-colors"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
