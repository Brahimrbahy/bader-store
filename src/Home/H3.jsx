import {
    FaHome,
    FaHotel,
    FaDumbbell,
    FaTree,
    FaBuilding,
} from "react-icons/fa";
import React from 'react';
import { Link } from "react-router";

const H3 = () => {
    return (
        <div className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
                    VOTRE SECTEUR
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Résidentiels */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                        <FaHome className="text-green-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-3">RÉSIDENTIELS</h3>
                        <p className="text-gray-600 mb-4">
                            Avec GREEN LIFE, vos idées prennent vie. Spécialisés dans les projets
                            résidentiels, nous concevons et réalisons des jardins et des espaces
                            extérieurs sur mesure, alliant esthétique, fonctionnalité et durabilité.
                        </p>
                        <Link
                            to="/"
                            className="group inline-flex items-center text-green-600 font-medium "
                        >
                            <span className="underline underline-offset-5">
                                En savoir plus
                            </span>

                            <span
                                className="
      ml-1
      no-underline
      opacity-0
      transition-all
      duration-300
      ease-out
      group-hover:opacity-100
      group-hover:translate-x-1
    "
                            >
                                →
                            </span>
                        </Link>
                    </div>

                    {/* Hôtels */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                        <FaHotel className="text-green-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-3">HÔTELS</h3>
                        <p className="text-gray-600 mb-4">
                            GREEN LIFE sublime les espaces extérieurs hôteliers pour en faire de
                            véritables havres de paix, en proposant des solutions élégantes,
                            innovantes et durables.
                        </p>
                        <Link
                            to="/"
                            className="group inline-flex items-center text-green-600 font-medium "
                        >
                            <span className="underline underline-offset-5">
                                En savoir plus
                            </span>

                            <span
                                className="
      ml-1
      no-underline
      opacity-0
      transition-all
      duration-300
      ease-out
      group-hover:opacity-100
      group-hover:translate-x-1
    "
                            >
                                →
                            </span>
                        </Link>
                    </div>

                    {/* Sport & Bien-être */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                        <FaDumbbell className="text-green-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-3">SPORT & BIEN-ÊTRE</h3>
                        <p className="text-gray-600 mb-4">
                            Création de jardins de loisirs, aires de jeux et terrains multisports,
                            avec des aménagements sécurisés, inclusifs et innovants.
                        </p>
                        <Link
                            to="/"
                            className="group inline-flex items-center text-green-600 font-medium "
                        >
                            <span className="underline underline-offset-5">
                                En savoir plus
                            </span>

                            <span
                                className="
      ml-1
      no-underline
      opacity-0
      transition-all
      duration-300
      ease-out
      group-hover:opacity-100
      group-hover:translate-x-1
    "
                            >
                                →
                            </span>
                        </Link>
                    </div>

                    {/* Parcs & Loisirs */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                        <FaTree className="text-green-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-3">PARCS & LOISIRS</h3>
                        <p className="text-gray-600 mb-4">
                            Nous œuvrons à la préservation et à l’embellissement des espaces verts
                            publics avec une approche durable et responsable.
                        </p>
                        <Link
                            to="/"
                            className="group inline-flex items-center text-green-600 font-medium "
                        >
                            <span className="underline underline-offset-5">
                                En savoir plus
                            </span>

                            <span
                                className="
      ml-1
      no-underline
      opacity-0
      transition-all
      duration-300
      ease-out
      group-hover:opacity-100
      group-hover:translate-x-1
    "
                            >
                                →
                            </span>
                        </Link>
                    </div>

                    {/* Bureaux & centres commerciaux */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                        <FaBuilding className="text-green-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-3">
                            BUREAUX & CENTRES COMMERCIAUX
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Aménagement paysager de bureaux et espaces commerciaux pour créer des
                            environnements attractifs et inspirants.
                        </p>
                        <Link
                            to="/"
                            className="group inline-flex items-center text-green-600 font-medium "
                        >
                            <span className="underline underline-offset-5">
                                En savoir plus
                            </span>

                            <span
                                className="
      ml-1
      no-underline
      opacity-0
      transition-all
      duration-300
      ease-out
      group-hover:opacity-100
      group-hover:translate-x-1
    "
                            >
                                →
                            </span>
                        </Link>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default H3;
