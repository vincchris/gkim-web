import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronRight, ChevronLeft, Calendar } from "lucide-react"; // Import icons

const InformationWarta = () => {
    const [bulletins, setBulletins] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedDate, setSelectedDate] = useState(""); // Filter berdasarkan tanggal

    const itemsPerPage = window.innerWidth >= 1024 ? 6 : 3; // 6 untuk desktop, 3 untuk mobile

    useEffect(() => {
        const fetchBulletins = async () => {
            try {
                const response = await axios.get("api/bulletins");
                setBulletins(response.data);
            } catch (error) {
                console.error("Error fetching bulletins:", error);
            }
        };

        fetchBulletins();
    }, []);

    // Filter berdasarkan tanggal yang dipilih
    const filteredBulletins = selectedDate
        ? bulletins.filter((bulletin) => bulletin.date.startsWith(selectedDate))
        : bulletins;

    const totalPages = Math.ceil(filteredBulletins.length / itemsPerPage);
    const visibleBulletins = filteredBulletins.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const isPreviewable = (fileUrl) => {
        const supportedFormats = ["pdf", "jpg", "jpeg", "png", "gif", "webp"];
        const extension = fileUrl.split(".").pop().toLowerCase();
        return supportedFormats.includes(extension);
    };

    return (
        <div className="container mx-auto px-4 py-8 relative">
            {/* Sorting berdasarkan kalender di kanan atas (desktop) */}
            <div className="absolute right-4 top-4 lg:right-10 lg:top-4 lg:block hidden">
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

            {/* Sorting berdasarkan kalender di tengah (mobile) */}
            <div className="flex justify-center mb-6 lg:hidden">
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

            {/* Judul Warta */}
            <h1 className="text-3xl font-bold text-center mb-6">Warta Gereja</h1>

            {/* Grid Warta */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleBulletins.map((bulletin) => (
                    <div
                        key={bulletin.id}
                        className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {bulletin.title}
                        </h2>
                        <p className="text-gray-600 mb-4">Tanggal: {bulletin.date}</p>
                        {bulletin.file_url && (
                            <div className="mt-4">
                                {isPreviewable(bulletin.file_url) ? (
                                    <iframe
                                        src={bulletin.file_url}
                                        className="w-full h-48 rounded-lg mb-4"
                                        title={bulletin.title}
                                    ></iframe>
                                ) : (
                                    <p className="text-red-500 mb-4">
                                        File ini tidak dapat dipratinjau. Silakan unduh untuk melihatnya.
                                    </p>
                                )}
                                <a
                                    href={bulletin.file_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700"
                                >
                                    Lihat atau Unduh Warta
                                </a>
                            </div>
                        )}
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

export default InformationWarta;
