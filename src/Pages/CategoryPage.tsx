import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";

interface CategoryPageProps {
  cartItems: any[];
  onAddToCart: (product: any) => void;
  products: any[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  onAddToCart,
  products,
}) => {
  const { category, subcategory } = useParams<{
    category?: string;
    subcategory?: string;
  }>();
  const navigate = useNavigate();

  // Filter products based on category and subcategory
  const filteredProducts = products.filter((product: any) => {
    if (subcategory) {
      return (
        product.category?.toLowerCase() === category?.toLowerCase() &&
        product.subcategory?.toLowerCase() === subcategory?.toLowerCase()
      );
    }
    return product.category?.toLowerCase() === category?.toLowerCase();
  });

  const categoryTitle =
    category && subcategory
      ? `${category} - ${subcategory}`
      : category || "Products";

  return (
    <div className="App relative min-h-screen">
      {/* Back Button & Title */}
      <div className="mt-24 container mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/")}
          className="mb-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        >
          ← Back to Home
        </button>
        <h1 className="text-4xl font-bold mb-8 capitalize">{categoryTitle}</h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: any, index: number) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                onAddToCart={() => onAddToCart(product)}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No products found in this category.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
