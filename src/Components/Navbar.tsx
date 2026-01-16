// Navbar.tsx - Nike navigation bar
// create a responsive navigation bar with nike logo, there are 3 types of logos, and a navbar with men,women,kids,sports,jorden,nikeskims,that have like dropdown menus that is not small but covers like half the page  using React and Tailwind CSS.
///when hovered over the men,women and other links, a dropdown menu should appear covering half the page
import React, { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaHeart } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Reusable Dropdown Component for Cleanliness
  const Dropdown = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="group static">
      {" "}
      {/* Static parent allows child to be full-width of the Nav */}
      <button className="text-black font-semibold text-[15px] py-6 border-b-2 border-transparent hover:border-black transition-all">
        {title}
      </button>
      {/* Full-Width Dropdown Container */}
      <div className="absolute left-0 top-full w-full bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-100 border-t border-gray-100">
        <div className="max-w-360 mx-auto px-12 py-10">
          <div className="grid grid-cols-3 gap-16">{children}</div>
        </div>
      </div>
    </div>
  );

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-100 border-b border-gray-100">
      <div className="max-w-360 mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center py-4 pr-16">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="Nike Logo"
            className="h-6 w-auto hover:opacity-70 transition-opacity"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 h-full flex-1">
          <Dropdown title="Men">
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Shoes</h3>
              <ul className="space-y-2">
                {[
                  "Running",
                  "Basketball",
                  "Training",
                  "Casual",
                  "Skateboarding",
                  "Soccer",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Clothing</h3>
              <ul className="space-y-2">
                {[
                  "Tops & T-Shirts",
                  "Bottoms & Shorts",
                  "Outerwear",
                  "Hoodies",
                  "Vests",
                  "Tracksuits",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Gear</h3>
              <ul className="space-y-2">
                {[
                  "Accessories",
                  "Socks",
                  "Bags",
                  "Hats",
                  "Watches",
                  "Equipment",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Dropdown>

          <Dropdown title="Women">
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Shoes</h3>
              <ul className="space-y-2">
                {[
                  "Running",
                  "Training",
                  "Casual",
                  "Sandals",
                  "Basketball",
                  "Soccer",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Clothing</h3>
              <ul className="space-y-2">
                {[
                  "Tops",
                  "Shorts",
                  "Leggings",
                  "Sports Bras",
                  "Hoodies",
                  "Tracksuits",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Featured</h3>
              <ul className="space-y-2">
                {[
                  "New Releases",
                  "Bestsellers",
                  "Member Exclusives",
                  "Sale",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Dropdown>

          <Dropdown title="Kids">
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Shoes</h3>
              <ul className="space-y-2">
                {[
                  "Toddlers",
                  "Preschool",
                  "Grade School",
                  "Youth",
                  "Running",
                  "Basketball",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Clothing</h3>
              <ul className="space-y-2">
                {[
                  "Tops",
                  "Shorts",
                  "Outerwear",
                  "Hoodies",
                  "Tracksuits",
                  "Dresses",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Gear</h3>
              <ul className="space-y-2">
                {[
                  "Accessories",
                  "Socks",
                  "Bags",
                  "Hats",
                  "Sports Gear",
                  "Swimming",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Dropdown>

          <Dropdown title="Sports">
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Categories</h3>
              <ul className="space-y-2">
                {[
                  "Running",
                  "Basketball",
                  "Training",
                  "Tennis",
                  "Soccer",
                  "Golf",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Shoes</h3>
              <ul className="space-y-2">
                {[
                  "Performance",
                  "Training Shoes",
                  "Court Shoes",
                  "Trail Running",
                  "Cleats",
                  "Sport Sandals",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Apparel</h3>
              <ul className="space-y-2">
                {[
                  "Jerseys",
                  "Shorts",
                  "Jackets",
                  "Leggings",
                  "Sports Bras",
                  "Compression",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Dropdown>

          <Dropdown title="Jordan">
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Shoes</h3>
              <ul className="space-y-2">
                {[
                  "Jordan 1",
                  "Jordan 3",
                  "Jordan 4",
                  "Jordan 11",
                  "Retro",
                  "New Releases",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Apparel</h3>
              <ul className="space-y-2">
                {[
                  "Tops & Jerseys",
                  "Hoodies",
                  "Pants",
                  "Shorts",
                  "Jackets",
                  "Tracksuits",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Accessories</h3>
              <ul className="space-y-2">
                {[
                  "Hats & Caps",
                  "Socks",
                  "Bags",
                  "Backpacks",
                  "Beanies",
                  "All Accessories",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Dropdown>

          <Dropdown title="Sale">
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Men's Sale</h3>
              <ul className="space-y-2">
                {[
                  "Shoes",
                  "Clothing",
                  "Accessories",
                  "All Sale Items",
                  "Up to 50% Off",
                  "Clearance",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">
                Women's Sale
              </h3>
              <ul className="space-y-2">
                {[
                  "Shoes",
                  "Clothing",
                  "Accessories",
                  "All Sale Items",
                  "Up to 50% Off",
                  "Clearance",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-5 text-lg">Kids' Sale</h3>
              <ul className="space-y-2">
                {[
                  "Shoes",
                  "Clothing",
                  "Accessories",
                  "All Sale Items",
                  "Up to 40% Off",
                  "Clearance",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-black text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Dropdown>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-4 ml-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-100 text-black text-sm px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500 w-64"
          />
          <button className="text-black hover:text-gray-600 transition-colors">
            <FaHeart size={20} />
          </button>
          <button className="text-black hover:text-gray-600 transition-colors">
            <FaShoppingCart size={20} />
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
