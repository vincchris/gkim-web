import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title Section */}
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Map Section */}
        <div className="w-full rounded-lg shadow-lg overflow-hidden">
          <iframe
            title="Church Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2373828873137!2d108.22045497500038!3d-7.3272133926810845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f574583b71e1d%3A0x1991b30404418548!2sGKIm%20Ka%20Im%20Tong%20Tasikmalaya!5e0!3m2!1sid!2sid!4v1736324019728!5m2!1sid!2sid"
            className="w-full h-[300px] md:h-[400px] lg:h-[450px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Meet Us Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold mb-6">Meet Us</h2>
          <div className="space-y-4">
            <p className="flex items-center text-lg text-gray-700">
              <FaPhoneAlt className="mr-3 text-blue-500" />
              (0265)331602
            </p>
            <p className="flex items-center text-lg text-gray-700">
              <FaEnvelope className="mr-3 text-blue-500" />
              gkim.kaimtong@gmail.com
            </p>
            <p className="flex items-center text-lg text-gray-700">
              <FaMapMarkerAlt className="mr-3 text-blue-500" />
              Jl. Mayor Utarya No. 11 Tasikmalaya 46113
            </p>
            <p className="flex items-center text-lg text-gray-700">
              <FaClock className="mr-3 text-blue-500" />
              <span>
                <strong>Jam Operasional TU:</strong> Selasa - Minggu, 09:00 - 15:00 
              </span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-extrabold mb-4">Contact</h2>
          <form
            action="https://formspree.io/f/xrbewaln"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              required
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              rows="4"
              required
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Persembahan Section */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-extrabold text-center mb-4">✨ PERSEMBAHAN ✨</h3>
        <p className="text-center text-gray-700 mb-4">
          Persembahan dapat diberikan melalui transfer ke rekening berikut:
        </p>
        <div className="text-center space-y-3">
          <p className="text-lg font-semibold">
            🏦 Bank <span className="text-red-500">OCBC NISP</span>
          </p>
          <p className="text-gray-800">
            No Rek. <span className="font-bold">469810007010</span>
            <br />
            a/n <span className="font-bold">Yayasan Immanuel Tasikmalaya</span>
          </p>
        </div>
        <div className="text-center space-y-3 mt-4">
          <p className="text-lg font-semibold">
            🏦 Bank <span className="text-blue-500">BCA</span>
          </p>
          <p className="text-gray-800">
            No Rek. <span className="font-bold">2098001234</span>
            <br />
            a/n <span className="font-bold">Gkim Jemaat Ka Im Tong Tasikmalaya</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
