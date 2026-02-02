import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { FiX } from 'react-icons/fi';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="
    fixed top-4 left-1/2 -translate-x-1/2
    z-50
    w-[95%] max-w-7xl
    px-8 py-4
    bg-white/30 backdrop-blur-lg
    border border-white/40
    shadow-lg shadow-black/10
    rounded-4xl
">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div>
                    <h1 className="text-2xl font-bold text-green-700">
                        Green Life
                    </h1>
                </div>

                {/* Navigation Links - Desktop */}
                <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
                    {["Accueil", "Votre Secteur", "Nos Projets", "Nos Expertises"].map(item => (
                        <li
                            key={item}
                            className="
                        relative cursor-pointer
                        after:content-[''] after:absolute after:left-1/2 after:-bottom-1
                        after:h-[3px] after:w-0 after:bg-green-600
                        after:transition-all after:duration-500
                        hover:after:w-full hover:after:left-0
                    "
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="
        relative
        px-5 py-2
        rounded-full
        font-medium
        text-green-900
        bg-green-400/30
        backdrop-blur-lg
        border border-green-500/40
        shadow-lg shadow-green-500/20
        hover:bg-green-500/40
        hover:shadow-green-500/30
        transition-all duration-300
    ">
                        Travailler chez Atelier Vert
                    </button>
                </div>


                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-green-700 text-3xl"
                    >
                        {isMenuOpen ? <FiX /> : <IoMdMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="
            md:hidden mt-4
            bg-white/40 backdrop-blur-lg
            border border-white/30
            rounded-2xl p-4
        ">
                    <ul className="flex flex-col space-y-4 text-gray-800 font-medium">
                        {["Accueil", "Votre Secteur", "Nos Projets", "Nos Expertises"].map(item => (
                            <li
                                key={item}
                                className="cursor-pointer hover:text-green-600 transition border-b border-white/30 pb-2"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>

    );
}

export default Nav;