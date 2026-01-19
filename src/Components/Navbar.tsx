// Navbar.tsx - Nike navigation bar
// create a responsive navigation bar with nike logo, there are 3 types of logos, and a navbar with men,women,kids,sports,jorden,nikeskims,that have like dropdown menus that is not small but covers like half the page  using React and Tailwind CSS.
///when hovered over the men,women and other links, a dropdown menu should appear covering half the page
import React, { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

// 1. Added onCartClick to the interface
interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  products: any[];
  onSearch: (results: any[]) => void;
}

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <button className="text-black font-medium hover:text-gray-600 transition-colors py-6">
        {title}
      </button>
      {isHovered && (
        <>
          {/* Invisible bridge to prevent gap */}
          <div
            className="fixed left-0 top-full h-2 w-full"
            style={{ top: "var(--navbar-height, 65px)" }}
          />
          <div
            className="fixed left-0 top-full bg-white border border-gray-100 shadow-lg p-8 grid grid-cols-3 gap-8 w-screen z-50"
            style={{ top: "calc(var(--navbar-height, 65px) + 8px)" }}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};

// 2. Destructure onCartClick here
const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onCartClick,
  products,
  onSearch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = products.filter(
        (product: any) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()),
      );
      onSearch(results);
      navigate("/search");
    } else {
      onSearch([]);
      navigate("/");
    }
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-100 border-b border-gray-100">
      <div className="max-w-360 mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center py-4 md:pr-16">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="Nike Logo"
            className="h-6 w-auto hover:opacity-70 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 h-full flex-1">
          <Dropdown title="Men">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2">Featured</h3>
              <Link
                to="/Men"
                className="text-gray-700 hover:text-black text-sm"
              >
                All Shoes
              </Link>
              <Link
                to="/Men"
                className="text-gray-700 hover:text-black text-sm"
              >
                New Arrivals
              </Link>
              <Link
                to="/Men"
                className="text-gray-700 hover:text-black text-sm"
              >
                Best Sellers
              </Link>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2">Shoes</h3>
              <Link
                to="/Men/Shoes"
                className="text-gray-700 hover:text-black text-sm"
              >
                Running
              </Link>
              <Link
                to="/Men/Shoes"
                className="text-gray-700 hover:text-black text-sm"
              >
                Basketball
              </Link>
              <Link
                to="/Men/Shoes"
                className="text-gray-700 hover:text-black text-sm"
              >
                Casual
              </Link>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2">Clothing</h3>
              <Link
                to="/Men/Clothing"
                className="text-gray-700 hover:text-black text-sm"
              >
                Tops
              </Link>
              <Link
                to="/Men/Clothing"
                className="text-gray-700 hover:text-black text-sm"
              >
                Bottoms
              </Link>
              <Link
                to="/Men/Clothing"
                className="text-gray-700 hover:text-black text-sm"
              >
                Jackets
              </Link>
            </div>
          </Dropdown>
          <Dropdown title="Women">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2">Featured</h3>
              <Link
                to="/Women"
                className="text-gray-700 hover:text-black text-sm"
              >
                All Shoes
              </Link>
              <Link
                to="/Women"
                className="text-gray-700 hover:text-black text-sm"
              >
                New Arrivals
              </Link>
              <Link
                to="/Women"
                className="text-gray-700 hover:text-black text-sm"
              >
                Best Sellers
              </Link>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2">Shoes</h3>
              <Link
                to="/Women/Shoes"
                className="text-gray-700 hover:text-black text-sm"
              >
                Running
              </Link>
              <Link
                to="/Women/Shoes"
                className="text-gray-700 hover:text-black text-sm"
              >
                Basketball
              </Link>
              <Link
                to="/Women/Shoes"
                className="text-gray-700 hover:text-black text-sm"
              >
                Casual
              </Link>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2">Clothing</h3>
              <Link
                to="/Women/Clothing"
                className="text-gray-700 hover:text-black text-sm"
              >
                Tops
              </Link>
              <Link
                to="/Women/Clothing"
                className="text-gray-700 hover:text-black text-sm"
              >
                Bottoms
              </Link>
              <Link
                to="/Women/Clothing"
                className="text-gray-700 hover:text-black text-sm"
              >
                Jackets
              </Link>
            </div>
          </Dropdown>
          <Dropdown title="Kids">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2">Featured</h3>
              <Link
                to="/Kids"
                className="text-gray-700 hover:text-black text-sm"
              >
                All Shoes
              </Link>
              <Link
                to="/Kids"
                className="text-gray-700 hover:text-black text-sm"
              >
                New Arrivals
              </Link>
              <Link
                to="/Kids"
                className="text-gray-700 hover:text-black text-sm"
              >
                Best Sellers
              </Link>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2">Shoes</h3>
              <Link
                to="/Kids/Shoes"
                className="text-gray-700 hover:text-black text-sm"
              >
                Running
              </Link>
              <Link
                to="/Kids/Shoes"
                className="text-gray-700 hover:text-black text-sm"
              >
                Basketball
              </Link>
              <Link
                to="/Kids/Shoes"
                className="text-gray-700 hover:text-black text-sm"
              >
                Casual
              </Link>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2">Clothing</h3>
              <Link
                to="/Kids/Clothing"
                className="text-gray-700 hover:text-black text-sm"
              >
                Tops
              </Link>
              <Link
                to="/Kids/Clothing"
                className="text-gray-700 hover:text-black text-sm"
              >
                Bottoms
              </Link>
              <Link
                to="/Kids/Clothing"
                className="text-gray-700 hover:text-black text-sm"
              >
                Jackets
              </Link>
            </div>
          </Dropdown>
        </div>

        {/* Search Bar & Icons */}
        <div className="hidden md:flex items-center space-x-4 ml-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="bg-gray-100 text-black text-sm px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500 w-64"
          />

          {/* 3. ATTACHED onCartClick to this button */}
          <button
            onClick={onCartClick}
            className="relative text-black hover:text-gray-600 transition-colors"
          >
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center py-4">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-in">
          {["Men", "Women", "Kids", "Sports", "Jordan", "Sale"].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-6 py-4 text-black font-bold border-b border-gray-50 hover:bg-gray-50 uppercase tracking-widest text-sm"
            >
              {item}
            </a>
          ))}
          {/* Added Cart link for Mobile */}
          <button
            onClick={() => {
              onCartClick();
              toggleMenu();
            }}
            className="w-full text-left px-6 py-4 text-black font-bold border-b border-gray-50 hover:bg-gray-50 uppercase tracking-widest text-sm flex items-center justify-between"
          >
            Cart <span>({cartCount})</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
