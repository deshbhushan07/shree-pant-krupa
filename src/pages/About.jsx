// src/pages/About.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTarget, FiEye, FiCheckCircle, FiArrowRight, FiMapPin } from 'react-icons/fi';
import { FaIndustry, FaLeaf, FaHandshake } from 'react-icons/fa';
import { CTA } from '../sections/IndustriesSection';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function About() {
  useScrollAnimation();

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to="/">Home</Link> / About Us
          </div>
          <h1 className="page-header-title mt-2">About Us</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
            Kolhapur's trusted paper board manufacturer since years
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="section-padded">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 fade-in">
              <div className="section-eyebrow">Our Story</div>
              <div className="divider-accent" />
              <h2 className="section-title mb-3">Who We Are</h2>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                Shri Pant Krupa Paper Board is a leading paper board manufacturer and trader based in Kolhapur, Maharashtra. 
                Founded by <strong>Omkar Shrikant Patil</strong>, we have built a reputation for delivering consistent quality 
                paper board products to clients across India.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1.75rem' }}>
                Located at GAT NO 3, A-2, A/P Halsavade, Kolhapur — our facility is equipped with modern 
                manufacturing infrastructure to produce Kraft Paper, Mill Board, Duplex Board, Grey Board, and 
                specialty packing boards across a wide range of GSM specifications.
              </p>

              <div className="row g-3">
                {[
                  { icon: <FaIndustry />, label: 'Manufacturing & Trading' },
                  { icon: <FaLeaf />, label: 'Eco-Friendly Practices' },
                  { icon: <FaHandshake />, label: 'Pan-India Supply' },
                ].map((f, i) => (
                  <div key={i} className="col-sm-4">
                    <div style={{ background: 'var(--cream)', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                      <div style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{f.icon}</div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dark)' }}>{f.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 fade-in delay-2">
              <div style={{ background: 'var(--primary)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', color: '#fff' }}>
                <div style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '1rem' }}>
                  Company Details
                </div>
                {[
                  { label: 'Company', value: 'Shri Pant Krupa Paper Board' },
                  { label: 'Proprietor', value: 'Omkar Shrikant Patil' },
                  { label: 'Business Type', value: 'Manufacturer / Trader' },
                  { label: 'Location', value: 'Halsavade, Kolhapur, MH' },
                  { label: 'GSM Range', value: '70 – 2000 GSM' },
                  { label: 'Products', value: 'Kraft, Mill Board, Duplex, Grey Board' },
                  { label: 'Delivery', value: 'Pan India' },
                ].map((d, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: '0.88rem' }}>
                    <span style={{ color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>{d.label}</span>
                    <span style={{ color: '#fff', fontWeight: 500, textAlign: 'right', maxWidth: '60%' }}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padded section-bg-cream">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-eyebrow">Our Direction</div>
            <div className="divider-accent center" />
            <h2 className="section-title">Vision & Mission</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-6 fade-in delay-1">
              <div style={{ background: '#fff', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', height: '100%' }}>
                <div style={{ width: 56, height: 56, background: 'var(--primary)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-light)', fontSize: '1.3rem', marginBottom: '1.5rem' }}>
                  <FiEye />
                </div>
                <h3 style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Our Vision</h3>
                <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, margin: 0 }}>
                  To become the most trusted and preferred paper board supplier in Western India, known for uncompromising 
                  quality standards, sustainable manufacturing practices, and building long-term partnerships with our clients.
                </p>
              </div>
            </div>

            <div className="col-md-6 fade-in delay-2">
              <div style={{ background: '#fff', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', height: '100%' }}>
                <div style={{ width: 56, height: 56, background: 'var(--accent)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.3rem', marginBottom: '1.5rem' }}>
                  <FiTarget />
                </div>
                <h3 style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Our Mission</h3>
                <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, margin: 0 }}>
                  To manufacture and supply high-quality paper board products consistently, while maintaining competitive 
                  pricing, ensuring reliable delivery timelines, and providing personalized service that makes every 
                  client feel valued and supported.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Message */}
      <section className="section-padded">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center fade-in">
              <div className="section-eyebrow">From the Proprietor</div>
              <div className="divider-accent center" />
              <h2 className="section-title mb-4">A Message from Our Founder</h2>
              <div style={{ background: 'var(--cream)', padding: '3rem', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--accent)', position: 'relative' }}>
                <div style={{ fontSize: '4rem', color: 'var(--accent)', opacity: 0.3, fontFamily: 'Georgia', lineHeight: 1, marginBottom: '1rem' }}>"</div>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-mid)', lineHeight: 1.9, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  We started Shri Pant Krupa Paper Board with a single goal: to supply the Indian paper board 
                  industry with materials they can depend on. Quality has never been a compromise for us — it's 
                  the foundation of every product we manufacture. As we grow, we remain committed to our clients, 
                  our community, and to sustainable business practices that respect our environment.
                </p>
                <div style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-dark)' }}>
                  Omkar Shrikant Patil
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  Proprietor
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padded section-bg-cream">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-eyebrow">What We Do</div>
            <div className="divider-accent center" />
            <h2 className="section-title">Manufacturing Capabilities</h2>
          </div>
          <div className="row g-4">
            {[
              { title: 'Wide GSM Range', desc: 'Manufacturing paper boards from 70 GSM lightweight to 2000 GSM heavy grades.', icon: '⚖️' },
              { title: 'Custom Widths', desc: 'Available in standard and custom widths from 18 to 72 inches based on client requirements.', icon: '📏' },
              { title: 'Multiple Grades', desc: 'Kraft, Mill, Duplex, Grey, and specialty grades for diverse packaging applications.', icon: '🗂️' },
              { title: 'Bulk Supply', desc: 'Capacity to handle bulk orders with consistent quality for large manufacturers.', icon: '🏭' },
              { title: 'Quality Testing', desc: 'In-house quality checks for GSM, burst factor, tensile strength, and moisture content.', icon: '🔬' },
              { title: 'Timely Delivery', desc: 'Reliable logistics and warehousing ensure on-time delivery across India.', icon: '🚛' },
            ].map((c, i) => (
              <div key={i} className={`col-lg-4 col-md-6 fade-in delay-${Math.min(i + 1, 4)}`}>
                <div style={{ background: '#fff', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.75rem', lineHeight: 1 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--ff-heading)', fontWeight: 600, color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>{c.title}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>{c.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="section-padded">
        <div className="container">
          <div className="text-center mb-4">
            <div className="section-eyebrow">Our Location</div>
            <div className="divider-accent center" />
            <h2 className="section-title">Find Us</h2>
            <p style={{ color: 'var(--text-mid)', display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center', marginTop: '0.5rem' }}>
              <FiMapPin color="var(--accent)" /> GAT NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra – 416202
            </p>
          </div>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 400, border: '1px solid var(--border)' }}>
            <iframe
              title="Shri Pant Krupa Paper Board Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.8252008960726!2d74.3325096111029!3d16.635539684062838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0fdfed4edea8b%3A0x772879a571c95b7c!2sSHRI%20PANT%20KRUPA%20PAPER%20BOARD!5e0!3m2!1sen!2sin!4v1773083309900!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
