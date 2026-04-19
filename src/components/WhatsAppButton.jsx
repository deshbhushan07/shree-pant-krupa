// src/components/WhatsAppButton.jsx
import { FaWhatsapp } from 'react-icons/fa';

const WA_NUMBER = '917028082100';
const WA_MESSAGE = encodeURIComponent(
  'Hello,\nI am interested in your paper board products.\nPlease share more details.'
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export function WhatsAppQuoteBtn({ product = '' }) {
  const msg = encodeURIComponent(
    `Hello,\nI'm interested in getting a quote for: ${product || 'your paper board products'}.\nPlease share more details.`
  );
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.85rem 2rem', background: '#25d366', color: '#fff',
        fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em',
        border: '2px solid #25d366', borderRadius: 'var(--radius)',
        transition: 'all 0.3s ease', textTransform: 'uppercase',
        fontFamily: 'var(--ff-body)'
      }}
    >
      <FaWhatsapp size={18} /> Get WhatsApp Quote
    </a>
  );
}
