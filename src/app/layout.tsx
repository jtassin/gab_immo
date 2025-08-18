import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Crimson_Text } from "next/font/google";
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
  description: "Découvrez l'immobilier lyonnais avec Gabrielle Nicolini, experte des quartiers Vaise, Valmy, Saint Rambert, Champvert. Estimation gratuite, accompagnement personnalisé. Contactez-nous au 06 19 18 74 33.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabrielle Nicolini - Spécialiste Immobilier Lyon 9ème",
    description: "Expertise immobilière à Lyon : Vaise, Valmy, Saint Rambert, Champvert. Estimation gratuite et accompagnement personnalisé.",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${crimsonText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
