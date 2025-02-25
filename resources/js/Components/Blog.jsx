import React, { useState, useEffect } from "react";
import axios from "axios";

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogRes, announcementRes] = await Promise.all([
          axios.get("/api/blog-images"),
          axios.get("/api/announcement-images"),
        ]);

        // Tambahkan kategori berdasarkan sumber datanya
        const blogPosts = blogRes.data.map(post => ({ ...post, category: "Event" }));
        const announcementPosts = announcementRes.data.map(post => ({ ...post, category: "News" }));

        // Gabungkan data dari kedua API dan urutkan berdasarkan waktu terbaru
        const combinedPosts = [...blogPosts, ...announcementPosts]
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 2); // Ambil hanya 2 post terbaru

        setPosts(combinedPosts);
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    fetchData();

    // Set interval untuk cek update data setiap 30 detik
    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval); // Bersihkan interval saat unmount
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-extrabold mb-8">LATEST POSTS</h2>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada post terbaru.</p>
      ) : (
        <div className="grid grid-cols-1 gap-12">
          {posts.map((post, index) => (
            <div key={index} className="flex items-start md:flex-row flex-col bg-white shadow-lg rounded-lg p-4">
              <img
                src={post.image_url || "/placeholder.jpg"}
                alt={post.title}
                className="w-full md:w-1/3 max-w-full h-auto bg-gray-200 rounded-lg shadow-lg object-cover"
              />
              <div className="mt-6 md:mt-0 md:ml-6">
                <span
                  className={`text-base font-semibold ${
                    post.category === "Event" ? "text-blue-700" : "text-green-700"
                  }`}
                >
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mt-4 text-gray-900">
                  {post.title}
                </h3>
                <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                  {post.content}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Diposting pada: {new Date(post.created_at).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestPosts;
