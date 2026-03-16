// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiPackage, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/industries', label: 'Industries' },
    { to: '/blog', label: 'Blog' },
    { to: '/gallery', label: 'Gallery' },
  ];

  return (
    <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-2">
          {/* Brand */}
          <Link to="/" className="navbar-brand-custom">
            <div className="brand-icon">
              <FiPackage />
            </div>
            <div>
              <div className="brand-text-main">Shri Pant Krupa</div>
              <div className="brand-text-sub">Paper Board</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="d-none d-lg-flex align-items-center gap-0">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="nav-link-custom nav-cta">
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="d-lg-none border-0 bg-transparent p-2"
            onClick={() => setOpen(!open)}
            style={{ fontSize: '1.4rem', color: 'var(--primary)' }}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="d-lg-none pb-3" style={{ borderTop: '1px solid var(--border)' }}>
            {[...links, { to: '/contact', label: 'Contact Us' }].map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `d-block py-2 px-3 ${isActive ? 'text-primary fw-semibold' : ''}`
                }
                style={{ fontFamily: 'var(--ff-body)', fontSize: '0.9rem', color: 'var(--text-dark)' }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
