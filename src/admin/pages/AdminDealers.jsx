import { useState, useEffect } from 'react';
import DataGrid from '../components/DataGrid';
import FormModal, { FormInput, FormSelect, FormTextarea, FormField } from '../components/FormModal';
import { getDealers, addDealer, updateDealer, deleteDealer } from '../../services/enquiryService';
import ImageUploader from '../components/ImageUploader';
import { FiUser } from 'react-icons/fi';

const EMPTY = {
  name: '',
  company: '',
  phone: '',
  email: '',
  city: '',
  state: 'Maharashtra',
  address: '',
  area: '',
  photo: '',
  status: 'active',
};

const STATUS_OPTS = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

const STATE_OPTS = [
  'Maharashtra', 'Gujarat', 'Karnataka', 'Goa',
  'Madhya Pradesh', 'Rajasthan', 'Delhi', 'Other',
].map(s => ({ value: s, label: s }));

export default function AdminDealers() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);

  const load = () => getDealers().then(setData).catch(() => {});
  useEffect(() => { load(); }, []);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const openAdd = () => { setEditing(null); setForm({ ...EMPTY }); setModal(true); };
  const openEdit = row => { setEditing(row); setForm({ ...EMPTY, ...row }); setModal(true); };

  const submit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editing) await updateDealer(editing.id, form);
      else await addDealer(form);
      load();
      setModal(false);
    } catch { } finally { setLoading(false); }
  };

  const del = async id => { await deleteDealer(id); load(); };

  const COLUMNS = [
    {
      key: 'photo', label: 'Photo', sortable: false,
      render: row => row.photo
        ? <img src={row.photo} alt={row.name} className="table-thumb" style={{ borderRadius: '50%' }} />
        : (
          <div className="table-thumb" style={{ borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <FiUser size={18} />
          </div>
        )
    },
    { key: 'name', label: 'Dealer Name', accessor: 'name', render: row => <strong>{row.name}</strong> },
    { key: 'company', label: 'Company', accessor: 'company' },
    { key: 'phone', label: 'WhatsApp / Phone', accessor: 'phone' },
    { key: 'area', label: 'Area Covered', accessor: 'area', render: row => (
      <span style={{ fontSize: '0.82rem', color: 'var(--text-mid)' }}>{row.area || '—'}</span>
    )},
    { key: 'city', label: 'City', accessor: 'city' },
    { key: 'status', label: 'Status', accessor: 'status', render: row => (
      <span className={`badge-status badge-${row.status}`}>{row.status}</span>
    )},
  ];

  return (
    <div>
      <div className="admin-page-title mb-4">Dealers</div>
      <DataGrid
        columns={COLUMNS}
        data={data}
        onAdd={openAdd}
        addLabel="Add Dealer"
        onEdit={openEdit}
        onDelete={del}
        title={`${data.length} Dealers`}
      />

      <FormModal
        show={modal}
        onClose={() => setModal(false)}
        title={editing ? 'Edit Dealer' : 'Add Dealer'}
        onSubmit={submit}
        loading={loading}
      >
        <div className="row g-3">

          {/* Photo Upload */}
          <div className="col-12">
            <ImageUploader
              folder="dealers"
              label="Dealer Photo"
              value={form.photo}
              onChange={url => setForm(f => ({ ...f, photo: url }))}
            />
          </div>

          {/* Name & Company */}
          <div className="col-6">
            <FormInput
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handle}
              required
              placeholder="e.g. Rajesh Kumar"
            />
          </div>
          <div className="col-6">
            <FormInput
              label="Company Name"
              name="company"
              value={form.company}
              onChange={handle}
              placeholder="e.g. Kumar Traders"
            />
          </div>

          {/* Phone & Email */}
          <div className="col-6">
            <FormInput
              label="WhatsApp / Phone"
              name="phone"
              value={form.phone}
              onChange={handle}
              required
              placeholder="e.g. 9876543210"
            />
          </div>
          <div className="col-6">
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handle}
              placeholder="e.g. dealer@email.com"
            />
          </div>

          {/* Area Covered */}
          <div className="col-12">
            <FormInput
              label="Area / Region Covered"
              name="area"
              value={form.area}
              onChange={handle}
              placeholder="e.g. Kolhapur, Sangli, Satara District"
            />
          </div>

          {/* Full Address */}
          <div className="col-12">
            <FormInput
              label="Full Address"
              name="address"
              value={form.address}
              onChange={handle}
              placeholder="e.g. Shop No. 5, Main Market, Kolhapur"
            />
          </div>

          {/* City & State */}
          <div className="col-6">
            <FormInput
              label="City"
              name="city"
              value={form.city}
              onChange={handle}
              placeholder="e.g. Kolhapur"
            />
          </div>
          <div className="col-6">
            <FormSelect
              label="State"
              name="state"
              value={form.state}
              onChange={handle}
              options={STATE_OPTS}
            />
          </div>

          {/* Status */}
          <div className="col-6">
            <FormSelect
              label="Status"
              name="status"
              value={form.status}
              onChange={handle}
              options={STATUS_OPTS}
            />
          </div>

        </div>
      </FormModal>
    </div>
  );
}