// src/pages/Contact.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiClock, FiUser } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import InquiryForm from '../components/InquiryForm';
import { useScrollAnimation } from '../hooks/useAnimations';
import { getDealers } from '../services/enquiryService';

const WA_NUMBER = '919876543210';

export default function Contact() {
  useScrollAnimation();
  const [dealers, setDealers] = useState([]);
  const [dealersLoading, setDealersLoading] = useState(true);

useEffect(() => {
  getDealers()
    .then(d => {
      setDealers(d.filter(x => x.status === 'active'));
    })
    .catch(() => {})
    .finally(() => setDealersLoading(false));
}, []);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb"><Link to="/">Home</Link> / Contact</div>
          <h1 className="page-header-title mt-2">Contact Us</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
            Get in touch for enquiries, quotes, and business partnerships
          </p>
        </div>
      </div>

      <section className="section-padded">
        <div className="container">
          <div className="row g-5">

            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="section-eyebrow">Get In Touch</div>
              <div className="divider-accent" />
              <h2 className="section-title mb-3">We're Here to Help</h2>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '2rem' }}>
                Whether you need a custom quote, product information, or want to discuss a bulk order — our team is ready to assist you promptly.
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                {[
                  { icon: <FiMapPin />, label: 'Address', value: 'GAT NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra - 416202, India' },
                  { icon: <FiPhone />, label: 'Phone', value: '+91 98765 43210' },
                  { icon: <FiMail />, label: 'Email', value: 'info@pantkriupapaperboard.com' },
                  { icon: <FiClock />, label: 'Business Hours', value: 'Mon-Sat: 9:00 AM - 7:00 PM' },
                ].map((item, i) => (
                  <div key={i} className="contact-info-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '0.25rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  background: '#25d366', color: '#fff', padding: '0.9rem 1.75rem',
                  borderRadius: 'var(--radius)', fontSize: '0.9rem', fontWeight: 500,
                  fontFamily: 'var(--ff-body)', textDecoration: 'none',
                }}
              >
                <FaWhatsapp size={20} /> Chat on WhatsApp
              </a>
            </div>

            {/* Inquiry Form */}
            <div className="col-lg-7 fade-in delay-2">
              <div style={{ background: 'var(--cream)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                  Send an Enquiry
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', marginBottom: '2rem' }}>
                  Fill in the form and we'll get back to you within 24 hours.
                </p>
                <InquiryForm />
              </div>
            </div>
          </div>

          {/* Authorized Dealers */}
          {!dealersLoading && dealers.length > 0 && (
            
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <div className="section-eyebrow">Authorized Network</div>
                <div className="divider-accent center" />
                <h2 className="section-title">Our Dealers</h2>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', marginTop: '0.75rem' }}>
                  Connect directly with our authorized dealers in your region
                </p>
             

              <div className="row g-4">
                {dealers.map((dealer, i) => (
                  <div key={dealer.id} className="col-lg-4 col-md-6">
                    <div
                      style={{
                        background: '#fff',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '1.75rem',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 16px 48px rgba(26,58,46,0.12)';
                        e.currentTarget.style.borderColor = 'var(--accent)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = 'var(--border)';
                      }}
                    >
                      {/* Top accent line */}
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)' }} />

                      {/* Header */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                        {dealer.photo ? (
                          <img
                            src={dealer.photo}
                            alt={dealer.name}
                            style={{ width: 54, height: 54, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border)' }}
                          />
                        ) : (
                          <div style={{
                            width: 54, height: 54, borderRadius: '50%',
                            background: 'var(--primary)', color: '#fff',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--ff-heading)',
                            flexShrink: 0,
                          }}>
                            {dealer.name?.charAt(0) || <FiUser size={20} />}
                          </div>
                        )}
                        <div>
                          <div style={{ fontFamily: 'var(--ff-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary-dark)', lineHeight: 1.2 }}>
                            {dealer.name}
                          </div>
                          {dealer.company && (
                            <div style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600, marginTop: 3 }}>
                              {dealer.company}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Info rows */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                        {dealer.area && (
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: 'var(--text-mid)' }}>
                            <FiMapPin size={13} style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }} />
                            <span>{dealer.area}{dealer.city ? `, ${dealer.city}` : ''}</span>
                          </div>
                        )}
                        {dealer.phone && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.83rem', color: 'var(--text-mid)' }}>
                            <FiPhone size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                            <a href={`tel:${dealer.phone}`} style={{ color: 'var(--text-dark)', fontWeight: 500 }}>
                              {dealer.phone}
                            </a>
                          </div>
                        )}
                        {dealer.email && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.83rem', color: 'var(--text-mid)' }}>
                            <FiMail size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                            <a href={`mailto:${dealer.email}`} style={{ color: 'var(--text-dark)' }}>
                              {dealer.email}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Action buttons */}
                      {dealer.phone && (
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                          <a
                            href={`tel:${dealer.phone}`}
                            style={{
                              flex: 1, display: 'flex', alignItems: 'center',
                              justifyContent: 'center', gap: '0.4rem',
                              padding: '0.6rem', borderRadius: 'var(--radius)',
                              border: '1.5px solid var(--primary)', color: 'var(--primary)',
                              fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--ff-body)',
                              textDecoration: 'none', transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary)'; }}
                          >
                            <FiPhone size={13} /> Call
                          </a>
                          <a
                            href={`https://wa.me/91${dealer.phone.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              flex: 1, display: 'flex', alignItems: 'center',
                              justifyContent: 'center', gap: '0.4rem',
                              padding: '0.6rem', borderRadius: 'var(--radius)',
                              background: '#25d366', color: '#fff',
                              fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--ff-body)',
                              textDecoration: 'none', transition: 'opacity 0.2s ease',
                              border: '1.5px solid #25d366',
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                          >
                            <FaWhatsapp size={14} /> WhatsApp
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Google Map */}
          <div className="mt-5 fade-in">
            <h3 style={{ fontFamily: 'var(--ff-heading)', color: 'var(--primary-dark)', marginBottom: '1.25rem' }}>Our Location</h3>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 400, border: '1px solid var(--border)' }}>
              <iframe
                title="Shri Pant Krupa Paper Board"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.8252008960726!2d74.3325096111029!3d16.635539684062838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0fdfed4edea8b%3A0x772879a571c95b7c!2sSHRI%20PANT%20KRUPA%20PAPER%20BOARD!5e0!3m2!1sen!2sin!4v1773083309900!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}