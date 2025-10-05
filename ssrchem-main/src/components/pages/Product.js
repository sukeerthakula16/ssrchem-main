import React from "react";
import { Link } from "react-router-dom";
import pet_ether from "../images/pet_ether.jpg";
import ethyl_acetate from "../images/ethyl_acetate.jpg";
import ipa from "../images/ipa.jpg";
import mtbe from "../images/mtbe.jpg";
import acetonitrile from "../images/acetonitrile.jpg";
import thf from "../images/thf.jpg";
import acetone from "../images/acetone.jpg";
import dop from "../images/dop.jpg";
import toluene from "../images/toluene.jpg";
import hexane from "../images/hexane.jpg";
import acetic_acid from "../images/acetic_acid.jpg";
import xylene from "../images/xylene.jpg";
import ortho_xylene from "../images/ortho_xylene.jpg";
import mix_xylene from "../images/mix_xylene.jpg";
import mdc from "../images/mdc.jpg";
import dmf from "../images/dmf.jpg";
import chloroform from "../images/chloroform.jpg";
import formaldehyde from "../images/formaldehyde.jpg";
import Cont from "../Effects/Cont";
import { FiPhone } from "react-icons/fi";
const products = [
  { name: "PET ETHER", image: pet_ether, description: "High-purity PET Ether used in pharmaceutical and industrial applications." },
  { name: "ETHYL ACETATE", image: ethyl_acetate, description: "A versatile solvent for printing, packaging, and coatings." },
  { name: "IPA", image: ipa, description: "Isopropyl Alcohol (IPA) with excellent solvent properties for multiple industries." },
  { name: "MTBE", image: mtbe, description: "Methyl Tertiary Butyl Ether (MTBE) for industrial and automotive use." },
  { name: "ACETONITRILE", image: acetonitrile, description: "A critical solvent in pharmaceutical synthesis and HPLC analysis." },
  { name: "THF", image: thf, description: "Tetrahydrofuran (THF), widely used in polymer and pharmaceutical industries." },
  { name: "ACETONE", image: acetone, description: "A reliable solvent for coatings, plastics, and chemical industries." },
  { name: "DOP", image: dop, description: "Dioctyl Phthalate (DOP), a high-performance plasticizer for polymers." },
  { name: "TOLUENE", image: toluene, description: "A powerful solvent for paints, coatings, and adhesives." },
  { name: "HEXANE", image: hexane, description: "A versatile solvent used in extraction and industrial applications." },
  { name: "ACETIC ACID", image: acetic_acid, description: "A high-quality chemical for pharmaceutical and industrial use." },
  { name: "XYLENE", image: xylene, description: "A solvent for paints and coatings with excellent performance." },
  { name: "ORTHO XYLENE", image: ortho_xylene, description: "A chemical intermediate used in various industrial processes." },
  { name: "MIX XYLENE", image: mix_xylene, description: "A versatile mix of xylenes for coating and chemical applications." },
  { name: "MDC", image: mdc, description: "Methylene Dichloride (MDC), a reliable solvent for pharmaceuticals." },
  { name: "DMF", image: dmf, description: "Dimethylformamide (DMF) for high-performance industrial applications." },
  { name: "CHLOROFORM", image: chloroform, description: "A key solvent for chemical and pharmaceutical industries." },
  { name: "FORMALDEHYDE", image: formaldehyde, description: "A critical raw material for resins, adhesives, and coatings." },
];


function Product() {
  const handleCall = () => {
    window.location.href = "tel:+919666884325"; // Replace with your desired phone number
  };
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      {/* Company Information */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-red">Welcome to <span className="text-blue-500">SSR</span>Chem</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our company specializes in the supply of chemicals for various industries, including pharmaceuticals, printing, formulation, plastics, packaging, and coatings. 
          We are committed to meeting your expectations and delivering quality products on time.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
          >
            {/* Product Image */}
            <img src={product.image} alt={product.name}
              className="w-full h-48 object-cover"
            />
            {/* Product Details */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Link to="/contact">
                <Cont/>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <p className="text-gray-600 text-2xl font-bold">
          We also provide other chemicals as per your requirements at the best price. It would be our pleasure to work with your company and deliver quality products.
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

export default Product;
