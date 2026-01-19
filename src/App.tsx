import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NikeHero from "./Components/NikeHero";
import ProductCard from "./Components/ProductCard";
import Footer from "./Components/Footer";
import CTASection from "./Components/CTASection";
import CartSidebar from "./Components/CartSideBar";
import CategoryPage from "./Pages/CategoryPage.tsx";
import SearchPage from "./Pages/SearchPage.tsx";

// 1. Define the Interface
interface Product {
  image: string;
  title: string;
  description: string;
  price: string;
  category?: string;
  subcategory?: string;
}

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  // 2. The Products Array (Using your links)
  const products: Product[] = [
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768592464/nike-air-max_ahi6xt.avif",
      title: "Nike Air Max",
      description: "Comfortable and stylish sneakers.",
      price: "$120",
      category: "Men",
      subcategory: "Shoes",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768592464/nike-running_show_bfw7dm.jpg",
      title: "Nike Running Shoes",
      description: "Perfect for your daily runs.",
      price: "$100",
      category: "Men",
      subcategory: "Shoes",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768592464/nike-sports-wear_bzlkzj.webp",
      title: "Nike Sportswear",
      description: "Casual wear for everyday comfort.",
      price: "$80",
      category: "Men",
      subcategory: "Clothing",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768592464/nike-training-wear_v0oz9t.avif",
      title: "Nike Training Gear",
      description: "Elite performance wear for training.",
      price: "$90",
      category: "Women",
      subcategory: "Clothing",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768592464/nike-basketball-shoes_cplsxd.avif",
      title: "Nike Basketball Shoes",
      description: "High performance on the court.",
      price: "$150",
      category: "Men",
      subcategory: "Shoes",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768593287/nike-pegasus_zjhiqq.avif",
      title: "Nike Zoom Pegasus",
      description: "Lightweight running shoe for speed.",
      price: "$130",
      category: "Women",
      subcategory: "Shoes",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768592464/nike-casual-sneakers_emphko.jpg",
      title: "Nike Casual Sneakers",
      description: "Stylish sneakers for everyday wear.",
      price: "$110",
      category: "Kids",
      subcategory: "Shoes",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768593287/nike-blazer-mid_wxyscr.avif",
      title: "Nike Blazer Mid",
      description: "Classic basketball-inspired silhouette.",
      price: "$135",
      category: "Women",
      subcategory: "Shoes",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768791061/nike-revolution_z9nor4.avif",
      title: "Nike Revolution",
      description: "Comfortable everyday running shoes.",
      price: "$75",
      category: "Men",
      subcategory: "Shoes",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768791061/nike-winflo_t3ujwo.avif",
      title: "Nike Winflo",
      description: "Responsive cushioning for running.",
      price: "$95",
      category: "Women",
      subcategory: "Shoes",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768791062/nike-dri-fit-shirt_hagwhl.avif",
      title: "Nike Dri-FIT Shirt",
      description: "Moisture-wicking athletic shirt.",
      price: "$45",
      category: "Men",
      subcategory: "Clothing",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768791063/nike-yoga-pants_mn72da.avif",
      title: "Nike Yoga Pants",
      description: "Comfortable fit for active lifestyle.",
      price: "$85",
      category: "Women",
      subcategory: "Clothing",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768791062/nike-lebron-21_bpxzi1.webp",
      title: "Nike LeBron 21",
      description: "Professional basketball performance.",
      price: "$180",
      category: "Men",
      subcategory: "Shoes",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768791061/nike-court-legacy_ltxf7m.png",
      title: "Nike Court Legacy",
      description: "Vintage-inspired athletic shoes.",
      price: "$115",
      category: "Women",
      subcategory: "Shoes",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768791062/nike-kids-court-borough_xdgzn4.avif",
      title: "Nike Kid's Court Borough",
      description: "Durable shoes for active kids.",
      price: "$65",
      category: "Kids",
      subcategory: "Shoes",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768791062/nike-kids-hoodie_s5jncx.avif",
      title: "Nike Kids Hoodie",
      description: "Soft and warm hoodie for kids.",
      price: "$55",
      category: "Kids",
      subcategory: "Clothing",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768791063/nike-mens-jackey_xwxt1w.avif",
      title: "Nike Men's Jacket",
      description: "Windproof and water-resistant.",
      price: "$140",
      category: "Men",
      subcategory: "Clothing",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768791062/nike-womens-leggings_jvf8xi.jpg",
      title: "Nike Women's Leggings",
      description: "High-waisted support leggings.",
      price: "$95",
      category: "Women",
      subcategory: "Clothing",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768791061/nike-cortez_i3olf1.webp",
      title: "Nike Cortez",
      description: "Iconic classic sneaker.",
      price: "$125",
      category: "Men",
      subcategory: "Shoes",
    },
    {
      image:
        "https://res.cloudinary.com/drj1fsjao/image/upload/v1768791063/nike-womens-running-tank_qzws5a.webp",
      title: "Nike Women's Running Tank",
      description: "Lightweight breathable tank top.",
      price: "$40",
      category: "Women",
      subcategory: "Clothing",
    },
  ];

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const removeFromCart = (indexToRemove: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <Router>
      <div className="App relative min-h-screen">
        <Navbar
          cartCount={cartItems.length}
          onCartClick={() => setIsCartOpen(true)}
          products={products}
          onSearch={(results: Product[]) => {
            setSearchResults(results);
          }}
        />

        {/* SUCCESS TOAST */}
        {showToast && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="bg-white text-black px-10 py-5 rounded-3xl shadow-2xl border border-gray-200">
              <p className="text-lg font-bold">Added to Cart Successfully!</p>
            </div>
          </div>
        )}

        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onRemove={removeFromCart}
        />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <NikeHero />
                <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.map((product, index) => (
                    <ProductCard
                      key={index}
                      image={product.image}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      onAddToCart={() => handleAddToCart(product)}
                    />
                  ))}
                </div>
                <CTASection />
                <Footer />
              </>
            }
          />

          {/* Search Results Page */}
          <Route
            path="/search"
            element={
              <SearchPage
                searchResults={searchResults}
                onAddToCart={handleAddToCart}
                searchQuery=""
              />
            }
          />

          {/* Category Pages */}
          <Route
            path="/:category/:subcategory"
            element={
              <CategoryPage
                cartItems={cartItems}
                onAddToCart={handleAddToCart}
                products={products}
              />
            }
          />
          <Route
            path="/:category"
            element={
              <CategoryPage
                cartItems={cartItems}
                onAddToCart={handleAddToCart}
                products={products}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
