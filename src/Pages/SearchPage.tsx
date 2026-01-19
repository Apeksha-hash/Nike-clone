import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";

interface SearchPageProps {
  searchResults: any[];
  onAddToCart: (product: any) => void;
  searchQuery: string;
}

const SearchPage: React.FC<SearchPageProps> = ({
  searchResults,
  onAddToCart,
  searchQuery,
}) => {
  const navigate = useNavigate();

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
        <h1 className="text-4xl font-bold mb-2">Search Results</h1>
        <p className="text-gray-600 mb-8">
          {searchResults.length > 0
            ? `Found ${searchResults.length} product${searchResults.length !== 1 ? "s" : ""} for "${searchQuery}"`
            : `No products found for "${searchQuery}"`}
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.length > 0 ? (
            searchResults.map((product: any, index: number) => (
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
              Try searching for different keywords.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;
