import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export function Header() {
  const location = useLocation();
  
  return (
    <header className="bg-violet-500 py-3 px-6 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <motion.span 
            whileHover={{ scale: 1.10 }}
            transition={{ duration: 0.2 }}
            className="text-white font-bold text-2xl cursor-pointer"
          >
            <Link to="/">
            L.
            </Link>
          </motion.span>
          <div className="flex gap-8">
            {["Home", "Projects", "About Me", "Connect"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                  className="relative px-2 py-1"
                >
                  <span className={`text-sm transition-colors duration-300 ${
                    location.pathname === (item === "Home Page" ? "/" : `/${item.toLowerCase().replace(" ", "")}`)
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
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;