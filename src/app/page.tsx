import Image from "next/image";

export default function Home() {
  // Calcul dynamique des années d'expérience depuis janvier 2021
  const startYear = 2021;
  const startMonth = 0; // Janvier = 0
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  // Calcul des mois d'activité depuis janvier 2021
  const monthsOfActivity = (currentYear - startYear) * 12 + (currentMonth - startMonth);
  const yearsOfExperience = Math.ceil(currentYear - startYear) + 1;
  
  // Calcul des transactions (1.2 par mois d'activité)
  const estimatedTransactions = Math.round(monthsOfActivity * 1.2);

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
      <section id="accueil" className="relative text-white" style={{ backgroundColor: 'rgb(31, 43, 82)' }}>
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
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
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
                Spécialiste du marché immobilier lyonnais et passionnée par ce métier, je vous propose un accompagnement sur mesure à chaque étape de vos projets immobiliers.
              </p>
              
              <div className="space-y-2 text-gray-700 mb-4">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 font-semibold">•</span>
                  <span><strong>ESTIMATION :</strong> analyse du marché et spécificités de votre bien</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 font-semibold">•</span>
                  <span><strong>VENTE :</strong> valorisation, négociation et validation de solvabilité</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 font-semibold">•</span>
                  <span><strong>ACHAT :</strong> définition de vos besoins et accompagnement complet</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm">
                Nous avons un objectif commun : réaliser votre projet en toute confiance et sérénité.
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

                {/* Statistiques dynamiques */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{yearsOfExperience}+</div>
                    <div className="text-sm text-gray-600">Années d&apos;expérience</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{estimatedTransactions}+</div>
                    <div className="text-sm text-gray-600">Transactions réussies</div>
                  </div>
                </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg p-8 text-center">
              <div className="w-48 h-48 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C4E03AQEH8slXak4ExQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1623355540760?e=1758153600&v=beta&t=lsQm4o1WOzj_aO2trSohaI3xI3PbM_Hyw2mabmVDrjs"
                  alt="Gabrielle Nicolini - Agent Immobilier"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-500">Gabrielle Nicolini</p>
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
            {/* Saint Rambert le Vergoin */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">🏘️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Saint Rambert le Vergoin</h3>
              <p className="text-gray-600 mb-4">
                Quartier résidentiel calme et familial au nord de Lyon. Maisons individuelles, 
                appartements spacieux et espaces verts pour une qualité de vie exceptionnelle.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Prix au m² : 3 200€ - 5 800€</p>
                <p>• Type : Maisons et appartements</p>
                <p>• Atout : Calme et verdure</p>
              </div>
            </div>

            {/* Vaise Industrie */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vaise Industrie</h3>
              <p className="text-gray-600 mb-4">
                Quartier en pleine transformation, anciennement industriel. Lofts modernes, 
                appartements neufs et espaces de coworking dans un environnement dynamique.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Prix au m² : 3 500€ - 6 200€</p>
                <p>• Type : Lofts et appartements neufs</p>
                <p>• Atout : Modernité et dynamisme</p>
              </div>
            </div>

            {/* Plateau de Saint Rambert */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">⛰️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plateau de Saint Rambert</h3>
              <p className="text-gray-600 mb-4">
                Quartier sur les hauteurs avec vue panoramique sur Lyon. Villas de standing, 
                appartements haut de gamme et ambiance exclusive dans un cadre privilégié.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Prix au m² : 4 800€ - 8 500€</p>
                <p>• Type : Villas et appartements luxueux</p>
                <p>• Atout : Vue panoramique</p>
              </div>
            </div>

            {/* Vaise */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">🏙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vaise</h3>
              <p className="text-gray-600 mb-4">
                Quartier mixte avec commerces, transports et logements. Appartements modernes, 
                maisons de ville et excellentes liaisons vers le centre de Lyon.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Prix au m² : 3 800€ - 6 500€</p>
                <p>• Type : Appartements et maisons</p>
                <p>• Atout : Transport et commerces</p>
              </div>
            </div>

            {/* Valmy */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-teal-600 text-xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Valmy</h3>
              <p className="text-gray-600 mb-4">
                Quartier résidentiel paisible avec espaces verts. Maisons individuelles, 
                appartements familiaux et ambiance conviviale pour tous les âges.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Prix au m² : 3 400€ - 5 900€</p>
                <p>• Type : Maisons et appartements</p>
                <p>• Atout : Espaces verts</p>
              </div>
            </div>

            {/* Gorge de Loup */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-pink-600 text-xl">🌄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gorge de Loup</h3>
              <p className="text-gray-600 mb-4">
                Quartier sur les hauteurs avec vue imprenable. Appartements avec terrasses, 
                maisons de caractère et accès facile aux transports en commun.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Prix au m² : 4 200€ - 7 800€</p>
                <p>• Type : Appartements et maisons</p>
                <p>• Atout : Vue et altitude</p>
              </div>
            </div>

            {/* Champvert */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-indigo-600 text-xl">🏡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Champvert</h3>
              <p className="text-gray-600 mb-4">
                Quartier résidentiel calme et familial. Maisons avec jardins, appartements spacieux 
                et écoles de proximité pour une vie de famille idéale.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Prix au m² : 3 600€ - 6 800€</p>
                <p>• Type : Maisons et appartements</p>
                <p>• Atout : Famille et proximité</p>
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
