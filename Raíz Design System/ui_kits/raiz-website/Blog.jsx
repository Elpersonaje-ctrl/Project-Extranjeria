const { Eyebrow, Footer } = window.RaZDesignSystem_d00590;

const POSTS = [
  {
    id: 'post-arraigo', date: '07 JUL 2026',
    title: 'Arraigo social vs. arraigo laboral: cuál te conviene en 2026',
    excerpt: 'Las diferencias reales de tiempo, requisitos y contrato que marcan qué vía es más rápida para tu caso.',
    body: [
      'Cada año llegan a nuestra oficina en Vigo decenas de personas convencidas de que solo existe "el arraigo", como si fuera un único trámite. En realidad hay varias vías, y elegir la correcta desde el primer día es lo que separa un expediente resuelto en meses de uno atascado durante años.',
      ['Arraigo social', 'Pensado para quienes llevan al menos tres años de permanencia continuada en España y cuentan con un contrato de trabajo de al menos un año, o con un informe de arraigo emitido por la comunidad autónoma que acredite integración social.'],
      ['Arraigo laboral', 'Requiere solo dos años de permanencia, un año menos que el social, pero a cambio exige poder demostrar una relación laboral previa, normalmente mediante una resolución judicial o un acta de la Inspección de Trabajo.'],
      ['¿Cuál elegir?', 'La respuesta depende de tu historial laboral y de si puedes conseguir una oferta de contrato sólida. Presentar por la vía equivocada es una de las causas más comunes de rechazo.'],
    ],
  },
  {
    id: 'post-nietos', date: '28 JUN 2026',
    title: "Ley de Nietos: quién puede pedir la nacionalidad por memoria democrática",
    excerpt: 'Requisitos de ascendencia, documentación en origen y plazos del procedimiento que menos se conoce.',
    body: [
      'La conocida como "Ley de Nietos" amplió el acceso a la nacionalidad española a los descendientes de quienes perdieron o tuvieron que renunciar a su nacionalidad de origen por el exilio durante la Guerra Civil y la dictadura.',
      ['Quién puede solicitarla', 'Hijos e hijas de españolas o españoles de origen, y nietos y nietas cuyo abuelo o abuela perdió o tuvo que renunciar a la nacionalidad española por las circunstancias históricas recogidas en la ley.'],
      ['La documentación, el verdadero reto', 'El cuello de botella no suele ser el derecho en sí, sino reunir las partidas de nacimiento, matrimonio y defunción de varias generaciones, emitidas en registros civiles de otros países y con apostilla de La Haya.'],
    ],
  },
  {
    id: 'post-apostilla', date: '14 JUN 2026',
    title: 'Cómo evitar el rechazo por errores en la apostilla',
    excerpt: 'Los tres fallos documentales más comunes que retrasan un expediente meses, y cómo revisarlos antes.',
    body: [
      'La apostilla de La Haya certifica que un documento público extranjero es válido para usarse en España, pero es también el punto donde más expedientes se rechazan por detalles que parecen menores y no lo son.',
      ['1. Caducidad del documento base', 'Certificados de antecedentes penales, partidas de nacimiento o certificados de estado civil suelen tener una validez limitada, normalmente de tres a seis meses.'],
      ['2. Apostilla sobre copia, no sobre original', 'En varios países la apostilla debe colocarse sobre el documento original emitido por la autoridad competente, no sobre una fotocopia.'],
      ['3. Traducción jurada incompleta', 'Un documento correctamente apostillado pero traducido por un traductor no jurado puede ser rechazado igualmente.'],
    ],
  },
  {
    id: 'post-estudiante', date: '02 JUN 2026',
    title: 'De estudiante a residente: qué hacer al terminar tus estudios en Vigo',
    excerpt: 'Los pasos y plazos para pasar de visado de estudios a permiso de residencia y trabajo sin perder tu situación legal.',
    body: [
      'Cada junio, decenas de graduados de la Universidade de Vigo y de escuelas de negocio de la ciudad se enfrentan a la misma pregunta: ¿qué pasa con mi situación legal cuando termina el curso académico?',
      ['La modificación de estancia por estudios a residencia', 'Se puede modificar a una autorización de residencia y trabajo por cuenta ajena o propia, siempre que se solicite antes de que caduque la autorización de estudios vigente.'],
      ['El margen de tiempo importa', 'Conviene iniciar el trámite entre 60 días antes y 90 días después de la finalización de los estudios, según el caso.'],
    ],
  },
];

function PostEntry({ post }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div id={post.id} style={{ borderBottom: '1px dashed var(--color-border)', padding: '32px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24, cursor: 'pointer' }} onClick={() => setOpen((o) => !o)}>
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--color-brand-primary)', margin: 0 }}>{post.title}</p>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: 8 }}>{post.excerpt}</p>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-brand-primary-hover)', marginTop: 8, display: 'inline-block' }}>
            {open ? 'Ocultar artículo ↑' : 'Leer artículo completo ↓'}
          </span>
        </div>
        <span style={{ fontFamily: 'var(--font-stamp)', fontSize: '0.75rem', color: 'var(--color-brand-accent)', whiteSpace: 'nowrap' }}>{post.date}</span>
      </div>
      {open && (
        <div style={{ marginTop: 18, color: 'var(--color-text-secondary)', maxWidth: 700 }}>
          {post.body.map((block, i) =>
            Array.isArray(block) ? (
              <React.Fragment key={i}>
                <h3 style={{ color: 'var(--color-brand-primary)', fontSize: '1.1rem', marginTop: 20, fontFamily: 'var(--font-display)' }}>{block[0]}</h3>
                <p style={{ marginBottom: 14 }}>{block[1]}</p>
              </React.Fragment>
            ) : (
              <p key={i} style={{ marginBottom: 14 }}>{block}</p>
            )
          )}
        </div>
      )}
    </div>
  );
}

function Blog({ onNavigate }) {
  return (
    <div>
      <section style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '70px 24px 40px' }}>
        <Eyebrow tone="dark">Recursos</Eyebrow>
        <h1 style={{ fontSize: 'var(--text-blog-hero)', fontFamily: 'var(--font-display)', color: 'var(--color-brand-primary)' }}>El Blog de Raíz</h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', maxWidth: 620 }}>Guías claras, sin jerga legal, escritas por nuestro equipo de asesores en extranjería.</p>
      </section>
      <section style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px 88px' }}>
        {POSTS.map((p) => <PostEntry key={p.id} post={p} />)}
      </section>
      <Footer
        navLinks={[{ label: 'Servicios', href: '#' }, { label: 'Cómo Trabajamos', href: '#' }, { label: 'Blog', href: '#' }]}
        legalLinks={[{ label: 'Aviso Legal', href: '#' }, { label: 'Política de Privacidad', href: '#' }, { label: 'Términos y Condiciones', href: '#' }]}
      />
    </div>
  );
}
window.Blog = Blog;
