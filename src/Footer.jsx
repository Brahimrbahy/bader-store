import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Column 1: About */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Green Life</h2>
                    <p className="text-gray-200 mb-4">
                        Green Life est né d’une passion, celle de rendre le monde un peu plus vert.
                        Chaque jour, l’ensemble de nos collaborateurs participe avec engagement pour
                        améliorer la qualité de vie des générations futures et créer un Maroc toujours plus vert.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="bg-green-800 hover:bg-green-700 rounded-full w-8 h-8 flex items-center justify-center">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="bg-green-800 hover:bg-green-700 rounded-full w-8 h-8 flex items-center justify-center">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="bg-green-800 hover:bg-green-700 rounded-full w-8 h-8 flex items-center justify-center">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                {/* Column 2: QSE */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b-2 border-green-700 inline-block pb-1">QSE</h3>
                    <p className="text-gray-200">
                        Dans le cadre de l’amélioration continue, nous restons profondément engagés
                        dans une démarche de sécurité et de respect de l’environnement à chaque étape
                        de notre activité. Nous faisons de la sécurité de nos collaborateurs et de nos
                        partenaires une priorité absolue.
                    </p>
                </div>

                {/* Column 3: Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b-2 border-green-700 inline-block pb-1">Contact</h3>
                    <p className="text-gray-200 mb-2">Téléphone : +212 727-545040 </p>
                    <p className="text-gray-200 mb-2">Email: contact@greenlife.com</p>
                    <p className="text-gray-200 mb-2">Adresse: 3 Rue Rouget de l'Isle, Casablanca 20100</p>
                    <p className="text-gray-200">Horaires d'ouverture : Lun - Ven (8:00 - 17:00) Samedi (8:00 - 12:00)</p>
                </div>
            </div>

            <div className="border-t border-green-800 mt-8 pt-4 text-center text-gray-300 text-sm pb-8">
                ©2026 Green Life Group - Tous droits réservés
            </div>
        </footer>

    );
}

export default Footer;
