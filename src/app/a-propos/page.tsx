import type { Metadata } from 'next';
import AProposClient from './aProposClient';

export const metadata: Metadata = {
  title: 'À Propos',
  description: 'Découvrez l\'équipe de BOSCH TECHNIC AUTO, garage automobile à Villefranche-de-Rouergue depuis plusieurs années au service des particuliers et professionnels.',
  alternates: { canonical: '/a-propos' },
};

export default function AProposPage() {
  return <AProposClient />;
}