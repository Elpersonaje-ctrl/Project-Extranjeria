import React from 'react';

const ROW_HEIGHT = 132;
const TRUNK_X = 42;
const COL_WIDTH = 84;

/** Decorative root/branch line art: a dashed trunk running top-to-bottom with
 * thin forest/gold fiber-lines fanning out and back in between each stage —
 * an original illustration built around "Raíz" (root), not a copy of any
 * reference artwork. */
function RootLines({ rows }) {
  const total = rows * ROW_HEIGHT;
  const cx = TRUNK_X;
  const segments = [];

  for (let i = 0; i < rows; i++) {
    const yTop = i * ROW_HEIGHT;
    const yMid = yTop + ROW_HEIGHT / 2;
    const yBot = yTop + ROW_HEIGHT;

    segments.push(
      <line key={`trunk-${i}`} x1={cx} y1={yTop} x2={cx} y2={yBot} stroke="var(--raiz-rule)" strokeWidth="1.5" strokeDasharray="1 5" strokeLinecap="round" />
    );

    if (i < rows - 1) {
      const spread = 22 + i * 5;
      segments.push(
        <path key={`fiber-l-${i}`} d={`M ${cx},${yMid} C ${cx - spread},${yMid + 18} ${cx - spread},${yBot - 14} ${cx},${yBot + 6}`} stroke="var(--raiz-forest-light)" strokeWidth="1" fill="none" opacity="0.55" />
      );
      segments.push(
        <path key={`fiber-r-${i}`} d={`M ${cx},${yMid} C ${cx + spread},${yMid + 18} ${cx + spread},${yBot - 14} ${cx},${yBot + 6}`} stroke="var(--color-brand-accent)" strokeWidth="1" fill="none" opacity="0.55" />
      );
      segments.push(
        <path key={`fiber-l2-${i}`} d={`M ${cx},${yMid} C ${cx - spread * 0.55},${yMid + 30} ${cx - spread * 0.55},${yBot - 4} ${cx},${yBot + 6}`} stroke="var(--raiz-forest-light)" strokeWidth="0.75" fill="none" opacity="0.3" />
      );
    }
  }

  return (
    <svg viewBox={`0 0 ${COL_WIDTH} ${total}`} width={COL_WIDTH} height={total} style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }} aria-hidden="true">
      {segments}
    </svg>
  );
}

/** Vertical, root-branching stage tracker: a dashed trunk descends top-to-bottom
 * with thin forest/gold fibers linking each stamped stage number to the next —
 * built for the Raíz brand (root/growth imagery, Fraunces + Special Elite type,
 * forest/gold palette), not any other studio's typography or line art. */
export function ProcessTracker({ steps, active, onChange, orientation = 'vertical' }) {
  const [internalActive, setInternalActive] = React.useState(0);
  const activeIndex = active != null ? active : internalActive;
  const setActive = onChange || setInternalActive;
  const count = steps.length;

  if (orientation === 'horizontal') {
    const pct = count > 1 ? (activeIndex / (count - 1)) * 100 : 0;
    const current = steps[activeIndex];
    return (
      <div>
        <div style={{ position: 'relative', padding: '0 6px' }}>
          <div style={{ position: 'relative', height: 2, borderTop: '1.5px dashed var(--raiz-rule)' }}>
            <div style={{ position: 'absolute', top: -1.5, left: 0, height: 3, width: `${pct}%`, background: 'var(--color-brand-accent)', transition: 'width 0.3s ease' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -11 }}>
            {steps.map((s, i) => {
              const isActive = i === activeIndex;
              const isPast = i < activeIndex;
              return (
                <button key={s.label} onClick={() => setActive(i)} aria-label={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-stamp)', fontSize: 11, background: isActive || isPast ? 'var(--color-brand-accent)' : 'var(--color-bg-page)', border: `1.5px solid ${isActive || isPast ? 'var(--color-brand-accent)' : 'var(--raiz-rule)'}`, color: isActive || isPast ? '#fff' : 'var(--color-text-secondary)', transition: 'background 0.2s ease, border-color 0.2s ease' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'var(--font-stamp)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div style={{ marginTop: 40, background: 'var(--color-bg-surface)', border: '1px solid var(--raiz-rule)', borderRadius: 'var(--radius-base)', boxShadow: 'var(--shadow-card)', padding: '28px 32px', display: 'flex', gap: 24, alignItems: 'flex-start' }}>
          <span style={{ fontFamily: 'var(--font-stamp)', fontSize: '1.6rem', color: 'var(--color-brand-accent)', border: '2px solid var(--color-brand-accent)', borderRadius: '50%', width: 56, height: 56, minWidth: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)' }}>
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <div>
            <h4 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-brand-primary)' }}>{current.label}</h4>
            <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.98rem' }}>{current.body}</p>
          </div>
        </div>
      </div>
    );
  }

  // Vertical / root mode (default)
  const total = count * ROW_HEIGHT;
  return (
    <div style={{ display: 'flex', gap: 28 }}>
      <div style={{ position: 'relative', width: COL_WIDTH, height: total, flexShrink: 0 }}>
        <RootLines rows={count} />
        {steps.map((s, i) => {
          const isActive = i === activeIndex;
          const yMid = i * ROW_HEIGHT + ROW_HEIGHT / 2;
          return (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              aria-label={s.label}
              style={{
                position: 'absolute', top: yMid, left: TRUNK_X, transform: 'translate(-50%, -50%)',
                width: isActive ? 52 : 40, height: isActive ? 52 : 40, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-stamp)', fontSize: isActive ? 16 : 13,
                background: isActive ? 'var(--color-brand-primary)' : 'var(--color-bg-page)',
                border: `2px solid ${isActive ? 'var(--color-brand-accent)' : 'var(--raiz-rule)'}`,
                color: isActive ? '#fff' : 'var(--color-text-secondary)',
                cursor: 'pointer', transition: 'all 0.25s ease', boxShadow: isActive ? 'var(--shadow-card)' : 'none',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </button>
          );
        })}
      </div>
      <div style={{ flex: 1 }}>
        {steps.map((s, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={s.label}
              onClick={() => setActive(i)}
              style={{
                height: ROW_HEIGHT, display: 'flex', flexDirection: 'column', justifyContent: 'center',
                cursor: 'pointer', opacity: isActive ? 1 : 0.6, transition: 'opacity 0.25s ease',
              }}
            >
              <span style={{ fontFamily: 'var(--font-stamp)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brand-accent)', marginBottom: 6 }}>
                Etapa {String(i + 1).padStart(2, '0')}
              </span>
              <h4 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-brand-primary)' }}>{s.label}</h4>
              <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.98rem', maxWidth: 460 }}>{s.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
