import React from "react";
import { Link } from "react-router-dom";
import Button from "../Effects/Button";
import Shop from "../Effects/Shop";
import Speak from "../Effects/Speak";
import greenchem from  "../images/greenchem.jpg.png"
import drums from "../images/drums.jpg"
import toxic from "../images/toxic.jpg"
import factory from "../images/factory.jpg"
import doctor from "../images/doctor.jpg"
function Strive() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-white py-16 px-4 md:px-16">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={greenchem} // Replace with the actual image path
            alt="Chemical Lab"
            className=""
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
          <h4 className="text-sm text-orange-500 font-semibold mb-2">
            Empowering Your Success
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            At Our Chemical Company, We Strive to be Your
          </h1>
          <p className="text-gray-600 mb-6">
            Our mission is to empower our customers by providing cutting-edge
            chemical solutions that drive their success.
          </p>
          <Link to="/products">
            <Shop/>
          </Link>
        </div>""
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <img
              src={drums}// Replace with the correct image
              alt="Sustainable Practices"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Sustainable Practices
            </h3>
            <p className="text-gray-600 mt-2 mb-4">
              Sustainability is at the forefront of our operations.
            </p>
            {/* <span className="text-orange-500 font-semibold cursor-pointer">
              Responsible Sourcing
            </span> */}
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <img
              src={toxic}
              alt="Commitment to Safety"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Commitment to
            </h3>
            <p className="text-gray-600 mt-2 mb-4">
              Safety is paramount in our chemical handling and distribution.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <img
              src={factory}
              alt="Cutting-Edge"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Cutting-Edge
            </h3>
            <p className="text-gray-600 mt-2 mb-4">
              We stay at the forefront of technological advancements in the
              industry.
            </p>
            {/* <span className="text-orange-500 font-semibold cursor-pointer">
              Explore Our Capabilities
            </span> */}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gray-900 text-white py- px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect with Our Experts
            </h2>
            <p className="text-gray-300 mb-6">
              Our knowledgeable team is dedicated to providing personalized
              solutions.
            </p>
            <a href="tel:+919666884325">
              <Speak/>
            </a>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
            <img
              src={doctor}
              alt="Glass Beakers"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Strive;
