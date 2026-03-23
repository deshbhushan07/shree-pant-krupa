// src/sections/IndustriesSection.jsx
import { FiBox, FiGrid, FiLayers, FiPackage, FiTruck, FiSettings } from 'react-icons/fi';

const INDUSTRIES = [
  { icon: <FiBox />, title: 'Packaging Industry', desc: 'Supplying robust paper board for rigid and flexible packaging solutions across India.' },
  { icon: <FiGrid />, title: 'Corrugated Box Manufacturers', desc: 'Providing medium and liner papers for 3-ply, 5-ply and 7-ply corrugated boards.' },
  { icon: <FiLayers />, title: 'Paper Converters', desc: 'Raw board materials for converting into specialty packaging and printing substrates.' },
  { icon: <FiPackage />, title: 'Industrial Packaging', desc: 'Heavy-duty board grades for machinery, automotive, and electronics packaging.' },
  { icon: <FiTruck />, title: 'E-Commerce & Logistics', desc: 'Lightweight yet strong kraft papers for e-commerce fulfillment and courier packaging.' },
  { icon: <FiSettings />, title: 'Printing & Publishing', desc: 'Smooth coated boards for high-quality printing, book binding and stationery.' },
];

export function IndustriesSection() {
  return (
    <section className="section-padded section-bg-cream">
      <div className="container">
        <div className="text-center mb-5">
          <div className="section-eyebrow">Industries We Serve</div>
          <div className="divider-accent center" />
          <h2 className="section-title">Trusted Across Industries</h2>
          <p className="section-lead mx-auto mt-3">
            Our paper board products serve a wide range of industries requiring consistent quality and reliable supply chains.
          </p>
        </div>

        <div className="row g-4">
          {INDUSTRIES.map((ind, i) => (
            <div key={i} className={`col-lg-4 col-md-6 fade-in delay-${Math.min(i + 1, 4)}`}>
              <div className="industry-card">
                <div className="industry-icon">{ind.icon}</div>
                <div className="industry-title">{ind.title}</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.7, margin: 0 }}>
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ──────────────────────────────────────

import { FiAward, FiShield, FiRefreshCw, FiUsers, FiZap, FiGlobe } from 'react-icons/fi';

const WHY_ITEMS = [
  { icon: <FiAward />, title: 'Premium Quality Assured', desc: 'Every batch undergoes quality checks to meet ISI standards and customer specifications.' },
  { icon: <FiShield />, title: 'Consistent GSM & Width', desc: 'Precise manufacturing ensures uniform GSM, width, and surface quality across all orders.' },
  { icon: <FiRefreshCw />, title: 'Reliable Supply Chain', desc: 'Well-stocked inventory ensures on-time delivery for both bulk and small quantity orders.' },
  { icon: <FiUsers />, title: 'Dedicated Customer Support', desc: 'Personalized service from inquiry to delivery with post-sale technical support.' },
  { icon: <FiZap />, title: 'Competitive Pricing', desc: 'Factory-direct pricing with transparent quotes and no hidden charges for all clients.' },
  { icon: <FiGlobe />, title: 'Pan-India Distribution', desc: 'Efficient logistics network for timely delivery across Maharashtra and all India.' },
];

export function WhyChooseUs() {
  return (
    <section className="section-padded">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="section-eyebrow">Why Choose Us</div>
            <div className="divider-accent" />
            <h2 className="section-title mb-3">The Pant Krupa Advantage</h2>
            <p className="section-lead">
              With over 15 years of experience in the paper board industry, we've built our reputation on quality, reliability, and exceptional customer service.
            </p>
            <div className="mt-4" style={{ background: 'var(--cream)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent)' }}>
              <div style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                "Omkar Shrikant Patil"
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-mid)', fontStyle: 'italic' }}>
                Proprietor, Shri Pant Krupa Paper Board
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', marginTop: '0.75rem', lineHeight: 1.7, marginBottom: 0 }}>
                "Our mission is to provide the paper board industry with materials that exceed expectations — consistent quality, fair pricing, and reliable delivery, every time."
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-3">
              {WHY_ITEMS.map((item, i) => (
                <div key={i} className={`col-md-6 fade-in delay-${Math.min(i + 1, 4)}`}>
                  <div className="why-item">
                    <div className="why-icon">{item.icon}</div>
                    <div>
                      <div className="why-title">{item.title}</div>
                      <div className="why-desc">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ─────────────────────────────────────────

import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const WA_NUMBER = '917397849730';
const WA_MESSAGE = encodeURIComponent('Hello,\nI am interested in your paper board products.\nPlease share more details.');

export function CTA() {
  return (
    <section className="cta-section">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="section-eyebrow" style={{ justifyContent: 'center', display: 'flex', marginBottom: '1rem' }}>
              Ready to Order?
            </div>
            <h2 className="cta-title">
              Need Paper Board for Your Business?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8, margin: '1rem auto 2.5rem', maxWidth: 560 }}>
              Get in touch with us today for a custom quote, product samples, or to discuss your specific requirements with our team.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/contact" className="btn-accent-custom">
                Request Quote <FiArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.85rem 2rem', background: '#25d366', color: '#fff',
                  borderRadius: 'var(--radius)', border: '2px solid #25d366',
                  fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em',
                  textTransform: 'uppercase', fontFamily: 'var(--ff-body)',
                  transition: 'all 0.3s ease'
                }}
              >
                <FaWhatsapp size={18} /> WhatsApp Us
              </a>
              <a href="tel:+919876543210" className="btn-outline-custom" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
                <FiPhone size={16} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
