import { Link } from "@inertiajs/react";
import React from "react";

const WelcomeSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "url('/assets/images/Church.JPG')",
      }}
    >
      <div className="flex space-x-4">
        <Link
          href="/LiveStreaming" // Ganti dengan URL livestreaming yang benar
          target="_blank"
          rel="noopener noreferrer"
          className="text-white border border-white font-bold px-6 py-3 rounded-md shadow-md transition duration-300 hover:bg-white hover:text-black"
        >
          Watch Our Live Streaming
        </Link>
      </div>
    </div>
  );
};

export default WelcomeSection;
