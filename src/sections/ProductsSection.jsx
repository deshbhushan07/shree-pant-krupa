// src/sections/ProductsSection.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/productService';

const DEMO_PRODUCTS = [
  { id: '1', name: 'Kraft Paper Roll', slug: 'kraft-paper-roll', category: 'Kraft Paper', gsm: '70-200', width: '18-72 inch', description: 'High tensile strength brown kraft paper rolls suitable for packaging, wrapping and industrial use.', images: [] },
  { id: '2', name: 'Mill Board', slug: 'mill-board', category: 'Mill Board', gsm: '200-600', width: 'Custom', description: 'Heavy duty mill board for industrial packaging, book binding and stiffening applications.', images: [] },
  { id: '3', name: 'Duplex Board', slug: 'duplex-board', category: 'Duplex Board', gsm: '250-450', width: 'Custom', description: 'White coated duplex board ideal for carton boxes, cosmetic packaging and food grade packaging.', images: [] },
  { id: '4', name: 'Grey Board', slug: 'grey-board', category: 'Grey Board', gsm: '400-2000', width: 'Custom', description: 'Rigid grey board used for book covers, shoe boxes, industrial partitions and heavy-duty packaging.', images: [] },
  { id: '5', name: 'Packing Board', slug: 'packing-board', category: 'Packing Board', gsm: '150-350', width: 'Standard', description: 'Economical packing board for secondary packaging, dividers and general purpose industrial uses.', images: [] },
  { id: '6', name: 'Corrugated Medium', slug: 'corrugated-medium', category: 'Kraft Paper', gsm: '90-180', width: '18-60 inch', description: 'Corrugating medium paper for manufacturing 3-ply and 5-ply corrugated boxes.', images: [] },
];

export default function ProductsSection() {
  const [products, setProducts] = useState(DEMO_PRODUCTS);

  useEffect(() => {
    getProducts({ limit: 6 })
      .then(data => { if (data.length > 0) setProducts(data); })
      .catch(() => {});
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
