import React from "react";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
function Contact() {
  const phoneNumber = "+919666884325";
  const whatsappLink = `https://wa.me/919666884325`;
  const emailAddress = "ssrchem5@gmail.com";
  const handleCall = () => {
    window.location.href = "tel:+919666884325"; // Replace with your desired phone number
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-white ">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          Feel free to reach out to us through any of the options below!
        </p>

        {/* Contact Options */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Email */}
          <a
            href={`mailto:${emailAddress}`}
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            <FaEnvelope className="mr-2 text-xl" />
            Email Us
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            <FaWhatsapp className="mr-2 text-xl" />
            WhatsApp Us
          </a>

          {/* Phone */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            <FaPhoneAlt className="mr-2 text-xl" />
            Call Us
          </a>
        </div>
      </div>

      {/* Decorative Section */}
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold">We'd love to hear from you!</h2>
        <p className=" mt-2">
          Whether it's a query, feedback, or assistance, feel free to reach out.
        </p>
      </div>
         <div
                      className="fixed bottom-4 right-4 bg-yellow-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-yellow-600 transition-all"
                      onClick={handleCall}
                      title="Call Us"
                    >
                      <FiPhone className="w-6 h-6" /> {/* React Icon for Phone */}
                    </div>
    </div>
  );
}

export default Contact;
