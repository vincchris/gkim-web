import React, { useState, useEffect } from "react";
import axios from "axios";
import { X, ChevronLeft, ChevronRight } from "lucide-react"; // Import icons

const InformationBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("/api/blog-images"); // Sesuaikan dengan endpoint Laravel
                console.log("Data API:", response.data);
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    const handleImageClick = (index) => {
        setSelectedIndex(index);
    };

    const handleNext = () => {
        if (selectedIndex !== null && selectedIndex < blogs.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        }
    };

    const handlePrev = () => {
        if (selectedIndex !== null && selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Event Gereja</h1>

            {blogs.length === 0 ? (
                <p className="text-center text-gray-500">Tidak ada blog tersedia.</p>
            ) : (
                <div className="space-y-6 relative">
                    {blogs.map((blog, index) => (
                        <div
                            key={blog.id}
                            className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200"
                        >
                            {/* Gambar Blog */}
                            <div className="w-full md:w-2/3 flex items-center justify-center bg-gray-100">
                                <img
                                    src={blog.image_url}
                                    alt={blog.title}
                                    className="max-w-full max-h-64 object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                                    onClick={() => handleImageClick(index)}
                                    onError={(e) => (e.target.src = "/placeholder.jpg")}
                                />
                            </div>

                            {/* Konten Blog */}
                            <div className="p-6 flex-grow">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                    {blog.title}
                                </h2>

                                <p className="text-gray-600">{blog.content}</p>
                            </div>
                        </div>
                    ))}

                    {/* Tombol Next & Previous (Hanya muncul jika lebih dari 2 blog) */}
                    {blogs.length > 2 && (
                        <>
                            <button
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600"
                                onClick={handlePrev}
                                disabled={selectedIndex === 0}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600"
                                onClick={handleNext}
                                disabled={selectedIndex === blogs.length - 1}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}
                </div>
            )}

            {/* Modal Gambar dengan Next & Previous */}
            {selectedIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative max-w-3xl mx-auto flex items-center">
                        {/* Tombol Previous */}
                        {selectedIndex > 0 && (
                            <button
                                className="absolute left-2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600"
                                onClick={handlePrev}
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                        )}

                        <img
                            src={blogs[selectedIndex].image_url}
                            alt="Blog"
                            className="max-w-full max-h-screen object-contain"
                        />

                        {/* Tombol Next */}
                        {selectedIndex < blogs.length - 1 && (
                            <button
                                className="absolute right-2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600"
                                onClick={handleNext}
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        )}

                        {/* Tombol Close */}
                        <button
                            className="absolute top-2 right-2 bg-gray-200 p-2 rounded-full text-gray-700 hover:bg-gray-300"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InformationBlog;
