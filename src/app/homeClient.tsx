'use client';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const MotionLink = motion(Link);

export default function HomeClient() {
  return (
    <>
      <Hero />
      <div style={{ textAlign: 'center' }}>
        <Services />
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20 w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Pourquoi <span className="gradient-text">nous choisir</span> ?
              </h2>
              <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#4b5563', maxWidth: '42rem', margin: '0 auto', lineHeight: '1.75' }}>
                Une expertise reconnue pour votre tranquillité d&apos;esprit
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
            {[
              { icon: FaCheckCircle, title: 'Techniciens Qualifiés', description: "Notre équipe dispose des certifications et de l'expérience nécessaires pour intervenir sur tous types de véhicules." },
              { icon: FaCheckCircle, title: 'Équipements Modernes', description: 'Des outils et équipements de diagnostic de dernière génération pour un service optimal.' },
              { icon: FaCheckCircle, title: 'Prix Transparents', description: 'Devis détaillés et prix compétitifs sans surprise. Nous vous conseillons en toute transparence.' },
              { icon: FaCheckCircle, title: 'Pièces de Qualité', description: "Nous utilisons exclusivement des pièces d'origine ou de qualité équivalente garanties." },
              { icon: FaCheckCircle, title: "Rapidité d'intervention", description: 'Nous nous engageons à respecter les délais annoncés pour que vous retrouviez votre véhicule rapidement.' },
              { icon: FaCheckCircle, title: 'Proximité & Écoute', description: "Un service personnalisé et à l'écoute de vos besoins dans votre région de Villefranche-de-Rouergue." },
            ].map((item, index) => (
              <AnimatedSection key={index}>
                <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)', height: '100%' }}>
                  <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <item.icon style={{ color: 'white', fontSize: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: '#4b5563', lineHeight: '1.75' }}>{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-linear-to-br from-red-600 to-red-800 text-white">
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Besoin d&apos;un rendez-vous ?</h2>
            <p className="text-xl opacity-90 leading-relaxed" style={{ marginBottom: '4rem', maxWidth: '42rem', margin: '0 auto 4rem auto' }}>
              Contactez-nous dès maintenant pour prendre rendez-vous ou obtenir un devis gratuit
            </p>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', marginTop: '4rem' }}>
              <motion.a href="tel:+33565000000" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                style={{ padding: '1rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'white', color: '#dc2626', borderRadius: '9999px', fontSize: '1rem', fontWeight: '600', textDecoration: 'none' }}>
                <FaPhoneAlt /><span>05 65 45 03 17</span>
              </motion.a>
              <MotionLink href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                style={{ padding: '1rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'transparent', color: 'white', border: '2px solid white', borderRadius: '9999px', fontSize: '1rem', fontWeight: '600', textDecoration: 'none' }}>
                <FaMapMarkerAlt /><span>Nous contacter</span>
              </MotionLink>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}