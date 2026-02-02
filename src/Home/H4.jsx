import React from 'react';

const H4 = () => {
    return (
       <div className="bg-gray-50 py-16 px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

    {/* Left Side: Notre engagement */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
        Notre engagement
      </h2>

      <p className="text-gray-700 mb-4">
        Contribuer à bâtir une société plus durable et plus respectueuse de l’environnement, permettre à nos clients et partenaires d’améliorer leurs performances économiques, être un acteur du développement… Depuis plus de 17 ans, <strong>Green Life</strong> a construit son histoire autour de ces priorités.
      </p>

      <p className="text-gray-700">
        Aujourd’hui, notre Groupe affirme son engagement au service du développement durable au travers de l’ensemble des femmes et hommes du Groupe, tous impliqués dans cette ambition d’œuvrer pour un Maroc plus Vert.
      </p>
    </div>

    {/* Right Side: Mot du Gérant */}
    <div className="lg:w-1/2">
      <h3 className="text-2xl font-semibold text-green-700 mb-4">Mot du Gérant</h3>

      <p className="text-gray-700 mb-4">
        Nous sommes depuis <strong>2006</strong> !
      </p>

      <p className="text-gray-700">
        Notre Historique est Votre Histoire.  
        C’est l’histoire d’un travail qui a le sens du temps, le temps que les plantes demandent pour donner de la valeur à la mémoire, au présent et au futur.
      </p>
    </div>

  </div>
</div>

    );
}

export default H4;
