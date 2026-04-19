import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { getCategories } from '../services/enquiryService';
import logo from '../assets/images/sp_logo.png';

export default function Footer() {
  const year = new Date().getFullYear();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories).catch(() => {});
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Products', to: '/products' },
    { label: 'Industries', to: '/industries' },
    { label: 'Blog', to: '/blog' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact Us', to: '/contact' },
  ];

  const fallbackProducts = ['Kraft Paper', 'Mill Board', 'Duplex Board', 'Grey Board'];

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-5">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-2">
              <img
                src={logo}
                alt="Shri Pant Krupa"
                style={{ width: 44, height: 44, objectFit: 'contain', borderRadius: 6 }}
              />
              <div className="footer-brand">Shri Pant Krupa Paper Board</div>
            </div>

            <div className="footer-tagline">Paper Board Manufacturer &amp; Trader</div>

            <p className="footer-desc">
              Premium quality paper board products from Kolhapur, Maharashtra.
              Serving packaging industries, corrugated box manufacturers,
              and paper converters across India.
            </p>

            {/* ✅ FIXED WhatsApp Button */}
            <a
              href="https://wa.me/917028082100"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1rem',
                background: '#25d366',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: 6,
                fontSize: '0.82rem',
                fontWeight: 600,
                fontFamily: 'var(--ff-body)',
                textDecoration: 'none',
              }}
            >
              <FaWhatsapp size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="footer-heading">Quick Links</div>
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} onClick={scrollTop}>
                    <FiArrowRight size={12} /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="footer-heading">Products</div>
            <ul className="footer-links">
              <li>
                <Link to="/products" onClick={scrollTop}>
                  <FiArrowRight size={12} /> All Products
                </Link>
              </li>

              {categories.length > 0
                ? categories.map(cat => (
                    <li key={cat.id}>
                      <Link
                        to={`/products?category=${encodeURIComponent(cat.name)}`}
                        onClick={scrollTop}
                      >
                        <FiArrowRight size={12} /> {cat.name}
                      </Link>
                    </li>
                  ))
                : fallbackProducts.map(p => (
                    <li key={p}>
                      <Link to="/products" onClick={scrollTop}>
                        <FiArrowRight size={12} /> {p}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-heading">Contact Info</div>

            {/* ✅ FIXED MAP LINK */}
            <a
              href="https://maps.google.com/?q=Shri+Pant+Krupa+Paper+Board+Halsavade+Kolhapur"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div className="footer-contact-item">
                <FiMapPin className="footer-contact-icon" />
                <span>
                  GATE NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra – 416202, India
                </span>
              </div>
            </a>

            <a href="tel:+917028082100" style={{ textDecoration: 'none' }}>
              <div className="footer-contact-item">
                <FiPhone className="footer-contact-icon" />
                <span>+91 70280 82100</span>
              </div>
            </a>

            <a href="mailto:info@shreepantkrupapaperboard.com" style={{ textDecoration: 'none' }}>
              <div className="footer-contact-item">
                <FiMail className="footer-contact-icon" />
                <span>info@shreepantkrupapaperboard.com</span>
              </div>
            </a>

            {/* ✅ FIXED WhatsApp Contact */}
            <a
              href="https://wa.me/917028082100"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div className="footer-contact-item">
                <FaWhatsapp style={{ color: '#25d366', fontSize: '1rem' }} />
                <span>+91 70280 82100</span>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <span>
              © {year} Shri Pant Krupa Paper Board. All rights reserved.
              {' · '}
              <Link to="/admin/login" style={{ fontSize: '0.75rem', textDecoration: 'none' }}>
                Admin
              </Link>
            </span>

            <span>
              Proprietor: <strong>Shrikant D. Patil</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}