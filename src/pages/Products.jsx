import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/productService';
import { CTA } from '../sections/IndustriesSection';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then(d => {
        console.log('Products received in page:', d.length);
        setProducts(d);
        setError('');
      })
      .catch(err => {
        console.error('Products page error:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  // sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    setActiveCategory(cat || 'All');
  }, [searchParams]);

  const allCategories = ['All', ...new Set(products.map(p => p.category).filter(Boolean))];

  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = !search || p.name?.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <div className="page-header cream-bottom">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to="/">Home</Link> / Products
          </div>
          <h1 className="page-header-title mt-2">Our Products</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
            Premium paper board products for every industrial requirement
          </p>
        </div>
      </div>

      <section className="section-padded" style={{ paddingTop: '3rem' }}>
        <div className="container">

          {/* Filters */}
          <div className="d-flex flex-wrap gap-3 align-items-center mb-5">
            <div className="d-flex flex-wrap gap-2">
              {allCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.5rem 1.1rem',
                    borderRadius: 100,
                    border: '1.5px solid',
                    borderColor: activeCategory === cat ? 'var(--primary)' : 'var(--border)',
                    background: activeCategory === cat ? 'var(--primary)' : 'transparent',
                    color: activeCategory === cat ? '#fff' : 'var(--text-mid)',
                    fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer',
                    transition: 'all 0.2s ease', fontFamily: 'var(--ff-body)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="ms-md-auto" style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: '#f9fafb', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: '0.5rem 1rem'
            }}>
              <FiSearch size={14} color="var(--text-light)" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search products..."
                style={{
                  border: 'none', background: 'none', outline: 'none',
                  fontSize: '0.85rem', color: 'var(--text-dark)', minWidth: 180
                }}
              />
            </div>
          </div>

          {/* States */}
          {loading && (
            <div className="text-center py-5">
              <div className="spinner-border" style={{ color: 'var(--primary)' }} />
              <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Loading products...</p>
            </div>
          )}

          {!loading && error && (
            <div className="text-center py-5">
              <p style={{ color: '#e11d48', fontWeight: 500 }}>Error: {error}</p>
              <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Check Firestore rules and Firebase config.</p>
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-5">
              <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>
                {products.length === 0
                  ? 'No products found in database.'
                  : `No products in "${activeCategory}" category.`}
              </p>
              {activeCategory !== 'All' && (
                <button
                  onClick={() => setActiveCategory('All')}
                  className="btn-outline-custom mt-3"
                  style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
                >
                  Show All Products
                </button>
              )}
            </div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <div className="row g-4">
              {filtered.map(p => (
                <div key={p.id} className="col-lg-3 col-md-6">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      <CTA />
    </>
  );
}