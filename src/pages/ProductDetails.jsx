import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiLayers, FiMove, FiCheckCircle, FiArrowLeft, FiSend, FiTag, FiPackage } from 'react-icons/fi';
import { getProductBySlug } from '../services/productService';
import InquiryForm from '../components/InquiryForm';
import { WhatsAppQuoteBtn } from '../components/WhatsAppButton';

export default function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setLoading(true);
    setProduct(null);
    getProductBySlug(slug)
      .then(p => setProduct(p))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" style={{ color: 'var(--primary)' }} />
        <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <FiPackage size={48} color="var(--text-light)" strokeWidth={1} />
        <h2 style={{ fontFamily: 'var(--ff-heading)', marginTop: '1rem' }}>Product Not Found</h2>
        <p style={{ color: 'var(--text-light)' }}>This product may have been removed or the link is incorrect.</p>
        <Link to="/products" className="btn-primary-custom mt-3">Back to Products</Link>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: 'var(--cream)', padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-mid)' }}>
            <Link to="/" style={{ color: 'var(--accent)' }}>Home</Link> /
            <Link to="/products" style={{ color: 'var(--accent)' }}>Products</Link> /
            <span>{product.name}</span>
          </div>
        </div>
      </div>

      <section className="section-padded" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="row g-5">

            {/* Images */}
            <div className="col-lg-5">
              <div style={{
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                background: 'var(--cream)', height: 380,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid var(--border)'
              }}>
                {product.images?.[activeImg] ? (
                  <img
                    src={product.images[activeImg]}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ textAlign: 'center', color: 'var(--text-light)' }}>
                    <FiLayers size={64} strokeWidth={1} />
                    <p style={{ marginTop: '1rem', fontFamily: 'var(--ff-heading)', fontSize: '1.1rem' }}>
                      {product.name}
                    </p>
                    <p style={{ fontSize: '0.8rem' }}>No image available</p>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {product.images?.length > 1 && (
                <div className="d-flex gap-2 mt-3 flex-wrap">
                  {product.images.map((img, i) => (
                    <div key={i} onClick={() => setActiveImg(i)} style={{
                      width: 68, height: 68, borderRadius: 'var(--radius)',
                      overflow: 'hidden', cursor: 'pointer',
                      border: `2px solid ${activeImg === i ? 'var(--primary)' : 'var(--border)'}`,
                      transition: 'border-color 0.2s'
                    }}>
                      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="col-lg-7">
              {/* Category badge */}
              {product.category && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: 'var(--accent)',
                  background: 'rgba(200,150,62,0.1)', padding: '0.3rem 0.75rem',
                  borderRadius: 100, marginBottom: '0.75rem'
                }}>
                  <FiTag size={11} /> {product.category}
                </div>
              )}

              <h1 style={{
                fontFamily: 'var(--ff-heading)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '1.25rem'
              }}>
                {product.name}
              </h1>

              {/* Specs row */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
                marginBottom: '1.25rem', padding: '1rem',
                background: 'var(--cream)', borderRadius: 'var(--radius-md)'
              }}>
                {product.gsm && (
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-mid)' }}>
                    <FiLayers size={14} color="var(--accent)" style={{ marginRight: 4 }} />
                    <strong>GSM:</strong> {product.gsm}
                  </div>
                )}
                {product.width && (
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-mid)' }}>
                    <FiMove size={14} color="var(--accent)" style={{ marginRight: 4 }} />
                    <strong>Width:</strong> {product.width}
                  </div>
                )}
                {product.priceRange && (
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-mid)' }}>
                    <strong style={{ color: 'var(--primary)' }}>Price:</strong> {product.priceRange}
                  </div>
                )}
              </div>

              <div style={{ height: 1, background: 'var(--border)', margin: '1.25rem 0' }} />

              {/* Description */}
              {product.description && (
                <p style={{
                  color: 'var(--text-mid)', lineHeight: 1.9,
                  whiteSpace: 'pre-line', marginBottom: '1.5rem'
                }}>
                  {product.description}
                </p>
              )}

              {/* Applications */}
              {product.applications?.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{
                    fontFamily: 'var(--ff-heading)', fontWeight: 600,
                    color: 'var(--primary-dark)', marginBottom: '0.75rem'
                  }}>
                    Applications
                  </div>
                  <div className="row g-2">
                    {product.applications.map((app, i) => (
                      <div key={i} className="col-sm-6">
                        <div style={{
                          display: 'flex', alignItems: 'center',
                          gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-mid)'
                        }}>
                          <FiCheckCircle size={14} color="var(--accent)" /> {app}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action buttons */}
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
                <div style={{
                  background: 'var(--cream)', padding: '2.5rem',
                  borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)'
                }}>
                  <h3 style={{ fontFamily: 'var(--ff-heading)', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
                    Enquire About {product.name}
                  </h3>
                  <InquiryForm productName={product.name} />
                </div>
              </div>
            </div>
          )}

          <div className="mt-4">
            <Link to="/products" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 500
            }}>
              <FiArrowLeft size={14} /> Back to Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}