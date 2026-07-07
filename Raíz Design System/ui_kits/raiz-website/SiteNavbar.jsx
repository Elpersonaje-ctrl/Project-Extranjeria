const { SealLogo, Button } = window.RaZDesignSystem_d00590;

/** Site chrome: sticky navbar (with page-aware links) used by both Home and Blog screens. */
function SiteNavbar({ page, onNavigate }) {
  const linkStyle = { fontWeight: 500, fontSize: '0.95rem', color: 'var(--color-text-primary)', textDecoration: 'none', cursor: 'pointer' };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(241, 235, 216, 0.92)', backdropFilter: 'blur(6px)', borderBottom: '1px solid var(--color-border)' }}>
      <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>
          <SealLogo />
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a style={linkStyle} onClick={() => onNavigate('home', 'servicios')}>Servicios</a>
          <a style={linkStyle} onClick={() => onNavigate('home', 'metodologia')}>Cómo Trabajamos</a>
          <a style={linkStyle} onClick={() => onNavigate('blog')}>Blog</a>
          <Button variant="primary" onClick={() => onNavigate('home', 'contacto')}>Consulta Gratis</Button>
        </nav>
      </div>
    </header>
  );
}
window.SiteNavbar = SiteNavbar;
