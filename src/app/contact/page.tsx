import AnimatedSection from '@/components/AnimatedSection';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez BOSCH TECHNIC AUTO pour prendre rendez-vous. Garage situé à Villefranche-de-Rouergue (Aveyron, 12200).',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
  };

  const iconStyle = {
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    backgroundColor: '#dc2626',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  };

  return (
    <div className="pt-20">
      <section className="bg-linear-to-br from-gray-900 to-gray-800 text-white section-padding">
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contactez-<span className="text-red-500">nous</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#d1d5db', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.75' }}>
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-gray-50" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <AnimatedSection>
            <div>
              <h2 className="text-3xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>
                Nos coordonnées
              </h2>
              <p className="text-gray-600" style={{ marginBottom: '3rem' }}>
                Vous pouvez nous joindre par téléphone, email ou directement à notre garage.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
                gap: '2rem',
                marginBottom: '2rem',
              }}>

                {/* Adresse */}
                <div style={cardStyle}>
                  <div style={iconStyle}>
                    <FaMapMarkerAlt style={{ color: 'white', fontSize: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>Adresse</h3>
                  <p style={{ color: '#4b5563', lineHeight: '1.75' }}>
                    24 Avenue des Croates<br />
                    12200 Villefranche-de-Rouergue<br />
                    France
                  </p>
                </div>

                {/* Téléphone */}
                <div style={cardStyle}>
                  <div style={iconStyle}>
                    <FaPhone style={{ color: 'white', fontSize: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>Téléphone</h3>
                  <a href="tel:+33565450317" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1.125rem' }}>
                    05 65 45 03 17
                  </a>
                </div>

                {/* Email */}
                <div style={cardStyle}>
                  <div style={iconStyle}>
                    <FaEnvelope style={{ color: 'white', fontSize: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>Email</h3>
                  <a href="mailto:contact@bosch-technic-auto.fr" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1.125rem' }}>
                    contact@bosch-technic-auto.fr
                  </a>
                </div>

                {/* Horaires */}
                <div style={cardStyle}>
                  <div style={iconStyle}>
                    <FaClock style={{ color: 'white', fontSize: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>Horaires d&apos;ouverture</h3>
                  <div style={{ color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p><span style={{ fontWeight: '600' }}>Lundi - Vendredi :</span> 8h00 - 12h00 / 14h00 - 18h00</p>
                    <p><span style={{ fontWeight: '600' }}>Samedi :</span> Sur rendez-vous uniquement</p>
                    <p><span style={{ fontWeight: '600' }}>Dimanche :</span> Fermé</p>
                  </div>
                </div>

              </div>

              {/* Google Maps */}
              <div style={{ borderRadius: '1rem', overflow: 'hidden', height: '20rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.2900794947523!2d2.0396630763098558!3d44.362470806269556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ada76b542239a5%3A0x551464b0e7ed49a!2s24%20Av.%20des%20Croates%2C%2012200%20Villefranche-de-Rouergue!5e1!3m2!1sfr!2sfr!4v1779268908954!5m2!1sfr!2sfr"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}