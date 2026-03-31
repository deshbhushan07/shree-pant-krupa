// src/admin/pages/AdminGallery.jsx
import { useState, useEffect } from 'react';
import { FiImage } from 'react-icons/fi';
import DataGrid from '../components/DataGrid';
import FormModal, { FormInput, FormSelect } from '../components/FormModal';
import { getGallery, addGalleryItem, deleteGalleryItem } from '../../services/enquiryService';
import ImageUploader from '../components/ImageUploader';

const CAT_OPTS = [
  { value: 'Products', label: 'Products' },
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'Facility', label: 'Facility' },
  { value: 'Quality', label: 'Quality' },
];

export default function AdminGallery() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ title: '', category: '', image: '' });
  const [loading, setLoading] = useState(false);

  const load = () => getGallery().then(setData).catch(() => {});
  useEffect(() => { load(); }, []);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault(); setLoading(true);
    try {
      await addGalleryItem(form);
      load(); setModal(false); setForm({ title: '', category: '', image: '' });
    } catch { } finally { setLoading(false); }
  };

  const del = async id => { await deleteGalleryItem(id); load(); };

  const COLUMNS = [
    {
      key: 'preview', label: 'Preview', sortable: false,
      render: row => row.image
        ? <img src={row.image} alt={row.title} className="table-thumb" />
        : <div className="table-thumb" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--cream)', color: 'var(--text-light)' }}><FiImage /></div>
    },
    { key: 'title', label: 'Title', accessor: 'title', render: row => <strong>{row.title}</strong> },
    { key: 'category', label: 'Category', accessor: 'category' },
    { key: 'date', label: 'Uploaded', accessor: 'createdAt', render: row => (
      <span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>
        {row.createdAt?.toDate ? row.createdAt.toDate().toLocaleDateString('en-IN') : '—'}
      </span>
    )},
  ];

  return (
    <div>
      <div className="admin-page-title mb-4">Gallery</div>
      <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        Upload images via <strong>Cloudinary</strong> (folder: <code>pant-krupa/gallery</code>) then paste the URL below.
      </p>
      <DataGrid columns={COLUMNS} data={data} onAdd={() => setModal(true)} addLabel="Add Image" onDelete={del} title={`${data.length} Images`} />
      <FormModal show={modal} onClose={() => setModal(false)} title="Add Gallery Image" onSubmit={submit} loading={loading}>
        <FormInput label="Image Title" name="title" value={form.title} onChange={handle} required placeholder="e.g. Kraft Paper Production" />
        <FormSelect label="Category" name="category" value={form.category} onChange={handle} options={CAT_OPTS} />
        <ImageUploader
          folder="gallery"
          label="Gallery Image"
          value={form.image}
          onChange={(url) => setForm(f => ({ ...f, image: url }))}
        />
        {form.image && (
          <div style={{ marginTop: '0.75rem' }}>
            <img src={form.image} alt="Preview" style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }} />
          </div>
        )}
      </FormModal>
    </div>
  );
}
