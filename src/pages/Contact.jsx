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
                  { icon: <FiMapPin />, label: 'Address', value: 'GAT NO 3, A-2, A/P Halsavade, Near Five Star MIDC, Kolhapur, Maharashtra - 416202, India' },
                  { icon: <FiPhone />, label: 'Phone', value: '+91 9689102100, +91 7028082100' },
                  { icon: <FiMail />, label: 'Email', value: 'shripantkrupapaperboard@gmail.com' },
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