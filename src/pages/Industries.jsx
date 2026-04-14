import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CTA } from '../sections/IndustriesSection';
import paperCones from '../assets/images/paper-cones.jpeg';
import poyTubes from '../assets/images/poy-fdy-tubes.jpg';
import filmCores from '../assets/images/film-cores.jpg';
import edgeProtector from '../assets/images/edge-protector.webp';
import c1sBoard from '../assets/images/c1s-board.jpg';
import dtyTubes from '../assets/images/dty-tubes.jpg';

const ALL_PRODUCTS = [
  {
    image: paperCones,
    name: 'Paper Cones',
    category: 'Paper & Paper Boards',
    desc: 'High-strength paper cones manufactured from premium kraft board, used in textile yarn winding, thread packaging, and industrial applications. Available in various sizes and angles.',
    uses: ['Textile yarn winding', 'Thread packaging', 'Industrial winding'],
  },
  {
    image: poyTubes,
    name: 'POY / FDY Tubes',
    category: 'Paper & Paper Boards',
    desc: 'Precision-engineered paper tubes for POY and FDY yarn winding in textile mills. Excellent dimensional accuracy, high radial compression strength, and consistent wall thickness.',
    uses: ['POY yarn winding', 'FDY yarn winding', 'Textile mills'],
  },
  {
    image: filmCores,
    name: 'Film Cores',
    category: 'Specialty Boards',
    desc: 'Industrial film cores with Ply bond 700 J/m2 and TTP 900 (Ply bond 900 J/m2) for BOPP, PET, CPP and other plastic film winding applications requiring high strength.',
    uses: ['BOPP film winding', 'PET film cores', 'CPP packaging'],
  },
  {
    image: edgeProtector,
    name: 'Edge Protector / Angel Board',
    category: 'Paper & Paper Boards',
    desc: 'L-shaped edge protectors made from solid fibre or honeycomb board, protecting goods from damage during storage, handling and transport. Custom lengths available.',
    uses: ['Cargo protection', 'Storage safety', 'Transport packaging'],
  },
  {
    image: c1sBoard,
    name: 'C1S (Coated One Side)',
    category: 'Pearl Quality - Speciality Coated Grades',
    desc: 'Premium coated one side board with smooth glossy surface on one side, ideal for high-quality printing, packaging, labels, book covers and premium cartons.',
    uses: ['Premium cartons', 'Book covers', 'Labels & packaging'],
  },
  {
    image: dtyTubes,
    name: 'DTY Tubes',
    category: 'Paper & Paper Boards',
    desc: 'Draw Textured Yarn (DTY) paper tubes engineered for high-speed winding in textile manufacturing. Superior strength, smooth inner surface, and precise dimensions.',
    uses: ['DTY yarn winding', 'High-speed winding', 'Textile manufacturing'],
  },
];

export default function Industries() {
  const [active, setActive] = useState('All');

  const categories = ['All', ...new Set(ALL_PRODUCTS.map(p => p.category))];
  const filtered = active === 'All' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === active);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb"><Link to="/">Home</Link> / Industries</div>
          <h1 className="page-header-title mt-2">Industries We Serve</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
            Products made possible by Shri Pant Krupa Paper Boards
          </p>
        </div>
      </div>

      <section className="section-padded">
        <div className="container">

          <div className="text-center mb-5">
            <div className="section-eyebrow">What We Enable</div>
            <div className="divider-accent center" />
            <h2 className="section-title">Products Built With Our Boards</h2>
            <p className="section-lead mx-auto mt-3">
              From textile tubes to film cores — industries across India rely on our paper boards to manufacture quality end products.
            </p>
          </div>

          {/* Category filter */}
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '0.5rem 1.25rem', borderRadius: 100, cursor: 'pointer',
                  border: '1.5px solid',
                  borderColor: active === cat ? 'var(--primary)' : 'var(--border)',
                  background: active === cat ? 'var(--primary)' : 'transparent',
                  color: active === cat ? '#fff' : 'var(--text-mid)',
                  fontSize: '0.82rem', fontWeight: 500,
                  transition: 'all 0.2s ease', fontFamily: 'var(--ff-body)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="row g-4">
            {filtered.map((product, i) => (
              <div key={i} className="col-lg-4 col-md-6">
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
                  {/* Image */}
                  <div style={{ height: 240, overflow: 'hidden', background: 'var(--cream)' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                      onError={e => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--text-light);font-size:0.85rem;text-align:center;padding:1rem">📦<br/>Image coming soon</div>';
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                      {product.category}
                    </div>
                    <div style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '0.75rem' }}>
                      {product.name}
                    </div>
                    <div style={{ height: 1, background: 'var(--border)', marginBottom: '0.875rem' }} />
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: '1rem' }}>
                      {product.desc}
                    </p>

                    {/* Use cases */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {product.uses.map(use => (
                        <span key={use} style={{
                          background: 'var(--cream)', color: 'var(--primary)',
                          fontSize: '0.72rem', fontWeight: 600,
                          padding: '0.2rem 0.625rem', borderRadius: 100,
                          border: '1px solid var(--border)'
                        }}>
                          {use}
                        </span>
                      ))}
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