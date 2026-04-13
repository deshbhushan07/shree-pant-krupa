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

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  useEffect(() => {
    getBlogs({ status: 'published', limit: 3 })
      .then(data => setBlogs(data))
      .catch(() => setBlogs([]))
      .finally(() => setBlogsLoading(false));
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
                📍 GATE NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra – 416202 &nbsp;|&nbsp; Proprietor: Shrikant D. Patil
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
          {blogsLoading && (
            <div className="text-center py-4">
              <div className="spinner-border" style={{ color: 'var(--primary)' }} />
            </div>
          )}

          {!blogsLoading && blogs.length === 0 && (
            <div className="text-center py-4">
              <p style={{ color: 'var(--text-light)' }}>No blog posts published yet.</p>
            </div>
          )}

          {!blogsLoading && blogs.length > 0 && (
            <div className="row g-4">
              {blogs.map(b => (
                <div key={b.id} className="col-lg-4 col-md-6">
                  <BlogCard blog={b} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
