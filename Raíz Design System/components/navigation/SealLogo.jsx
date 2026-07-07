import React from 'react';

/** The wordmark: dashed ink-seal circle with "R" + serif "RAÍZ" + thin
 * sans subtext. No real logo file exists in the source brand — this text
 * lockup with the seal glyph IS the mark. See assets/brand/seal-mark.svg. */
export function SealLogo({ showSubtext = true, inverse = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ color: inverse ? '#fff' : 'var(--color-brand-primary)', display: 'flex' }} aria-hidden="true">
        <svg viewBox="0 0 60 60" width="40" height="40">
          <circle cx="30" cy="30" r="27" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="30" cy="30" r="21" fill="none" stroke="currentColor" strokeWidth="1" />
          <text x="30" y="34" textAnchor="middle" fontFamily="'Special Elite', monospace" fontSize="14" fill="currentColor">R</text>
        </svg>
      </span>
      <div>
        <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-logo)', color: inverse ? '#fff' : 'var(--color-brand-primary)', letterSpacing: '0.02em' }}>
          RAÍZ
        </span>
        {showSubtext && (
          <span style={{ display: 'block', fontFamily: 'var(--font-stamp)', fontSize: '0.68rem', color: inverse ? 'var(--raiz-footer-muted)' : 'var(--color-text-secondary)', letterSpacing: '0.03em' }}>
            Asesores en Extranjería
          </span>
        )}
      </div>
    </div>
  );
}
