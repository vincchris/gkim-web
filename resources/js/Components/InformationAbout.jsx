import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageCategories = {
    sejarah: [
        {
            src: "/assets/images/batu pertama.jpg",
            description:
                "Di Kota Tasikmalaya memang telah ada banyak Gereja, namun belum ada Gereja yang berbahasa Tionghoa. Masyarakat Tionghoa di Tasikmalaya mayoritas merupakan pedagang dan belum mengenal Tuhan Yesus. Beberapa diantara orang Tionghoa yang sudah menjadi Kristen tergerak hatinya, seandainya berdiri sebuah Gereja yang berbahasa Tionghoa tentu lebih mudah untuk menyampaikan Injil kepada mereka.",
        },
        {
            src: "/assets/images/img014.jpg",
            description:
                "Tahun 1957 dari Bandung datang ke Tasikmalaya diantaranya Pdt. Ho Liang, Pdt. Lie Teng Ban, Bapak Tan Ci En dan Ibu, Bapak Hi Ho Tjong, Ibu Kang Siu Ing, Lim Mu Sung, dll. Bergabung dengan yang di Tasikmalaya yaitu Ny. Kwee A Moy, Oey Cwen Fung, Yo Cu Moy, Liu Mey Sung, Ki Mey Sung dan Bapak Sie Tjo Kang dan Ibu, berembuk bersama untuk membuka pos Pekabaran Injil yang mulanya bertempat di rumah Ibu Kwee A Moy..",
        },
        {
            src: "/assets/images/img063.jpg",
            description:
                "Pada mulanya pos Perkabaran Injil itu diadakan dua bulan sekali, kemudian sebulan sekali, selanjutnya tiap dua minggu sekali. Melalui jerih payah dan cucuran air mata, Ibu Kwee A Moy telah meminjamkan rumahnya untuk tempat kebaktian dan juga mencukupi segala keperluan pos Perkabaran Injil ini..",
        },
    ],
    perkembangan: [
        {
            src: "/assets/images/img047.jpg",
            description:
                "Pada tahap pertama telah dilakukan Baptisan Kudus untuk 4 orang dewasa dan 7 orang anak pada tanggal 9 Maret 1959. Karena jumlah anggota dan pengunjung kebaktian yang semakin hari semakin bertambah, tempat kebaktian itu tidak dapat menampung lagi, sehingga memerlukan tempat lain yang lebih besar. Pada tahun 1959 dipinjamlah Gereja Kristen Pasundan sebagai tempat untuk pos Perkabaran Injil tersebut. Maka atas persetujuan semua anggota Gereja dipilihlah Bapak Sie Tjo Kang sebagai Ketua Majelis dan dipilih juga beberapa saudara-saudari sebagai Diaken (anggota Majelis).  Jemaat kemudian mengundang Ev. Paul T.K.NG untuk mengembalakan Jemaat tersebut. Sampai tanggal 9 Maret 1959 tercatat 30 orang anggota dan calon anggota, 7 orang anggota persekutuan pemuda dan lebih dari 60 orang anak Sekolah Minggu.",
        },
        {
            src: "/assets/images/img043.jpg",
            description:
                "Tahun 1960 pada saat Gereja mulai maju, muncullah PPIO yang sangat menggelisahkan masyarakat Tionghoa (Hoa Kiauw) sehingga terjadilah gelombang pulang ke Tiongkok. Hal ini sangat mempengaruhi pos ini sehingga dalam keadaan yang kurang menentu, Bapak Hi Ho Tjong dari Bandung telah berembuk dengan para pemimpin Gereja Ka Im Tong Bandung dan kemudian memutuskan bahwa pos ini dijadikan sebagai cabang dari Gereja Ka Im Tong Bandung. Karena Gereja Ka Im Tong Bandung kekurangan penginjil maka Ev. Paul T.K.NG ditarik dari Tasikmalaya, sedangkan untuk Tasikmalaya telah diundang Ev. Tan Ing Hin untuk menggembalakan di sana. Tapi Ev. Paul pun sewaktu-waktu juga diutus ke Tasikmalaya untuk tugas bergilir. Ketika Ev. Tan Ming Ing dan Dr. Paulus Theophilus (The Ie Fu) melayani di Gereja Ka Im Tong Bandung, mereka juga sangat memperhatikan pekerjaan Tuhan di Tasikmalaya dan ikut bersama secara bergilir juga melayani Jemaat di Tasikmalaya. Puji syukur kepada Tuhan sebab “Jehova Jirey” (Tuhan yang selalu menyediakan segala sesuatu).",
        },
        {
            src: "/assets/images/img045.jpg",
            description:
                "Pada tahun 1967, Madrasah Alkitab Asia Tenggara (sekarang SAAT) mengutus Ev. Mary Setiawani dan Ev. Ruth Ang untuk melayani jemaat di Tasikmalaya.  Dalam pelayanan Ev. Mary Setiawani, Gereja semakin maju.  Lebih banyak Hoa Kiauw yang percaya kepada Tuhan Yesus. Kemudian setelah lewat beberapa waktu kemudian, Ev. Mary Setiawani mendorong Bapak Sie Tjo Kang dan Ibu untuk membangun gedung gereja, supaya kalau mempunyai Gereja sendiri adalah lebih baik (selama ini masih meminjam tempat di GKP). Atas kebulatan tekad dari Ev. Mary Setiawani dan setelah berembuk dengan semua Majelis Ka Im Tong Cabang Tasikmalaya, akhirnya diputuskan untuk mulai mengumpulkan dana pembangunan gedung Gereja.Setelah tersedia dana, maka dicarilah tempat yang sesuai untuk pembangunan gedung Gereja. Pada tanggal 7 Juni 1971 dilakukanlah peletakan batu pertama pembangunan gedung Gereja Ka Im Tong Cabang Tasikmalaya bertempat di Jl. Mayor Utarya No. 11 Tasikmalaya. Pembangunan gedung Gereja ini tersebut dapat dirampungkan hingga diadakan Kebaktian Syukur pada tanggal 10 Desember 1971. Dua tahun kemudian dibangunlah pastori dan dua tahun kemudian lagi dibangunlah gedung kelas Sekolah Minggu yang diresmikan pemakaiannya tanggal 10 Desember 1975. Tapi sungguh sayang Ev. Mary Setiawani pergi untuk tugas belajar ke Amerika Serikat sebelum pembangunan gedung Gereja selesai.",
        },
    ],
    masaKini: [
        {
            src: "/assets/images/hut65th-1.jpg",
            description:
                "Pekerjaan Tuhan maju dengan pesat namun si Iblis pun tidak tinggal diam.  Ia mangacaukan dan memecah belah antar anggota Gereja Ka Im Tong Cabang Tasikmalaya. Persoalannya timbul saat Gereja Ka Im Tong Bandung mengadakan pemindahan tugas penginjil, supaya bisa mempererat hubungan antara Gereja Ka Im Tong Bandung dengan cabang di Tasikmalaya, maka diputuskan Ev. Ruth Ang ditugaskan ke Bandung. Tapi hal ini menimbulkan kesalahpahaman dari Ev. Ruth Ang dan ia mengajukan pengunduran diri. Kemudian Ev. Ruth Ang beserta Ev. Phebe Chai dan Gouw Lan Ing meninggalkan Gereja Ka Im Tong Cabang Tasikmalaya dengan membawa serta sekian puluh anggota Jemaat yang mendukung mereka dan kemudian mendirikan “Gereja Sion.” Setelah adanya perpecahan itu, anggota GKIm Cabang Tasikmalaya hanya tinggal beberapa puluh orang saja.",
        },
        {
            src: "/assets/images/SAL 2024.jpg",
            description:
                "Namun pekerjaan Tuhan adalah pekerjaan yang dibangun oleh Tuhan sendiri, dan Tuhan adalah Tuhan yang maha-ajaib dan mahakuasa. Pada saat yang tidak diduga-duga datanglah Pdt. Philip D. Amisadai ke Tasikmalaya bersama-sama dengan beberapa pemimpin Gereja Ka Im Tong Bandung.  Atas saran dari para anggota Majelis dan Pdt. Jhon Kwok dari Bandung, ia bersedia untuk melayani di Tasikmalaya, sehingga kemudian Pdt. Philip D.A. membawa keluarganya dari Kalimantan Barat ke Tasikmalaya. Pelayanan beliau dan rekan-rekan serta generasi-generasi selanjutnya sungguh terlihat hasilnya pada saat ini. Semuanya ini tentunya karena berkat Tuhan. Kiranya segala kemuliaan hanya bagi Tuhan saja. Amin.",
        },
    ],
};

const InformationAbout = () => {
    const [category, setCategory] = useState("sejarah");
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = imageCategories[category];
    const currentImage = images[currentIndex];

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="container mx-auto p-6 text-black">
            <h1 className="text-4xl font-bold text-center mb-6">
                Sejarah Gereja
            </h1>

            <div className="flex justify-center gap-4 mb-6">
                <button
                    onClick={() => setCategory("sejarah")}
                    className={`px-4 py-2 rounded ${
                        category === "sejarah"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300"
                    }`}
                >
                    Sejarah
                </button>
                <button
                    onClick={() => setCategory("perkembangan")}
                    className={`px-4 py-2 rounded ${
                        category === "perkembangan"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300"
                    }`}
                >
                    Perkembangan
                </button>
                <button
                    onClick={() => setCategory("masaKini")}
                    className={`px-4 py-2 rounded ${
                        category === "masaKini"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300"
                    }`}
                >
                    Masa Kini
                </button>
            </div>

            <div className="relative w-full max-w-4xl mx-auto">
                <button
                    onClick={prevImage}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
                >
                    <ChevronLeft size={24} />
                </button>

                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage.src}
                        src={currentImage.src}
                        alt="Sejarah Gereja"
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>

                <button
                    onClick={nextImage}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <p className="mt-4 text-lg text-center">
                {currentImage.description}
            </p>
        </div>
    );
};

export default InformationAbout;
