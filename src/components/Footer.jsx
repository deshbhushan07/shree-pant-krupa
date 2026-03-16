// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiPackage, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-5">
          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div style={{ width: 36, height: 36, background: 'var(--accent)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <FiPackage />
              </div>
              <div className="footer-brand">Shri Pant Krupa Paper Board</div>
            </div>
            <div className="footer-tagline">Paper Board Manufacturer & Trader</div>
            <p className="footer-desc">
              Premium quality paper board products from Kolhapur, Maharashtra. Serving packaging industries, corrugated box manufacturers, and paper converters across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="footer-heading">Quick Links</div>
            <ul className="footer-links">
              {['Home', 'About', 'Products', 'Industries', 'Blog', 'Gallery', 'Contact'].map(name => (
                <li key={name}>
                  <Link to={`/${name === 'Home' ? '' : name.toLowerCase()}`}>
                    <FiArrowRight size={12} /> {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="footer-heading">Products</div>
            <ul className="footer-links">
              {['Kraft Paper Rolls', 'Mill Board', 'Duplex Board', 'Grey Board', 'Packing Board'].map(p => (
                <li key={p}>
                  <Link to="/products">
                    <FiArrowRight size={12} /> {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-heading">Contact Info</div>
            <div className="footer-contact-item">
              <FiMapPin className="footer-contact-icon" />
              <span>GATE NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra – 416202, India</span>
            </div>
            <div className="footer-contact-item">
              <FiPhone className="footer-contact-icon" />
              <span>+91 98765 43210</span>
            </div>
            <div className="footer-contact-item">
              <FiMail className="footer-contact-icon" />
              <span>info@pantkriupapaperboard.com</span>
            </div>
            <div className="footer-contact-item">
              <FaWhatsapp className="footer-contact-icon" style={{ color: '#25d366' }} />
              <span>WhatsApp: +91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <span>© {year} Shri Pant Krupa Paper Board. All rights reserved.</span>
            <span>
              Proprietor: <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Omkar Shrikant Patil</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
