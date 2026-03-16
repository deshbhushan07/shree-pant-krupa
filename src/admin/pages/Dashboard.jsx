// src/admin/pages/Dashboard.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPackage, FiTag, FiFileText, FiMail, FiUsers, FiArrowRight, FiImage } from 'react-icons/fi';
import { getProducts } from '../../services/productService';
import { getBlogs } from '../../services/blogService';
import { getEnquiries, getCategories, getGallery, getDealers } from '../../services/enquiryService';

export default function Dashboard() {
  const [stats, setStats] = useState({ products: 0, categories: 0, blogs: 0, enquiries: 0, dealers: 0, gallery: 0 });
  const [recentEnquiries, setRecentEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getProducts(), getBlogs(), getEnquiries(), getCategories(), getDealers(), getGallery()
    ]).then(([products, blogs, enquiries, categories, dealers, gallery]) => {
      setStats({
        products: products.length,
        categories: categories.length,
        blogs: blogs.length,
        enquiries: enquiries.length,
        dealers: dealers.length,
        gallery: gallery.length,
      });
      setRecentEnquiries(enquiries.slice(0, 5));
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const STAT_CARDS = [
    { icon: <FiPackage />, label: 'Products', value: stats.products, color: 'green', to: '/admin/products' },
    { icon: <FiTag />, label: 'Categories', value: stats.categories, color: 'blue', to: '/admin/categories' },
    { icon: <FiFileText />, label: 'Blog Posts', value: stats.blogs, color: 'amber', to: '/admin/blog' },
    { icon: <FiMail />, label: 'Enquiries', value: stats.enquiries, color: 'purple', to: '/admin/enquiries' },
    { icon: <FiUsers />, label: 'Dealers', value: stats.dealers, color: 'rose', to: '/admin/dealers' },
    { icon: <FiImage />, label: 'Gallery', value: stats.gallery, color: 'blue', to: '/admin/gallery' },
  ];

  return (
    <div>
      <div className="admin-page-title mb-1">Dashboard</div>
      <p style={{ color: 'var(--text-light)', fontSize: '0.88rem', marginBottom: '2rem' }}>
        Welcome back! Here's an overview of your website content.
      </p>

      <div className="row g-3 mb-4">
        {STAT_CARDS.map(card => (
          <div key={card.label} className="col-lg-2 col-md-4 col-6">
            <Link to={card.to} style={{ textDecoration: 'none' }}>
              <div className="stat-card">
                <div className={`stat-icon ${card.color}`}>{card.icon}</div>
                <div>
                  <div className="stat-num">{loading ? '—' : card.value}</div>
                  <div className="stat-label">{card.label}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="row g-3 mb-4">
        <div className="col-12">
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
            <h4 style={{ fontFamily: 'var(--ff-heading)', color: 'var(--primary-dark)', marginBottom: '1.25rem', fontSize: '1.1rem' }}>Quick Actions</h4>
            <div className="d-flex flex-wrap gap-2">
              {[
                { label: 'Add Product', to: '/admin/products' },
                { label: 'New Blog Post', to: '/admin/blog' },
                { label: 'Upload Gallery', to: '/admin/gallery' },
                { label: 'View Enquiries', to: '/admin/enquiries' },
                { label: 'Add Dealer', to: '/admin/dealers' },
              ].map(action => (
                <Link key={action.label} to={action.to}>
                  <button className="btn-outline-custom" style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}>
                    {action.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Enquiries */}
      <div className="data-table-wrapper">
        <div className="data-table-header">
          <h4 style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.1rem', color: 'var(--primary-dark)', margin: 0 }}>
            Recent Enquiries
          </h4>
          <Link to="/admin/enquiries" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 500 }}>
            View All <FiArrowRight size={13} />
          </Link>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Product</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentEnquiries.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-light)' }}>
                  No enquiries yet.
                </td>
              </tr>
            ) : recentEnquiries.map(enq => (
              <tr key={enq.id}>
                <td style={{ fontWeight: 600 }}>{enq.name}</td>
                <td>{enq.phone}</td>
                <td>{enq.product || '—'}</td>
                <td style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {enq.message || '—'}
                </td>
                <td style={{ color: 'var(--text-light)', fontSize: '0.82rem' }}>
                  {enq.createdAt?.toDate ? enq.createdAt.toDate().toLocaleDateString('en-IN') : 'Recent'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
