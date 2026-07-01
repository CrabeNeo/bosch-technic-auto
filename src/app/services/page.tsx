import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { FaWrench, FaCar, FaOilCan, FaCogs, FaTachometerAlt, FaTools, FaBatteryFull, FaLightbulb, FaSnowflake, FaCarCrash, FaClipboardCheck, FaAward } from 'react-icons/fa';
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Nos Services',
  description: 'Découvrez tous nos services : entretien courant, réparation moteur, freinage, pneumatiques et diagnostic électronique à Villefranche-de-Rouergue.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  const servicesDetailed = [
    { icon: FaWrench, title: 'Entretien Périodique', description: "Révisions complètes selon le plan d'entretien constructeur", items: ['Vidange moteur', 'Remplacement filtres', 'Contrôle niveaux', 'Contrôle freinage'] },
    { icon: FaCar, title: 'Réparation Mécanique', description: 'Diagnostic et réparation de tous systèmes mécaniques', items: ['Moteur', 'Boîte de vitesses', 'Embrayage', 'Distribution'] },
    { icon: FaOilCan, title: 'Système de Freinage', description: 'Entretien complet du système de freinage', items: ['Plaquettes de frein', 'Disques', 'Liquide de frein', 'Étriers'] },
    { icon: FaCogs, title: 'Pneumatiques', description: 'Service complet pneumatiques et géométrie', items: ['Montage/Démontage', 'Équilibrage', 'Géométrie', 'Permutation'] },
    { icon: FaTachometerAlt, title: 'Climatisation', description: 'Entretien et recharge du système de climatisation', items: ['Recharge gaz', 'Contrôle étanchéité', 'Désinfection', 'Remplacement filtres'] },
    { icon: FaTools, title: 'Diagnostic Électronique', description: 'Analyse électronique complète du véhicule', items: ['Lecture codes défaut', 'Mise à jour calculateurs', 'Programmation', 'Réinitialisation'] },
    { icon: FaBatteryFull, title: 'Système Électrique', description: 'Diagnostic et réparation électrique', items: ['Batterie', 'Alternateur', 'Démarreur', 'Faisceaux électriques'] },
    { icon: FaLightbulb, title: 'Éclairage', description: 'Remplacement et réglage de tous éclairages', items: ['Phares', 'Feux arrière', 'Clignotants', 'Réglage optique'] },
    { icon: FaSnowflake, title: 'Entretien Saisonnier', description: 'Préparation de votre véhicule aux changements de saison', items: ['Hivernage', 'Check-up été', 'Antigel', 'Conseils adaptés'] },
    { icon: FaCarCrash, title: 'Dépannage', description: "Service de dépannage et réparation d'urgence", items: ['Intervention rapide', 'Diagnostic panne', 'Réparation sur place', 'Remorquage'] },
    { icon: FaClipboardCheck, title: 'Contrôle Technique', description: 'Préparation au contrôle technique', items: ['Pré-contrôle', 'Réparations nécessaires', 'Contre-visite', 'Conseils'] },
    { icon: FaAward, title: 'Garantie & Qualité', description: 'Toutes nos interventions sont garanties', items: ['Pièces garanties', "Main d'œuvre garantie", 'Conseil gratuit', 'Devis transparent'] },
  ];

  return (
    <div className="pt-20">
      <section style={{ background: 'linear-gradient(to bottom right, #111827, #1f2937)', color: 'white', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Nos <span style={{ color: '#ef4444' }}>Services</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#d1d5db', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.75' }}>
            Des prestations complètes pour l&apos;entretien et la réparation de tous types de véhicules légers
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {servicesDetailed.map((service, index) => (
              <AnimatedSection key={index}>
                <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)', height: '100%' }}>
                  <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <service.icon style={{ color: 'white', fontSize: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>{service.title}</h3>
                  <p style={{ color: '#4b5563', marginBottom: '1rem' }}>{service.description}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {service.items.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', color: '#374151' }}>
                        <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%', marginRight: '0.75rem', flexShrink: 0 }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Un service ne figure pas dans la liste ?</h2>
          <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2rem', lineHeight: '1.75' }}>
            N&apos;hésitez pas à nous contacter pour toute demande spécifique. Notre équipe se fera un plaisir de vous renseigner.
          </p>
          <Link href="/contact" className="btn-red" style={{ display: 'inline-block', backgroundColor: '#dc2626', color: 'white', padding: '1rem 2rem', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: '600', textDecoration: 'none' }}>
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}