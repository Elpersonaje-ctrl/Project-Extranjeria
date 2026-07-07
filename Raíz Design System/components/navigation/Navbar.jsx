import React from 'react';
import { SealLogo } from './SealLogo.jsx';
import { Button } from '../core/Button.jsx';

/** Sticky top navbar with wordmark, in-page links and a primary CTA. */
export function Navbar({ links = [], ctaLabel = 'Consulta Gratis', ctaHref = '#contacto' }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(241, 235, 216, 0.92)',
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <SealLogo />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--color-text-primary)', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
          <Button variant="primary" href={ctaHref}>{ctaLabel}</Button>
        </nav>
      </div>
    </header>
  );
}
