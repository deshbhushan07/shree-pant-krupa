// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight } from 'react-icons/fi';
import Hero from '../sections/Hero';
import ProductsSection from '../sections/ProductsSection';
import { IndustriesSection, WhyChooseUs, CTA } from '../sections/IndustriesSection';
import BlogCard from '../components/BlogCard';
import { getBlogs } from '../services/blogService';
import { useScrollAnimation } from '../hooks/useAnimations';

const DEMO_BLOGS = [
  { id: '1', title: 'Understanding GSM in Paper Boards: A Complete Guide', slug: 'gsm-paper-boards-guide', author: 'Admin', excerpt: 'Learn what GSM means in paper boards and how to choose the right weight for your packaging needs.', createdAt: null, status: 'published' },
  { id: '2', title: 'Kraft Paper vs Duplex Board: Which Is Right for Your Business?', slug: 'kraft-vs-duplex-board', author: 'Admin', excerpt: 'A detailed comparison of kraft paper and duplex board to help you make the right purchasing decision.', createdAt: null, status: 'published' },
  { 
  id: '3',
  title: "Sustainable Packaging Trends in India's Paper Board Industry",
  slug: 'sustainable-packaging-trends',
  author: 'Admin',
  excerpt: 'Explore how Indian paper board manufacturers are adapting to eco-friendly packaging demands.',
  createdAt: new Date(),
  status: 'published'
}
];

export default function Home() {
  useScrollAnimation();
  const [blogs, setBlogs] = useState(DEMO_BLOGS);

  useEffect(() => {
    getBlogs({ status: 'published', limit: 3 })
      .then(data => { if (data.length > 0) setBlogs(data); })
      .catch(() => {});
  }, []);

  return (
    <>
      <Hero />

      {/* Company Intro Strip */}
      <div style={{ background: 'var(--primary)', padding: '1.5rem 0' }}>
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-8">
              <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.95rem' }}>
                📍 GATE NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra – 416202 &nbsp;|&nbsp; Proprietor: Omkar Shrikant Patil
              </p>
            </div>
            <div className="col-md-4 text-md-end mt-2 mt-md-0">
              <a href="tel:+919876543210" style={{ color: 'var(--accent-light)', fontFamily: 'var(--ff-heading)', fontSize: '1rem', fontWeight: 600 }}>
                📞 +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>

      <ProductsSection />
      <IndustriesSection />
      <WhyChooseUs />

      {/* Blog Preview */}
      <section className="section-padded section-bg-cream">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <div className="section-eyebrow">From Our Blog</div>
              <div className="divider-accent" />
              <h2 className="section-title">Industry Insights & News</h2>
            </div>
            <div className="col-lg-6 d-flex align-items-end justify-content-lg-end mt-3 mt-lg-0">
              <Link to="/blog" className="btn-outline-custom">
                View All Posts <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="row g-4">
            {blogs.map((b, i) => (
              <div key={b.id} className={`col-lg-4 col-md-6 fade-in delay-${i + 1}`}>
                <BlogCard blog={b} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
