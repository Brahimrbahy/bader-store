import React from 'react';
import Images from '../constant/Images';


const H2 = () => {
    return (
        <section className="w-full bg-[#faf5f2] pt-10">
            <div className="flex flex-col md:flex-row items-stretch">
                {/* Left Image */}
                <div className="md:w-1/2 w-full">
                    <img
                        src={Images.h2h1}
                        alt="Qui sommes-nous"
                        className="w-full h-full object-cover shadow-lg "
                    />
                </div>

                {/* Right Text */}
                <div className="md:w-1/2 w-full flex flex-col justify-center px-6 md:px-16 py-16">
                    {/* Qui sommes-nous */}
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                            QUI SOMMES-NOUS
                        </h2>
                        <p className="text-gray-700 text-lg md:text-base leading-relaxed">
                            Fondée en 2006, Green Life est une entreprise spécialisée dans l’aménagement, la création et l’entretien des espaces verts, aussi bien pour des projets institutionnels que privés.

                            Grâce à une expertise solide et une équipe passionnée, Green Life a su évoluer et renforcer son positionnement stratégique en proposant des solutions complètes et clés en main, allant de la conception à la réalisation.

                            Aujourd’hui, Green Life s’impose comme un acteur de référence dans le domaine des aménagements extérieurs au Maroc, accompagnant de nombreux partenaires publics et privés dans la réussite de leurs projets paysagers.
                        </p>
                    </div>

                    {/* Nos Valeurs */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                            NOS VALEURS
                        </h2>
                        <p className="text-gray-700 text-lg md:text-base leading-relaxed">
                            L’originalité, la créativité, la rigueur, la communication et la performance sont au cœur de notre engagement.
                            Ces valeurs nous permettent d’offrir à nos clients un partenaire de confiance, capable de proposer des solutions innovantes, durables et adaptées à chaque besoin, avec une prise en charge globale dans une approche « Design & Build ».
                        </p>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default H2;
