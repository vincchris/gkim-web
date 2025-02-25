import React, { useState, useEffect } from "react";
import axios from "axios";

const LPLiveStreaming = () => {
  const [liveStreams, setLiveStreams] = useState([]);

  useEffect(() => {
    const fetchLiveStreams = async () => {
      try {
        const response = await axios.get("/api/livestream-thumbnails");

        // Ambil hanya 3 data terbaru
        const latestStreams = response.data
          .sort((a, b) => new Date(b.start_time) - new Date(a.start_time))
          .slice(0, 3);

        setLiveStreams(latestStreams);
      } catch (error) {
        console.error("Error fetching live streams:", error);
      }
    };

    fetchLiveStreams();

    // Cek update data setiap 30 detik
    const interval = setInterval(fetchLiveStreams, 30000);

    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, []);

  // Fungsi navigasi ke yt_link
  const handleCardClick = (ytLink) => {
    if (ytLink) {
      window.open(ytLink, "_blank");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">🔴 Live Streaming</h2>

      {liveStreams.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada live streaming saat ini.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveStreams.map((stream) => (
            <div
              key={stream.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleCardClick(stream.yt_link)}
            >
              <img
                src={stream.image_url || "/placeholder.jpg"}
                alt={stream.title}
                className="w-full h-128 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{stream.title}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  📅 {new Date(stream.start_time).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LPLiveStreaming;
