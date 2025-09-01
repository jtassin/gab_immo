import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Crimson_Text } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gabrielle Nicolini - Spécialiste Immobilier Lyon 9ème | César et Brutus",
  description: "Découvrez l'immobilier lyonnais avec Gabrielle Nicolini, experte des quartiers Vaise, Valmy, Saint Rambert et Champvert. Estimation gratuite et accompagnement personnalisé pour votre projet immobilier à Lyon 9ème.",
  keywords: "immobilier Lyon, conseiller immobilier Lyon 9ème, Gabrielle Nicolini, Vaise, Valmy, Saint Rambert, Champvert, estimation gratuite, achat vente location Lyon",
  authors: [{ name: "Gabrielle Nicolini" }],
  creator: "Gabrielle Nicolini Immobilier",
  publisher: "Gabrielle Nicolini",
  robots: "index, follow",
            openGraph: {
            title: "Gabrielle Nicolini - Spécialiste Immobilier Lyon 9ème",
            description: "Expertise immobilière à Lyon : Vaise, Valmy, Saint Rambert, Champvert. Estimation gratuite et accompagnement personnalisé.",
            type: "website",
            locale: "fr_FR",
            siteName: "Gabrielle Nicolini Immobilier",
            images: [
              {
                url: "https://www.gabriellenicolini.immo/Gabrielle_veste_BD-removebg-preview.png",
                width: 320,
                height: 384,
                alt: "Gabrielle Nicolini - Agent Immobilier Lyon 9ème",
                type: "image/png"
              }
            ],
          },
            twitter: {
            card: "summary_large_image",
            title: "Gabrielle Nicolini - Spécialiste Immobilier Lyon 9ème",
            description: "Expertise immobilière à Lyon : Vaise, Valmy, Saint Rambert, Champvert. Estimation gratuite et accompagnement personnalisé.",
            images: ["https://www.gabriellenicolini.immo/Gabrielle_veste_BD-removebg-preview.png"],
          },
  alternates: {
    canonical: "https://www.gabriellenicolini.immo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2b52" />
        <meta name="msapplication-TileColor" content="#1f2b52" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${crimsonText.variable} antialiased`}
      >
        {children}
        
        {/* Schema.org - LocalBusiness et RealEstateAgent */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Gabrielle Nicolini Immobilier",
              "description": "Spécialiste immobilier à Lyon 9ème, expert des quartiers Vaise, Valmy, Saint Rambert et Champvert",
              "url": "https://www.gabriellenicolini.immo",
              "telephone": "+33619187433",
              "email": "gabrielle.nicolini@cesaretbrutus.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lyon",
                "postalCode": "69009",
                "addressCountry": "FR"
              },
              "areaServed": [
                "Vaise",
                "Valmy", 
                "Saint Rambert le Vergoin",
                "Plateau de Saint Rambert",
                "Champvert",
                "Gorge de Loup",
                "Vaise Industrie"
              ],
              "serviceType": [
                "Estimation immobilière",
                "Vente immobilière",
                "Achat immobilier",
                "Conseil immobilier",
                "Expertise locale"
              ],
              "openingHours": [
                "Mo-Fr 09:00-19:00",
                "Sa 09:00-13:00"
              ],
              "image": "https://www.gabriellenicolini.immo/Gabrielle_veste_BD-removebg-preview.png",
              "sameAs": [
                "https://www.linkedin.com/in/gabrielle-nicolini",
                "https://www.facebook.com/gabrielle.nicolini.kw/"
              ]
            })
          }}
        />
      </body>
      <GoogleAnalytics gaId="G-BYEZFSGM8G" />
    </html>
  );
}
