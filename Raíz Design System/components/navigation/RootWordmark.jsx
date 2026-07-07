import React from 'react';

/** Large brand lockup: the "RAÍZ" wordmark with a thin, near-invisible
 * root-line backdrop (branching threads in forest green + gold, ~16-20%
 * opacity) descending behind the letters — for footers, section dividers,
 * and any large-format brand moment. Not for small/inline use — see
 * SealLogo for the compact navbar mark. */
export function RootWordmark({ inverse = false, width = 360 }) {
  const height = Math.round(width * (220 / 540));
  const lineColor1 = inverse ? '#ffffff' : 'var(--raiz-forest)';
  const lineColor2 = inverse ? 'var(--raiz-gold-light)' : 'var(--raiz-gold)';
  return (
    <div style={{ position: 'relative', display: 'inline-block', width, height }} aria-hidden="false">
      <svg
        viewBox="0 0 540 220"
        width={width}
        height={height}
        style={{ position: 'absolute', top: 0, left: 0 }}
        aria-hidden="true"
      >
        <g stroke={lineColor1} fill="none" strokeWidth="0.8" opacity={inverse ? 0.22 : 0.16}>
          <path d="M 270,0 C 260,40 300,55 250,90 C 210,118 260,140 200,168 C 160,188 190,205 140,220" />
          <path d="M 270,0 C 272,42 292,58 258,92 C 224,120 250,142 210,170 C 182,190 200,206 168,220" />
          <path d="M 270,0 C 280,40 310,54 268,88 C 232,116 272,140 220,168 C 186,188 210,205 176,220" />
          <path d="M 270,0 C 264,44 288,60 248,96 C 200,122 248,146 190,172 C 150,192 182,208 130,220" />
          <path d="M 270,0 C 278,46 320,60 280,98 C 244,124 288,150 230,176 C 198,196 224,210 192,220" />
        </g>
        <g stroke={lineColor2} fill="none" strokeWidth="0.8" opacity={inverse ? 0.28 : 0.2}>
          <path d="M 270,0 C 280,40 240,55 290,90 C 330,118 280,140 340,168 C 380,188 350,205 400,220" />
          <path d="M 270,0 C 268,42 248,58 282,92 C 316,120 290,142 330,170 C 358,190 340,206 372,220" />
          <path d="M 270,0 C 260,40 230,54 272,88 C 308,116 268,140 320,168 C 354,188 330,205 364,220" />
          <path d="M 270,0 C 276,44 252,60 292,96 C 340,122 292,146 350,172 C 390,192 358,208 410,220" />
          <path d="M 270,0 C 262,46 220,60 260,98 C 296,124 252,150 310,176 C 342,196 316,210 348,220" />
        </g>
      </svg>
      <span
        style={{
          position: 'relative',
          display: 'block',
          textAlign: 'center',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: width * 0.137,
          letterSpacing: '0.02em',
          color: inverse ? '#fff' : 'var(--color-brand-primary)',
          lineHeight: `${height}px`,
        }}
      >
        RAÍZ
      </span>
    </div>
  );
}
