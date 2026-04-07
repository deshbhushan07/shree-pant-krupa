// src/sections/ProductsSection.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/productService';


export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    getProducts()
      .then(d => setProducts(d))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  // sync category from URL when navigating from navbar dropdown
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

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

        <div className="row g-4">
          {products.map((p, i) => (
            <div key={p.id} className={`col-lg-4 col-md-6 fade-in delay-${Math.min(i + 1, 4)}`}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
