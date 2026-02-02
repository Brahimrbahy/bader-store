import React from 'react';

const H5 = () => {
    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                {/* Bureaux Régionaux */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                    <h2 className="text-4xl font-bold text-green-600 mb-2">5</h2>
                    <p className="text-gray-700 font-medium">Bureaux Régionaux</p>
                </div>

                {/* Arbres Plantés */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                    <h2 className="text-4xl font-bold text-green-600 mb-2">+1 000 000</h2>
                    <p className="text-gray-700 font-medium">Arbres Plantés</p>
                </div>

                {/* Collaborateurs */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                    <h2 className="text-4xl font-bold text-green-600 mb-2">+100</h2>
                    <p className="text-gray-700 font-medium">Collaborateurs</p>
                </div>

                {/* Espaces Paysagers Réalisés */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                    <h2 className="text-4xl font-bold text-green-600 mb-2">+500</h2>
                    <p className="text-gray-700 font-medium">d’Espaces Paysagers Réalisés</p>
                </div>

            </div>
        </section>

    );
}

export default H5;
