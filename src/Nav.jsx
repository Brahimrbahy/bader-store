import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { LuUserRound } from 'react-icons/lu';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import Images from './constant/Images';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Desktop & Mobile Header */}
            <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40 lg:py-3 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
                    <div className="flex justify-between items-center h-16">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            <FiMenu className="h-6 w-6" />
                        </button>

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <div className="font-bold text-gray-900 flex items-center">
                                <img
                                    src={Images.logo}
                                    alt="Logo"
                                    className="h-10 w-auto object-contain md:h-12"
                                />
                            </div>
                        </div>


                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <ul className="flex space-x-8">
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-sm tracking-wide">
                                        NEW ARRIVALS
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-sm tracking-wide">
                                        WOMEN
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-sm tracking-wide">
                                        MEN
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-sm tracking-wide">
                                        ACCESSORIES
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center gap-2 ">
                            <button className="p-1 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200">
                                <FiSearch className="h-5 w-5" />
                            </button>
                            <button className="p-1 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200">
                                <LuUserRound className="h-5 w-5" />
                            </button>
                            <button className="p-1 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 relative">
                                <FiShoppingCart className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Background overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                        onClick={toggleMenu}
                    ></div>

                    {/* Cancel Button - Top Outside Menu */}
                    <div className="fixed top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                        <button
                            onClick={toggleMenu}
                            className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
                        >
                            <FiX className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>


                    {/* Menu Panel */}
                    <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl shadow-2xl transform transition-transform duration-300 ease-out">
                        <div className="px-6 py-8">
                            {/* Menu Title */}
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-wide">
                                NEW ARRIVALS
                            </h2>

                            {/* Menu Items */}
                            <div className="space-y-6">
                                <div className="border-b border-gray-100 pb-6">
                                    <a
                                        href="#"
                                        className="flex justify-between items-center text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
                                        onClick={toggleMenu}
                                    >
                                        <span>Women</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="border-b border-gray-100 pb-6">
                                    <a
                                        href="#"
                                        className="flex justify-between items-center text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
                                        onClick={toggleMenu}
                                    >
                                        <span>Men</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="border-b border-gray-100 pb-6">
                                    <a
                                        href="#"
                                        className="flex justify-between items-center text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
                                        onClick={toggleMenu}
                                    >
                                        <span>Accessories</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex space-x-6 mt-12 mb-6">
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                    <FaInstagram className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                    <FaTiktok className="h-6 w-6" />
                                </a>
                            </div>

                            {/* Account Section */}
                            <div className="pt-6 border-t border-gray-100">
                                <button
                                    className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
                                    onClick={toggleMenu}
                                >
                                    Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default Nav;



