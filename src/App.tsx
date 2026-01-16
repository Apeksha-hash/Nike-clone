import React from "react";
import Navbar from "./Components/Navbar";
import NikeHero from "./Components/NikeHero";
import ProductCard from "./Components/ProductCard";
import Footer from "./Components/Footer";
import CTASection from "./Components/CTASection";

const App: React.FC = () => {
  const handleAddToCart = () => {
    alert("Product added to cart!");
  };

  return (
    <div className="App">
      <Navbar />
      <NikeHero />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          image="https://res.cloudinary.com/drj1fsjao/image/upload/v1768592464/nike-air-max_ahi6xt.avif"
          title="Nike Air Max"
          description="Comfortable and stylish sneakers."
          price="$120"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          image="https://res.cloudinary.com/drj1fsjao/image/upload/v1768592464/nike-running_show_bfw7dm.jpg"
          title="Nike Running Shoes"
          description="Perfect for your daily runs."
          price="$ 100"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          image="https://res.cloudinary.com/drj1fsjao/image/upload/v1768592464/nike-sports-wear_bzlkzj.webp"
          title="Nike Sportswear"
          description="Casual wear for everyday comfort."
          price="$80"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          image="https://res.cloudinary.com/drj1fsjao/image/upload/v1768592464/nike-training-wear_v0oz9t.avif"
          title="Nike Training Gear"
          description="https://res.cloudinary.com/drj1fsjao/image/upload/v1768592464/nike-training-wear_v0oz9t.avif"
          price="$90"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          image="https://res.cloudinary.com/drj1fsjao/image/upload/v1768592464/nike-basketball-shoes_cplsxd.avif"
          title="Nike Basketball Shoes"
          description="High performance on the court."
          price="$150"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          image="https://res.cloudinary.com/drj1fsjao/image/upload/v1768593287/nike-pegasus_zjhiqq.avif"
          title="Nike Zoom Pegasus"
          description="Lightweight running shoe for speed and comfort."
          price="$130"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          image="https://res.cloudinary.com/drj1fsjao/image/upload/v1768592464/nike-casual-sneakers_emphko.jpg"
          title="Nike Casual Sneakers"
          description="Stylish sneakers for everyday wear."
          price="$110"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          image="https://res.cloudinary.com/drj1fsjao/image/upload/v1768593287/nike-blazer-mid_wxyscr.avif"
          title="Nike Blazer Mid"
          description="Classic basketball-inspired silhouette."
          price="$135"
          onAddToCart={handleAddToCart}
        />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;
