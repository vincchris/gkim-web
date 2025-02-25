import React, { useState } from "react";

const TrailerSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative h-64 md:h-96 py-8 md:py-12">
      {/* Thumbnail atau Video Background */}
      {isPlaying ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover" // Tambahkan class object-cover
          src="/assets/videos/VideoNatal.mp4" // Gunakan file video yang diimpor
          controls
          autoPlay
        ></video>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-black">
          <img
            src="/assets/images/thumbnail.png" // Gunakan file thumbnail yang diimpor
            alt="Trailer Natal 2024"
            className="w-full h-full object-cover" // Tambahkan class object-cover
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            {/* Tombol Play */}
            <button
              onClick={handlePlay}
              className="bg-white p-4 rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.75 4.75l12.5 7.25-12.5 7.25v-14.5z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Text Overlay */}
      {!isPlaying && (
        <div className="absolute bottom-8 w-full text-center">
          <p className="text-white text-sm md:text-lg font-medium">
            TRAILER NATAL 2024
          </p>
        </div>
      )}
    </div>
  );
};

export default TrailerSection;
