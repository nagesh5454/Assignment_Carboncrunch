import { useState } from "react";
import home from "../assets/home.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold"></div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-md">
              Login
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white py-4 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-black">
              Services
            </a>
            <a href="#" className="block text-gray-700 hover:text-black">
              Blog
            </a>
            <a href="#" className="block text-gray-700 hover:text-black">
              About Us
            </a>
            <a href="#" className="block text-gray-700 hover:text-black">
              Contact
            </a>
            <button className="w-full bg-green-100 text-green-700 px-4 py-2 rounded-md">
              Login
            </button>
            <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Book Demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold leading-tight">
            GHG Accounting <br /> Scope 1, Scope 2, <br /> Scope 3
          </h1>
          <p className="mt-4 text-gray-600">
            Track, minimize, offset, and report your carbon emissions
            effortlessly to drive faster decarbonization progress.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={home} alt="GHG Accounting" className="w-80 shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
