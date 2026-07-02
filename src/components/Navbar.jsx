import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Services", "Products", "Contact"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}

          <div>
            <h2
              className={`text-2xl font-bold transition ${
                scrolled ? "text-blue-900" : "text-white"
              }`}
            >
              JAL ENVIROTECH INC.
            </h2>

            <p
              className={`text-xs tracking-wider ${
                scrolled ? "text-gray-600" : "text-gray-200"
              }`}
            >
              AN ISO CERTIFIED COMPANY
            </p>
          </div>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  className={`cursor-pointer font-medium transition hover:text-cyan-400 ${
                    scrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Mobile */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`lg:hidden text-3xl ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {mobileMenu ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-50"
          >
            <div className="p-8">
              <button
                onClick={() => setMobileMenu(false)}
                className="text-3xl mb-8"
              >
                <HiX />
              </button>

              <ul className="space-y-8">
                {navLinks.map((item) => (
                  <li key={item}>
                    <ScrollLink
                      to={item.toLowerCase()}
                      smooth
                      duration={700}
                      offset={-80}
                      onClick={() => setMobileMenu(false)}
                      className="text-lg font-medium cursor-pointer hover:text-cyan-500"
                    >
                      {item}
                    </ScrollLink>
                  </li>
                ))}
              </ul>

              <a
                href="tel:8700939284"
                className="mt-12 flex justify-center items-center gap-2 bg-blue-700 text-white rounded-full py-3"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
