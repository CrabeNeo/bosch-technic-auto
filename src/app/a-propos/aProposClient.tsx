'use client';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHandshake, FaTools, FaCheckCircle, FaPhone } from 'react-icons/fa';

const MotionLink = motion(Link);

export default function AProposClient() {
  return (
    <div className="pt-20">
      <section className="bg-linear-to-br from-gray-900 to-gray-800 text-white section-padding">
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">À Propos de <span className="text-red-500">Nous</span></h1>
            <p style={{ fontSize: '1.25rem', color: '#d1d5db', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.75' }}>
              Votre partenaire automobile de confiance depuis 2022
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre <span className="gradient-text">Histoire</span></h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#4b5563', fontSize: '1.125rem', lineHeight: '1.75' }}>
                  <p>Fondé en 2022 par Julien Bosch, <strong>BOSCH TECHNIC AUTO</strong> est né d&apos;une passion pour l&apos;automobile et d&apos;un désir d&apos;offrir un service de qualité aux habitants de Villefranche-de-Rouergue et ses environs.</p>
                  <p>Spécialisés dans l&apos;entretien et la réparation de véhicules automobiles légers, nous mettons notre expertise au service de votre mobilité. Notre engagement : vous fournir un service professionnel, transparent et personnalisé.</p>
                  <p>Situés au 24 Avenue des Croates, nous sommes facilement accessibles et disposons d&apos;équipements modernes pour diagnostiquer et réparer votre véhicule dans les meilleures conditions.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div style={{ background: 'linear-gradient(to bottom right, #dc2626, #991b1b)', borderRadius: '1rem', padding: '2rem', color: 'white' }}>
                <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem' }}>Nos Chiffres</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div><div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>2+</div><div style={{ fontSize: '1.25rem', opacity: 0.9 }}>Années d&apos;expérience</div></div>
                  <div><div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>100%</div><div style={{ fontSize: '1.25rem', opacity: 0.9 }}>Clients satisfaits</div></div>
                  <div><div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>2</div><div style={{ fontSize: '1.25rem', opacity: 0.9 }}>Professionnels qualifiés</div></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos <span className="gradient-text">Valeurs</span></h2>
              <p style={{ fontSize: '1.25rem', color: '#4b5563', maxWidth: '42rem', margin: '0 auto' }}>Ce qui nous guide au quotidien</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaAward, title: 'Excellence', description: "Nous visons l'excellence dans chaque intervention pour garantir votre satisfaction." },
              { icon: FaHandshake, title: 'Confiance', description: 'Transparence et honnêteté dans nos diagnostics et nos tarifs.' },
              { icon: FaUsers, title: 'Proximité', description: "Un service personnalisé et à l'écoute de vos besoins spécifiques." },
              { icon: FaTools, title: 'Expertise', description: 'Des techniciens formés aux dernières technologies automobiles.' },
            ].map((value, index) => (
              <AnimatedSection key={index}>
                <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)', textAlign: 'center', height: '100%' }}>
                  <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <value.icon style={{ color: 'white', fontSize: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>{value.title}</h3>
                  <p style={{ color: '#4b5563' }}>{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos <span className="gradient-text">Engagements</span></h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Devis gratuit et détaillé avant toute intervention",
              "Utilisation de pièces de qualité d'origine ou équivalentes",
              'Respect des délais annoncés',
              'Garantie sur toutes nos prestations',
              "Conseils personnalisés pour l'entretien de votre véhicule",
              'Tarifs compétitifs et transparents',
              'Accueil chaleureux et professionnel',
              'Intervention sur toutes marques de véhicules',
            ].map((engagement, index) => (
              <AnimatedSection key={index}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.75rem' }}>
                  <FaCheckCircle style={{ color: '#dc2626', fontSize: '1.5rem', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ color: '#374151', fontSize: '1.125rem' }}>{engagement}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-linear-to-br from-red-600 to-red-800 text-white">
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à nous confier votre véhicule ?</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem' }}>Prenez rendez-vous dès maintenant et bénéficiez de notre expertise</p>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
              <motion.a href="tel:+33565000000" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                style={{ padding: '1rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'white', color: '#dc2626', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: '600', textDecoration: 'none' }}>
                <FaPhone /><span>Appelez-nous</span>
              </motion.a>
              <MotionLink href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                style={{ padding: '1rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'transparent', color: 'white', border: '2px solid white', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: '600', textDecoration: 'none' }}>
                <span>Nous contacter</span>
              </MotionLink>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}