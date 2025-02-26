import React from "react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="assets/images/Logo GKIm.png" // Ganti dengan path logo gereja
              alt="GKIm Im Ka Im Tong Tasikmalaya"
              className="h-16 mb-2 bg-transparent"
            />
            <p className="text-gray-400">GKIm Im Ka Im Tong Tasikmalaya</p>
            <p className="text-gray-400">Jl. Mayor Utarya No. 11 46113</p>
            <p className="text-gray-400">Tasikmalaya, Jawa Barat</p>
            <p className="text-gray-400">(0265)-331602</p>

          </div>

          {/* Navigation Section */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">NAVBAR</h4>
            <ul className="text-gray-400 space-y-1">
              <li>
                <Link href="/Home" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/LiveStreaming" className="hover:text-white transition">
                  Live Streaming
                </Link>
              </li>
              <li>
                <Link href="/Warta" className="hover:text-white transition">
                  Warta
                </Link>
              </li>
              <li>
                <Link href="/About" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-semibold">POST</h4>
            <ul className="text-gray-400 space-y-1">
              <li>
                <Link href="/Blog" className="hover:text-white transition">
                  Event
                </Link>
              </li>
              <li>
                <Link href="/Announcement" className="hover:text-white transition">
                  News
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © Copyright 2025 GKIm Im Ka Im Tong Tasikmalaya. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/gkimkaimtongtsm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 text-2xl transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@gkimkaimtongtasikmalaya7648"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 text-2xl transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@gkimkaimtongtsm?_t=ZS-8uAfjoudR3d&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl transition"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
