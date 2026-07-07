import React from 'react';

/** Numbered circular "stamp" used for the 3-step "Método Cero Rechazos" methodology section. */
export function StepStamp({ n, tone = 'light' }) {
  const color = tone === 'light' ? 'var(--color-brand-accent-light)' : 'var(--color-brand-accent)';
  return (
    <span style={{ color, display: 'inline-block', marginBottom: 14 }} aria-hidden="true">
      <svg viewBox="0 0 80 80" width="72" height="72">
        <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
        <text x="40" y="49" textAnchor="middle" fontFamily="'Special Elite', monospace" fontSize="26" fill="currentColor">{n}</text>
      </svg>
    </span>
  );
}
