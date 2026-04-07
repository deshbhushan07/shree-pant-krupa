// src/admin/components/FormModal.jsx
import { FiX } from 'react-icons/fi';

export default function FormModal({ show, onClose, title, onSubmit, loading, children }) {
  if (!show) return null;

  const handleSubmit = (e) => {
    // Manually trigger HTML5 validation before calling onSubmit
    const form = e.currentTarget.closest('.modal-box').querySelector('form-fields');
    onSubmit(e);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <button
            type="button"
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--text-mid)', borderRadius: 6 }}
          >
            <FiX size={20} />
          </button>
        </div>

        {/* No <form> tag — just a div */}
        <div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" onClick={onClose} className="btn-outline-custom" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
              Cancel
            </button>
            <button
              type="button"
              onClick={onSubmit}
              className="btn-primary-custom"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export function FormField({ label, required, children }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label className="form-label-custom">
        {label} {required && <span style={{ color: '#e11d48' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

export function FormInput({ label, required, type = 'text', ...props }) {
  return (
    <FormField label={label} required={required}>
      <input type={type} className="form-control-custom" required={required} {...props} />
    </FormField>
  );
}

export function FormTextarea({ label, required, rows = 4, ...props }) {
  return (
    <FormField label={label} required={required}>
      <textarea className="form-control-custom" rows={rows} required={required} style={{ resize: 'vertical' }} {...props} />
    </FormField>
  );
}

export function FormSelect({ label, required, options, ...props }) {
  return (
    <FormField label={label} required={required}>
      <select className="form-control-custom" required={required} {...props}>
        <option value="">Select...</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </FormField>
  );
}
