import { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { MdLanguage } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center bg-transparent hover:bg-[#111] bg-gradient-to-b from-[#111] to-opacity-50 transition-colors duration-300 ease-in-out">
        {/* Logo */}
        <div className="text-white text-2xl font-bold font-satisfy">
          Cloud Auto
        </div>

        {/* Links in center for larger screens */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          <Link
            to="/"
            className="text-gray-300 hover:text-white text-sm transition-colors duration-200 ease-in-out font-railway font-bold"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-300 hover:text-white text-sm transition-colors duration-200 ease-in-out font-railway font-bold"
          >
            Shop
          </Link>
          <Link
            to="/experience"
            className="text-gray-300 hover:text-white text-sm transition-colors duration-200 ease-in-out font-railway font-bold"
          >
            Experience
          </Link>
        </div>

        {/* Icons in the right for larger screens */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/help"
            className="text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
          >
            <MdLanguage size={20} />
          </Link>
          <Link
            to="/help"
            className="text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
          >
            <IoIosHelpCircleOutline size={20} />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Shop
            </Link>
            <Link
              to="/experience"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Experience
            </Link>
            <Link
              to="/help"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Help
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
