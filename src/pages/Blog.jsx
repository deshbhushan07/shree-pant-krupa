// src/pages/Blog.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { getBlogs } from '../services/blogService';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs({ status: 'published' })
      .then(d => setBlogs(d))
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb"><Link to="/">Home</Link> / Blog</div>
          <h1 className="page-header-title mt-2">Blog & Insights</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
            Industry knowledge, product guides, and paper board insights
          </p>
        </div>
      </div>

      <section className="section-padded">
        <div className="container">

          {loading && (
            <div className="text-center py-5">
              <div className="spinner-border" style={{ color: 'var(--primary)' }} />
              <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Loading posts...</p>
            </div>
          )}

          {!loading && blogs.length === 0 && (
            <div className="text-center py-5">
              <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>No blog posts published yet.</p>
            </div>
          )}

          {!loading && blogs.length > 0 && (
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
    </>
  );
}