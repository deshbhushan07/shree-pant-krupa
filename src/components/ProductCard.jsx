// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';
import { FiArrowRight, FiLayers, FiMove } from 'react-icons/fi';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        {product.images?.[0] ? (
          <img src={product.images[0]} alt={product.name} loading="lazy" />
        ) : (
          <div className="product-card-placeholder">
            <FiLayers size={32} />
            <span>Paper Board</span>
          </div>
        )}
      </div>
      <div className="product-card-body">
        <div className="product-card-category">{product.category || 'Paper Board'}</div>
        <div className="product-card-title">{product.name}</div>
        <div className="product-card-meta">
          {product.gsm && (
            <span><FiLayers size={12} /> GSM: {product.gsm}</span>
          )}
          {product.width && (
            <span><FiMove size={12} /> {product.width}</span>
          )}
        </div>
        {product.description && (
          <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', marginBottom: '1rem', lineHeight: 1.6 }}>
            {product.description.substring(0, 90)}...
          </p>
        )}
        <Link to={`/products/${product.slug}`} className="product-card-link">
          View Details <FiArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
