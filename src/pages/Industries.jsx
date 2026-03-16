// src/pages/Industries.jsx
import { Link } from 'react-router-dom';
import { FiBox, FiGrid, FiLayers, FiPackage, FiTruck, FiSettings, FiCheckCircle } from 'react-icons/fi';
import { CTA } from '../sections/IndustriesSection';
import { useScrollAnimation } from '../hooks/useAnimations';

const INDUSTRIES = [
  {
    icon: <FiBox size={28} />,
    title: 'Packaging Industry',
    desc: 'We supply premium paper boards to packaging manufacturers who require consistent GSM, strength, and surface finish for primary and secondary packaging.',
    products: ['Duplex Board', 'Kraft Liner', 'Mill Board'],
  },
  {
    icon: <FiGrid size={28} />,
    title: 'Corrugated Box Manufacturers',
    desc: 'Providing corrugating medium, test liners, and kraft liners for manufacturing 3-ply, 5-ply, and 7-ply corrugated boards for all industries.',
    products: ['Corrugated Medium', 'Kraft Liner', 'Test Liner'],
  },
  {
    icon: <FiLayers size={28} />,
    title: 'Paper Converters',
    desc: 'Raw board materials for converting into specialty packaging, laminates, foil boards, and printing substrates for various end uses.',
    products: ['Mill Board', 'Duplex Board', 'Grey Board'],
  },
  {
    icon: <FiPackage size={28} />,
    title: 'Industrial Packaging',
    desc: 'Heavy-duty board grades for machinery, automotive spare parts, electronics, and engineering goods requiring robust protective packaging.',
    products: ['Grey Board', 'Rigid Board', 'Mill Board'],
  },
  {
    icon: <FiTruck size={28} />,
    title: 'E-Commerce & Logistics',
    desc: 'Lightweight yet strong kraft papers and liner boards for e-commerce fulfillment, courier packaging and retail-ready packaging solutions.',
    products: ['Kraft Paper', 'Packing Board', 'Test Liner'],
  },
  {
    icon: <FiSettings size={28} />,
    title: 'Printing & Publishing',
    desc: 'Smooth coated boards for high-quality offset and digital printing, book binding, stationery, and premium packaging with print.',
    products: ['Duplex Board', 'Chrome Board', 'Art Board'],
  },
];

export default function Industries() {
  useScrollAnimation();
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb"><Link to="/">Home</Link> / Industries</div>
          <h1 className="page-header-title mt-2">Industries We Serve</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
            Trusted paper board supplier across diverse industries
          </p>
        </div>
      </div>

      <section className="section-padded">
        <div className="container">
          <div className="row g-4">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className={`col-lg-6 fade-in delay-${Math.min(i % 3 + 1, 3)}`}>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '2rem', height: '100%', transition: 'all 0.3s ease' }}>
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 60, height: 60, background: 'var(--cream)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                      {ind.icon}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.75rem' }}>{ind.title}</h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '1rem' }}>{ind.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {ind.products.map(p => (
                          <span key={p} style={{ background: 'var(--cream)', color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: 100, border: '1px solid var(--border)' }}>
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
