import React from "react";
import quality from "../images/quality.jpg"
import glass from  "../images/glass.jpg"
import molecules from  "../images/molecules.jpg"
function Discover() {
  return (
    <div className="bg-gray-100">
      {/* Section: Discover Our Expertise */}
      <section className="py-16 px-4 md:px-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Discover Our Expertise
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
          Our chemical experts possess extensive industry knowledge and are
          committed to delivering exceptional service and support.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative group text-center border rounded-lg shadow-md p-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-300 to-blue-500 opacity-0 group-hover:opacity-50 blur-lg transition duration-500"></div>
            <div className="relative">
              <img
                src={quality}// Replace with the actual image path
                alt="Unparalleled Quality"
                className="flex w-20 mb-4 justify-center items-center mx-auto group-hover:scale-110 transition duration-300"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-500 transition duration-300">
                Unparalleled Quality
              </h3>
              <p className="text-gray-500 mb-4 group-hover:text-gray-800 transition duration-300">
                Quality is the foundation of our operations.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group text-center border rounded-lg shadow-md p-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-300 to-yellow-500 opacity-0 group-hover:opacity-50 blur-lg transition duration-500"></div>
            <div className="relative">
              <img
                src={glass}// Replace with the actual image path
                alt="Commitment to Transparency"
                className="w-20 mb-4 mx-auto group-hover:scale-110 transition duration-300"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-yellow-500 transition duration-300">
                Commitment to Transparency
              </h3>
              <p className="text-gray-500 mb-4 group-hover:text-gray-800 transition duration-300">
                We are committed to maintaining a transparent and reliable process.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group text-center border rounded-lg shadow-md p-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-300 to-green-500 opacity-0 group-hover:opacity-50 blur-lg transition duration-500"></div>
            <div className="relative">
              <img
                src={molecules} // Replace with the actual image path
                alt="Adaptability and Agility"
                className="w-20 mb-4 mx-auto group-hover:scale-110 transition duration-300"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-500 transition duration-300">
                Adaptability and Agility
              </h3>
              <p className="text-gray-500 mb-4 group-hover:text-gray-800 transition duration-300">
                In the ever-evolving chemical industry, we customize solutions.
              </p>
            </div>
          </div>
        </div>

        <a
          href="tel:+919666884325"
          className="text-blue-500 hover:text-blue-700 font-semibold mt-8 inline-block"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default Discover;
