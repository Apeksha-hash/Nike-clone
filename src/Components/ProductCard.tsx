//make a card for a product with image, title, description, price and add to cart button
import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string; // This usually represents the category (e.g., "Men's Road Running Shoes")
  price: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="group flex flex-col w-full bg-white cursor-pointer">
      {/* Image Wrapper - Nike uses a light grey background for shoes */}
      <div className="relative aspect-4/5 overflow-hidden bg-[#f6f6f6] mb-3">
        <img
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={title}
        />

        {/* Quick Add Overlay */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents clicking the card when clicking the button
              onAddToCart();
            }}
            className="w-full bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition"
          >
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col space-y-0.5">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-base text-zinc-900 leading-tight">
            {title}
          </h3>
          <span className="font-medium text-base text-zinc-900">${price}</span>
        </div>
        <p className="text-zinc-500 text-sm">{description}</p>

        {/* Secondary Info (Optional Nike Style) */}
        <p className="text-zinc-400 text-xs pt-1 italic">1 Color</p>
      </div>
    </div>
  );
};

export default ProductCard;
