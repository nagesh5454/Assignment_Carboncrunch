import { FaFacebookF, FaXTwitter, FaInstagram, FaEnvelope } from "react-icons/fa6";
import logo from "../assets/logo.png"; // ✅ Import logo correctly

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 px-8"> {/* Increased padding */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"> {/* Increased gap */}
        
        {/* Left Section: Logo + Subscription */}
        <div>
          {/* Subscription Form */}
          <div className="mb-8"> {/* Increased margin */}
            <p className="text-base font-semibold mb-4 relative">
              Subscribe to our mailing
              <span className="absolute -top-3 left-36 text-xl"></span>
            </p>
            <div className="flex items-center bg-white rounded-lg p-2 shadow-md">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-grow px-4 py-3 outline-none bg-transparent text-black text-lg"
              />
              <button className="bg-green-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 text-lg">
                Subscribe
              </button>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center space-x-3 mt-6"> {/* Increased spacing */}
            <img src={logo} alt="CarbonCrunch Logo" className="w-14 h-14" /> {/* ✅ Increased size */}
            <h1 className="text-2xl font-bold">Carboncrunch</h1> {/* Increased font size */}
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 gap-6 text-lg"> {/* Increased font size and gap */}
          <div className="space-y-4">
            <p>Home</p>
            <p>About</p>
            <p>How it works</p>
            <p>Contact us</p>
          </div>
          <div className="space-y-4">
            <p>FAQs</p>
            <p>Start your transaction</p>
            <p>Why choose us</p>
          </div>
        </div>

        {/* Right Section: Policies & Social Media */}
        <div className="grid grid-cols-2 gap-6 text-lg"> {/* Increased font size and gap */}
          <div className="space-y-4">
            <p>Businesses</p>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="flex space-x-6 text-2xl"> {/* Increased icon size */}
            <FaEnvelope className="cursor-pointer hover:text-gray-400" />
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaXTwitter className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-12">
        © Carboncrunch. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
