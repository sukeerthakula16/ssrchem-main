import React from "react";
import { FaLeaf, FaBalanceScale, FaHandshake } from "react-icons/fa";

function Abtcomp() {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">About Our Company</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative group text-center bg-white p-6 rounded-xl shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-300 to-green-500 opacity-0 group-hover:opacity-50 blur-lg transition duration-500"></div>
            <div className="relative">
              <FaLeaf className="text-green-500 text-4xl mb-4 mx-auto group-hover:scale-110 transition duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-green-500 transition duration-300">
                Our Mission
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition duration-300">
                Deliver sustainable chemical solutions with a focus on safety, quality, and efficiency.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group text-center bg-white p-6 rounded-xl shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 opacity-0 group-hover:opacity-50 blur-lg transition duration-500"></div>
            <div className="relative">
              <FaBalanceScale className="text-orange-500 text-4xl mb-4 mx-auto group-hover:scale-110 transition duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition duration-300">
                Our Values
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition duration-300">
                Integrity and innovation guide us to deliver chemicals that exceed your expectations.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group text-center bg-white p-6 rounded-xl shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 opacity-0 group-hover:opacity-50 blur-lg transition duration-500"></div>
            <div className="relative">
              <FaHandshake className="text-blue-500 text-4xl mb-4 mx-auto group-hover:scale-110 transition duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition duration-300">
                Our Partnerships
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition duration-300">
                We collaborate with top labs and industries for long-term, trusted partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Abtcomp;
