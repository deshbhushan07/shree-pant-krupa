// src/admin/pages/AdminBlog.jsx
import { useState, useEffect } from 'react';
import DataGrid from '../components/DataGrid';
import FormModal, { FormInput, FormTextarea, FormSelect } from '../components/FormModal';
import { getBlogs, addBlog, updateBlog, deleteBlog } from '../../services/blogService';

const EMPTY = { title: '', slug: '', author: 'Admin', content: '', tags: '', status: 'draft', featuredImage: '' };
const STATUS_OPTS = [{ value: 'draft', label: 'Draft' }, { value: 'published', label: 'Published' }, { value: 'unpublished', label: 'Unpublished' }];

export default function AdminBlog() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);

  const load = () => getBlogs().then(setData).catch(() => {});
  useEffect(() => { load(); }, []);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const openAdd = () => { setEditing(null); setForm(EMPTY); setModal(true); };
  const openEdit = row => { setEditing(row); setForm({ ...EMPTY, ...row, tags: Array.isArray(row.tags) ? row.tags.join(', ') : row.tags || '' }); setModal(true); };

  const submit = async e => {
    e.preventDefault(); setLoading(true);
    try {
      const payload = { ...form, tags: form.tags.split(',').map(s => s.trim()).filter(Boolean) };
      if (editing) await updateBlog(editing.id, payload);
      else await addBlog(payload);
      load(); setModal(false);
    } catch { } finally { setLoading(false); }
  };

  const del = async id => { await deleteBlog(id); load(); };

  const changeStatus = async (row, status) => { await updateBlog(row.id, { status }); load(); };

  const COLUMNS = [
    { key: 'title', label: 'Title', accessor: 'title', render: row => <strong style={{ fontSize: '0.88rem' }}>{row.title}</strong> },
    { key: 'author', label: 'Author', accessor: 'author' },
    { key: 'status', label: 'Status', accessor: 'status', render: row => (
      <span className={`badge-status badge-${row.status}`}>{row.status}</span>
    )},
    { key: 'date', label: 'Date', accessor: 'createdAt', render: row => (
      <span style={{ color: 'var(--text-light)', fontSize: '0.82rem' }}>
        {row.createdAt?.toDate ? row.createdAt.toDate().toLocaleDateString('en-IN') : '—'}
      </span>
    )},
  ];

  return (
    <div>
      <div className="admin-page-title mb-4">Blog Management</div>
      <DataGrid
        columns={COLUMNS} data={data}
        onAdd={openAdd} addLabel="New Post"
        onEdit={openEdit} onDelete={del}
        title={`${data.length} Posts`}
        renderActions={row => (
          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
            <button className="action-btn edit" onClick={() => openEdit(row)} title="Edit">✏️</button>
            {row.status !== 'published' && (
              <button onClick={() => changeStatus(row, 'published')} title="Publish" style={{ fontSize: '0.7rem', padding: '2px 6px', background: '#d1fae5', color: '#065f46', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 600 }}>
                Publish
              </button>
            )}
            {row.status === 'published' && (
              <button onClick={() => changeStatus(row, 'unpublished')} title="Unpublish" style={{ fontSize: '0.7rem', padding: '2px 6px', background: '#fef3c7', color: '#92400e', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 600 }}>
                Unpublish
              </button>
            )}
            <button className="action-btn delete" onClick={() => { if (window.confirm('Delete?')) del(row.id); }} title="Delete">🗑</button>
          </div>
        )}
      />
      <FormModal show={modal} onClose={() => setModal(false)} title={editing ? 'Edit Post' : 'New Blog Post'} onSubmit={submit} loading={loading}>
        <FormInput label="Title" name="title" value={form.title} onChange={handle} required placeholder="Blog post title" />
        <FormInput label="Slug" name="slug" value={form.slug} onChange={handle} required placeholder="e.g. my-blog-post" />
        <div className="row g-3">
          <div className="col-6"><FormInput label="Author" name="author" value={form.author} onChange={handle} /></div>
          <div className="col-6"><FormSelect label="Status" name="status" value={form.status} onChange={handle} options={STATUS_OPTS} /></div>
        </div>
        <FormInput label="Featured Image URL (Cloudinary)" name="featuredImage" value={form.featuredImage} onChange={handle} placeholder="https://res.cloudinary.com/..." />
        <FormTextarea label="Content" name="content" value={form.content} onChange={handle} rows={8} placeholder="Write your blog content here..." />
        <FormInput label="Tags (comma separated)" name="tags" value={form.tags} onChange={handle} placeholder="e.g. Packaging, GSM, Tips" />
      </FormModal>
    </div>
  );
}
