import React, { useState } from "react"
import { FaChevronDown, FaChevronRight, FaTimes } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [hoveredMenu, setHoveredMenu] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMouseEnter = (menuName) => {
        setHoveredMenu(menuName);
    };

    const handleMouseLeave = () => {
        setHoveredMenu("");
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img
                        src="/assets/images/Logo GKIm.png"
                        alt="Logo"
                        className="h-28 w-20"
                    />
                    <div className="text-center leading-tight">
                        <span className="block text-lg font-bold">
                            GKIm Ka Im Tong
                        </span>
                        <span className="block text-sm font-bold">
                            Tasikmalaya
                        </span>
                    </div>
                </div>

                {/* Hamburger Button */}
                <button
                    className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400"
                    onClick={toggleMenu}
                >
                    <svg
                        className="fill-current h-4 w-4"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
                    </svg>
                </button>

                {/* Navigation Links */}
                <nav
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } lg:flex flex-col lg:flex-row fixed lg:static top-0 right-0 h-full w-1/2 lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50`}
                >
                    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-start lg:items-center text-lg font-semibold text-gray-700 p-6 lg:p-0 relative">
                        <li className="flex justify-between items-center w-full">
                            <Link href="/Home" className="hover:text-blue-500">
                                HOME
                            </Link>
                            <button
                                className="lg:hidden text-gray-700 hover:text-red-500"
                                onClick={toggleMenu}
                            >
                                <FaTimes size={20} />
                            </button>
                        </li>
                        <li>
                            <Link
                                href="/LiveStreaming"
                                className="hover:text-blue-500 whitespace-nowrap"
                            >
                                LIVE STREAMING
                            </Link>
                        </li>

                        {/* Blog Dropdown */}
                        <li
                            className="relative group"
                            onMouseLeave={handleMouseLeave}
                        >
                            <a
                                href="#blog"
                                className="flex items-center hover:text-blue-500"
                            >
                                POST <FaChevronDown className="ml-1" />
                            </a>
                            <ul className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-white shadow-lg rounded-lg mt-2 w-56 z-10">
                                <li>
                                    <Link
                                        href="/Blog"
                                        className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-blue-500"
                                    >
                                        EVENTS
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/Announcement"
                                        className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-blue-500"
                                    >
                                        NEWS
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Other Links */}
                        <li>
                            <Link href="/Warta" className="hover:text-blue-500">
                                WARTA
                            </Link>
                        </li>
                        <li>
                            <Link href="/About" className="hover:text-blue-500">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/Contact"
                                className="hover:text-blue-500"
                            >
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
