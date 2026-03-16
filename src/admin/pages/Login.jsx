// src/admin/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiPackage, FiAlertCircle } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const FRIENDLY_ERRORS = {
    'auth/invalid-credential': 'Incorrect email or password.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/too-many-requests': 'Too many attempts. Please try again later.',
    'auth/network-request-failed': 'Network error. Check your connection.',
    'auth/invalid-email': 'Please enter a valid email address.',
  };

  const submit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate('/admin');
    } catch (err) {
      setError(FRIENDLY_ERRORS[err.code] || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 60%, var(--primary-light) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: '-15%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(200,150,62,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: '-15%', left: '-10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(200,150,62,0.1) 0%, transparent 70%)', borderRadius: '50%' }} />

      <div style={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}>

        {/* Logo Card */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: 64, height: 64,
            background: 'var(--accent)',
            borderRadius: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1rem',
            boxShadow: '0 8px 32px rgba(200,150,62,0.4)',
          }}>
            <FiPackage size={28} color="#fff" />
          </div>
          <h1 style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
            Admin Panel
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>
            Shri Pant Krupa Paper Board
          </p>
        </div>

        {/* Login Form Card */}
        <div style={{
          background: '#fff',
          borderRadius: 16,
          padding: '2.5rem',
          boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
        }}>
          <h2 style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.3rem', color: 'var(--primary-dark)', marginBottom: '0.375rem' }}>
            Sign in
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '2rem' }}>
            Enter your admin credentials to continue
          </p>

          {/* Error Banner */}
          {error && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.625rem',
              background: '#fff1f2', border: '1px solid #fecdd3',
              borderRadius: 8, padding: '0.75rem 1rem',
              marginBottom: '1.5rem',
              color: '#be123c', fontSize: '0.85rem',
            }}>
              <FiAlertCircle size={16} style={{ flexShrink: 0 }} />
              {error}
            </div>
          )}

          <form onSubmit={submit}>
            {/* Email */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-mid)', marginBottom: '0.5rem' }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <FiMail size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="admin@yourdomain.com"
                  required
                  autoComplete="email"
                  style={{
                    width: '100%', padding: '0.8rem 1rem 0.8rem 2.75rem',
                    border: `1.5px solid ${error ? '#fecdd3' : 'var(--border)'}`,
                    borderRadius: 8, fontSize: '0.9rem', fontFamily: 'var(--ff-body)',
                    outline: 'none', transition: 'all 0.2s ease',
                    color: 'var(--text-dark)', background: '#fff',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = error ? '#fecdd3' : 'var(--border)'}
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-mid)', marginBottom: '0.5rem' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <FiLock size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handle}
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  style={{
                    width: '100%', padding: '0.8rem 3rem 0.8rem 2.75rem',
                    border: `1.5px solid ${error ? '#fecdd3' : 'var(--border)'}`,
                    borderRadius: 8, fontSize: '0.9rem', fontFamily: 'var(--ff-body)',
                    outline: 'none', transition: 'all 0.2s ease',
                    color: 'var(--text-dark)', background: '#fff',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = error ? '#fecdd3' : 'var(--border)'}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(s => !s)}
                  style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-light)', padding: 4 }}
                >
                  {showPass ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%', padding: '0.9rem',
                background: loading ? 'var(--primary-light)' : 'var(--primary)',
                color: '#fff', border: 'none', borderRadius: 8,
                fontSize: '0.9rem', fontWeight: 600, fontFamily: 'var(--ff-body)',
                letterSpacing: '0.05em', textTransform: 'uppercase',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              }}
            >
              {loading ? (
                <>
                  <span style={{
                    width: 16, height: 16, border: '2px solid rgba(255,255,255,0.4)',
                    borderTopColor: '#fff', borderRadius: '50%',
                    animation: 'spin 0.7s linear infinite',
                    display: 'inline-block',
                  }} />
                  Signing in…
                </>
              ) : 'Sign In'}
            </button>
          </form>
        </div>

        {/* Help text */}
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', marginTop: '1.5rem' }}>
          To create an admin account, go to Firebase Console → Authentication → Add user
        </p>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
