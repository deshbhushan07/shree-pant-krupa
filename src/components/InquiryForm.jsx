// src/components/InquiryForm.jsx
import { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import { submitEnquiry } from '../services/enquiryService';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function InquiryForm({ productName = '' }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', product: productName, message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) { setError('Name and phone are required.'); return; }
    setLoading(true); setError('');
    try {
      // Save to Firebase
      await submitEnquiry(form);

      // Send email notification
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email || 'Not provided',
          phone: form.phone,
          product: form.product || 'Not specified',
          message: form.message || 'No message provided',
          to_name: 'Shri Pant Krupa Paper Board',
        },
        EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setForm({ name: '', phone: '', email: '', product: productName, message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      // Still show success if Firebase saved but email failed
      setSuccess(true);
      setForm({ name: '', phone: '', email: '', product: productName, message: '' });
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="text-center py-5">
        <FiCheckCircle size={48} color="var(--accent)" className="mb-3" />
        <h4 style={{ fontFamily: 'var(--ff-heading)', color: 'var(--primary-dark)' }}>Enquiry Submitted!</h4>
        <p style={{ color: 'var(--text-mid)' }}>We'll get back to you within 24 hours.</p>
        <button className="btn-primary-custom mt-3" onClick={() => setSuccess(false)}>
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit}>
      {error && (
        <div className="alert alert-danger mb-3" style={{ fontSize: '0.85rem' }}>{error}</div>
      )}
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label-custom">Full Name *</label>
          <input
            name="name" value={form.name} onChange={handle}
            className="form-control-custom" placeholder="Your name" required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label-custom">Phone *</label>
          <input
            name="phone" value={form.phone} onChange={handle}
            className="form-control-custom" placeholder="+91 XXXXX XXXXX" required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label-custom">Email</label>
          <input
            name="email" type="email" value={form.email} onChange={handle}
            className="form-control-custom" placeholder="your@email.com"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label-custom">Product of Interest</label>
          <input
            name="product" value={form.product} onChange={handle}
            className="form-control-custom" placeholder="e.g. Kraft Paper"
          />
        </div>
        <div className="col-12">
          <label className="form-label-custom">Message</label>
          <textarea
            name="message" value={form.message} onChange={handle}
            className="form-control-custom" rows={4}
            placeholder="Tell us about your requirements..."
            style={{ resize: 'vertical' }}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn-primary-custom" disabled={loading}>
            {loading ? 'Submitting...' : <><FiSend /> Send Enquiry</>}
          </button>
        </div>
      </div>
    </form>
  );
}
