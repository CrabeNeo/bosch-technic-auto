'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/a-propos', label: 'À Propos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'fixed', width: '100%', top: 0, zIndex: 50, backgroundColor: isScrolled ? 'white' : 'transparent', boxShadow: isScrolled ? '0 4px 6px rgba(0,0,0,0.1)' : 'none', transition: 'background-color 0.3s, box-shadow 0.3s' }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: isMobile ? '4rem' : '6rem' }}>

          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <motion.div whileHover={{ scale: 1.05 }} style={{ fontSize: isMobile ? '1.1rem' : '1.5rem', fontWeight: 'bold', whiteSpace: 'nowrap', color: '#dc2626' }}>
              BOSCH TECHNIC AUTO
            </motion.div>
          </Link>

          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginLeft: 'auto' }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  style={{ fontWeight: '500', textDecoration: 'none', whiteSpace: 'nowrap', color: isScrolled ? '#374151' : 'white', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#dc2626')}
                  onMouseLeave={e => (e.currentTarget.style.color = isScrolled ? '#374151' : 'white')}
                >
                  {link.label}
                </Link>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="tel:+33565450317"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.5rem', backgroundColor: isScrolled ? 'white' : '#dc2626', color: isScrolled ? '#dc2626' : 'white', border: isScrolled ? '2px solid #dc2626' : '2px solid transparent', borderRadius: '9999px', fontSize: '1rem', fontWeight: '600', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                <FaPhone /><span>Appelez-nous</span>
              </motion.a>
            </nav>
          )}

          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', color: isScrolled ? '#111827' : 'white', padding: '0.5rem' }}
              aria-label="Ouvrir le menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>
      </div>

      {isMobile && isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
        >
          <div style={{ padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: '#374151', fontWeight: '500', textDecoration: 'none', fontSize: '1.125rem', padding: '0.5rem 0', borderBottom: '1px solid #f3f4f6' }}
              >
                {link.label}
              </Link>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href="tel:+33565450317"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', backgroundColor: '#dc2626', color: 'white', borderRadius: '9999px', fontSize: '1rem', fontWeight: '600', textDecoration: 'none', marginTop: '0.5rem' }}
            >
              <FaPhone /><span>Appelez-nous</span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}