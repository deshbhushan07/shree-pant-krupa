// src/pages/BlogDetails.jsx
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiCalendar, FiUser, FiTag, FiArrowLeft } from 'react-icons/fi';
import { getBlogBySlug } from '../services/blogService';

const DEMO = {
  'gsm-paper-boards-guide': {
    title: 'Understanding GSM in Paper Boards: A Complete Guide',
    author: 'Admin', status: 'published',
    content: `GSM stands for Grams per Square Metre, and it is the standard unit used to measure the weight (and indirectly, the thickness and density) of paper and paperboard.

**What is GSM?**

GSM is calculated by weighing one square metre of paper. A higher GSM number means heavier, thicker, and typically more rigid paper. For paper boards used in industrial and commercial applications, GSM is the most critical specification.

**Common GSM Ranges for Paper Boards:**

- **70–120 GSM**: Lightweight kraft paper for wrapping and general packaging
- **120–200 GSM**: Medium kraft liner for corrugated boxes and bags
- **200–350 GSM**: Mill board and duplex board for carton boxes
- **350–600 GSM**: Heavy mill board for book binding and stiff applications
- **600–2000 GSM**: Grey board and rigid board for luxury packaging

**Why GSM Matters for Your Business:**

Choosing the correct GSM is critical for packaging performance. Too low a GSM means your packaging may not protect the product adequately. Too high a GSM adds unnecessary cost and weight.

For corrugated box manufacturers, the liner and medium GSM directly impacts the final box's ECT (Edge Crush Test) and BCT (Box Compression Test) values.

**How to Choose the Right GSM:**

Consider these factors when selecting GSM:
1. Product weight and fragility
2. Stacking strength requirements
3. Moisture resistance needs
4. Print quality requirements
5. Cost optimization

At Shri Pant Krupa Paper Board, we help our clients select the exact GSM specification that optimizes performance and cost for their specific application.`,
    tags: ['GSM', 'Paper Board', 'Packaging', 'Guide'],
  }
};

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(DEMO[slug] || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogBySlug(slug)
      .then(b => { if (b) setBlog(b); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="container py-5 text-center"><div className="spinner-border" style={{ color: 'var(--primary)' }} /></div>;
  }

  if (!blog) {
    return (
      <div className="container py-5 text-center">
        <h2 style={{ fontFamily: 'var(--ff-heading)' }}>Blog Post Not Found</h2>
        <Link to="/blog" className="btn-primary-custom mt-3">Back to Blog</Link>
      </div>
    );
  }

  const date = blog.createdAt?.toDate
    ? blog.createdAt.toDate().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : 'Recent';

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/blog">Blog</Link> / Article
          </div>
          <h1 className="page-header-title mt-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>{blog.title}</h1>
          <div className="d-flex flex-wrap gap-3 mt-3" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem' }}>
            <span className="d-flex align-items-center gap-1"><FiCalendar size={13} /> {date}</span>
            {blog.author && <span className="d-flex align-items-center gap-1"><FiUser size={13} /> {blog.author}</span>}
          </div>
        </div>
      </div>

      <section className="section-padded">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {blog.featuredImage && (
                <img
                  src={blog.featuredImage} alt={blog.title}
                  style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem' }}
                />
              )}

              <article style={{ fontFamily: 'var(--ff-body)', fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-mid)' }}>
                {(blog.content || '').split('\n').map((para, i) => {
                  if (!para.trim()) return <br key={i} />;
                  if (para.startsWith('**') && para.endsWith('**')) {
                    return <h3 key={i} style={{ fontFamily: 'var(--ff-heading)', color: 'var(--primary-dark)', margin: '2rem 0 1rem', fontSize: '1.3rem' }}>{para.replace(/\*\*/g, '')}</h3>;
                  }
                  if (para.startsWith('- ')) {
                    return <li key={i} style={{ marginBottom: '0.5rem' }}>{para.replace('- ', '')}</li>;
                  }
                  if (/^\d+\./.test(para)) {
                    return <li key={i} style={{ marginBottom: '0.5rem' }}>{para.replace(/^\d+\.\s/, '')}</li>;
                  }
                  return <p key={i}>{para.replace(/\*\*/g, '')}</p>;
                })}
              </article>

              {blog.tags?.length > 0 && (
                <div className="mt-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                  <FiTag size={14} color="var(--text-light)" />
                  {blog.tags.map(tag => (
                    <span key={tag} style={{ background: 'var(--cream)', color: 'var(--primary)', fontSize: '0.78rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: 100, border: '1px solid var(--border)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5" style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 500 }}>
                  <FiArrowLeft size={14} /> Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
