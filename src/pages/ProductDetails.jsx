// src/pages/ProductDetails.jsx
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiLayers, FiMove, FiCheckCircle, FiArrowLeft, FiSend } from 'react-icons/fi';
import { getProductBySlug } from '../services/productService';
import InquiryForm from '../components/InquiryForm';
import { WhatsAppQuoteBtn } from '../components/WhatsAppButton';

const DEMO_PRODUCTS = {
  'kraft-paper-roll': {
    name: 'Kraft Paper Roll', category: 'Kraft Paper', gsm: '70–200 GSM', width: '18–72 inch',
    description: `Kraft paper rolls manufactured from high-quality virgin and recycled pulp with superior tensile strength and bursting factor. Our Kraft paper is ideal for all types of packaging, wrapping, and corrugated box manufacturing applications.

Available in bleached (white) and unbleached (brown/natural) variants. Custom GSM, width, and roll size available on request.`,
    applications: ['Corrugated box liners', 'Industrial packaging', 'Paper bags and sacks', 'Lamination base', 'Wrapping paper', 'Multi-wall bags'],
    images: []
  },
  'mill-board': {
    name: 'Mill Board', category: 'Mill Board', gsm: '200–600 GSM', width: 'Custom',
    description: `Mill board is a heavyweight paperboard made from recycled fibre, offering excellent stiffness and hardness. Our mill board is tested for GSM consistency, moisture content, and surface smoothness.

Used widely in book binding, case making, industrial packaging partitions, and stiffening applications across manufacturing industries.`,
    applications: ['Book binding & case making', 'Stiffening inserts', 'Industrial partitions', 'Display boards', 'File boards', 'Storage boxes'],
    images: []
  },
  'duplex-board': {
    name: 'Duplex Board', category: 'Duplex Board', gsm: '250–450 GSM', width: 'Custom',
    description: `White coated duplex board with excellent printability and a smooth white surface, ideal for high-quality packaging applications. Our duplex board offers superior whiteness, stiffness, and fold resistance.

Available in single white and double white coating variants with consistent caliper and GSM throughout the roll.`,
    applications: ['Carton boxes', 'Cosmetic packaging', 'Food grade packaging', 'Pharmaceutical boxes', 'Consumer goods packaging', 'Retail packaging'],
    images: []
  },
};

export default function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(DEMO_PRODUCTS[slug] || null);
  const [activeImg, setActiveImg] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getProductBySlug(slug).then(p => { if (p) setProduct(p); }).catch(() => {});
  }, [slug]);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 style={{ fontFamily: 'var(--ff-heading)' }}>Product Not Found</h2>
        <Link to="/products" className="btn-primary-custom mt-3">Back to Products</Link>
      </div>
    );
  }

  return (
    <>
      <div style={{ background: 'var(--cream)', padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-mid)' }}>
            <Link to="/" style={{ color: 'var(--accent)' }}>Home</Link> /
            <Link to="/products" style={{ color: 'var(--accent)' }}>Products</Link> /
            {product.name}
          </div>
        </div>
      </div>

      <section className="section-padded" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="row g-5">
            {/* Images */}
            <div className="col-lg-5">
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--cream)', height: 380, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                {product.images?.[activeImg] ? (
                  <img src={product.images[activeImg]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ textAlign: 'center', color: 'var(--text-light)' }}>
                    <FiLayers size={64} strokeWidth={1} />
                    <p style={{ marginTop: '1rem', fontFamily: 'var(--ff-heading)', fontSize: '1.1rem' }}>{product.name}</p>
                  </div>
                )}
              </div>
              {product.images?.length > 1 && (
                <div className="d-flex gap-2 mt-3">
                  {product.images.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveImg(i)}
                      style={{ width: 68, height: 68, borderRadius: 'var(--radius)', overflow: 'hidden', cursor: 'pointer', border: `2px solid ${activeImg === i ? 'var(--primary)' : 'var(--border)'}` }}
                    >
                      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="col-lg-7">
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                {product.category}
              </div>
              <h1 style={{ fontFamily: 'var(--ff-heading)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
                {product.name}
              </h1>

              <div className="d-flex gap-4 mb-3">
                {product.gsm && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-mid)' }}>
                    <FiLayers size={16} color="var(--accent)" /> <strong>GSM:</strong> {product.gsm}
                  </div>
                )}
                {product.width && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-mid)' }}>
                    <FiMove size={16} color="var(--accent)" /> <strong>Width:</strong> {product.width}
                  </div>
                )}
              </div>

              <div style={{ height: 2, background: 'var(--border)', margin: '1.5rem 0' }} />

              <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, whiteSpace: 'pre-line', marginBottom: '1.5rem' }}>
                {product.description}
              </p>

              {product.applications?.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontFamily: 'var(--ff-heading)', fontWeight: 600, color: 'var(--primary-dark)', marginBottom: '0.75rem' }}>Applications</div>
                  <div className="row g-2">
                    {product.applications.map((app, i) => (
                      <div key={i} className="col-sm-6">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-mid)' }}>
                          <FiCheckCircle size={14} color="var(--accent)" /> {app}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="d-flex flex-wrap gap-3">
                <button onClick={() => setShowForm(!showForm)} className="btn-primary-custom">
                  <FiSend size={15} /> {showForm ? 'Hide Form' : 'Send Enquiry'}
                </button>
                <WhatsAppQuoteBtn product={product.name} />
              </div>
            </div>
          </div>

          {/* Inline enquiry form */}
          {showForm && (
            <div className="row justify-content-center mt-5">
              <div className="col-lg-8">
                <div style={{ background: 'var(--cream)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                  <h3 style={{ fontFamily: 'var(--ff-heading)', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>Enquire About {product.name}</h3>
                  <InquiryForm productName={product.name} />
                </div>
              </div>
            </div>
          )}

          <div className="mt-4">
            <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 500 }}>
              <FiArrowLeft size={14} /> Back to Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
