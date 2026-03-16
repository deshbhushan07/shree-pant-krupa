// src/sections/Hero.jsx
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { FaIndustry } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-pattern" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <FaIndustry size={10} />
                Est. Paper Board Manufacturer · Kolhapur
              </div>
              <h1 className="hero-title">
                Premium Quality
                <span className="accent-word">Paper Boards</span>
                For Every Industry
              </h1>
              <p className="hero-subtitle">
                Shri Pant Krupa Paper Board delivers high-grade Kraft Paper, Mill Board, and Duplex Board 
                to packaging industries across India. Quality you can trust, supply you can count on.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/products" className="btn-accent-custom">
                  Explore Products <FiArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-outline-custom" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
                  <FiPhone size={16} /> Get Quote
                </Link>
              </div>

              <div className="hero-stats">
                {[
                  { num: '500+', label: 'Happy Clients' },
                  { num: '15+', label: 'Years Experience' },
                  { num: '50+', label: 'Product Varieties' },
                  { num: 'PAN India', label: 'Delivery' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="hero-stat-num">{s.num}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <div className="hero-image-panel">
              <div className="hero-image-bg">
                <div className="hero-paper-visual">
                  {['Kraft Paper Roll — 70-200 GSM', 'Mill Board — 200-600 GSM', 'Duplex Board — 250-450 GSM', 'Grey Board — 400-2000 GSM'].map((label, i) => (
                    <div key={i} className="paper-roll">
                      <div className="paper-roll-inner" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-card-float card-1">
                <div style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Quality Grade</div>
                <div style={{ fontFamily: 'var(--ff-heading)', fontSize: '0.95rem', color: 'var(--primary-dark)', fontWeight: 700 }}>ISI Certified</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>✓ Premium Grade</div>
              </div>

              <div className="hero-card-float card-2">
                <div style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>GSM Range</div>
                <div style={{ fontFamily: 'var(--ff-heading)', fontSize: '0.95rem', color: 'var(--primary-dark)', fontWeight: 700 }}>70 – 2000 GSM</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-mid)' }}>All board types</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
