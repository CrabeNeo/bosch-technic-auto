'use client';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111827', color: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', textAlign: 'center' }}>

          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#dc2626' }}>
              BOSCH TECHNIC AUTO
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Votre garage de confiance depuis 2022. Expertise et qualité pour l&apos;entretien de votre véhicule.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Liens rapides</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {[
                { href: '/', label: 'Accueil' },
                { href: '/services', label: 'Services' },
                { href: '/a-propos', label: 'À Propos' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#dc2626')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Contact</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '0.5rem' }}>
                <FaMapMarkerAlt style={{ color: '#dc2626', marginTop: '3px', flexShrink: 0, fontSize: '0.875rem' }} />
                <span style={{ color: '#9ca3af', textAlign: 'left', fontSize: '0.875rem' }}>
                  24 Avenue des Croates<br />12200 Villefranche-de-Rouergue
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <FaPhone style={{ color: '#dc2626', flexShrink: 0, fontSize: '0.875rem' }} />
                <a href="tel:+33565450317" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#dc2626')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                >05 65 45 03 17</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <FaEnvelope style={{ color: '#dc2626', flexShrink: 0, fontSize: '0.875rem' }} />
                <a href="mailto:contact@bosch-technic-auto.fr" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#dc2626')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                >contact@bosch-technic-auto.fr</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Horaires</h4>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <FaClock style={{ color: '#dc2626', marginTop: '3px', flexShrink: 0, fontSize: '0.875rem' }} />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontWeight: '600', color: 'white' }}>Lundi - Vendredi</p>
                  <p>8h00 - 12h00</p>
                  <p>14h00 - 18h00</p>
                </div>
              </div>
              <div>
                <p style={{ fontWeight: '600', color: 'white' }}>Samedi</p>
                <p>Sur rendez-vous</p>
              </div>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid #1f2937', marginTop: '1.5rem', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: '#9ca3af', fontSize: '0.8rem', textAlign: 'center' }}>
            © 2026 BOSCH TECHNIC AUTO. Tous droits réservés. —{' '}
            <Link href="/mention-legal" style={{ color: '#9ca3af', textDecoration: 'underline' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#dc2626')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
            >
              Mentions légales
            </Link>
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.75rem', textAlign: 'center' }}>
            Site développé par{' '}
            <a href="https://github.com/CrabeNeo" target="_blank" rel="noopener noreferrer" 
              style={{ color: '#9ca3af', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#dc2626')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
            >
              Néo Bécogné
            </a>
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { Icon: FaFacebook, label: 'Facebook' },
              { Icon: FaInstagram, label: 'Instagram' },
            ].map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label}
                style={{ width: '2rem', height: '2rem', backgroundColor: '#1f2937', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', fontSize: '0.875rem' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#dc2626')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1f2937')}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}