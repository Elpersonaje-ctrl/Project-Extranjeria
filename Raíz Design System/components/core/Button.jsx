import React from 'react';

export function Button({
  variant = 'primary',
  size = 'base',
  as = 'button',
  href,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : as;

  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    borderRadius: 'var(--radius-base)',
    cursor: 'pointer',
    textAlign: 'center',
    border: '1px solid transparent',
    transition: 'transform 0.15s ease, background 0.2s ease, color 0.2s ease',
    width: fullWidth ? '100%' : undefined,
  };

  const sizes = {
    base: { padding: '13px 26px', fontSize: '0.95rem' },
    large: { padding: '16px 32px', fontSize: '1.02rem' },
  };

  const variants = {
    primary: {
      background: 'var(--color-brand-primary)',
      color: '#fff',
      borderColor: 'var(--color-brand-primary)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-brand-primary)',
      borderColor: 'var(--color-brand-primary)',
      borderWidth: '1.5px',
    },
    whatsapp: {
      background: 'var(--color-status-success)',
      color: '#fff',
      borderColor: 'var(--color-status-success)',
    },
  };

  const hoverBg = {
    primary: 'var(--color-brand-primary-hover)',
    secondary: 'var(--color-brand-primary)',
    whatsapp: '#245c40',
  };

  const [hover, setHover] = React.useState(false);

  const variantStyle = { ...variants[variant] };
  if (hover) {
    variantStyle.background = hoverBg[variant];
    if (variant === 'primary') variantStyle.transform = 'translateY(-1px)';
    if (variant === 'secondary') variantStyle.color = '#fff';
  }

  return (
    <Tag
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...sizes[size], ...variantStyle, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
