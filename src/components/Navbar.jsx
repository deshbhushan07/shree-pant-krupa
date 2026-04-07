import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import logo from '../assets/images/sp_logo.png';
import { getCategories } from '../services/enquiryService';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    getCategories().then(setCategories).catch(() => {});
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
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
              <img
                src={logo}
                 alt="Shri Pant Krupa Logo"
                style={{ width: 56, height: 56, objectFit: 'contain' }}
              />
           <div>
            <div className="brand-text-main">Shri Pant Krupa</div>
            <div className="brand-text-sub">Paper Board</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="d-none d-lg-flex align-items-center gap-0">

            {links.slice(0, 2).map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'}
                className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
                {l.label}
              </NavLink>
            ))}

            {/* Products Dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <NavLink to="/products"
                className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
              >
                Products <FiChevronDown size={13} style={{ transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </NavLink>

              {dropdownOpen && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0,
                  background: '#fff', borderRadius: 8,
                  boxShadow: '0 8px 32px rgba(26,58,46,0.15)',
                  border: '1px solid var(--border)',
                  minWidth: 200, zIndex: 1000,
                  padding: '0.5rem 0',
                  animation: 'fadeInDown 0.15s ease'
                }}>
                  <Link to="/products"
                    onClick={() => setDropdownOpen(false)}
                    style={{ display: 'block', padding: '0.6rem 1.25rem', fontSize: '0.85rem', color: 'var(--text-dark)', fontWeight: 600, borderBottom: '1px solid var(--border)', marginBottom: '0.25rem' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--cream)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    All Products
                  </Link>
                  {categories.map(cat => (
                    <Link key={cat.id} to={`/products?category=${encodeURIComponent(cat.name)}`}
                      onClick={() => setDropdownOpen(false)}
                      style={{ display: 'block', padding: '0.55rem 1.25rem', fontSize: '0.83rem', color: 'var(--text-mid)' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.color = 'var(--primary)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-mid)'; }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {links.slice(2).map(l => (
              <NavLink key={l.to} to={l.to}
                className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
                {l.label}
              </NavLink>
            ))}

            <NavLink to="/contact" className="nav-link-custom nav-cta">
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button className="d-lg-none border-0 bg-transparent p-2"
            onClick={() => setOpen(!open)}
            style={{ fontSize: '1.4rem', color: 'var(--primary)' }}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="d-lg-none pb-3" style={{ borderTop: '1px solid var(--border)' }}>
            {[{ to: '/', label: 'Home' }, { to: '/about', label: 'About' }, { to: '/products', label: 'Products' }, { to: '/industries', label: 'Industries' }, { to: '/blog', label: 'Blog' }, { to: '/gallery', label: 'Gallery' }, { to: '/contact', label: 'Contact Us' }].map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'}
                className={({ isActive }) => `d-block py-2 px-3 ${isActive ? 'text-primary fw-semibold' : ''}`}
                style={{ fontFamily: 'var(--ff-body)', fontSize: '0.9rem', color: 'var(--text-dark)' }}
                onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
            {/* Mobile category list */}
            {categories.length > 0 && (
              <div style={{ paddingLeft: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                {categories.map(cat => (
                  <Link key={cat.id} to={`/products?category=${encodeURIComponent(cat.name)}`}
                    onClick={() => setOpen(false)}
                    style={{ display: 'block', padding: '0.4rem 0.75rem', fontSize: '0.82rem', color: 'var(--text-mid)' }}>
                    — {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}