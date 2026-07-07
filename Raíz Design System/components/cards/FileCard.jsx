import React from 'react';
import { Stamp } from '../badges/Stamp.jsx';

/** The stamped "case-file" card used to contrast a bureaucratic problem
 * against Raíz's solution — a torn-paper card split by a dashed divider. */
export function FileCard({ tabLabel, problemTitle, problemText, solutionText }) {
  const tornEdge = `polygon(
    0% 1.5%, 4% 0%, 8% 1.8%, 12% 0.3%, 16% 1.6%, 20% 0%, 24% 1.4%,
    28% 0.2%, 32% 1.7%, 36% 0.4%, 40% 1.5%, 44% 0%, 48% 1.6%, 52% 0.3%,
    56% 1.8%, 60% 0%, 64% 1.4%, 68% 0.3%, 72% 1.7%, 76% 0%, 80% 1.5%,
    84% 0.4%, 88% 1.6%, 92% 0.2%, 96% 1.4%, 100% 0%,
    100% 100%, 0% 100%
  )`;

  return (
    <article
      style={{
        background: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-sm)',
        position: 'relative',
        boxShadow: 'var(--shadow-card)',
        clipPath: tornEdge,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-stamp)',
          fontSize: 'var(--text-stamp-label)',
          letterSpacing: '0.06em',
          color: '#fff',
          background: 'var(--color-brand-primary)',
          display: 'inline-block',
          padding: '5px 14px',
          borderRadius: '0 0 4px 0',
        }}
      >
        {tabLabel}
      </div>
      <div style={{ padding: '20px 26px 10px' }}>
        <h3 style={{ marginBottom: 10, fontSize: 'var(--text-card-title)', fontFamily: 'var(--font-display)', color: 'var(--color-brand-primary)' }}>{problemTitle}</h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-small)', margin: 0 }}>{problemText}</p>
        <Stamp tone="rejected">RECHAZADO</Stamp>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          margin: '4px 26px',
          borderTop: '1px dashed var(--color-border)',
          paddingTop: 10,
        }}
      >
        <span style={{ fontFamily: 'var(--font-stamp)', fontSize: '0.7rem', letterSpacing: '0.05em', color: 'var(--color-brand-accent)', textTransform: 'uppercase' }}>
          La solución de Raíz
        </span>
      </div>
      <div style={{ padding: '10px 26px 26px' }}>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-small)', margin: 0 }}>{solutionText}</p>
        <Stamp tone="approved">APROBADO</Stamp>
      </div>
    </article>
  );
}
