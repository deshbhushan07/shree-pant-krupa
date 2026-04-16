// src/sections/IndustriesSection.jsx
import { useState, useEffect } from 'react';
import { FiBox, FiGrid, FiLayers, FiPackage, FiTruck, FiSettings } from 'react-icons/fi';
import paperCones from '../assets/images/paper-cones.jpeg';
import poyTubes from '../assets/images/poy-fdy-tubes.jpg';
import filmCores from '../assets/images/film-cores.jpg';
import edgeProtector from '../assets/images/edge-protector.webp';
import c1sBoard from '../assets/images/c1s-board.jpg';
import dtyTubes from '../assets/images/dty-tubes.jpg';
import ownerImg from '../assets/images/big_owner.jpeg';

const INDUSTRIES = [
  { icon: <FiBox />, title: 'Packaging Industry', desc: 'Supplying robust paper board for rigid and flexible packaging solutions across India.' },
  { icon: <FiGrid />, title: 'Corrugated Box Manufacturers', desc: 'Providing medium and liner papers for 3-ply, 5-ply and 7-ply corrugated boards.' },
  { icon: <FiLayers />, title: 'Paper Converters', desc: 'Raw board materials for converting into specialty packaging and printing substrates.' },
  { icon: <FiPackage />, title: 'Industrial Packaging', desc: 'Heavy-duty board grades for machinery, automotive, and electronics packaging.' },
  { icon: <FiTruck />, title: 'E-Commerce & Logistics', desc: 'Lightweight yet strong kraft papers for e-commerce fulfillment and courier packaging.' },
  { icon: <FiSettings />, title: 'Printing & Publishing', desc: 'Smooth coated boards for high-quality printing, book binding and stationery.' },
];

const PRODUCT_SHOWCASE = [
  {
    image: paperCones,
    name: 'Paper Cones',
    category: 'Paper & Paper Boards',
    desc: 'High-strength paper cones manufactured from premium kraft board, used in textile yarn winding, thread packaging, and industrial applications. Available in various sizes and angles.',
  },
  {
    image: poyTubes,
    name: 'POY / FDY Tubes',
    category: 'Paper & Paper Boards',
    desc: 'Precision-engineered paper tubes for POY and FDY yarn winding in textile mills. Excellent dimensional accuracy, high radial compression strength, and consistent wall thickness.',
  },
  {
    image: filmCores,
    name: 'Film Cores',
    category: 'Specialty Boards',
    desc: 'Industrial film cores with Ply bond 700 J/m2 and TTP 900 (Ply bond 900 J/m2) for BOPP, PET, CPP and other plastic film winding applications requiring high strength.',
  },
  {
    image: edgeProtector,
    name: 'Edge Protector / Angel Board',
    category: 'Paper & Paper Boards',
    desc: 'L-shaped edge protectors made from solid fibre or honeycomb board, protecting goods from damage during storage, handling and transport. Custom lengths available.',
  },
  {
    image: c1sBoard,
    name: 'C1S (Coated One Side)',
    category: 'Pearl Quality - Speciality Coated Grades',
    desc: 'Premium coated one side board with smooth glossy surface on one side, ideal for high-quality printing, packaging, labels, book covers and premium cartons.',
  },
  {
    image: dtyTubes,
    name: 'DTY Tubes',
    category: 'Paper & Paper Boards',
    desc: 'Draw Textured Yarn (DTY) paper tubes engineered for high-speed winding in textile manufacturing. Superior strength, smooth inner surface, and precise dimensions.',
  },
];

const TRUSTED_CLIENTS = [
  {
    quote:
      "We’ve been working with them for bulk board supply, and the consistency in GSM and finish has really helped streamline our production. Their team is responsive and understands industrial requirements well.",
    name: "AM Core Industries",
    location: "Bengaluru",
    initials: "AM",
    color: "#1D9E75",
  },
  {
    quote:
      "For our packaging operations, timely material availability is critical. These guys have been very dependable with dispatch schedules, and the board quality has been uniform across batches.",
    name: "Konvertor Packing Solutions Pvt Ltd",
    location: "Pune",
    initials: "KP",
    color: "#378ADD",
  },
  {
    quote:
      "We appreciate the clean finish and strength of the boards we receive. It works well for our packaging needs, and we’ve seen a noticeable reduction in material wastage.",
    name: "Shree Packaging",
    location: "Murbad",
    initials: "SP",
    color: "#7F77DD",
  },
  {
    quote:
      "As a paper tube manufacturer, we need reliable raw material. The supply has been consistent, and the board performs well during winding and conversion processes.",
    name: "Samarth Paper Tube",
    location: "Pune",
    initials: "ST",
    color: "#F59E0B",
  },
  {
    quote:
      "We’ve sourced duplex and grey board multiple times, and the quality has remained stable. Packaging and delivery handling are also done properly, which avoids transit damage.",
    name: "Pandurang Paper Tube",
    location: "Pune",
    initials: "PT",
    color: "#EF4444",
  },
  {
    quote:
      "The team is easy to coordinate with and flexible when it comes to order quantities. The material we receive is well-suited for our tube manufacturing process.",
    name: "Om Sai Paper Tube (Markad)",
    location: "Pimpri Chinchwad",
    initials: "OS",
    color: "#10B981",
  },
  {
    quote:
      "We value their straightforward communication and commitment to timelines. It’s been a smooth experience working with them for our regular requirements.",
    name: "Shivam Enterprise",
    location: "Pune",
    initials: "SE",
    color: "#6366F1",
  },
  {
    quote:
      "Their board quality and supply reliability have supported our container production without interruptions. A dependable vendor for long-term collaboration.",
    name: "Prime Container",
    location: "Pune",
    initials: "PC",
    color: "#EC4899",
  },
];

function TestimonialSlider() {
  const visible = 3;
  const extended = [...TRUSTED_CLIENTS, ...TRUSTED_CLIENTS, ...TRUSTED_CLIENTS]; // triple for seamless loop

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide with pause on hover
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 3000); // 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]); // Added proper dependency

  // Smooth reset for infinite loop
  useEffect(() => {
    if (index >= TRUSTED_CLIENTS.length * 2) {
      // Reset without animation jump
      setIndex(prev => prev - TRUSTED_CLIENTS.length);
    }
  }, [index]); // Reset when index reaches limit

  // Manual navigation functions (optional)
  const handlePrev = () => {
    setIndex(prev => prev - 1);
  };

  const handleNext = () => {
    setIndex(prev => prev + 1);
  };

  return (
    <div 
      style={{ overflow: 'hidden', position: 'relative' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Optional Navigation Buttons */}
      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'white',
          border: '1px solid var(--border)',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        ←
      </button>

      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'white',
          border: '1px solid var(--border)',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        →
      </button>

      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          transform: `translateX(-${index * (100 / visible)}%)`,
          transition: 'transform 0.6s ease',
        }}
      >
        {extended.map((client, i) => (
          <div
            key={i}
            style={{
              minWidth: '300px',
              maxWidth: '300px',
              flexShrink: 0,
            }}
          >
            <div style={{
              background: '#fff',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              height: '100%',
              position: 'relative',
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.02)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 35px -8px rgba(0,0,0,0.15), 0 10px 15px -6px rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.02)';
            }}>
              
              <div style={{
                fontSize: '3rem',
                color: 'var(--accent)',
                opacity: 0.15,
                position: 'absolute',
                top: 8,
                left: 16
              }}>
                "
              </div>

              <div style={{ color: '#f59e0b', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                ★★★★★
              </div>

              <p style={{
                fontSize: '0.82rem',
                color: 'var(--text-mid)',
                lineHeight: 1.7,
                fontStyle: 'italic',
                marginBottom: '1.25rem'
              }}>
                "{client.quote}"
              </p>

              <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center' }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: client.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  {client.initials}
                </div>

                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>
                    {client.name}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>
                    {client.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 

export function IndustriesSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? PRODUCT_SHOWCASE : PRODUCT_SHOWCASE.slice(0, 4);

  return (
    <section className="section-padded section-bg-cream">
      <div className="container">

        <div className="text-center mb-5">
          <div className="section-eyebrow">Industries We Serve</div>
          <div className="divider-accent center" />
          <h2 className="section-title">Products Made Using Our Board</h2>
          <p className="section-lead mx-auto mt-3">
            Our paper boards power a wide range of industrial products — from textile tubes to specialty packaging across India.
          </p>
        </div>

        <div className="row g-4 mb-4">
          {visibleProducts.map((product, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                height: '100%',
                transition: 'var(--transition)',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ height: 200, overflow: 'hidden', background: 'var(--cream)' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                    onError={e => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--text-light);font-size:0.82rem;text-align:center;padding:1rem">📦<br/>Image coming soon</div>';
                    }}
                  />
                </div>
                <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                    {product.category}
                  </div>
                  <div style={{ fontFamily: 'var(--ff-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                    {product.name}
                  </div>
                  <div style={{ height: 1, background: 'var(--border)', marginBottom: '0.75rem' }} />
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.7, margin: 0 }}>
                    {product.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Less */}
        <div className="text-center mb-2">
          <button
            onClick={() => setShowAll(s => !s)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 2rem',
              background: showAll ? 'transparent' : 'var(--primary)',
              color: showAll ? 'var(--primary)' : '#fff',
              border: '2px solid var(--primary)',
              borderRadius: 'var(--radius)', cursor: 'pointer',
              fontSize: '0.85rem', fontWeight: 600,
              fontFamily: 'var(--ff-body)', letterSpacing: '0.05em',
              textTransform: 'uppercase', transition: 'all 0.3s ease',
            }}
          >
            {showAll ? 'Show Less ↑' : 'View All Products ↓'}
          </button>
        </div>

        {/* Trusted Clients Slider */}
        <div style={{ height: 1, background: 'var(--border)', margin: '3.5rem 0' }} />

        <div className="text-center mb-4">
          <div className="section-eyebrow">What Our Clients Say</div>
          <div className="divider-accent center" />
          <h2 className="section-title">Trusted By Businesses Across India</h2>
        </div>

        <TestimonialSlider />

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
    With over 25+ years of experience in the paper board industry, we've built our reputation on quality, reliability, and exceptional customer service.
  </p>

  {/* Owner Photo Card */}
  <div style={{
    marginTop: '2rem',
    position: 'relative',
    display: 'inline-block',
    width: '100%',
  }}>
    {/* Accent offset border */}
    <div style={{
      position: 'absolute', top: 10, left: 10, right: -10, bottom: -10,
      border: '3px solid var(--accent)',
      borderRadius: 16, zIndex: 0,
    }} />

    <div style={{
      position: 'relative', zIndex: 1,
      borderRadius: 16, overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(26,58,46,0.18)',
    }}>
      <img
        src={ownerImg}
        alt="Shrikant D. Patil — Proprietor"
        style={{
          width: '100%',
          maxHeight: 340,
          objectFit: 'cover',
          objectPosition: 'top',
          display: 'block',
        }}
      />

      {/* Gradient overlay with name */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(15,35,28,0.92) 0%, transparent 100%)',
        padding: '2rem 1.5rem 1.25rem',
      }}>
        <div style={{
          fontFamily: 'var(--ff-heading)',
          fontSize: '1.15rem', fontWeight: 700,
          color: '#fff', lineHeight: 1.2,
        }}>
          Shrikant D. Patil
        </div>
        <div style={{
          fontSize: '0.72rem', color: 'var(--accent-light)',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          marginTop: 4,
        }}>
          Founder & Proprietor
        </div>
        <p style={{
          fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)',
          marginTop: '0.5rem', lineHeight: 1.6, marginBottom: 0,
          fontStyle: 'italic',
        }}>
          "Consistent quality, fair pricing, and reliable delivery — every time."
        </p>
      </div>
    </div>
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
