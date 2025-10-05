import React from "react";
import { FiPhone } from "react-icons/fi";
function About() {
  const handleCall = () => {
    window.location.href = "tel:+919666884325"; // Replace with your desired phone number
  };
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            About <span className="text-blue-500">SSR</span>Chem
          </h2>
          <p className="text-gray-600 mt-4 text-lg md:text-xl">
            We are committed to providing cutting-edge chemical solutions that empower businesses worldwide.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://www.visualsstock.com/images/Low/2/AK25177.jpg" // Replace with actual image URL
              alt="About SSR Chem"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 md:pl-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Delivering Excellence in Chemical Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <span className="text-red-600 font-semibold">SSR Chem</span>, we believe in innovation, quality, and sustainability. 
              With years of experience, we deliver high-quality chemical products that meet the unique needs of various industries. 
              Our goal is to drive success and efficiency for our clients through advanced, reliable, and eco-friendly solutions.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Cutting-edge chemical formulations</li>
              <li>Sustainable and responsible practices</li>
              <li>Commitment to safety and transparency</li>
              <li>Customer-centric, innovative solutions</li>
            </ul>
            {/* <a
              href="#contact"
              className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
            >
              Learn More
            </a> */}
          </div>
        </div>
          <div
                className="fixed bottom-4 right-4 bg-yellow-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-yellow-600 transition-all"
                onClick={handleCall}
                title="Call Us"
              >
                <FiPhone className="w-6 h-6" /> {/* React Icon for Phone */}
              </div>
      </div>
    </section>
  );
}

export default About;
