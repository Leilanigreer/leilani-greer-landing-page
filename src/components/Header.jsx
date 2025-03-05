import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = ["Home", "Projects", "About Me", "Connect"];

  const ResumeLink = ({ className = "" }) => (
    <a
      href="/LeilaniGreerSoftwareEngineeringResume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-white hover:text-white/90 transition-colors duration-300 ${className}`}
    >
      Resume
    </a>
  );

  const NavLink = ({ item, onClick }) => (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
        className="relative px-2 py-1 block"
        onClick={onClick}
      >
        <span className={`transition-colors duration-300 ${
          location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`)
            ? "text-white font-medium"
            : "text-white/90 hover:text-white"
        }`}>
          {item}
        </span>
        {location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`) && (
          <motion.div
            layoutId="background"
            className="absolute inset-0 bg-white/20 rounded-lg shadow-sm"
          />
        )}
      </Link>
    </motion.div>
  );

  return (
    <header className="bg-violet-500 py-3 px-6 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <motion.span 
            whileHover={{ scale: 1.10 }}
            transition={{ duration: 0.2 }}
            className="text-white font-bold text-2xl cursor-pointer"
          >
            <Link to="/">L.</Link>
          </motion.span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <NavLink key={item} item={item} />
            ))}
            <ResumeLink />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col gap-4 py-4">
                {navItems.map((item) => (
                  <NavLink 
                    key={item} 
                    item={item} 
                    onClick={() => setIsOpen(false)}
                  />
                ))}
                <ResumeLink className="py-1 px-2" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;