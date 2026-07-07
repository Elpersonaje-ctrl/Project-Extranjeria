import React from 'react';

/** Simple service-offering card with a section-mark glyph (§), used in the
 * "Nuestros Trámites Especializados" 2-up grid. */
export function ServiceCard({ title, children }) {
  return (
    <div
      style={{
        background: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-base)',
        padding: 28,
      }}
    >
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--color-brand-accent)', display: 'block', marginBottom: 6 }}>§</span>
      <h3 style={{ fontSize: 'var(--text-service-title)', fontFamily: 'var(--font-display)', color: 'var(--color-brand-primary)', margin: '0 0 8px' }}>{title}</h3>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-small)', margin: 0 }}>{children}</p>
    </div>
  );
}
