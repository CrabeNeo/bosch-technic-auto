import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const BASE_URL = 'https://www.mongarage.fr'; // ⚠️ à remplacer par ta vraie URL au déploiement

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'BOSCH TECHNIC AUTO - Garage Automobile à Villefranche-de-Rouergue',
    template: '%s | BOSCH TECHNIC AUTO',  // chaque page affichera "Titre | BOSCH TECHNIC AUTO"
  },
  description: 'Entretien et réparation de véhicules automobiles légers. Garage de confiance à Villefranche-de-Rouergue (12200).',
  keywords: 'garage, automobile, réparation, entretien, Villefranche-de-Rouergue, Aveyron',
  authors: [{ name: 'BOSCH TECHNIC AUTO' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'BOSCH TECHNIC AUTO',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}