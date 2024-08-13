import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserCircle,
  faSearch,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const logo =
    "https://www.shutterstock.com/image-vector/creative…dern-abstract-ecommerce-logo-260nw-2134594701.jpg";

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        <img src={logo} alt="Brand Logo" className="h-10" />
        <nav className="hidden md:flex ml-6">
          <ul className="flex space-x-4 text-gray-800 font-semibold">
            <li>
              <a href="#" className="hover:text-[#FF6F61]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6F61]">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6F61]">
                Deals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6F61]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6F61]">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div className="relative">
          <button onClick={toggleSearch} className="md:hidden">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-lg text-gray-800"
            />
          </button>
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="absolute right-0 top-10 border border-gray-300 p-2 rounded-lg md:hidden"
            />
          )}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className="relative">
            <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
              3
            </span>
          </button>
          <button>
            <FontAwesomeIcon
              icon={faUserCircle}
              className="text-2xl text-gray-800 hover:text-[#FF6F61]"
            />
          </button>
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-800" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white shadow-lg transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <img src={logo} alt="Brand Logo" className="h-10" />
          <button onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={faTimes}
              className="text-2xl text-gray-800"
            />
          </button>
        </div>
        <nav className="px-4 py-2">
          <ul className="space-y-4 text-gray-800 font-semibold">
            <li>
              <a href="#" className="block hover:text-[#FF6F61]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-[#FF6F61]">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-[#FF6F61]">
                Deals
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-[#FF6F61]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-[#FF6F61]">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
