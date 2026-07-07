const { Eyebrow, Button, FileCard, ServiceCard, ProcessTracker, BlogCard, FormField, TextInput, Select, Textarea, Footer } = window.RaZDesignSystem_d00590;

const SERVICES = [
  { title: 'Tipos de Arraigo', body: 'Social, Laboral, Familiar o para la Formación. Te guiamos para elegir la vía más rápida y segura si llevas más de 2 años en España.' },
  { title: 'Nacionalidad Española', body: 'Tramitación acelerada por residencia (Iberoamericanos en 2 años) y expedientes complejos de la Ley de Memoria Democrática (Ley de Nietos).' },
  { title: 'Modificación de Estancia', body: 'Paso de visado de estudiante a permiso de residencia y trabajo. Ideal para graduados de la UVigo y escuelas de negocios.' },
  { title: 'Renovaciones Inmediatas', body: 'Renovación de permisos sin esperas, evitando caducidades que pongan en riesgo tu situación legal o laboral.' },
];

const POSTS = [
  { date: '07 JUL 2026', title: 'Arraigo social vs. arraigo laboral: cuál te conviene en 2026', excerpt: 'Las diferencias reales de tiempo, requisitos y contrato que marcan qué vía es más rápida para tu caso.' },
  { date: '28 JUN 2026', title: 'Ley de Nietos: quién puede pedir la nacionalidad por memoria democrática', excerpt: 'Requisitos de ascendencia, documentación en origen y plazos del procedimiento que menos se conoce.' },
  { date: '14 JUN 2026', title: 'Cómo evitar el rechazo por errores en la apostilla', excerpt: 'Los tres fallos documentales más comunes que retrasan un expediente meses, y cómo revisarlos antes.' },
];

function ContactForm() {
  const [status, setStatus] = React.useState(null);
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (!data.get('nombre') || !data.get('telefono') || !data.get('email') || !data.get('situacion')) {
      setStatus({ type: 'error', msg: 'Por favor, completa los campos obligatorios.' });
      return;
    }
    setStatus({ type: 'success', msg: '¡Gracias! Hemos recibido tus datos, te contactaremos en menos de 2 horas hábiles.' });
    e.target.reset();
  };
  return (
    <form onSubmit={submit} style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-base)', padding: 32, boxShadow: 'var(--shadow-card)' }} noValidate>
      <h3 style={{ fontSize: '1.1rem', marginBottom: 18, fontFamily: 'var(--font-display)', color: 'var(--color-brand-primary)' }}>O déjanos tus datos y te llamamos</h3>
      <FormField label="Nombre completo" htmlFor="nombre"><TextInput id="nombre" name="nombre" required /></FormField>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <FormField label="Teléfono / WhatsApp" htmlFor="telefono"><TextInput id="telefono" name="telefono" type="tel" required /></FormField>
        <FormField label="Correo electrónico" htmlFor="email"><TextInput id="email" name="email" type="email" required /></FormField>
      </div>
      <FormField label="Tu situación" htmlFor="situacion">
        <Select id="situacion" name="situacion" required placeholder="Selecciona una opción" options={['Arraigo social', 'Arraigo laboral', 'Arraigo para la formación', 'Nacionalidad española', 'Ley de Nietos', 'Modificación de estancia', 'Renovación de permiso', 'Otro']} />
      </FormField>
      <FormField label="Cuéntanos brevemente tu caso (opcional)" htmlFor="mensaje"><Textarea id="mensaje" name="mensaje" /></FormField>
      <Button variant="primary" fullWidth type="submit">Enviar y reservar mi evaluación</Button>
      {status && (
        <p style={{ marginTop: 12, fontSize: '0.9rem', fontWeight: 600, color: status.type === 'success' ? 'var(--color-status-success)' : 'var(--color-status-danger)' }}>{status.msg}</p>
      )}
      <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', marginTop: 8, marginBottom: 0 }}>Tus datos se guardan de forma segura y solo se usan para contactarte sobre tu consulta.</p>
    </form>
  );
}

function Home({ onNavigate }) {
  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', padding: '110px 0 100px', overflow: 'hidden', background: 'var(--color-bg-page)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <Eyebrow>Asesoría migratoria · Vigo, Galicia</Eyebrow>
          <h1 style={{ fontSize: 'var(--text-hero)', fontFamily: 'var(--font-display)', fontWeight: 600, lineHeight: 1.15, color: 'var(--color-text-primary)', margin: '0 0 16px' }}>
            Haz lo mejor que puedas, <em style={{ fontStyle: 'italic', color: 'var(--color-brand-primary)' }}>que de los papeles nos encargamos nosotros.</em>
          </h1>
          <p style={{ fontSize: 'var(--text-hero-lead)', color: 'var(--color-text-secondary)', maxWidth: 560 }}>
            Trámites de extranjería en Galicia <strong>100% online y sin citas previas</strong>. Evaluamos tu viabilidad y radicamos tu expediente con rigurosidad técnica para evitar rechazos.
          </p>
          <div style={{ marginTop: 8 }}>
            <Button variant="primary" size="large" onClick={() => onNavigate('home', 'contacto')}>Evaluar mi caso por WhatsApp</Button>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-brand-primary-hover)', fontWeight: 600, marginTop: 12 }}>✓ Estudio previo sin compromiso</p>
          </div>
        </div>
        <div style={{ position: 'absolute', right: '6%', top: '42%', transform: 'rotate(-9deg) translateY(-50%)', color: 'var(--color-status-danger)', opacity: 0.9 }} aria-hidden="true">
          <svg viewBox="0 0 160 160" width="140" height="140">
            <circle cx="80" cy="80" r="72" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="80" cy="80" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path id="stampCirclePath" d="M 80,20 A 60,60 0 1 1 79.9,20" fill="none" />
            <text fontFamily="'Special Elite', monospace" fontSize="11" letterSpacing="2" fill="currentColor">
              <textPath href="#stampCirclePath" startOffset="2%">100% TELEMÁTICO · SIN CITA PREVIA · </textPath>
            </text>
            <text x="80" y="76" textAnchor="middle" fontFamily="'Special Elite', monospace" fontSize="16" fill="currentColor">CERO</text>
            <text x="80" y="96" textAnchor="middle" fontFamily="'Special Elite', monospace" fontSize="16" fill="currentColor">RECHAZOS</text>
          </svg>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section style={{ background: 'var(--color-bg-section-tint)', padding: '88px 0' }}>
        <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
          <Eyebrow tone="dark">Tu expediente, hoy</Eyebrow>
          <h2 style={{ fontSize: 'var(--text-section-title)', fontFamily: 'var(--font-display)', color: 'var(--color-brand-primary)', marginBottom: 8 }}>¿Cansado de la burocracia y las esperas?</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', maxWidth: 620, marginBottom: 48 }}>Así es como se siente tramitar solo. Así es como lo resolvemos nosotros.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
            <FileCard tabLabel="Expediente 01" problemTitle="Citas Imposibles" problemText="Conseguir cita en la Oficina de Extranjería en Vigo es frustrante, semanas de espera para un simple registro." solutionText="Presentamos por Mercurio, vía telemática, al instante. Sin salas de espera." />
            <FileCard tabLabel="Expediente 02" problemTitle="Miedo al Rechazo" problemText="Un error mínimo, una apostilla caducada, un formulario mal marcado, te cuesta meses de tu vida." solutionText="Equipo de másters en extranjería con doble auditoría documental antes de radicar." />
            <FileCard tabLabel="Expediente 03" problemTitle="Abogados Carísimos" problemText="Cobros excesivos por adelantado, sin garantía real y sin explicarte en qué punto está tu caso." solutionText="Honorarios justos por hitos: 50% – 30% – 20%. Pagas según avanzamos." />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" style={{ padding: '88px 0' }}>
        <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
          <Eyebrow tone="dark">Qué tramitamos</Eyebrow>
          <h2 style={{ fontSize: 'var(--text-section-title)', fontFamily: 'var(--font-display)', color: 'var(--color-brand-primary)', marginBottom: 8 }}>Nuestros Trámites Especializados</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28, marginTop: 24 }}>
            {SERVICES.map((s) => <ServiceCard key={s.title} title={s.title}>{s.body}</ServiceCard>)}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="metodologia" style={{ background: 'var(--color-bg-page)', padding: '88px 0' }}>
        <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
          <Eyebrow tone="dark">Cómo trabajamos</Eyebrow>
          <h2 style={{ fontSize: 'var(--text-section-title)', fontFamily: 'var(--font-display)', color: 'var(--color-brand-primary)', marginBottom: 8 }}>Método "Cero Rechazos"</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', maxWidth: 620, marginBottom: 48 }}>Tres etapas, desde la raíz. Toca un número para resaltarlo.</p>
          <div style={{ maxWidth: 640 }}>
            <ProcessTracker
              steps={[
                { label: 'Diagnóstico', body: 'Análisis de viabilidad inicial. Si no es viable, no te cobramos.' },
                { label: 'Auditoría', body: 'Revisión exhaustiva de apostillas y caducidad de documentos (Colombia, Perú, Cuba...).' },
                { label: 'Radicación', body: 'Envío telemático seguro como Representantes Voluntarios Administrativos.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section style={{ padding: '88px 0' }}>
        <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
          <Eyebrow tone="dark">Recursos</Eyebrow>
          <h2 style={{ fontSize: 'var(--text-section-title)', fontFamily: 'var(--font-display)', color: 'var(--color-brand-primary)', marginBottom: 8 }}>Del Blog de Raíz</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', maxWidth: 620, marginBottom: 48 }}>Guías claras, sin jerga legal, para entender tu situación antes de tu cita con nosotros.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
            {POSTS.map((p) => <BlogCard key={p.title} date={p.date} title={p.title} excerpt={p.excerpt} href="#" onClick={(e) => { e.preventDefault(); onNavigate('blog'); }} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Button variant="secondary" onClick={() => onNavigate('blog')}>Ver todos los artículos</Button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" style={{ background: 'var(--color-bg-section-tint)', padding: '88px 0' }}>
        <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <Eyebrow tone="dark">Da el primer paso</Eyebrow>
            <h2 style={{ fontSize: 'var(--text-contact-title)', fontFamily: 'var(--font-display)', color: 'var(--color-brand-primary)' }}>Da el primer paso hacia tu tranquilidad legal</h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>Cuéntanos tu situación y uno de nuestros expertos la analizará. Trabajamos principalmente en Vigo y toda la provincia de Pontevedra.</p>
            <div style={{ marginTop: 8 }}>
              <Button variant="whatsapp" href="https://wa.me/34000000000">💬 Escríbenos por WhatsApp</Button>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: 16 }}>Respuesta en menos de 2 horas hábiles.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer
        navLinks={[{ label: 'Servicios', href: '#servicios' }, { label: 'Cómo Trabajamos', href: '#metodologia' }, { label: 'Blog', href: '#' }]}
        legalLinks={[{ label: 'Aviso Legal', href: '#' }, { label: 'Política de Privacidad', href: '#' }, { label: 'Términos y Condiciones', href: '#' }]}
      />
    </div>
  );
}
window.Home = Home;
