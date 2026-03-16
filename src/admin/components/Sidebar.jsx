// src/admin/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import {
  FiGrid, FiTag, FiPackage, FiFileText, FiImage,
  FiUsers, FiMail, FiExternalLink, FiPackage as FiBrand
} from 'react-icons/fi';

const MENU = [
  { label: 'Main Menu', items: [
    { to: '/admin', icon: <FiGrid />, label: 'Dashboard', end: true },
  ]},
  { label: 'Content', items: [
    { to: '/admin/categories', icon: <FiTag />, label: 'Categories' },
    { to: '/admin/products', icon: <FiPackage />, label: 'Products' },
    { to: '/admin/blog', icon: <FiFileText />, label: 'Blog' },
    { to: '/admin/gallery', icon: <FiImage />, label: 'Gallery' },
  ]},
  { label: 'Business', items: [
    { to: '/admin/dealers', icon: <FiUsers />, label: 'Dealers' },
    { to: '/admin/enquiries', icon: <FiMail />, label: 'Enquiries' },
  ]},
];

export default function Sidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">
          <FiBrand size={18} color="#fff" />
        </div>
        <div className="sidebar-brand-text">Pant Krupa Admin</div>
      </div>

      <nav className="sidebar-nav">
        {MENU.map(section => (
          <div key={section.label}>
            <div className="sidebar-section-label">{section.label}</div>
            {section.items.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                <span className="link-icon">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-link"
          style={{ padding: '0.5rem 0' }}
        >
          <FiExternalLink className="link-icon" size={16} />
          View Website
        </a>
      </div>
    </aside>
  );
}
