import React from 'react';

/** Blog teaser card — date stamp, serif title, excerpt, "Leer artículo →" link.
 * The whole card is a link (wrap it, or pass onClick + role via `as`). */
export function BlogCard({ date, title, excerpt, href = '#', ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        display: 'block',
        background: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-base)',
        padding: 26,
        color: 'inherit',
        textDecoration: 'none',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        transform: hover ? 'translateY(-3px)' : 'none',
        boxShadow: hover ? 'var(--shadow-card)' : 'none',
      }}
    >
      <span style={{ fontFamily: 'var(--font-stamp)', fontSize: 'var(--text-stamp-label)', color: 'var(--color-brand-accent)', letterSpacing: '0.05em' }}>{date}</span>
      <h3 style={{ fontSize: '1.12rem', margin: '10px 0 8px', color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>{title}</h3>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem', margin: 0 }}>{excerpt}</p>
      <span style={{ fontWeight: 600, color: 'var(--color-brand-primary)', fontSize: '0.9rem', display: 'inline-block', marginTop: 10 }}>Leer artículo →</span>
    </a>
  );
}
