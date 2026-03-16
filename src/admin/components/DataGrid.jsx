// src/admin/components/DataGrid.jsx
import { useState } from 'react';
import { FiSearch, FiChevronUp, FiChevronDown, FiChevronLeft, FiChevronRight, FiTrash2 } from 'react-icons/fi';

export default function DataGrid({
  columns,
  data,
  onEdit,
  onDelete,
  onView,
  onAdd,
  addLabel = 'Add New',
  title,
  renderActions,
  extraHeaderContent,
}) {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [sortDir, setSortDir] = useState('asc');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState([]);
  const PER_PAGE = 10;

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  };

  const filtered = data.filter(row =>
    columns.some(col => {
      const val = col.accessor ? row[col.accessor] : '';
      return String(val || '').toLowerCase().includes(search.toLowerCase());
    })
  );

  const sorted = [...filtered].sort((a, b) => {
    if (!sortKey) return 0;
    const av = a[sortKey] || '';
    const bv = b[sortKey] || '';
    return sortDir === 'asc' ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
  });

  const totalPages = Math.ceil(sorted.length / PER_PAGE);
  const paged = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const toggleSelect = (id) => setSelected(s =>
    s.includes(id) ? s.filter(x => x !== id) : [...s, id]
  );
  const toggleAll = () => setSelected(s => s.length === paged.length ? [] : paged.map(r => r.id));

  return (
    <div className="data-table-wrapper">
      <div className="data-table-header">
        <div className="d-flex align-items-center gap-3 flex-wrap">
          {title && <h3 style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.1rem', color: 'var(--primary-dark)', margin: 0 }}>{title}</h3>}
          {selected.length > 0 && (
            <button
              onClick={() => { selected.forEach(id => onDelete && onDelete(id)); setSelected([]); }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.35rem 0.875rem', background: '#fee2e2', color: '#e11d48', border: 'none', borderRadius: 'var(--radius)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
            >
              <FiTrash2 size={13} /> Delete ({selected.length})
            </button>
          )}
          {extraHeaderContent}
        </div>
        <div className="d-flex gap-2 align-items-center flex-wrap">
          <div className="search-input-admin">
            <FiSearch size={14} color="var(--text-light)" />
            <input
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search..."
            />
          </div>
          {onAdd && (
            <button onClick={onAdd} className="btn-primary-custom" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
              + {addLabel}
            </button>
          )}
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th style={{ width: 40 }}>
                <input
                  type="checkbox"
                  checked={selected.length === paged.length && paged.length > 0}
                  onChange={toggleAll}
                />
              </th>
              {columns.map(col => (
                <th key={col.key} onClick={() => col.sortable !== false && toggleSort(col.accessor || col.key)}
                  style={{ cursor: col.sortable === false ? 'default' : 'pointer', userSelect: 'none' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    {col.label}
                    {sortKey === (col.accessor || col.key) && (
                      sortDir === 'asc' ? <FiChevronUp size={12} /> : <FiChevronDown size={12} />
                    )}
                  </span>
                </th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 2} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-light)' }}>
                  No records found.
                </td>
              </tr>
            ) : paged.map(row => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selected.includes(row.id)}
                    onChange={() => toggleSelect(row.id)}
                  />
                </td>
                {columns.map(col => (
                  <td key={col.key}>{col.render ? col.render(row) : row[col.accessor] || '—'}</td>
                ))}
                <td>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    {renderActions ? renderActions(row) : (
                      <>
                        {onView && (
                          <button className="action-btn view" onClick={() => onView(row)} title="View">
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                          </button>
                        )}
                        {onEdit && (
                          <button className="action-btn edit" onClick={() => onEdit(row)} title="Edit">
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                          </button>
                        )}
                        {onDelete && (
                          <button className="action-btn delete" onClick={() => { if (window.confirm('Delete this record?')) onDelete(row.id); }} title="Delete">
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-pagination">
        <span>Showing {Math.min((page - 1) * PER_PAGE + 1, filtered.length)}–{Math.min(page * PER_PAGE, filtered.length)} of {filtered.length} records</span>
        <div className="pagination-btns">
          <button className="page-btn" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
            <FiChevronLeft size={13} />
          </button>
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map(p => (
            <button key={p} className={`page-btn ${page === p ? 'active' : ''}`} onClick={() => setPage(p)}>{p}</button>
          ))}
          <button className="page-btn" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages || totalPages === 0}>
            <FiChevronRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
