import { useState } from 'react';
import { FiUpload, FiX } from 'react-icons/fi';
import { uploadImage } from '../../services/uploadService';

export default function ImageUploader({ folder = 'general', value, onChange, label = 'Image' }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [preview, setPreview] = useState('');

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const localPreview = URL.createObjectURL(file);
    setPreview(localPreview);
    setUploading(true);
    setProgress(0);

    try {
      const url = await uploadImage(file, folder, (pct) => setProgress(pct));
      onChange(url);
      setPreview('');
    } catch (err) {
      console.error('Upload failed:', err);
      alert(`Upload failed: ${err.code || err.message}\n\nMake sure Firebase Storage rules allow write access.`);
      setPreview('');
      onChange('');
    } finally {
      setUploading(false);
    }
  };

  const clear = () => {
    onChange('');
    setPreview('');
  };

  const displayed = preview || value;

  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label style={{
        display: 'block', fontSize: '0.78rem', fontWeight: 600,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        color: 'var(--text-mid)', marginBottom: '0.5rem'
      }}>
        {label}
      </label>

      {displayed ? (
        <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
          <img
            src={displayed}
            alt="Preview"
            style={{
              width: '100%', maxHeight: 180, objectFit: 'cover',
              borderRadius: 8, border: '1px solid var(--border)', display: 'block'
            }}
          />
          {uploading && (
            <div style={{
              position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)',
              borderRadius: 8, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
            }}>
              <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700 }}>{progress}%</div>
              <div style={{ width: '60%', height: 5, background: 'rgba(255,255,255,0.3)', borderRadius: 3 }}>
                <div style={{
                  width: `${progress}%`, height: '100%',
                  background: 'var(--accent)', borderRadius: 3, transition: 'width 0.2s'
                }} />
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>Uploading...</div>
            </div>
          )}
          {!uploading && (
            <button
              type="button"
              onClick={clear}
              style={{
                position: 'absolute', top: 6, right: 6,
                width: 26, height: 26, background: '#e11d48',
                border: 'none', borderRadius: '50%', color: '#fff',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <FiX size={13} />
            </button>
          )}
        </div>
      ) : (
        <label style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '0.5rem', padding: '2rem',
          border: '2px dashed var(--border)', borderRadius: 8,
          cursor: 'pointer', background: '#fafafa', transition: 'all 0.2s ease'
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >
          <FiUpload size={24} color="var(--text-light)" />
          <span style={{ fontSize: '0.85rem', color: 'var(--text-mid)', fontWeight: 500 }}>
            Click to upload image
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
            JPG, PNG, WEBP up to 5MB
          </span>
          <input type="file" accept="image/*" onChange={handleFile} style={{ display: 'none' }} />
        </label>
      )}
    </div>
  );
}