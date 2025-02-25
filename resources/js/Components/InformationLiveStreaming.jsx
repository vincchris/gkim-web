import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronRight, ChevronLeft, Calendar } from "lucide-react"; // Import icon dari lucide-react

const InformationLiveStreaming = () => {
    const [liveStreams, setLiveStreams] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedDate, setSelectedDate] = useState(""); // State untuk filter berdasarkan tanggal

    const itemsPerPage = window.innerWidth >= 1024 ? 6 : 3; // 6 untuk desktop, 3 untuk mobile

    useEffect(() => {
        const fetchLiveStreams = async () => {
            try {
                const response = await axios.get("api/livestream-thumbnails");
                setLiveStreams(response.data);
            } catch (error) {
                console.error("Error fetching live streams:", error);
            }
        };

        fetchLiveStreams();
    }, []);

    // Filter berdasarkan tanggal yang dipilih
    const filteredStreams = selectedDate
        ? liveStreams.filter((stream) => stream.start_time.startsWith(selectedDate))
        : liveStreams;

    const totalPages = Math.ceil(filteredStreams.length / itemsPerPage);
    const visibleStreams = filteredStreams.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div className="container mx-auto px-4 py-8 relative">
            {/* Sorting berdasarkan kalender di kanan atas (desktop) */}
            <div className="hidden lg:flex absolute right-4 top-4">
                <label className="flex items-center bg-gray-100 px-4 py-2 rounded-md shadow">
                    <Calendar className="w-5 h-5 text-gray-600 mr-2" />
                    <input
                        type="date"
                        className="bg-transparent outline-none"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </label>
            </div>

            {/* Sorting di tengah untuk tampilan mobile */}
            <div className="flex lg:hidden justify-center mb-4">
                <label className="flex items-center bg-gray-100 px-4 py-2 rounded-md shadow">
                    <Calendar className="w-5 h-5 text-gray-600 mr-2" />
                    <input
                        type="date"
                        className="bg-transparent outline-none"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </label>
            </div>

            {/* Judul Live Streaming */}
            <h1 className="text-3xl font-bold text-center mb-6">Live Streaming Gereja</h1>

            {/* Grid Live Streaming */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all">
                {visibleStreams.map((stream) => (
                    <div
                        key={stream.id}
                        className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 cursor-pointer hover:shadow-xl transition"
                        onClick={() => window.open(stream.yt_link, "_blank")}
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {stream.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Tanggal: {new Date(stream.start_time).toLocaleString()}
                        </p>
                        <div className="w-full h-128 overflow-hidden border border-gray-300 rounded-lg">
                            <img
                                src={stream.image_url}
                                alt={stream.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigasi Previous & Next */}
            <div className="flex justify-between items-center mt-6">
                {currentPage > 0 && (
                    <button
                        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                    >
                        <ChevronLeft className="mr-2" /> Previous
                    </button>
                )}
                {currentPage < totalPages - 1 && (
                    <button
                        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                        Next <ChevronRight className="ml-2" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default InformationLiveStreaming;
