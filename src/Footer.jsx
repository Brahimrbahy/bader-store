import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-8">
            <div className="max-w-3xl mx-auto px-4 flex md:flex-row justify-between gap-8 px-8">
                {/* Follow Us */}
                <div>
                    <h3 className="text-white text-md font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
                        <a href="#" className="hover:text-white"><FaXTwitter size={20} /></a>
                        <a href="#" className="hover:text-white"><FaTiktok size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-white">Women</a></li>
                        <li><a href="/about" className="hover:text-white">Men</a></li>
                        <li><a href="/services" className="hover:text-white">Accessories</a></li>
                    </ul>
                </div>
            </div>



            {/* Bottom Bar */}
            <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Rbiaa.
            </div>
        </footer>
    );
};

export default Footer;
