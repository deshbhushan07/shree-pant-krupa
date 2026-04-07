// src/admin/pages/Categories.jsx
import { useState, useEffect } from 'react';
import DataGrid from '../components/DataGrid';
import FormModal, { FormInput, FormTextarea } from '../components/FormModal';
import { getCategories, addCategory, updateCategory, deleteCategory } from '../../services/enquiryService';

export default function AdminCategories() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', slug: '', description: '' });
  const [loading, setLoading] = useState(false);

  const load = () => getCategories().then(setData).catch(() => {});
  useEffect(() => { load(); }, []);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const openAdd = () => { setEditing(null); setForm({ name: '', slug: '', description: '' }); setModal(true); };
  const openEdit = row => { setEditing(row); setForm({ name: row.name, slug: row.slug, description: row.description || '' }); setModal(true); };

  const submit = async (e) => {
  if (e?.preventDefault) e.preventDefault();

  // Manual validation since we removed the <form>
  if (!form.name.trim() || !form.slug.trim()) {
    alert('Name and Slug are required.');
    return;
  }

  setLoading(true);
  try {
    if (editing) await updateCategory(editing.id, form);
    else await addCategory(form);
    load();
    setModal(false);
  } catch (err) {
    console.error('Save failed:', err);
    alert(err?.message || 'Failed to save. Please try again.');
  } finally {
    setLoading(false);
  }
};

  const del = async id => { await deleteCategory(id); load(); };

  const COLUMNS = [
    { key: 'name', label: 'Name', accessor: 'name', render: row => <strong>{row.name}</strong> },
    { key: 'slug', label: 'Slug', accessor: 'slug', render: row => <code style={{ fontSize: '0.8rem', background: '#f3f4f6', padding: '2px 6px', borderRadius: 4 }}>{row.slug}</code> },
    { key: 'description', label: 'Description', accessor: 'description', sortable: false, render: row => <span style={{ color: 'var(--text-mid)', fontSize: '0.85rem' }}>{(row.description || '').substring(0, 50) || '—'}</span> },
  ];

  return (
    <div>
      <div className="admin-page-title mb-4">Categories</div>
      <DataGrid
        columns={COLUMNS} data={data}
        onAdd={openAdd} addLabel="Add Category"
        onEdit={openEdit} onDelete={del}
        title={`${data.length} Categories`}
      />
      <FormModal show={modal} onClose={() => setModal(false)} title={editing ? 'Edit Category' : 'Add Category'} onSubmit={submit} loading={loading}>
        <FormInput label="Category Name" name="name" value={form.name} onChange={handle} required placeholder="e.g. Kraft Paper" />
        <FormInput label="Slug" name="slug" value={form.slug} onChange={handle} required placeholder="e.g. kraft-paper" />
        <FormTextarea label="Description" name="description" value={form.description} onChange={handle} rows={3} placeholder="Short description..." />
      </FormModal>
    </div>
  );
}
