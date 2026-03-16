// src/admin/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiPackage } from 'react-icons/fi';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--primary-dark)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '1rem',
      }}>
        <div style={{
          width: 56, height: 56, background: 'var(--accent)',
          borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <FiPackage size={24} color="#fff" />
        </div>
        <div style={{
          width: 32, height: 32,
          border: '3px solid rgba(200,150,62,0.3)',
          borderTopColor: 'var(--accent)',
          borderRadius: '50%',
          animation: 'spin 0.7s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
