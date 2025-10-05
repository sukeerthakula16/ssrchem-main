import React from "react";
import { FaFlask, FaCheckCircle } from "react-icons/fa";

function Ourproducts() {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="relative group text-center bg-gray-50 p-6 rounded-xl shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-300 to-blue-500 opacity-0 group-hover:opacity-50 blur-lg transition duration-500"></div>
            <div className="relative">
              <FaFlask className="text-blue-500 text-4xl mb-4 mx-auto group-hover:scale-110 transition duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition duration-300">
                Chemical Purity
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition duration-300">
                Our chemicals are formulated with the highest purity for optimal results.
              </p>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="relative group text-center bg-gray-50 p-6 rounded-xl shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-300 to-yellow-500 opacity-0 group-hover:opacity-50 blur-lg transition duration-500"></div>
            <div className="relative">
              <FaCheckCircle className="text-yellow-500 text-4xl mb-4 mx-auto group-hover:scale-110 transition duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition duration-300">
                Quality Assurance
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition duration-300">
                Guaranteed quality through rigorous testing and standards.
              </p>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="relative group text-center bg-gray-50 p-6 rounded-xl shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-300 to-green-500 opacity-0 group-hover:opacity-50 blur-lg transition duration-500"></div>
            <div className="relative">
              <FaFlask className="text-green-500 text-4xl mb-4 mx-auto group-hover:scale-110 transition duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-green-500 transition duration-300">
                Product Versatility
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition duration-300">
                Trusted by industries and labs for versatile applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourproducts;
