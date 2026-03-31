// src/pages/Gallery.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiZoomIn } from 'react-icons/fi';
import { getGallery } from '../services/enquiryService';
import { useScrollAnimation } from '../hooks/useAnimations';

const DEMO_GALLERY = [
  { id: '1', title: 'Kraft Paper Manufacturing', category: 'Manufacturing', image: '' },
  { id: '2', title: 'Paper Board Rolls', category: 'Products', image: '' },
  { id: '3', title: 'Mill Board Stacks', category: 'Products', image: '' },
  { id: '4', title: 'Production Floor', category: 'Facility', image: '' },
  { id: '5', title: 'Duplex Board Samples', category: 'Products', image: '' },
  { id: '6', title: 'Quality Testing', category: 'Quality', image: '' },
  { id: '7', title: 'Dispatch Area', category: 'Facility', image: '' },
  { id: '8', title: 'Grey Board Rolls', category: 'Products', image: '' },
];

export default function Gallery() {
  useScrollAnimation();
  const [items, setItems] = useState(DEMO_GALLERY);
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    getGallery()
      .then(d => { if (d.length > 0) setItems(d); })
      .catch(() => {});
  }, []);

  const categories = ['All', ...new Set(items.map(i => i.category).filter(Boolean))];
  const filtered = filter === 'All' ? items : items.filter(i => i.category === filter);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb"><Link to="/">Home</Link> / Gallery</div>
          <h1 className="page-header-title mt-2">Gallery</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
            Our facility, products, and manufacturing capabilities
          </p>
        </div>
      </div>

      <section className="section-padded">
        <div className="container">
          {/* Category Filter */}
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.5rem 1.25rem', borderRadius: 100, cursor: 'pointer',
                  border: '1.5px solid',
                  borderColor: filter === cat ? 'var(--primary)' : 'var(--border)',
                  background: filter === cat ? 'var(--primary)' : 'transparent',
                  color: filter === cat ? '#fff' : 'var(--text-mid)',
                  fontSize: '0.82rem', fontWeight: 500, transition: 'all 0.2s ease', fontFamily: 'var(--ff-body)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="row g-3">
            {filtered.map((item, i) => (
              <div key={item.id} className={`col-lg-3 col-md-4 col-6 fade-in delay-${Math.min(i % 4 + 1, 4)}`}>
                <div className="gallery-item" onClick={() => item.image && setLightbox(item)}>
                  {item.image ? (
                    <>
                      <img src={item.image} alt={item.title} loading="lazy" />
                      <div className="gallery-overlay">
                        <div>
                          <div className="gallery-title">{item.title}</div>
                          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.category}</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div style={{ height: 260, background: 'var(--cream)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                      <FiZoomIn size={28} strokeWidth={1.5} />
                      <div style={{ fontSize: '0.8rem', textAlign: 'center', padding: '0 1rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.category}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="modal-overlay"
          onClick={() => setLightbox(null)}
          style={{ background: 'rgba(0,0,0,0.9)' }}
        >
          <div style={{ position: 'relative', maxWidth: 900, width: '100%' }} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: -40, right: 0, background: 'transparent', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
            >
              <FiX />
            </button>
            <img src={lightbox.image} alt={lightbox.title} style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
            <div style={{ color: '#fff', textAlign: 'center', marginTop: '1rem' }}>
              <div style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.1rem' }}>{lightbox.title}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{lightbox.category}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
