// src/admin/pages/AdminProducts.jsx
import { useState, useEffect } from 'react';
import DataGrid from '../components/DataGrid';
import FormModal, { FormInput, FormTextarea, FormSelect, FormField } from '../components/FormModal';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../../services/productService';
import { getCategories } from '../../services/enquiryService';
import { FiLayers } from 'react-icons/fi';

const EMPTY = { name: '', slug: '', category: '', gsm: '', width: '', description: '', applications: '', featured: false };

export default function AdminProducts() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);

  const load = () => { getProducts().then(setData); getCategories().then(setCategories); };
  useEffect(() => { load(); }, []);

  const handle = e => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(f => ({ ...f, [e.target.name]: val }));
  };

  const openAdd = () => { setEditing(null); setForm(EMPTY); setModal(true); };
  const openEdit = row => {
    setEditing(row);
    setForm({ ...EMPTY, ...row, applications: Array.isArray(row.applications) ? row.applications.join(', ') : row.applications || '' });
    setModal(true);
  };

  const submit = async e => {
    e.preventDefault(); setLoading(true);
    try {
      const payload = {
        ...form,
        applications: form.applications.split(',').map(s => s.trim()).filter(Boolean),
        featured: Boolean(form.featured),
      };
      if (editing) await updateProduct(editing.id, payload);
      else await addProduct(payload);
      load(); setModal(false);
    } catch { } finally { setLoading(false); }
  };

  const del = async id => { await deleteProduct(id); load(); };

  const COLUMNS = [
    {
      key: 'image', label: 'Image', sortable: false,
      render: row => row.images?.[0]
        ? <img src={row.images[0]} alt="" className="table-thumb" />
        : <div className="table-thumb" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--cream)', color: 'var(--text-light)' }}><FiLayers /></div>
    },
    { key: 'name', label: 'Product Name', accessor: 'name', render: row => <strong>{row.name}</strong> },
    { key: 'category', label: 'Category', accessor: 'category' },
    { key: 'gsm', label: 'GSM', accessor: 'gsm' },
    { key: 'featured', label: 'Featured', accessor: 'featured', render: row => (
      <span className={`badge-status ${row.featured ? 'badge-active' : 'badge-inactive'}`}>
        {row.featured ? 'Yes' : 'No'}
      </span>
    )},
  ];

  return (
    <div>
      <div className="admin-page-title mb-4">Products</div>
      <DataGrid columns={COLUMNS} data={data} onAdd={openAdd} addLabel="Add Product" onEdit={openEdit} onDelete={del} title={`${data.length} Products`} />
      <FormModal show={modal} onClose={() => setModal(false)} title={editing ? 'Edit Product' : 'Add Product'} onSubmit={submit} loading={loading}>
        <div className="row g-3">
          <div className="col-6"><FormInput label="Product Name" name="name" value={form.name} onChange={handle} required placeholder="e.g. Kraft Paper Roll" /></div>
          <div className="col-6"><FormInput label="Slug" name="slug" value={form.slug} onChange={handle} required placeholder="e.g. kraft-paper-roll" /></div>
          <div className="col-6">
            <FormSelect
              label="Category" name="category" value={form.category} onChange={handle}
              options={[...categories.map(c => ({ value: c.name, label: c.name })),
                ...['Kraft Paper', 'Mill Board', 'Duplex Board', 'Grey Board', 'Packing Board'].map(c => ({ value: c, label: c }))
              ].filter((opt, i, arr) => arr.findIndex(x => x.value === opt.value) === i)}
            />
          </div>
          <div className="col-3"><FormInput label="GSM Range" name="gsm" value={form.gsm} onChange={handle} placeholder="e.g. 70-200" /></div>
          <div className="col-3"><FormInput label="Width" name="width" value={form.width} onChange={handle} placeholder="e.g. 18-72 inch" /></div>
          <div className="col-12"><FormTextarea label="Description" name="description" value={form.description} onChange={handle} rows={3} /></div>
          <div className="col-12"><FormInput label="Applications (comma separated)" name="applications" value={form.applications} onChange={handle} placeholder="e.g. Packaging, Wrapping, Bags" /></div>
          <div className="col-12">
            <FormField label="Featured">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontFamily: 'var(--ff-body)', fontSize: '0.9rem' }}>
                <input type="checkbox" name="featured" checked={form.featured} onChange={handle} />
                Show as featured product on homepage
              </label>
            </FormField>
          </div>
        </div>
      </FormModal>
    </div>
  );
}
