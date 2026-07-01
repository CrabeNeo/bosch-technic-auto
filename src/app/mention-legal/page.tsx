import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site BOSCH TECHNIC AUTO.',
  robots: { index: false, follow: false }, // inutile d'indexer cette page
  alternates: { canonical: '/mention-legal' },
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-20">
      <section style={{ background: 'linear-gradient(to bottom right, #111827, #1f2937)', color: 'white', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 'bold', marginBottom: '1rem' }}>
            Mentions <span style={{ color: '#dc2626' }}>Légales</span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#d1d5db', maxWidth: '48rem', margin: '0 auto' }}>
            Informations légales relatives au site BOSCH TECHNIC AUTO
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          {/* Éditeur */}
          <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '2px solid #dc2626' }}>
              Éditeur du site
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#4b5563', lineHeight: '1.75' }}>
              <p><span style={{ fontWeight: '600', color: '#111827' }}>Raison sociale :</span> BOSCH TECHNIC AUTO</p>
              <p><span style={{ fontWeight: '600', color: '#111827' }}>Forme juridique :</span> Entreprise individuelle</p>
              <p><span style={{ fontWeight: '600', color: '#111827' }}>SIRET :</span> 914 556 675 00017</p>
              <p><span style={{ fontWeight: '600', color: '#111827' }}>Adresse :</span> 24 Avenue des Croates, 12200 Villefranche-de-Rouergue, France</p>
              <p><span style={{ fontWeight: '600', color: '#111827' }}>Téléphone :</span> <a href="tel:+33565450317" style={{ color: '#dc2626', textDecoration: 'none' }}>05 65 45 03 17</a></p>
              <p><span style={{ fontWeight: '600', color: '#111827' }}>Email :</span> <a href="mailto:contact@bosch-technic-auto.fr" style={{ color: '#dc2626', textDecoration: 'none' }}>contact@bosch-technic-auto.fr</a></p>
            </div>
          </div>

          {/* Hébergeur */}
          <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '2px solid #dc2626' }}>
              Hébergeur
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#4b5563', lineHeight: '1.75' }}>
              <p><span style={{ fontWeight: '600', color: '#111827' }}>Société :</span> Vercel Inc.</p>
              <p><span style={{ fontWeight: '600', color: '#111827' }}>Adresse :</span> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
              <p><span style={{ fontWeight: '600', color: '#111827' }}>Site web :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: '#dc2626', textDecoration: 'none' }}>vercel.com</a></p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '2px solid #dc2626' }}>
              Propriété intellectuelle
            </h2>
            <p style={{ color: '#4b5563', lineHeight: '1.75' }}>
              L&apos;ensemble du contenu de ce site (textes, images, logos, icônes) est la propriété exclusive de BOSCH TECHNIC AUTO, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable écrite est interdite.
            </p>
          </div>

          {/* Données personnelles */}
          <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '2px solid #dc2626' }}>
              Données personnelles (RGPD)
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#4b5563', lineHeight: '1.75' }}>
              <p>
                Ce site ne collecte aucune donnée personnelle sans votre consentement. Aucun cookie de tracking ou de publicité n&apos;est utilisé.
              </p>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.
              </p>
              <p>
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@bosch-technic-auto.fr" style={{ color: '#dc2626', textDecoration: 'none' }}>contact@bosch-technic-auto.fr</a>
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '2px solid #dc2626' }}>
              Cookies
            </h2>
            <p style={{ color: '#4b5563', lineHeight: '1.75' }}>
              Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de suivi n&apos;est déposé sur votre appareil.
            </p>
          </div>

          {/* Responsabilité */}
          <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '2px solid #dc2626' }}>
              Limitation de responsabilité
            </h2>
            <p style={{ color: '#4b5563', lineHeight: '1.75' }}>
              BOSCH TECHNIC AUTO s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l&apos;exhaustivité ou l&apos;absence d&apos;erreur des informations publiées. BOSCH TECHNIC AUTO se réserve le droit de modifier le contenu du site à tout moment et sans préavis.
            </p>
          </div>

          {/* Droit applicable */}
          <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '2px solid #dc2626' }}>
              Droit applicable
            </h2>
            <p style={{ color: '#4b5563', lineHeight: '1.75' }}>
              Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </div>

          <p style={{ color: '#9ca3af', fontSize: '0.875rem', textAlign: 'center' }}>
            Dernière mise à jour : mai 2026
          </p>

        </div>
      </section>
    </div>
  );
}