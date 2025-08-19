"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import mixpanel from "mixpanel-browser";

interface Avis {
  id: number;
  note: number;
  commentaire: string;
  client: string;
  transaction: string;
  initiale: string;
  couleur: string;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avisAleatoires, setAvisAleatoires] = useState<Avis[]>([]);
  
  // Initialisation de Mixpanel
  useEffect(() => {
    mixpanel.init("c763b02ec15098b02c46034afde3a6b8", {
      debug: process.env.NODE_ENV === "development",
      track_pageview: true,
      persistence: "localStorage",
      autocapture:true
    });

    // Charger et sélectionner 3 avis au hasard
    fetch('/avis.json')
      .then(response => response.json())
      .then(data => {
        const avis = data.avis;
        const avisMelanges = [...avis].sort(() => Math.random() - 0.5);
        setAvisAleatoires(avisMelanges.slice(0, 3));
      })
      .catch(error => console.error('Erreur lors du chargement des avis:', error));
  }, []);
  
  // Calcul dynamique des années d'expérience depuis janvier 2021
  const startYear = 2021;
  const startMonth = 0; // Janvier = 0
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  // Calcul des mois d'activité depuis janvier 2021
  const monthsOfActivity = (currentYear - startYear) * 12 + (currentMonth - startMonth);
  const yearsOfExperience = Math.ceil(currentYear - startYear) + 1;
  
  // Calcul des projets réalisés (1.2 par mois d'activité, multiplié par 2, arrondi à la dizaine)
  const estimatedProjects = Math.round((monthsOfActivity * 1.2 * 2) / 10) * 10; // 1.2 projets par mois, multiplié par 2, arrondi à la dizaine

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Gabrielle Nicolini Immobilier</h1>
            </div>
            <div className="hidden md:block">
                              <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#accueil" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
                  <a href="#agent" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Qui suis-je ?</a>
                  <a href="#quartiers" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Quartiers</a>
                  <a href="#avis" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Avis</a>
                  <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative text-white">
        <div className="absolute inset-0">
          <Image
            src="/header.jpg"
            alt="Lyon - Ville d'opportunités immobilières"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Votre Spécialiste Immobilier à Lyon 9ème
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Découvrez l&apos;immobilier lyonnais avec une experte qui connaît chaque quartier 
              et vous accompagne dans vos projets avec professionnalisme et écoute.
            </p>
            <button 
              onClick={() => {
                setIsModalOpen(true);
                mixpanel.track("CTA Clicked", {
                  button: "Estimation Gratuite",
                  location: "Hero Section"
                });
              }}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg cursor-pointer"
            >
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
                Je vous accompagne de A à Z
              </h2>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Gabrielle Nicolini
              </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une experte passionnée qui met son savoir-faire au service de vos projets immobiliers
            </p>
          </div>
          
                    <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-700 mb-4 text-center italic" style={{ fontFamily: 'var(--font-crimson-text)', fontStyle: 'italic' }}>
                Gabrielle Nicolini
              </h3>
              
              <div className="text-center">
                <div className="w-64 h-76 mx-auto overflow-hidden">
                  <Image 
                    src="/Gabrielle_veste_BD-removebg-preview.png"
                    alt="Gabrielle Nicolini - Agent Immobilier"
                    width={256}
                    height={304}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              
              {/* Statistiques en dessous de la photo */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{yearsOfExperience}+</div>
                  <div className="text-sm text-gray-600">Années d&apos;expérience</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{estimatedProjects}+</div>
                  <div className="text-sm text-gray-600">Projets réalisés</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Spécialiste du marché immobilier lyonnais et passionnée par ce métier, je vous propose un accompagnement sur mesure à chaque étape de vos projets immobiliers. Que ce soit pour votre résidence principale, votre résidence secondaire ou un investissement immobilier.
              </p>
              
              <div className="space-y-3 text-gray-700 mt-6 mb-6">
                <div className="flex items-start space-x-3">
                  <span className="font-semibold text-lg" style={{ color: 'rgb(31, 43, 82)' }}>•</span>
                  <span><strong>ESTIMATION :</strong> analyse du marché et spécificités de votre bien</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-semibold text-lg" style={{ color: 'rgb(31, 43, 82)' }}>•</span>
                  <span><strong>VENTE :</strong> valorisation, négociation et validation de solvabilité</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-semibold text-lg" style={{ color: 'rgb(31, 43, 82)' }}>•</span>
                  <span><strong>ACHAT :</strong> définition de vos besoins et accompagnement complet</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-base mt-4">
                Mes atouts pour vous accompagner :
              </p>

              <div className="space-y-3 text-gray-700 mt-4 mb-6">
                <div className="flex items-start space-x-3">
                  <span className="font-semibold text-lg" style={{ color: 'rgb(31, 43, 82)' }}>•</span>
                  <span><strong>EXPERTISE LOCALE :</strong> connaissance approfondie du marché lyonnais</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-semibold text-lg" style={{ color: 'rgb(31, 43, 82)' }}>•</span>
                  <span><strong>ACCOMPAGNEMENT PERSONNALISÉ :</strong> suivi sur mesure de vos projets</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-semibold text-lg" style={{ color: 'rgb(31, 43, 82)' }}>•</span>
                  <span><strong>TRANSPARENCE ET ÉCOUTE :</strong> relation de confiance et communication claire</span>
                </div>
              </div>

              <p className="text-gray-700 text-base leading-relaxed">
                Nous avons un objectif commun : réaliser votre projet en toute confiance et sérénité.
              </p>
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
                          {/* Plateau de Saint Rambert */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
                                  <Image
                  src="/plateau-saint-rambert.jpg"
                  alt="Plateau de Saint Rambert - Quartier résidentiel calme et familial"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                  <div className="absolute bottom-3 right-3 bg-white bg-opacity-95 rounded-lg px-3 py-2 shadow-lg">
                    <span className="text-gray-800 text-sm font-bold">2 564 - 5 454 €/m²</span>
                  </div>
                </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plateau de Saint Rambert</h3>
              <p className="text-gray-600 mb-4">
                Quartier résidentiel calme et familial au nord de Lyon. Maisons individuelles, 
                appartements spacieux et espaces verts pour une qualité de vie exceptionnelle.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Type : Maisons et appartements</p>
                <p>• Atouts : Calme et verdure</p>
              </div>
            </div>

            {/* Vaise Industrie */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
                <Image 
                  src="/vaise-industrie.jpg"
                  alt="Vaise Industrie - Quartier en transformation"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-3 right-3 bg-white bg-opacity-95 rounded-lg px-3 py-2 shadow-lg">
                  <span className="text-gray-800 text-sm font-bold">3 024 - 5 447 €/m²</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vaise Industrie</h3>
                              <p className="text-gray-600 mb-4">
                  Quartier en pleine transformation, anciennement industriel.
                  Appartements récents, bureaux, espaces de coworking dans un environnement dynamique.
                </p>
              <div className="text-sm text-gray-500">
                <p>• Type : Appartements (principalement récents)</p>
                <p>• Atouts : Modernité et dynamisme</p>
              </div>
            </div>

                          {/* Saint Rambert le Vergoin */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
                  <Image
                    src="/vergoin.jpg"
                    alt="Saint Rambert le Vergoin - Parc verdoyant et résidentiel"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                  <div className="absolute bottom-3 right-3 bg-white bg-opacity-95 rounded-lg px-3 py-2 shadow-lg">
                    <span className="text-gray-800 text-sm font-bold">1 837 - 3 544 €/m²</span>
                  </div>
                </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Saint Rambert le Vergoin</h3>
                              <p className="text-gray-600 mb-4">
                                     A la pointe nord de la commune de Lyon, limitrophe des communes de Saint-Cyr-au-Mont-d&apos;Or et de Collonges-au-Mont-d&apos;Or, le Vergoin est un quartier vivant en pleine mutation.
                </p>
              <div className="text-sm text-gray-500">
                <p>• Type : Maisons et appartements</p>
                <p>• Atouts : Verdure et prix accessible</p>
              </div>
            </div>

            {/* Vaise */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/vaise.jpg"
                  alt="Vaise - Quartier mixte avec commerces et transports"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                                  <div className="absolute bottom-3 right-3 bg-white bg-opacity-95 rounded-lg px-3 py-2 shadow-lg">
                    <span className="text-gray-800 text-sm font-bold">2 265 - 5 280 €/m²</span>
                  </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vaise</h3>
              <p className="text-gray-600 mb-4">
                Quartier mixte avec commerces, transports et logements. Appartements modernes, 
                maisons de ville et excellentes liaisons vers le centre de Lyon.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Type : Appartements</p>
                <p>• Atouts : Transport et commerces</p>
              </div>
            </div>

            {/* Valmy */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/valmy.webp"
                  alt="Valmy - Quartier résidentiel paisible avec espaces verts"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                <div className="absolute bottom-3 right-3 bg-white bg-opacity-95 rounded-lg px-3 py-2 shadow-lg">
                  <span className="text-gray-800 text-sm font-bold">2 079 - 5 788 €/m²</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Valmy</h3>
              <p className="text-gray-600 mb-4">
                Quartier résidentiel paisible avec espaces verts. Maisons individuelles, 
                appartements familiaux et ambiance conviviale pour tous les âges.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Type : Appartements</p>
                <p>• Atouts : Résidentiel, calme et transport</p>
              </div>
            </div>

            {/* Champvert */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/champvert.jpg"
                  alt="Champvert / Gorge de Loup - Quartier résidentiel en transformation"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                <div className="absolute bottom-3 right-3 bg-white bg-opacity-95 rounded-lg px-3 py-2 shadow-lg">
                  <span className="text-gray-800 text-sm font-bold">1 967 - 4 959 €/m²</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Champvert / Gorge de Loup</h3>
              <p className="text-gray-600 mb-4">
                Plus accessible que Vaise ou Valmy, c&apos;est un quartier qui se transforme depuis dix ans. Le tissu commercial s&apos;est développé, traditionnellement plutôt familial, le campus René Cassin a redynamisé le quartier.
              </p>
              
              <div className="text-sm text-gray-500">
                <p>• Type : Maisons et appartements</p>
                <p>• Atouts : Transport et prix accessible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avis Google */}
      <section id="avis" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Avis de nos clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que disent nos clients satisfaits sur Google
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avisAleatoires.map((avis) => (
              <div key={avis.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-lg">
                    {'★'.repeat(avis.note)}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{avis.note}.0</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &ldquo;{avis.commentaire.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < avis.commentaire.split('\n').length - 1 && <br />}
                    </span>
                  ))}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    avis.couleur === 'blue' ? 'bg-blue-100' :
                    avis.couleur === 'green' ? 'bg-green-100' :
                    avis.couleur === 'purple' ? 'bg-purple-100' :
                    avis.couleur === 'indigo' ? 'bg-indigo-100' :
                    avis.couleur === 'pink' ? 'bg-pink-100' :
                    avis.couleur === 'orange' ? 'bg-orange-100' :
                    avis.couleur === 'teal' ? 'bg-teal-100' :
                    avis.couleur === 'red' ? 'bg-red-100' :
                    'bg-gray-100'
                  }`}>
                    <span className={`font-semibold ${
                      avis.couleur === 'blue' ? 'text-blue-600' :
                      avis.couleur === 'green' ? 'text-green-600' :
                      avis.couleur === 'purple' ? 'text-purple-600' :
                      avis.couleur === 'indigo' ? 'text-indigo-600' :
                      avis.couleur === 'pink' ? 'text-pink-600' :
                      avis.couleur === 'orange' ? 'text-orange-600' :
                      avis.couleur === 'teal' ? 'text-teal-600' :
                      avis.couleur === 'red' ? 'text-red-600' :
                      'text-gray-600'
                    }`}>
                      {avis.initiale}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{avis.client}</p>
                    <p className="text-sm text-gray-600">{avis.transaction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://www.google.com/search?sca_esv=0cad35c59d313fc9&sxsrf=AE3TifPi0_6nr3p25xZfjiYgXLggA6pBmA:1755554167296&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EyM6GHPHcb_yi2l6tgzcRUFiCvLZpMzTQz1rzMYJhDSJR7X6AvjfnHDdYEdcNcje_T19tU8Vm41BLwzml6X4lSrh6F1ccExDhmJjY9EsmAIC2pw-gQ%3D%3D&q=Gabrielle+Nicolini+-+Immobilier+Avis&sa=X&ved=2ahUKEwiQipr0rJWPAxUTfqQEHeBGO8UQ0bkNegQIQRAE&biw=1100&bih=823&dpr=2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              <span className="mr-2">Voir tous nos avis Google</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-white">
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
                  <p className="text-gray-600">06 19 18 74 33</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">gabrielle.nicolini@cesaretbrutus.com</p>
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
              <button 
                onClick={() => {
                  setIsModalOpen(true);
                  mixpanel.track("CTA Clicked", {
                    button: "Réserver un créneau",
                    location: "Contact Section"
                  });
                }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
              >
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
                06 19 18 74 33<br />
                gabrielle.nicolini@cesaretbrutus.com<br />
                69009 Lyon
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Gabrielle Nicolini Immobilier. Tous droits réservés.</p>
            <p className="mt-2 text-sm">RSAC : 800 433 500 - EI</p>
          </div>
        </div>
      </footer>

      {/* Modale de contact */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Contactez Gabrielle</h3>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  mixpanel.track("Modal Closed", {
                    modal: "Contact",
                    duration: "N/A" // Vous pourriez calculer la durée d'ouverture
                  });
                }}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Téléphone</h4>
                  <a 
                    href="tel:0619187433" 
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    06 19 18 74 33
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a 
                    href="mailto:gabrielle.nicolini@cesaretbrutus.com" 
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    gabrielle.nicolini@cesaretbrutus.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">🕒</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Horaires</h4>
                  <p className="text-gray-600">Lun-Ven : 9h-19h<br />Sam : 9h-13h</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-center">
                N&apos;hésitez pas à me contacter pour discuter de votre projet immobilier !
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
