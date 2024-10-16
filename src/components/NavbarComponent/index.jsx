import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdLanguage} from "react-icons/md";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isLangDropdownActive, setIsLangDropdownActive] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const langDropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownActive(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownActive(false);
    }, 300);
  };

  const toggleLangDropdown = () => {
    setIsLangDropdownActive(!isLangDropdownActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const shopSublinks = [
    { name: "offers", image: "/images/new_images/navbar1.png", label: "Current Offers" },
    { name: "available", image: "/images/new_images/navbar2.png", label: "Available Cars" },
  ];

  return (
    <nav className={`w-full z-50 transition-all duration-300 ease-in-out ${isDropdownActive ? 'md:h-56' : 'h-auto md:h-16'}`}>
      <div className="w-full h-full px-4 sm:px-6 lg:px-8 -mt-2 flex flex-col justify-between bg-[#111] to-opacity-50 transition-colors duration-300 ease-in-out">
        <div className="flex justify-evenly items-center">
          <div className="text-white text-base mr-4 font-bold font-kaushan">
            Xi'an cloud car technology
          </div>

          <div className="">
            <img 
              src="/images/logo3.png" 
              alt="Cloud Auto Logo" 
              className="h-20 w-auto" 
            />
          </div>

          <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
            <div>
              <Link
                to="/"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200 ease-in-out font-railway font-bold"
              >
                Home
              </Link>
            </div>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <Link
                to="#"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200 ease-in-out font-railway font-bold"
              >
                Shop
              </Link>
              {isDropdownActive && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-transparent">
                  <div className="flex justify-center space-x-8 ">
                    {shopSublinks.map((sublink, index) => (
                      <Link
                        key={index}
                        to={`/${sublink.name.toLowerCase()}`}
                        className="flex flex-col items-center group border border-zinc-100 p-1 rounded-md"
                      >
                        <img
                          src={sublink.image}
                          alt={sublink.name}
                          className="w-32 h-20 m-1 rounded-md transition-transform duration-200 group-hover:scale-105"
                        />
                        <span className="text-gray-300 mb-2 group-hover:text-white text-xs transition-colors duration-200 ease-in-out font-railway">
                          {sublink.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200 ease-in-out font-railway font-bold"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200 ease-in-out font-railway font-bold"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex space-x-4 relative" ref={langDropdownRef}>
            <button
              onClick={toggleLangDropdown}
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
            >
              <MdLanguage size={20} />
            </button>
            {isLangDropdownActive && (
              <div className="absolute right-0 mt-8 w-32 bg-[#111] rounded-lg shadow-lg z-50">
                <div className="py-1">
                  <Link to="#" className="font-railway block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">English</Link>
                  <Link to="#" className="font-railway block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Chinese</Link>
                  <Link to="#" className="font-railway block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Russian</Link>
                </div>
              </div>
            )}
          </div>

          <div className="md:hidden">
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
      </div>

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
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;