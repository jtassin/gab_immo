import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Gabrielle Nicolini Immobilier</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#accueil" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
                <a href="#agent" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">L'Agent</a>
                <a href="#quartiers" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Quartiers</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Votre Expert Immobilier à Lyon
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Découvrez l'immobilier lyonnais avec une experte qui connaît chaque quartier 
              et vous accompagne dans vos projets avec professionnalisme et écoute.
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Estimation Gratuite
            </button>
          </div>
        </div>
      </section>

      {/* Section Agent */}
      <section id="agent" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Votre Agent Immobilier
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une experte passionnée qui met son savoir-faire au service de vos projets immobiliers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Gabrielle Nicolini</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Avec plus de 8 ans d'expérience dans l'immobilier lyonnais, je vous accompagne 
                dans tous vos projets : achat, vente, location et estimation de biens.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Expertise locale approfondie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Accompagnement personnalisé</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Transparence et écoute</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg p-8 text-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Photo de l'agent</span>
              </div>
              <p className="text-sm text-gray-500">Photo professionnelle à ajouter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Quartiers */}
      <section id="quartiers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mon Expertise sur Lyon
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les quartiers où je vous accompagne avec ma connaissance approfondie du marché local
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Presqu'île */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Presqu'île</h3>
              <p className="text-gray-600 mb-4">
                Le cœur historique de Lyon, entre Saône et Rhône. Appartements de standing, 
                commerces de luxe et vie culturelle intense.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Prix au m² : 4 500€ - 8 000€</p>
                <p>• Type : Appartements haussmanniens</p>
                <p>• Atout : Patrimoine UNESCO</p>
              </div>
            </div>

            {/* Croix-Rousse */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Croix-Rousse</h3>
              <p className="text-gray-600 mb-4">
                Quartier bohème et créatif, célèbre pour ses traboules et son ambiance village. 
                Appartements avec caractère et terrasses.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Prix au m² : 3 800€ - 6 500€</p>
                <p>• Type : Lofts, ateliers</p>
                <p>• Atout : Vue panoramique</p>
              </div>
            </div>

            {/* Vieux Lyon */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🏰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vieux Lyon</h3>
              <p className="text-gray-600 mb-4">
                Le plus ancien quartier de Lyon, classé UNESCO. Maisons à colombages, 
                cours intérieures et ruelles médiévales authentiques.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Prix au m² : 4 200€ - 7 500€</p>
                <p>• Type : Maisons historiques</p>
                <p>• Atout : Authenticité médiévale</p>
              </div>
            </div>

            {/* Part-Dieu */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Part-Dieu</h3>
              <p className="text-gray-600 mb-4">
                Quartier d'affaires moderne avec la Tour Incity. Appartements contemporains, 
                services de proximité et excellentes liaisons de transport.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Prix au m² : 3 500€ - 6 000€</p>
                <p>• Type : Résidences modernes</p>
                <p>• Atout : Transport et commerces</p>
              </div>
            </div>

            {/* Confluence */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-teal-600 text-xl">🌊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Confluence</h3>
              <p className="text-gray-600 mb-4">
                Quartier ultra-moderne en pleine transformation. Architecture contemporaine, 
                espaces verts et logements écologiques de dernière génération.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Prix au m² : 4 000€ - 7 200€</p>
                <p>• Type : Logements neufs</p>
                <p>• Atout : Innovation écologique</p>
              </div>
            </div>

            {/* Brotteaux */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-pink-600 text-xl">🌳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brotteaux</h3>
              <p className="text-gray-600 mb-4">
                Quartier résidentiel huppé avec le Parc de la Tête d'Or. Appartements bourgeois, 
                maisons de maître et ambiance familiale privilégiée.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Prix au m² : 5 000€ - 9 000€</p>
                <p>• Type : Résidences bourgeoises</p>
                <p>• Atout : Parc et écoles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contactez-moi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prêt(e) à concrétiser votre projet immobilier ? Parlons-en !
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600">04 78 XX XX XX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">gabrielle@gab-immo.fr</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Bureau</h3>
                  <p className="text-gray-600">123 Rue de la République<br />69002 Lyon</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">🕒</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Horaires</h3>
                  <p className="text-gray-600">Lun-Ven : 9h-18h<br />Sam : 9h-12h</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Prendre rendez-vous</h3>
              <p className="text-gray-600 mb-6">
                Planifiez une consultation gratuite pour discuter de votre projet immobilier.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Réserver un créneau
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Gabrielle Nicolini Immobilier</h3>
              <p className="text-gray-300">
                Votre expert immobilier à Lyon, spécialiste des quartiers historiques et modernes.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Estimation gratuite</li>
                <li>Accompagnement achat/vente</li>
                <li>Conseil immobilier</li>
                <li>Expertise locale</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">
                04 78 XX XX XX<br />
                gabrielle@gab-immo.fr<br />
                69002 Lyon
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Gabrielle Nicolini Immobilier. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
