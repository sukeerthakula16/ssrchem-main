import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  const phoneNumber = "+919666884325";
  const whatsappLink = `https://wa.me/919666884325`;
  const emailAddress = "ssrchem5@gmail.com";
  return (
    <div className="py-8 transition-colors duration-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        {/* Logo and Copyright */}
        <div className="mb-6 md:mb-0">
          <p className="text-sm font-bold">
            © 2024 SSRChem, Inc. <br />
            All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold mb-2 text-2xl">Quick Links</h3>
          <ul>
           <Link to="/"> <li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
           <Link to="/products"> <li>Products</li></Link>
           <Link to="/contact"> <li>Contact</li></Link>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h1 className="font-semibold mb-2 text-2xl">Connect With Us</h1>
          <ul className='gap-3'>
            <a href={whatsappLink}><li>Whatsapp</li></a>
            <a href={`mailto:${emailAddress}`}><li>Email</li></a>
           <a href={`tel:${phoneNumber}`}> <li>Call Us</li></a>
           
            
          </ul>
        </div>

        <div>
          {/* <h3 className="font-semibold mb-2">Legal</h3> */}
          {/* <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
           
            
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
