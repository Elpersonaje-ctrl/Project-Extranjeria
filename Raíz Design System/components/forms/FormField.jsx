import React from 'react';

/** Labeled form field wrapper — matches the site's contact-form input style
 * (label above, bordered input, forest-green focus outline). */
export function FormField({ label, htmlFor, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label htmlFor={htmlFor} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6, color: 'var(--color-text-secondary)' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const fieldStyle = {
  width: '100%',
  padding: '10px 12px',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-md)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.95rem',
  background: '#fff',
  color: 'var(--color-text-primary)',
  boxSizing: 'border-box',
};

export function TextInput(props) {
  return <input style={fieldStyle} {...props} />;
}

export function Select({ options = [], placeholder, ...rest }) {
  return (
    <select style={fieldStyle} defaultValue="" {...rest}>
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  );
}

export function Textarea(props) {
  return <textarea style={fieldStyle} rows={3} {...props} />;
}
