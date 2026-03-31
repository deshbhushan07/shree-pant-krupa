import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { FaIndustry } from 'react-icons/fa';

const PRODUCTS = [
  { num: '01', name: 'Kraft Board Paper Roll', gsm: '200 – 550 GSM' },
  { num: '02', name: 'Mill Board Paper Roll',  gsm: '200 – 550 GSM' },
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-pattern" />
      <div className="container hero-container">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-7">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <FaIndustry size={9} />
                Est. Paper Board Manufacturer · Kolhapur
              </div>

              <h1 className="hero-title">
                Premium Quality
                <span className="accent-word">Paper Boards</span>
                For Every Industry
              </h1>

              <p className="hero-subtitle">
                Shri Pant Krupa Paper Board delivers high-grade Kraft Paper, Mill Board, and Duplex Board
                to packaging industries across India. Quality you can trust, supply you can count on.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <Link to="/products" className="btn-accent-custom">
                  Explore Products <FiArrowRight size={15} />
                </Link>
                <Link to="/contact" className="btn-outline-custom hero-btn-outline">
                  <FiPhone size={15} /> Get Quote
                </Link>
              </div>

              <div className="hero-stats">
                {[
                  { num: '500+',     label: 'Happy Clients' },
                  { num: '15+',      label: 'Years Experience' },
                  { num: '50+',      label: 'Product Varieties' },
                  { num: 'PAN India', label: 'Delivery' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="hero-stat-num">{s.num}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="hero-panel-wrap">
              <div className="hero-panel-header">Our Products</div>

              {PRODUCTS.map((p) => (
                <Link to="/products" key={p.num} className="hero-tile">
                  <div className="hero-tile-num">{p.num}</div>
                  <div>
                    <div className="hero-tile-name">{p.name}</div>
                    <div className="hero-tile-meta">
                      <span className="hero-tile-gsm">{p.gsm}</span>
                      <span className="hero-tile-dot" />
                      <span className="hero-tile-stock">In Stock</span>
                    </div>
                  </div>
                  <div className="hero-tile-arrow">→</div>
                </Link>
              ))}

              <div className="hero-panel-footer">
                <span className="hpf-text">Kolhapur, Maharashtra · PAN India Delivery</span>
                <span className="hpf-live">
                  <span className="hpf-dot" />
                  Live Stock
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}