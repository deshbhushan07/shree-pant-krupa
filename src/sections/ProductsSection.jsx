// src/sections/ProductsSection.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/productService';

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts({ limit: 6 })
      .then(d => setProducts(d))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section-padded">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6">
            <div className="section-eyebrow">Our Products</div>
            <div className="divider-accent" />
            <h2 className="section-title mb-3">Quality Paper Board Products</h2>
            <p className="section-lead">
              From lightweight kraft paper to heavy-duty grey boards — we supply the full spectrum of paper board products to meet diverse industrial requirements.
            </p>
          </div>
          <div className="col-lg-6 d-flex align-items-end justify-content-lg-end mt-3 mt-lg-0">
            <Link to="/products" className="btn-outline-custom">
              View All Products <FiArrowRight size={16} />
            </Link>
          </div>
        </div>

        {loading && (
          <div className="text-center py-4">
            <div className="spinner-border" style={{ color: 'var(--primary)' }} />
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="text-center py-4">
            <p style={{ color: 'var(--text-light)' }}>No products added yet.</p>
          </div>
        )}

        {!loading && products.length > 0 && (
          <div className="row g-4">
            {products.map(p => (
              <div key={p.id} className="col-lg-4 col-md-6">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}