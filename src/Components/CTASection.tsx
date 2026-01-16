// create one section with a bold headline, subheadline, and two call-to-action buttons side by side using React and Tailwind CSS.
import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-24 w-full">
      <div className="px-12 w-full">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Elevate Your Style</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Discover the latest trends in footwear and apparel with unbeatable
            comfort and performance. Join millions of athletes worldwide.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition duration-300 text-lg">
              Shop Now
            </button>
            <button className="bg-transparent text-white font-bold py-4 px-10 rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition duration-300 text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
