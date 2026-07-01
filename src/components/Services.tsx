'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaWrench, FaCar, FaOilCan, FaCogs, FaTachometerAlt, FaTools } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const MotionLink = motion(Link);

export default function Services() {
  const services = [
    { icon: FaWrench, title: 'Entretien Courant', description: 'Révisions périodiques, vidanges, contrôles techniques' },
    { icon: FaCar, title: 'Réparation Mécanique', description: 'Diagnostic et réparation de tous types de pannes' },
    { icon: FaOilCan, title: 'Freinage', description: 'Plaquettes, disques, liquide de frein' },
    { icon: FaCogs, title: 'Pneumatiques', description: 'Montage, équilibrage, géométrie' },
    { icon: FaTachometerAlt, title: 'Climatisation', description: 'Recharge et entretien système climatisation' },
    { icon: FaTools, title: 'Diagnostic Électronique', description: 'Analyse électronique et mise à jour calculateurs' },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Nos <span className="gradient-text">Services</span>
            </h2>
            <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.75' }}>
              Des prestations complètes pour l&apos;entretien et la réparation de votre véhicule
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)', height: '100%' }}
              >
                <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <service.icon style={{ color: 'white', fontSize: '1.5rem' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ color: '#4b5563', lineHeight: '1.75' }}>{service.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <MotionLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/services"
              style={{ padding: '1rem 2rem', display: 'inline-block', backgroundColor: '#dc2626', color: 'white', borderRadius: '9999px', fontSize: '1rem', fontWeight: '600', textDecoration: 'none' }}
            >
              Voir tous nos services
            </MotionLink>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}