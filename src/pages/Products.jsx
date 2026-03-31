// src/pages/Products.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiFilter } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/productService';
import { getCategories } from '../services/enquiryService';
import { CTA } from '../sections/IndustriesSection';
import { useScrollAnimation } from '../hooks/useAnimations';
import { useSearchParams } from 'react-router-dom';

const DEMO_PRODUCTS = [
  { id: '1', name: 'Kraft Paper Roll', slug: 'kraft-paper-roll', category: 'Kraft Paper', gsm: '70-200', width: '18-72 inch', description: 'High tensile strength brown kraft paper rolls for packaging, wrapping and industrial use.', images: [] },
  { id: '2', name: 'Mill Board', slug: 'mill-board', category: 'Mill Board', gsm: '200-600', width: 'Custom', description: 'Heavy duty mill board for industrial packaging, book binding and stiffening applications.', images: [] },
  { id: '3', name: 'Duplex Board', slug: 'duplex-board', category: 'Duplex Board', gsm: '250-450', width: 'Custom', description: 'White coated duplex board for carton boxes, cosmetic and food grade packaging.', images: [] },
  { id: '4', name: 'Grey Board', slug: 'grey-board', category: 'Grey Board', gsm: '400-2000', width: 'Custom', description: 'Rigid grey board for book covers, shoe boxes and heavy-duty packaging.', images: [] },
  { id: '5', name: 'Packing Board', slug: 'packing-board', category: 'Packing Board', gsm: '150-350', width: 'Standard', description: 'Economical packing board for secondary packaging and general purpose industrial uses.', images: [] },
  { id: '6', name: 'Corrugated Medium', slug: 'corrugated-medium', category: 'Kraft Paper', gsm: '90-180', width: '18-60 inch', description: 'Corrugating medium for manufacturing 3-ply and 5-ply corrugated boxes.', images: [] },
  { id: '7', name: 'White Top Kraft', slug: 'white-top-kraft', category: 'Kraft Paper', gsm: '100-250', width: 'Custom', description: 'White top coated kraft liner for premium printed corrugated boxes.', images: [] },
  { id: '8', name: 'Rigid Box Board', slug: 'rigid-box-board', category: 'Grey Board', gsm: '600-1200', width: 'Custom', description: 'Premium rigid board for luxury packaging, gift boxes and cosmetic packaging.', images: [] },
];

export default function Products() {
  useScrollAnimation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [searchParams] = useState(() => new URLSearchParams(window.location.search));
  const [activeCategory, setActiveCategory] = useState(() => {
    return new URLSearchParams(window.location.search).get('category') || 'All';
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    getProducts()
      .then(d => setProducts(d))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const allCategories = ['All', ...new Set(products.map(p => p.category).filter(Boolean))];

  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <div className="page-header cream-bottom" style={{ '--page-bg': 'var(--cream)' }}>
        <div className="container">
          <div className="page-header-breadcrumb"><Link to="/">Home</Link> / Products</div>
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
            <div className="ms-md-auto" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f9fafb', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.5rem 1rem' }}>
              <FiSearch size={14} color="var(--text-light)" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search products..."
                style={{ border: 'none', background: 'none', outline: 'none', fontSize: '0.85rem', color: 'var(--text-dark)', minWidth: 180 }}
              />
            </div>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border" style={{ color: 'var(--primary)' }} />
              <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Loading products...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-5">
              <p style={{ color: 'var(--text-light)' }}>No products found.</p>
            </div>
          ) : (
            <div className="row g-4">
              {filtered.map((p, i) => (
                <div key={p.id} className={`col-lg-3 col-md-6 fade-in delay-${Math.min(i % 4 + 1, 4)}`}>
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
