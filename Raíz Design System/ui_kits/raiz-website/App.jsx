const { SiteNavbar, Home, Blog } = window;

function App() {
  const [page, setPage] = React.useState('home');

  const onNavigate = (target, anchor) => {
    if (target === page) {
      if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setPage(target);
    window.scrollTo(0, 0);
    if (anchor) {
      requestAnimationFrame(() => {
        setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }), 50);
      });
    }
  };

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--color-bg-page)', color: 'var(--color-text-primary)', lineHeight: 1.6 }}>
      <SiteNavbar page={page} onNavigate={onNavigate} />
      {page === 'home' ? <Home onNavigate={onNavigate} /> : <Blog onNavigate={onNavigate} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
