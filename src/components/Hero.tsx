'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaTools, FaCar, FaAward } from 'react-icons/fa';

const MotionLink = motion(Link);

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(to bottom right, #111827, #1f2937, #7f1d1d)' }}>
      
      <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: '25%', left: '25%', width: '24rem', height: '24rem', backgroundColor: '#ef4444', borderRadius: '50%', filter: 'blur(60px)' }} />
        <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', bottom: '25%', right: '25%', width: '24rem', height: '24rem', backgroundColor: '#3b82f6', borderRadius: '50%', filter: 'blur(60px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '80rem', margin: '0 auto', padding: '6rem 1.5rem 3rem', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 'bold', color: '#dc2626', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            BOSCH TECHNIC AUTO
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: '#d1d5db', maxWidth: '48rem', margin: '0 auto 1rem auto', lineHeight: '1.6' }}>
            Votre garage de confiance à Villefranche-de-Rouergue
          </p>
          <p style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)', color: '#9ca3af', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.6' }}>
            Entretien et réparation de véhicules automobiles légers<br />Plus de 2 ans d&apos;expertise à votre service
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center', margin: '2.5rem auto', maxWidth: '20rem' }}>
            <MotionLink whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/contact"
              style={{ width: '100%', textAlign: 'center', padding: '1rem 2rem', backgroundColor: '#dc2626', color: 'white', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: '600', textDecoration: 'none', boxShadow: '0 10px 15px rgba(0,0,0,0.2)' }}>
              Nous contacter
            </MotionLink>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="tel:+33565450317"
              style={{ width: '100%', textAlign: 'center', padding: '1rem 2rem', backgroundColor: 'white', color: '#111827', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: '600', textDecoration: 'none', boxShadow: '0 10px 15px rgba(0,0,0,0.2)' }}>
              Nous appeler
            </motion.a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '3rem' }}>
          {[
            { icon: FaTools, title: 'Expertise', desc: 'Techniciens qualifiés' },
            { icon: FaCar, title: 'Tous véhicules', desc: 'Toutes marques' },
            { icon: FaAward, title: 'Qualité', desc: 'Service professionnel' },
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ y: -10 }}
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', padding: '1.25rem 0.75rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <item.icon style={{ color: 'white', fontSize: '1.25rem' }} />
              </div>
              <h3 style={{ color: 'white', fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', fontWeight: 'bold', marginBottom: '0.25rem' }}>{item.title}</h3>
              <p style={{ color: '#d1d5db', fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}>
        <div style={{ width: '1.5rem', height: '2.5rem', border: '2px solid white', borderRadius: '9999px', display: 'flex', justifyContent: 'center', paddingTop: '0.25rem' }}>
          <div style={{ width: '0.25rem', height: '0.75rem', backgroundColor: 'white', borderRadius: '9999px' }} />
        </div>
      </motion.div>
    </section>
  );
}