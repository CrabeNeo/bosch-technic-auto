import type { Metadata } from 'next';
import HomeClient from './homeClient';

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'BOSCH TECHNIC AUTO, votre garage de confiance à Villefranche-de-Rouergue (12200). Entretien, réparation et diagnostic de véhicules légers.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return <HomeClient />;
}