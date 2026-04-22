// src/pages/About.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTarget, FiEye, FiCheckCircle, FiArrowRight, FiMapPin } from 'react-icons/fi';
import { FaIndustry, FaLeaf, FaHandshake } from 'react-icons/fa';
import { CTA } from '../sections/IndustriesSection';
import { useScrollAnimation } from '../hooks/useAnimations';
import ownerImg from '../assets/images/big_owner.jpeg';
import omkarImg from "../assets/images/omkar_owner.png";
import spLogo from '../assets/images/sp_logo.png'; // Import the logo for 2nd & 3rd rows

// TeamCard component with proper image fitting
const TeamCard = ({ member }) => {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border)',
      overflow: 'hidden',
      transition: 'var(--transition)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{ 
        position: 'relative',
        paddingTop: '75%', 
        backgroundColor: '#f5f0e8',
        overflow: 'hidden'
      }}>
        <img 
          src={member.photo} 
          alt={member.name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',  // Ensures the image fits perfectly without distortion
          }}
        />
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: member.badgeColor || 'var(--primary)',
          color: '#fff',
          fontSize: '0.65rem',
          fontWeight: 600,
          padding: '0.2rem 0.6rem',
          borderRadius: 20,
          letterSpacing: '0.05em',
        }}>
          {member.badge}
        </div>
      </div>
      <div style={{ padding: '1.25rem', flex: 1 }}>
        <div style={{ fontFamily: 'var(--ff-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '0.25rem' }}>
          {member.name}
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.5rem' }}>
          {member.role}
        </div>
        {member.note && (
          <div style={{ fontSize: '0.7rem', color: 'var(--text-mid)', marginTop: '0.25rem' }}>
            {member.note}
          </div>
        )}
      </div>
    </div>
  );
};

function StaffCard({ member }) {
  return (
    <div style={{
      background: 'var(--cream)',
      borderRadius: 'var(--radius-md)',
      padding: '1.5rem',
      height: '100%',
      border: '1px solid var(--border)',
      transition: 'var(--transition)',
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {/* Avatar initials */}
      <div style={{
        width: 56, height: 56,
        borderRadius: '50%',
        background: 'var(--primary)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontFamily: 'var(--ff-heading)',
        fontSize: '1.1rem', fontWeight: 700,
        marginBottom: '1rem',
      }}>
        {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
      </div>

      {/* Name */}
      <div style={{ fontFamily: 'var(--ff-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '0.2rem' }}>
        {member.name}
      </div>

      {/* Role */}
      <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
        {member.role}
      </div>

      <div style={{ height: 1, background: 'var(--border)', marginBottom: '0.75rem' }} />

      {/* Phone */}
      <div style={{ fontSize: '0.82rem', color: 'var(--text-mid)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <span style={{ color: 'var(--accent)' }}>📞</span>
        <a href={`tel:${member.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
          {member.phone}
        </a>
      </div>

      {/* Experience */}
      <div style={{ fontSize: '0.82rem', color: 'var(--text-mid)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <span style={{ color: 'var(--accent)' }}>⏱</span>
        {member.experience} experience
      </div>

      {/* Description */}
      <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: 1.7, margin: 0 }}>
        {member.desc}
      </p>
    </div>
  );
}

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
                Founded by <strong>Shrikant D. Patil</strong>, we have built a reputation for delivering consistent quality 
                paper board products to clients across India.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1.75rem' }}>
                Located at GAT NO 3, A-2, A/P Halsavade, Near Five Star MIDC, Kolhapur — our facility is equipped with modern 
                manufacturing infrastructure to produce Kraft Paper, Mill Board, Duplex Board, Grey Board, and 
                specialty packing boards across a wide range of GSM specifications.
              </p>

              <div className="row g-3">
                {[
                  { icon: <FaIndustry />, label: 'Manufacturing & Trading' },
                  { icon: <FaLeaf />, label: 'Eco-Friendly Practices' },
                  { icon: <FaHandshake />, label: 'India-wide Distribution' },
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
                  { label: 'Proprietor', value: 'Shrikant D. Patil' },
                  { label: 'Business Type', value: 'Manufacturer / Trader' },
                  { label: 'Location', value: 'Halsavade, Near Five Star MIDC, Kolhapur, MH' },
                  { label: 'GSM Range', value: '200 – 550 GSM' },
                  { label: 'Products', value: 'Kraft, Mill Board, Sheet Cutting' },
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
                  Shrikant D. Patil
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  Proprietor
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Recognition */}
      <section className="section-padded section-bg-cream">
        <div className="container">

          {/* Team Heading */}
          <div className="text-center mb-5">
            <div className="section-eyebrow">Our People</div>
            <div className="divider-accent center" />
            <h2 className="section-title">Our Proud Team</h2>
            <p className="section-lead mx-auto mt-3">
              The dedicated professionals behind Shri Pant Krupa Paper Board's consistent quality and service.
            </p>
          </div>

          {/* Row 1 — Leadership (2 centered) - using original photos */}
          <div className="row g-4 justify-content-center mb-4">
            {[
              {
                name: 'Shrikant D. Patil',
                role: 'Director',
                photo: ownerImg,
                badge: 'Leadership',
                badgeColor: 'var(--primary)',
              },
              {
                name: 'Omkar S. Patil',
                role: 'Managing Director',
                photo: omkarImg,
                badge: 'Leadership',
                badgeColor: 'var(--primary)',
              },
            ].map((member, i) => (
              <div key={i} className="col-lg-3 col-md-5 col-sm-6">
                <TeamCard member={member} />
              </div>
            ))}
          </div>

          {/* Row 2 — Core Team (3 centered) - using sp_logo.png */}
         {/* Core Team Section */}
          <div style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            background: '#fff',
            marginBottom: '2rem',
          }}>
            <div className="text-center mb-4">
              <div className="section-eyebrow">Core Team</div>
              <div className="divider-accent center" />
            </div>

            {/* Row 2 — Billing & Accounts */}
            <div className="row g-4 justify-content-center mb-4">
              {[
                {
                  name: 'Omkar Chavan',
                  role: 'Accounting Department',
                  phone: '+91 80872 16381',
                  experience: '5+ years',
                  desc: 'Manages all financial records, tax filings, and accounts of the company with precision.',
                },
                {
                  name: 'Siddhesh Mane',
                  role: 'Accounting Department',
                  phone: '+91 86240 01975',
                  experience: '5+ years',
                  desc: 'Handles billing operations, invoicing, and maintains accurate transaction records.',
                },
                {
                  name: 'Kunal Chavan',
                  role: 'Accounting Department',
                  phone: '+91 98508 96234',
                  experience: '5+ years',
                  desc: 'Responsible for billing coordination, client accounts, and timely dispatch of invoices.',
                },
              ].map((member, i) => (
                <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                  <StaffCard member={member} />
                </div>
              ))}
            </div>

            {/* Row 3 — Senior & Specialist */}
            <div className="row g-4 justify-content-center">
              {[
                {
                  name: 'Arun More',
                  role: 'General Manager',
                  phone: '+91 91582 49690',
                  experience: '40+ years',
                  desc: 'Senior leader with 40+ years of experience overseeing operations, production planning, and team management.',
                },
                {
                  name: 'Bhauso Khot',
                  role: 'Waste Management Specialist',
                  phone: '+91 99213 12722',
                  experience: '20+ years',
                  desc: 'Manages sustainable waste practices, recycling processes, and eco-friendly operations across the facility.',
                },
                {
                  name: 'Sachin Dudhagoankar',
                  role: 'General Supervisor',
                  phone: '+91 98225 92937',
                  experience: '20+ years',
                  desc: 'Supervises day-to-day floor operations, coordinates teams, and ensures production targets are consistently met.',
                },
              ].map((member, i) => (
                <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                  <StaffCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'var(--border)', margin: '3rem 0' }} />

          {/* Recognition */}
          <div className="text-center mb-5">
            <div className="section-eyebrow">Awards & Recognition</div>
            <div className="divider-accent center" />
            <h2 className="section-title">Our Achievements</h2>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              { icon: '🏆', title: 'Quality Excellence', year: '2023', desc: 'Recognized for consistent product quality and customer satisfaction by industry partners.' },
              { icon: '🌿', title: 'Eco-Friendly Practices', year: '2022', desc: 'Acknowledged for adopting sustainable and environmentally responsible manufacturing processes.' },
              { icon: '🤝', title: 'Trusted Supplier', year: '2021', desc: 'Certified as a preferred supplier by leading packaging manufacturers across Maharashtra.' },
              { icon: '📦', title: 'Bulk Supply Partner', year: '2020', desc: 'Awarded for reliable bulk supply capabilities and on-time delivery performance.' },
            ].map((award, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div style={{
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem 1.25rem',
                  textAlign: 'center',
                  height: '100%',
                  transition: 'var(--transition)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.875rem' }}>{award.icon}</div>
                  <div style={{
                    display: 'inline-block',
                    background: 'rgba(200,150,62,0.1)',
                    color: 'var(--accent)',
                    fontSize: '0.7rem', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '0.2rem 0.625rem', borderRadius: 100,
                    marginBottom: '0.75rem',
                  }}>
                    {award.year}
                  </div>
                  <div style={{ fontFamily: 'var(--ff-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '0.625rem' }}>
                    {award.title}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.7, margin: 0 }}>
                    {award.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="section-padded section-bg-cream">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-eyebrow">What We Do</div>
            <div className="divider-accent center" />
            <h2 className="section-title">Manufacturing Capabilities</h2>
          </div>
          <div className="row g-4">
            {[
              { title: 'Wide GSM Range', desc: 'Manufacturing paper boards from 200 GSM lightweight to 550 GSM heavy grades.', icon: '⚖️' },
              { title: 'Custom Widths', desc: 'Available in standard and custom widths from 18 to 46 inches based on client requirements.', icon: '📏' },
              { title: 'Multiple Grades', desc: 'Kraft, Mill, Duplex, Grey, and specialty grades for diverse packaging applications.', icon: '🗂️' },
              { title: 'Bulk Supply', desc: 'Capacity to handle bulk orders with consistent quality for large manufacturers.', icon: '🏭' },
              { title: 'Quality Testing', desc: 'In-house quality checks for GSM, burst factor, tensile strength, and moisture content.', icon: '🔬' },
              { title: 'Timely Delivery', desc: 'Reliable logistics network Efficient warehousing solutions Timely delivery across India', icon: '🚛' },
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
              <FiMapPin color="var(--accent)" /> GAT NO 3, A-2, A/P Halsavade, Near Five Star MIDC, Kolhapur, Maharashtra – 416202
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