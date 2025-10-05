import React from "react";
import { FiPhone } from "react-icons/fi"; // Import the phone icon
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon
import Abtcomp from "../content/Abtcomp";
import Ourproducts from "../content/Ourproducts";
import Strive from "../content/Strive";
import Discover from "../content/Discover";
import { Link } from "react-router-dom";
import Shop from "../Effects/Shop";
import Button from "../Effects/Button";
import homeback from "../images/homeback.jpg";

function Home() {
  const handleCall = () => {
    window.location.href = "tel:+919666884325"; // Replace with your desired phone number
  };

  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/919666884325"; // Replace with your WhatsApp number
  };

  return (
    <div>
      <div
        className="bg-cover bg-center h-screen text-white flex items-center"
        style={{ backgroundImage: `url(${homeback})` }}
      >
        <div className="flex flex-col justify-center container h-full w-full px-4 text-center mt-16 bg-black bg-opacity-40 ">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Discover the <span className="text-orange-600 px-2 py-1 rounded">Power</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your one-stop solution for sustainable, efficient, and high-quality chemicals tailored for labs and industries.
          </p>
          <Link to="/products">
            <Button />
          </Link>
        </div>
      </div>
      <div>
        <Abtcomp />
      </div>
      <div>
        <Ourproducts />
      </div>
      <div>
        <Strive />
      </div>
      <div>
        <Discover />
      </div>

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-4 right-4">
        <div className="relative group">
          {/* Main Toggle Button */}
          <div
            className="bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition-all"
            title="Contact Us"
          >
            <span className="w-6 h-6 flex items-center justify-center">+</span>
          </div>

          {/* Hidden Buttons (Visible on Hover) */}
          <div className="absolute bottom-14 right-0 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {/* WhatsApp Button */}
            <div
              className="bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all"
              onClick={handleWhatsApp}
              title="Chat on WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </div>

            {/* Call Button */}
            <div
              className="bg-yellow-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-yellow-600 transition-all"
              onClick={handleCall}
              title="Call Us"
            >
              <FiPhone className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
