import React from 'react';

export function Stamp({ tone = 'approved', children, style }) {
  const tones = {
    approved: { color: 'var(--color-status-success)', transform: 'rotate(-4deg)' },
    rejected: { color: 'var(--color-status-danger)', transform: 'rotate(-6deg)' },
  };
  return (
    <span
      style={{
        fontFamily: 'var(--font-stamp)',
        fontWeight: 700,
        letterSpacing: 'var(--tracking-stamp)',
        display: 'inline-block',
        border: '3px solid currentColor',
        padding: '4px 14px',
        borderRadius: 'var(--radius-md)',
        marginTop: '6px',
        fontSize: '0.95rem',
        ...tones[tone],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
