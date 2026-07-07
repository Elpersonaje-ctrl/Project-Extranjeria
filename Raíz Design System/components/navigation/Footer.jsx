import React from 'react';
import { SealLogo } from '../navigation/SealLogo.jsx';
import { RootWordmark } from '../navigation/RootWordmark.jsx';

/** Dark footer: wordmark + tagline, two link columns, legal disclaimer, copyright bar. */
export function Footer({ navLinks = [], legalLinks = [] }) {
  return (
    <footer style={{ background: 'var(--color-bg-footer)', color: 'var(--raiz-footer-text)', padding: '56px 0 20px' }}>
      <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.6fr', gap: 32, paddingBottom: 32, borderBottom: '1px solid var(--raiz-footer-rule)' }}>
          <div>
            <SealLogo inverse showSubtext={false} />
            <p style={{ color: 'var(--raiz-footer-muted)', fontSize: '0.9rem', marginTop: 6 }}>Asesoría Migratoria Digital en Galicia.</p>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: 12 }}>Navegación</h4>
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} style={{ display: 'block', color: 'var(--raiz-footer-link)', fontSize: '0.9rem', marginBottom: 8, textDecoration: 'none' }}>{l.label}</a>
            ))}
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: 12 }}>Legal</h4>
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} style={{ display: 'block', color: 'var(--raiz-footer-link)', fontSize: '0.9rem', marginBottom: 8, textDecoration: 'none' }}>{l.label}</a>
            ))}
          </div>
          <div>
            <p style={{ fontSize: '0.78rem', color: 'var(--raiz-footer-fine)', lineHeight: 1.5, margin: 0 }}>
              <strong>Disclaimer Legal:</strong> "Raíz Asesores" es una agencia de representación administrativa y gestión documental (Ley 39/2015). No somos un despacho de abogados colegiados en España.
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'center', paddingTop: 32 }}>
          <RootWordmark width={220} inverse />
        </div>
        <div style={{ textAlign: 'center', paddingTop: 12, fontSize: '0.82rem', color: 'var(--raiz-footer-fine)' }}>
          <p style={{ margin: 0 }}>&copy; 2026 Raíz - Asesores Expertos en Extranjería. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
