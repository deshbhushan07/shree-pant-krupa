// src/pages/Blog.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { getBlogs } from '../services/blogService';
import { useScrollAnimation } from '../hooks/useAnimations';

const DEMO_BLOGS = [
  { id: '1', title: 'Understanding GSM in Paper Boards: A Complete Guide', slug: 'gsm-paper-boards-guide', author: 'Admin', excerpt: 'Learn what GSM means in paper boards and how to choose the right weight for your specific packaging needs.', status: 'published', createdAt: null },
  { id: '2', title: 'Kraft Paper vs Duplex Board: Which Is Right for Your Business?', slug: 'kraft-vs-duplex-board', author: 'Admin', excerpt: 'A detailed comparison of kraft paper and duplex board to help you make the right purchasing decision for your packaging line.', status: 'published', createdAt: null },
  { id: '3', title: 'Sustainable Packaging Trends in India\'s Paper Board Industry', slug: 'sustainable-packaging-trends', author: 'Admin', excerpt: 'Explore how Indian paper board manufacturers are adapting to growing eco-friendly packaging demands from global brands.', status: 'published', createdAt: null },
  { id: '4', title: 'How to Select the Right Mill Board for Book Binding', slug: 'mill-board-book-binding', author: 'Admin', excerpt: 'A practical guide for publishers and binders on selecting the correct mill board grade, GSM and surface finish.', status: 'published', createdAt: null },
  { id: '5', title: 'Corrugated Box Manufacturing: Raw Material Selection Guide', slug: 'corrugated-box-raw-materials', author: 'Admin', excerpt: 'Understanding liner grades, medium quality, and how the right kraft paper impacts the final strength of corrugated boxes.', status: 'published', createdAt: null },
  { id: '6', title: 'Why Kolhapur is a Hub for Paper Board Manufacturing in Maharashtra', slug: 'kolhapur-paper-board-hub', author: 'Admin', excerpt: 'An insight into why Kolhapur has emerged as a key production center for paper board in western Maharashtra.', status: 'published', createdAt: null },
];

export default function Blog() {
  useScrollAnimation();
  const [blogs, setBlogs] = useState(DEMO_BLOGS);

  useEffect(() => {
    getBlogs({ status: 'published' }).then(d => { if (d.length > 0) setBlogs(d); }).catch(() => {});
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
          <div className="row g-4">
            {blogs.map((b, i) => (
              <div key={b.id} className={`col-lg-4 col-md-6 fade-in delay-${Math.min(i % 3 + 1, 3)}`}>
                <BlogCard blog={b} />
              </div>
            ))}
          </div>
          {blogs.length === 0 && (
            <div className="text-center py-5">
              <p style={{ color: 'var(--text-light)' }}>No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
