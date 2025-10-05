import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa"; // Added FaBars and FaTimes
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Call from "../Effects/Call";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu
  const [isVisible, setIsVisible] = useState(true); // State for header visibility
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll detection for showing/hiding header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide header when scrolling down
      } else {
        setIsVisible(true); // Show header when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Function to handle link click
  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <>
      <div className="mb-14">
        <header
          className={`bg-white shadow-md fixed top-0 w-full z-50 transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center px-4">
            {/* Logo */}
            <div className="flex text-2xl font-bold text-gray-800 items-center">
              <div>
                <Link to="/">
                  <img src={logo} width={100} height={100} alt="Logo" />
                </Link>
              </div>
              <div className="">
                <Link to="/">
                  <span className="text-blue-500">SSR</span>Chem
                </Link>
              </div>
            </div>
            {/* Navigation */}
            <nav
              className={`${
                menuOpen ? "block" : "hidden"
              } md:flex space-x-6 text-gray-600 font-semibold absolute md:static bg-white top-16 left-0 w-full md:w-auto md:bg-transparent shadow-md md:shadow-none`}
            >
              <Link
                to="/"
                onClick={handleLinkClick} // Close menu on link click
                className="block md:inline-block px-4 py-2 text-center hover:text-blue-600 transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={handleLinkClick} // Close menu on link click
                className="block md:inline-block px-4 py-2 text-center hover:text-blue-600 transition"
              >
                About
              </Link>
              <Link
                to="/products"
                onClick={handleLinkClick} // Close menu on link click
                className="block md:inline-block px-4 py-2 text-center hover:text-blue-600 transition"
              >
                Products
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick} // Close menu on link click
                className="block md:inline-block px-4 py-2 text-center hover:text-blue-600 transition"
              >
                Contact
              </Link>
            </nav>
            {/* Hamburger Menu for Smaller Screens */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl text-gray-600"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+919666884325">
                <FaPhoneAlt className="text-blue-600" />
              </a>
              <a href="/contact">
                <Call/>
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
