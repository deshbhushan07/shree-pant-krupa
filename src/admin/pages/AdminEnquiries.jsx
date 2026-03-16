// src/admin/pages/AdminEnquiries.jsx
import { useState, useEffect } from 'react';
import DataGrid from '../components/DataGrid';
import { getEnquiries, deleteEnquiry } from '../../services/enquiryService';
import { FiX } from 'react-icons/fi';

export default function AdminEnquiries() {
  const [data, setData] = useState([]);
  const [viewing, setViewing] = useState(null);

  const load = () => getEnquiries().then(setData).catch(() => {});
  useEffect(() => { load(); }, []);

  const del = async id => { await deleteEnquiry(id); load(); };

  const COLUMNS = [
    { key: 'name', label: 'Name', accessor: 'name', render: row => <strong>{row.name}</strong> },
    { key: 'phone', label: 'Phone', accessor: 'phone' },
    { key: 'email', label: 'Email', accessor: 'email', render: row => <span style={{ color: 'var(--text-mid)', fontSize: '0.85rem' }}>{row.email || '—'}</span> },
    { key: 'product', label: 'Product', accessor: 'product', render: row => row.product || '—' },
    { key: 'message', label: 'Message', sortable: false, render: row => (
      <span style={{ fontSize: '0.82rem', color: 'var(--text-mid)', maxWidth: 200, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {row.message || '—'}
      </span>
    )},
    { key: 'date', label: 'Date', accessor: 'createdAt', render: row => (
      <span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>
        {row.createdAt?.toDate ? row.createdAt.toDate().toLocaleDateString('en-IN') : 'Recent'}
      </span>
    )},
  ];

  return (
    <div>
      <div className="admin-page-title mb-4">Enquiries</div>
      <DataGrid
        columns={COLUMNS}
        data={data}
        onDelete={del}
        onView={row => setViewing(row)}
        title={`${data.length} Enquiries`}
      />

      {viewing && (
        <div className="modal-overlay" onClick={() => setViewing(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()} style={{ maxWidth: 480 }}>
            <div className="modal-header">
              <div className="modal-title">Enquiry Details</div>
              <button onClick={() => setViewing(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--text-mid)', borderRadius: 6 }}>
                <FiX size={20} />
              </button>
            </div>
            <div className="modal-body">
              {[
                { label: 'Name', value: viewing.name },
                { label: 'Phone', value: viewing.phone },
                { label: 'Email', value: viewing.email || '—' },
                { label: 'Product', value: viewing.product || '—' },
                { label: 'Date', value: viewing.createdAt?.toDate ? viewing.createdAt.toDate().toLocaleString('en-IN') : 'Recent' },
              ].map(f => (
                <div key={f.label} style={{ display: 'flex', marginBottom: '0.875rem', gap: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-light)', width: 80, flexShrink: 0, paddingTop: 2 }}>{f.label}</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>{f.value}</span>
                </div>
              ))}
              {viewing.message && (
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Message</div>
                  <div style={{ background: 'var(--cream)', padding: '1rem', borderRadius: 'var(--radius)', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-mid)' }}>
                    {viewing.message}
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                onClick={() => { if (window.confirm('Delete this enquiry?')) { del(viewing.id); setViewing(null); } }}
                style={{ padding: '0.6rem 1.25rem', background: '#fee2e2', color: '#e11d48', border: 'none', borderRadius: 'var(--radius)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}
              >
                Delete
              </button>
              <button onClick={() => setViewing(null)} className="btn-primary-custom" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
