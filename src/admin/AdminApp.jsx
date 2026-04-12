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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    if (window.confirm('Sign out of the admin panel?')) {
      await logout();
    }
  };

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f0f2f5', position: 'relative' }}>

      {/* Backdrop — mobile only */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 299,
            display: 'block',
          }}
        />
      )}

      {/* Sidebar */}
      <aside style={{
        width: 260,
        background: 'var(--primary-dark)',
        color: '#fff',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0, left: 0,
        height: '100vh',
        overflowY: 'auto',
        zIndex: 300,
        transition: 'transform 0.3s ease',
        transform: sidebarOpen ? 'translateX(0)' : 'translateX(-260px)',
      }}
        className="admin-sidebar-inner"
      >
        <Sidebar onClose={closeSidebar} />
      </aside>

      {/* Main */}
      <main style={{
        marginLeft: 260,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: 'calc(100% - 260px)',
      }}
        className="admin-main-inner"
      >
        {/* Top Bar */}
        <div style={{
          background: '#fff',
          borderBottom: '1px solid #e5e7eb',
          padding: '0.875rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 99,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Hamburger — always visible, sidebar toggle */}
            <button
              onClick={() => setSidebarOpen(s => !s)}
              style={{
                background: 'none', border: 'none',
                fontSize: '1.25rem', color: 'var(--primary)',
                cursor: 'pointer', padding: '0.25rem',
                display: 'flex', alignItems: 'center',
              }}
            >
              <FiMenu />
            </button>
            <span style={{ fontFamily: 'var(--ff-body)', fontSize: '0.82rem', color: 'var(--text-light)' }}>
              Shri Pant Krupa — Admin
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button style={{ background: 'none', border: 'none', color: 'var(--text-mid)', cursor: 'pointer', fontSize: '1.1rem', display: 'flex' }}>
              <FiBell />
            </button>

            {/* User menu */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setShowUserMenu(s => !s)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: 'none', border: '1px solid var(--border)',
                  borderRadius: 8, padding: '0.35rem 0.75rem',
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  width: 28, height: 28, background: 'var(--primary)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', color: '#fff',
                }}>
                  <FiUser size={13} />
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-dark)', maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {user?.email?.split('@')[0] || 'Admin'}
                </span>
              </button>

              {showUserMenu && (
                <>
                  <div style={{ position: 'fixed', inset: 0, zIndex: 98 }} onClick={() => setShowUserMenu(false)} />
                  <div style={{
                    position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                    background: '#fff', border: '1px solid var(--border)',
                    borderRadius: 10, boxShadow: 'var(--shadow-md)',
                    minWidth: 200, zIndex: 99, overflow: 'hidden',
                  }}>
                    <div style={{ padding: '0.875rem 1rem', borderBottom: '1px solid var(--border)' }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '0.25rem', letterSpacing: '0.08em' }}>
                        Signed in as
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-dark)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
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
        <div style={{ padding: '1.75rem', flex: 1 }} className="admin-content">
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

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 992px) {
        .admin-sidebar-inner {
          transform: translateX(0) !important;
          }
       }
        @media (max-width: 991px) {
        .admin-main-inner {
          margin-left: 0 !important;
          width: 100% !important;
       }
        .admin-content {
         padding: 1rem !important;
        }
        .admin-sidebar-inner {
         transform: ${sidebarOpen ? 'translateX(0)' : 'translateX(-260px)'} !important;
      }
    }
`}</style>
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

function LoginGuard() {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (user) return <Navigate to="/admin" replace />;
  return <Login />;
}