import { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { MdLanguage } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const shopSublinks = [
    { name: "EV", image: "/images/ev1.jpg" },
    { name: "SUV", image: "/images/suv1.jpg" },
    { name: "Truck", image: "/images/truck1.jpg" },
    { name: "Sedan", image: "/images/sedan1.jpg" },
    { name: "Hybrid", image: "/images/hybrid1.jpg" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isShopHovered ? 'h-56' : 'h-16'}`}>
      <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-4 flex flex-col justify-between bg-transparent hover:bg-[#111] bg-gradient-to-b from-[#111] to-opacity-50 transition-colors duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold font-satisfy">
            Cloud Auto
          </div>

          <div className="hidden md:flex flex-grow justify-center space-x-8">
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
              onMouseEnter={() => setIsShopHovered(true)}
              onMouseLeave={() => setIsShopHovered(false)}
            >
              <Link
                to="/shop"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200 ease-in-out font-railway font-bold"
              >
                Shop
              </Link>
              {isShopHovered && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-[#111] rounded-lg shadow-lg p-4">
                  <div className="flex justify-center space-x-8">
                    {shopSublinks.map((sublink, index) => (
                      <Link
                        key={index}
                        to={`/shop/${sublink.name.toLowerCase()}`}
                        className="flex flex-col items-center"
                      >
                        <img
                          src={sublink.image}
                          alt={sublink.name}
                          className="w-32 h-20 object-cover mb-1 rounded-md"
                        />
                        <span className="text-gray-300 hover:text-white text-xs transition-colors duration-200 ease-in-out font-railway">
                          {sublink.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              <Link
                to="/experience"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200 ease-in-out font-railway font-bold"
              >
                Experience
              </Link>
            </div>
          </div>

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