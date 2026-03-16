// src/admin/AdminApp.jsx
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { FiBell, FiMenu, FiUser, FiLogOut } from 'react-icons/fi';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminCategories from './pages/Categories';
import AdminProducts from './pages/AdminProducts';
import AdminBlog from './pages/AdminBlog';
import AdminGallery from './pages/AdminGallery';
import AdminDealers from './pages/AdminDealers';
import AdminEnquiries from './pages/AdminEnquiries';

function AdminLayout() {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = async () => {
    if (window.confirm('Sign out of the admin panel?')) {
      await logout();
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-main">

        {/* Top Bar */}
        <div className="admin-topbar">
          <div className="d-flex align-items-center gap-2">
            <span style={{ fontFamily: 'var(--ff-body)', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Shri Pant Krupa Paper Board — Admin
            </span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <button style={{ background: 'none', border: 'none', color: 'var(--text-mid)', cursor: 'pointer', fontSize: '1.1rem' }}>
              <FiBell />
            </button>

            {/* User Menu */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setShowUserMenu(s => !s)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: 'none', border: '1px solid var(--border)',
                  borderRadius: 8, padding: '0.4rem 0.75rem',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                }}
              >
                <div style={{
                  width: 28, height: 28, background: 'var(--primary)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', color: '#fff', fontSize: '0.75rem',
                }}>
                  <FiUser size={13} />
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-dark)', maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {user?.email?.split('@')[0] || 'Admin'}
                </span>
              </button>

              {showUserMenu && (
                <>
                  {/* Backdrop */}
                  <div
                    style={{ position: 'fixed', inset: 0, zIndex: 98 }}
                    onClick={() => setShowUserMenu(false)}
                  />
                  {/* Dropdown */}
                  <div style={{
                    position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                    background: '#fff', border: '1px solid var(--border)',
                    borderRadius: 10, boxShadow: 'var(--shadow-md)',
                    minWidth: 220, zIndex: 99, overflow: 'hidden',
                  }}>
                    <div style={{ padding: '0.875rem 1rem', borderBottom: '1px solid var(--border)' }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '0.25rem' }}>
                        Signed in as
                      </div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-dark)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {user?.email}
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', gap: '0.625rem',
                        padding: '0.75rem 1rem', background: 'none', border: 'none',
                        fontSize: '0.88rem', color: '#e11d48', cursor: 'pointer',
                        fontFamily: 'var(--ff-body)', fontWeight: 500,
                        transition: 'background 0.15s ease',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = '#fff1f2'}
                      onMouseLeave={e => e.currentTarget.style.background = 'none'}
                    >
                      <FiLogOut size={15} /> Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="admin-content">
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="blog" element={<AdminBlog />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="dealers" element={<AdminDealers />} />
            <Route path="enquiries" element={<AdminEnquiries />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default function AdminApp() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<LoginGuard />} />
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

// Redirect to /admin if already logged in
function LoginGuard() {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (user) return <Navigate to="/admin" replace />;
  return <Login />;
}
