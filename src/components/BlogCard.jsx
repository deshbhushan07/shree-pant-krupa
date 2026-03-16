// src/components/BlogCard.jsx
import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

export default function BlogCard({ blog }) {
  const date = blog.createdAt?.toDate
    ? blog.createdAt.toDate().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Recent';

  return (
    <div className="blog-card">
      <div className="blog-card-image">
        {blog.featuredImage ? (
          <img src={blog.featuredImage} alt={blog.title} loading="lazy" />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', flexDirection: 'column', gap: '0.5rem' }}>
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z"/>
              <path d="M13 2v6h6M9 12h6M9 16h4"/>
            </svg>
            <span style={{ fontSize: '0.75rem' }}>Blog Post</span>
          </div>
        )}
      </div>
      <div className="blog-card-body">
        <div className="blog-card-date">
          <FiCalendar size={12} /> {date}
          {blog.author && <><span style={{ margin: '0 0.25rem' }}>·</span><FiUser size={12} /> {blog.author}</>}
        </div>
        <div className="blog-card-title">{blog.title}</div>
        <p className="blog-card-excerpt">
          {blog.excerpt || blog.content?.substring(0, 120)}...
        </p>
        <Link to={`/blog/${blog.slug}`} className="product-card-link">
          Read More <FiArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
