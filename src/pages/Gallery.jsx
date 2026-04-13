// src/pages/Gallery.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiImage } from 'react-icons/fi';
import { getGallery } from '../services/enquiryService';

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    getGallery()
      .then(d => setItems(d))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
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

          {loading && (
            <div className="text-center py-5">
              <div className="spinner-border" style={{ color: 'var(--primary)' }} />
              <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Loading gallery...</p>
            </div>
          )}

          {!loading && items.length === 0 && (
            <div className="text-center py-5">
              <FiImage size={48} color="var(--text-light)" strokeWidth={1} />
              <p style={{ color: 'var(--text-light)', marginTop: '1rem', fontSize: '1rem' }}>
                No gallery images uploaded yet.
              </p>
            </div>
          )}

          {!loading && items.length > 0 && (
            <>
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
                      fontSize: '0.82rem', fontWeight: 500,
                      transition: 'all 0.2s ease', fontFamily: 'var(--ff-body)'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="row g-3">
                {filtered.map(item => (
                  <div key={item.id} className="col-lg-3 col-md-4 col-6">
                    <div
                      className="gallery-item"
                      onClick={() => setLightbox(item)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={item.image} alt={item.title} loading="lazy" />
                      <div className="gallery-overlay">
                        <div>
                          <div className="gallery-title">{item.title}</div>
                          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            {item.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="modal-overlay"
          onClick={() => setLightbox(null)}
          style={{ background: 'rgba(0,0,0,0.92)', padding: '1rem' }}
        >
          <div
            style={{ position: 'relative', maxWidth: 900, width: '100%' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: -44, right: 0,
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%', width: 36, height: 36,
                color: '#fff', fontSize: '1rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <FiX />
            </button>
            <img
              src={lightbox.image}
              alt={lightbox.title}
              style={{ width: '100%', borderRadius: 'var(--radius-md)', display: 'block' }}
            />
            <div style={{ color: '#fff', textAlign: 'center', marginTop: '1rem' }}>
              <div style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.1rem' }}>{lightbox.title}</div>
              {lightbox.category && (
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>
                  {lightbox.category}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}