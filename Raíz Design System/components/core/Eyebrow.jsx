import React from 'react';

export function Eyebrow({ tone = 'default', children, style }) {
  const tones = {
    default: { color: 'var(--color-brand-accent)' },
    dark: { color: 'var(--color-brand-primary-hover)' },
    light: { color: 'var(--color-brand-accent-light)' },
  };
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-stamp)',
        fontSize: 'var(--text-eyebrow)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        marginBottom: '14px',
        ...tones[tone],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
