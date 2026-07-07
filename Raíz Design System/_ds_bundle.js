/* @ds-bundle: {"format":4,"namespace":"RaZDesignSystem_d00590","components":[{"name":"Stamp","sourcePath":"components/badges/Stamp.jsx"},{"name":"StepStamp","sourcePath":"components/badges/StepStamp.jsx"},{"name":"BlogCard","sourcePath":"components/cards/BlogCard.jsx"},{"name":"FileCard","sourcePath":"components/cards/FileCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"TextInput","sourcePath":"components/forms/FormField.jsx"},{"name":"Select","sourcePath":"components/forms/FormField.jsx"},{"name":"Textarea","sourcePath":"components/forms/FormField.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"RootWordmark","sourcePath":"components/navigation/RootWordmark.jsx"},{"name":"SealLogo","sourcePath":"components/navigation/SealLogo.jsx"},{"name":"ProcessTracker","sourcePath":"components/process/ProcessTracker.jsx"}],"sourceHashes":{"components/badges/Stamp.jsx":"e32bc8a1598d","components/badges/StepStamp.jsx":"49e83818a831","components/cards/BlogCard.jsx":"bf93a7e2bb9a","components/cards/FileCard.jsx":"e3766323d41d","components/cards/ServiceCard.jsx":"cfd06a0bfe26","components/core/Button.jsx":"46fe450f02bf","components/core/Eyebrow.jsx":"0fdef8a41f9b","components/forms/FormField.jsx":"18d3e3d771f4","components/navigation/Footer.jsx":"86afb4137757","components/navigation/Navbar.jsx":"a6d56620cac8","components/navigation/RootWordmark.jsx":"7203b187840f","components/navigation/SealLogo.jsx":"01e1fe4a2343","components/process/ProcessTracker.jsx":"0d055b5034fc","ui_kits/raiz-website/App.jsx":"b13246c021f2","ui_kits/raiz-website/Blog.jsx":"da3247289831","ui_kits/raiz-website/Home.jsx":"9095537a0757","ui_kits/raiz-website/SiteNavbar.jsx":"1ee3307bca14"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RaZDesignSystem_d00590 = window.RaZDesignSystem_d00590 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Stamp.jsx
try { (() => {
function Stamp({
  tone = 'approved',
  children,
  style
}) {
  const tones = {
    approved: {
      color: 'var(--color-status-success)',
      transform: 'rotate(-4deg)'
    },
    rejected: {
      color: 'var(--color-status-danger)',
      transform: 'rotate(-6deg)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-stamp)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-stamp)',
      display: 'inline-block',
      border: '3px solid currentColor',
      padding: '4px 14px',
      borderRadius: 'var(--radius-md)',
      marginTop: '6px',
      fontSize: '0.95rem',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/badges/StepStamp.jsx
try { (() => {
/** Numbered circular "stamp" used for the 3-step "Método Cero Rechazos" methodology section. */
function StepStamp({
  n,
  tone = 'light'
}) {
  const color = tone === 'light' ? 'var(--color-brand-accent-light)' : 'var(--color-brand-accent)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      display: 'inline-block',
      marginBottom: 14
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 80 80",
    width: "72",
    height: "72"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "40",
    r: "36",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeDasharray: "4 3"
  }), /*#__PURE__*/React.createElement("text", {
    x: "40",
    y: "49",
    textAnchor: "middle",
    fontFamily: "'Special Elite', monospace",
    fontSize: "26",
    fill: "currentColor"
  }, n)));
}
Object.assign(__ds_scope, { StepStamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/StepStamp.jsx", error: String((e && e.message) || e) }); }

// components/cards/BlogCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Blog teaser card — date stamp, serif title, excerpt, "Leer artículo →" link.
 * The whole card is a link (wrap it, or pass onClick + role via `as`). */
function BlogCard({
  date,
  title,
  excerpt,
  href = '#',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'block',
      background: 'var(--color-bg-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-base)',
      padding: 26,
      color: 'inherit',
      textDecoration: 'none',
      transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      transform: hover ? 'translateY(-3px)' : 'none',
      boxShadow: hover ? 'var(--shadow-card)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-stamp)',
      fontSize: 'var(--text-stamp-label)',
      color: 'var(--color-brand-accent)',
      letterSpacing: '0.05em'
    }
  }, date), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.12rem',
      margin: '10px 0 8px',
      color: 'var(--color-text-primary)',
      fontFamily: 'var(--font-display)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-text-secondary)',
      fontSize: '0.92rem',
      margin: 0
    }
  }, excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--color-brand-primary)',
      fontSize: '0.9rem',
      display: 'inline-block',
      marginTop: 10
    }
  }, "Leer art\xEDculo \u2192"));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FileCard.jsx
try { (() => {
/** The stamped "case-file" card used to contrast a bureaucratic problem
 * against Raíz's solution — a torn-paper card split by a dashed divider. */
function FileCard({
  tabLabel,
  problemTitle,
  problemText,
  solutionText
}) {
  const tornEdge = `polygon(
    0% 1.5%, 4% 0%, 8% 1.8%, 12% 0.3%, 16% 1.6%, 20% 0%, 24% 1.4%,
    28% 0.2%, 32% 1.7%, 36% 0.4%, 40% 1.5%, 44% 0%, 48% 1.6%, 52% 0.3%,
    56% 1.8%, 60% 0%, 64% 1.4%, 68% 0.3%, 72% 1.7%, 76% 0%, 80% 1.5%,
    84% 0.4%, 88% 1.6%, 92% 0.2%, 96% 1.4%, 100% 0%,
    100% 100%, 0% 100%
  )`;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: 'var(--color-bg-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-sm)',
      position: 'relative',
      boxShadow: 'var(--shadow-card)',
      clipPath: tornEdge
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-stamp)',
      fontSize: 'var(--text-stamp-label)',
      letterSpacing: '0.06em',
      color: '#fff',
      background: 'var(--color-brand-primary)',
      display: 'inline-block',
      padding: '5px 14px',
      borderRadius: '0 0 4px 0'
    }
  }, tabLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 26px 10px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 10,
      fontSize: 'var(--text-card-title)',
      fontFamily: 'var(--font-display)',
      color: 'var(--color-brand-primary)'
    }
  }, problemTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--text-small)',
      margin: 0
    }
  }, problemText), /*#__PURE__*/React.createElement(__ds_scope.Stamp, {
    tone: "rejected"
  }, "RECHAZADO")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      margin: '4px 26px',
      borderTop: '1px dashed var(--color-border)',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-stamp)',
      fontSize: '0.7rem',
      letterSpacing: '0.05em',
      color: 'var(--color-brand-accent)',
      textTransform: 'uppercase'
    }
  }, "La soluci\xF3n de Ra\xEDz")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 26px 26px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--text-small)',
      margin: 0
    }
  }, solutionText), /*#__PURE__*/React.createElement(__ds_scope.Stamp, {
    tone: "approved"
  }, "APROBADO")));
}
Object.assign(__ds_scope, { FileCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FileCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
/** Simple service-offering card with a section-mark glyph (§), used in the
 * "Nuestros Trámites Especializados" 2-up grid. */
function ServiceCard({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-base)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2rem',
      color: 'var(--color-brand-accent)',
      display: 'block',
      marginBottom: 6
    }
  }, "\xA7"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-service-title)',
      fontFamily: 'var(--font-display)',
      color: 'var(--color-brand-primary)',
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--text-small)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
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
    width: fullWidth ? '100%' : undefined
  };
  const sizes = {
    base: {
      padding: '13px 26px',
      fontSize: '0.95rem'
    },
    large: {
      padding: '16px 32px',
      fontSize: '1.02rem'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-brand-primary)',
      color: '#fff',
      borderColor: 'var(--color-brand-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-brand-primary)',
      borderColor: 'var(--color-brand-primary)',
      borderWidth: '1.5px'
    },
    whatsapp: {
      background: 'var(--color-status-success)',
      color: '#fff',
      borderColor: 'var(--color-status-success)'
    }
  };
  const hoverBg = {
    primary: 'var(--color-brand-primary-hover)',
    secondary: 'var(--color-brand-primary)',
    whatsapp: '#245c40'
  };
  const [hover, setHover] = React.useState(false);
  const variantStyle = {
    ...variants[variant]
  };
  if (hover) {
    variantStyle.background = hoverBg[variant];
    if (variant === 'primary') variantStyle.transform = 'translateY(-1px)';
    if (variant === 'secondary') variantStyle.color = '#fff';
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...sizes[size],
      ...variantStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  tone = 'default',
  children,
  style
}) {
  const tones = {
    default: {
      color: 'var(--color-brand-accent)'
    },
    dark: {
      color: 'var(--color-brand-primary-hover)'
    },
    light: {
      color: 'var(--color-brand-accent-light)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-stamp)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      marginBottom: '14px',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled form field wrapper — matches the site's contact-form input style
 * (label above, bordered input, forest-green focus outline). */
function FormField({
  label,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: 600,
      marginBottom: 6,
      color: 'var(--color-text-secondary)'
    }
  }, label), children);
}
const fieldStyle = {
  width: '100%',
  padding: '10px 12px',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-md)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.95rem',
  background: '#fff',
  color: 'var(--color-text-primary)',
  boxSizing: 'border-box'
};
function TextInput(props) {
  return /*#__PURE__*/React.createElement("input", _extends({
    style: fieldStyle
  }, props));
}
function Select({
  options = [],
  placeholder,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    style: fieldStyle,
    defaultValue: ""
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o)));
}
function Textarea(props) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    style: fieldStyle,
    rows: 3
  }, props));
}
Object.assign(__ds_scope, { FormField, TextInput, Select, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/RootWordmark.jsx
try { (() => {
/** Large brand lockup: the "RAÍZ" wordmark with a thin, near-invisible
 * root-line backdrop (branching threads in forest green + gold, ~16-20%
 * opacity) descending behind the letters — for footers, section dividers,
 * and any large-format brand moment. Not for small/inline use — see
 * SealLogo for the compact navbar mark. */
function RootWordmark({
  inverse = false,
  width = 360
}) {
  const height = Math.round(width * (220 / 540));
  const lineColor1 = inverse ? '#ffffff' : 'var(--raiz-forest)';
  const lineColor2 = inverse ? 'var(--raiz-gold-light)' : 'var(--raiz-gold)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block',
      width,
      height
    },
    "aria-hidden": "false"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 540 220",
    width: width,
    height: height,
    style: {
      position: 'absolute',
      top: 0,
      left: 0
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: lineColor1,
    fill: "none",
    strokeWidth: "0.8",
    opacity: inverse ? 0.22 : 0.16
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 270,0 C 260,40 300,55 250,90 C 210,118 260,140 200,168 C 160,188 190,205 140,220"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 270,0 C 272,42 292,58 258,92 C 224,120 250,142 210,170 C 182,190 200,206 168,220"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 270,0 C 280,40 310,54 268,88 C 232,116 272,140 220,168 C 186,188 210,205 176,220"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 270,0 C 264,44 288,60 248,96 C 200,122 248,146 190,172 C 150,192 182,208 130,220"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 270,0 C 278,46 320,60 280,98 C 244,124 288,150 230,176 C 198,196 224,210 192,220"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: lineColor2,
    fill: "none",
    strokeWidth: "0.8",
    opacity: inverse ? 0.28 : 0.2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 270,0 C 280,40 240,55 290,90 C 330,118 280,140 340,168 C 380,188 350,205 400,220"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 270,0 C 268,42 248,58 282,92 C 316,120 290,142 330,170 C 358,190 340,206 372,220"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 270,0 C 260,40 230,54 272,88 C 308,116 268,140 320,168 C 354,188 330,205 364,220"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 270,0 C 276,44 252,60 292,96 C 340,122 292,146 350,172 C 390,192 358,208 410,220"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 270,0 C 262,46 220,60 260,98 C 296,124 252,150 310,176 C 342,196 316,210 348,220"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: width * 0.137,
      letterSpacing: '0.02em',
      color: inverse ? '#fff' : 'var(--color-brand-primary)',
      lineHeight: `${height}px`
    }
  }, "RA\xCDZ"));
}
Object.assign(__ds_scope, { RootWordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/RootWordmark.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SealLogo.jsx
try { (() => {
/** The wordmark: dashed ink-seal circle with "R" + serif "RAÍZ" + thin
 * sans subtext. No real logo file exists in the source brand — this text
 * lockup with the seal glyph IS the mark. See assets/brand/seal-mark.svg. */
function SealLogo({
  showSubtext = true,
  inverse = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: inverse ? '#fff' : 'var(--color-brand-primary)',
      display: 'flex'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 60 60",
    width: "40",
    height: "40"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "30",
    r: "27",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeDasharray: "3 3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "30",
    r: "21",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: "30",
    y: "34",
    textAnchor: "middle",
    fontFamily: "'Special Elite', monospace",
    fontSize: "14",
    fill: "currentColor"
  }, "R"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-logo)',
      color: inverse ? '#fff' : 'var(--color-brand-primary)',
      letterSpacing: '0.02em'
    }
  }, "RA\xCDZ"), showSubtext && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-stamp)',
      fontSize: '0.68rem',
      color: inverse ? 'var(--raiz-footer-muted)' : 'var(--color-text-secondary)',
      letterSpacing: '0.03em'
    }
  }, "Asesores en Extranjer\xEDa")));
}
Object.assign(__ds_scope, { SealLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SealLogo.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/** Dark footer: wordmark + tagline, two link columns, legal disclaimer, copyright bar. */
function Footer({
  navLinks = [],
  legalLinks = []
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-bg-footer)',
      color: 'var(--raiz-footer-text)',
      padding: '56px 0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1.6fr',
      gap: 32,
      paddingBottom: 32,
      borderBottom: '1px solid var(--raiz-footer-rule)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.SealLogo, {
    inverse: true,
    showSubtext: false
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--raiz-footer-muted)',
      fontSize: '0.9rem',
      marginTop: 6
    }
  }, "Asesor\xEDa Migratoria Digital en Galicia.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      fontSize: '0.9rem',
      marginBottom: 12
    }
  }, "Navegaci\xF3n"), navLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      display: 'block',
      color: 'var(--raiz-footer-link)',
      fontSize: '0.9rem',
      marginBottom: 8,
      textDecoration: 'none'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      fontSize: '0.9rem',
      marginBottom: 12
    }
  }, "Legal"), legalLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      display: 'block',
      color: 'var(--raiz-footer-link)',
      fontSize: '0.9rem',
      marginBottom: 8,
      textDecoration: 'none'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--raiz-footer-fine)',
      lineHeight: 1.5,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Disclaimer Legal:"), " \"Ra\xEDz Asesores\" es una agencia de representaci\xF3n administrativa y gesti\xF3n documental (Ley 39/2015). No somos un despacho de abogados colegiados en Espa\xF1a."))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.RootWordmark, {
    width: 220,
    inverse: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 12,
      fontSize: '0.82rem',
      color: 'var(--raiz-footer-fine)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\xA9 2026 Ra\xEDz - Asesores Expertos en Extranjer\xEDa. Todos los derechos reservados."))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
/** Sticky top navbar with wordmark, in-page links and a primary CTA. */
function Navbar({
  links = [],
  ctaLabel = 'Consulta Gratis',
  ctaHref = '#contacto'
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(241, 235, 216, 0.92)',
      backdropFilter: 'blur(6px)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SealLogo, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      fontWeight: 500,
      fontSize: '0.95rem',
      color: 'var(--color-text-primary)',
      textDecoration: 'none'
    }
  }, l.label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: ctaHref
  }, ctaLabel))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/process/ProcessTracker.jsx
try { (() => {
const ROW_HEIGHT = 132;
const TRUNK_X = 42;
const COL_WIDTH = 84;

/** Decorative root/branch line art: a dashed trunk running top-to-bottom with
 * thin forest/gold fiber-lines fanning out and back in between each stage —
 * an original illustration built around "Raíz" (root), not a copy of any
 * reference artwork. */
function RootLines({
  rows
}) {
  const total = rows * ROW_HEIGHT;
  const cx = TRUNK_X;
  const segments = [];
  for (let i = 0; i < rows; i++) {
    const yTop = i * ROW_HEIGHT;
    const yMid = yTop + ROW_HEIGHT / 2;
    const yBot = yTop + ROW_HEIGHT;
    segments.push(/*#__PURE__*/React.createElement("line", {
      key: `trunk-${i}`,
      x1: cx,
      y1: yTop,
      x2: cx,
      y2: yBot,
      stroke: "var(--raiz-rule)",
      strokeWidth: "1.5",
      strokeDasharray: "1 5",
      strokeLinecap: "round"
    }));
    if (i < rows - 1) {
      const spread = 22 + i * 5;
      segments.push(/*#__PURE__*/React.createElement("path", {
        key: `fiber-l-${i}`,
        d: `M ${cx},${yMid} C ${cx - spread},${yMid + 18} ${cx - spread},${yBot - 14} ${cx},${yBot + 6}`,
        stroke: "var(--raiz-forest-light)",
        strokeWidth: "1",
        fill: "none",
        opacity: "0.55"
      }));
      segments.push(/*#__PURE__*/React.createElement("path", {
        key: `fiber-r-${i}`,
        d: `M ${cx},${yMid} C ${cx + spread},${yMid + 18} ${cx + spread},${yBot - 14} ${cx},${yBot + 6}`,
        stroke: "var(--color-brand-accent)",
        strokeWidth: "1",
        fill: "none",
        opacity: "0.55"
      }));
      segments.push(/*#__PURE__*/React.createElement("path", {
        key: `fiber-l2-${i}`,
        d: `M ${cx},${yMid} C ${cx - spread * 0.55},${yMid + 30} ${cx - spread * 0.55},${yBot - 4} ${cx},${yBot + 6}`,
        stroke: "var(--raiz-forest-light)",
        strokeWidth: "0.75",
        fill: "none",
        opacity: "0.3"
      }));
    }
  }
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${COL_WIDTH} ${total}`,
    width: COL_WIDTH,
    height: total,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      overflow: 'visible'
    },
    "aria-hidden": "true"
  }, segments);
}

/** Vertical, root-branching stage tracker: a dashed trunk descends top-to-bottom
 * with thin forest/gold fibers linking each stamped stage number to the next —
 * built for the Raíz brand (root/growth imagery, Fraunces + Special Elite type,
 * forest/gold palette), not any other studio's typography or line art. */
function ProcessTracker({
  steps,
  active,
  onChange,
  orientation = 'vertical'
}) {
  const [internalActive, setInternalActive] = React.useState(0);
  const activeIndex = active != null ? active : internalActive;
  const setActive = onChange || setInternalActive;
  const count = steps.length;
  if (orientation === 'horizontal') {
    const pct = count > 1 ? activeIndex / (count - 1) * 100 : 0;
    const current = steps[activeIndex];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        padding: '0 6px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: 2,
        borderTop: '1.5px dashed var(--raiz-rule)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -1.5,
        left: 0,
        height: 3,
        width: `${pct}%`,
        background: 'var(--color-brand-accent)',
        transition: 'width 0.3s ease'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: -11
      }
    }, steps.map((s, i) => {
      const isActive = i === activeIndex;
      const isPast = i < activeIndex;
      return /*#__PURE__*/React.createElement("button", {
        key: s.label,
        onClick: () => setActive(i),
        "aria-label": s.label,
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 22,
          height: 22,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-stamp)',
          fontSize: 11,
          background: isActive || isPast ? 'var(--color-brand-accent)' : 'var(--color-bg-page)',
          border: `1.5px solid ${isActive || isPast ? 'var(--color-brand-accent)' : 'var(--raiz-rule)'}`,
          color: isActive || isPast ? '#fff' : 'var(--color-text-secondary)',
          transition: 'background 0.2s ease, border-color 0.2s ease'
        }
      }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-stamp)',
          fontSize: '0.7rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
          whiteSpace: 'nowrap'
        }
      }, s.label));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40,
        background: 'var(--color-bg-surface)',
        border: '1px solid var(--raiz-rule)',
        borderRadius: 'var(--radius-base)',
        boxShadow: 'var(--shadow-card)',
        padding: '28px 32px',
        display: 'flex',
        gap: 24,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-stamp)',
        fontSize: '1.6rem',
        color: 'var(--color-brand-accent)',
        border: '2px solid var(--color-brand-accent)',
        borderRadius: '50%',
        width: 56,
        height: 56,
        minWidth: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate(-4deg)'
      }
    }, String(activeIndex + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: '0 0 8px',
        fontFamily: 'var(--font-display)',
        fontSize: '1.2rem',
        color: 'var(--color-brand-primary)'
      }
    }, current.label), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--color-text-secondary)',
        fontSize: '0.98rem'
      }
    }, current.body))));
  }

  // Vertical / root mode (default)
  const total = count * ROW_HEIGHT;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: COL_WIDTH,
      height: total,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(RootLines, {
    rows: count
  }), steps.map((s, i) => {
    const isActive = i === activeIndex;
    const yMid = i * ROW_HEIGHT + ROW_HEIGHT / 2;
    return /*#__PURE__*/React.createElement("button", {
      key: s.label,
      onClick: () => setActive(i),
      "aria-label": s.label,
      style: {
        position: 'absolute',
        top: yMid,
        left: TRUNK_X,
        transform: 'translate(-50%, -50%)',
        width: isActive ? 52 : 40,
        height: isActive ? 52 : 40,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-stamp)',
        fontSize: isActive ? 16 : 13,
        background: isActive ? 'var(--color-brand-primary)' : 'var(--color-bg-page)',
        border: `2px solid ${isActive ? 'var(--color-brand-accent)' : 'var(--raiz-rule)'}`,
        color: isActive ? '#fff' : 'var(--color-text-secondary)',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        boxShadow: isActive ? 'var(--shadow-card)' : 'none'
      }
    }, String(i + 1).padStart(2, '0'));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, steps.map((s, i) => {
    const isActive = i === activeIndex;
    return /*#__PURE__*/React.createElement("div", {
      key: s.label,
      onClick: () => setActive(i),
      style: {
        height: ROW_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        cursor: 'pointer',
        opacity: isActive ? 1 : 0.6,
        transition: 'opacity 0.25s ease'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-stamp)',
        fontSize: '0.72rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--color-brand-accent)',
        marginBottom: 6
      }
    }, "Etapa ", String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: '0 0 8px',
        fontFamily: 'var(--font-display)',
        fontSize: '1.3rem',
        color: 'var(--color-brand-primary)'
      }
    }, s.label), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--color-text-secondary)',
        fontSize: '0.98rem',
        maxWidth: 460
      }
    }, s.body));
  })));
}
Object.assign(__ds_scope, { ProcessTracker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/process/ProcessTracker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/raiz-website/App.jsx
try { (() => {
const {
  SiteNavbar,
  Home,
  Blog
} = window;
function App() {
  const [page, setPage] = React.useState('home');
  const onNavigate = (target, anchor) => {
    if (target === page) {
      if (anchor) document.getElementById(anchor)?.scrollIntoView({
        behavior: 'smooth'
      });else window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    setPage(target);
    window.scrollTo(0, 0);
    if (anchor) {
      requestAnimationFrame(() => {
        setTimeout(() => document.getElementById(anchor)?.scrollIntoView({
          behavior: 'smooth'
        }), 50);
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--color-bg-page)',
      color: 'var(--color-text-primary)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement(SiteNavbar, {
    page: page,
    onNavigate: onNavigate
  }), page === 'home' ? /*#__PURE__*/React.createElement(Home, {
    onNavigate: onNavigate
  }) : /*#__PURE__*/React.createElement(Blog, {
    onNavigate: onNavigate
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/raiz-website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/raiz-website/Blog.jsx
try { (() => {
const {
  Eyebrow,
  Footer
} = window.RaZDesignSystem_d00590;
const POSTS = [{
  id: 'post-arraigo',
  date: '07 JUL 2026',
  title: 'Arraigo social vs. arraigo laboral: cuál te conviene en 2026',
  excerpt: 'Las diferencias reales de tiempo, requisitos y contrato que marcan qué vía es más rápida para tu caso.',
  body: ['Cada año llegan a nuestra oficina en Vigo decenas de personas convencidas de que solo existe "el arraigo", como si fuera un único trámite. En realidad hay varias vías, y elegir la correcta desde el primer día es lo que separa un expediente resuelto en meses de uno atascado durante años.', ['Arraigo social', 'Pensado para quienes llevan al menos tres años de permanencia continuada en España y cuentan con un contrato de trabajo de al menos un año, o con un informe de arraigo emitido por la comunidad autónoma que acredite integración social.'], ['Arraigo laboral', 'Requiere solo dos años de permanencia, un año menos que el social, pero a cambio exige poder demostrar una relación laboral previa, normalmente mediante una resolución judicial o un acta de la Inspección de Trabajo.'], ['¿Cuál elegir?', 'La respuesta depende de tu historial laboral y de si puedes conseguir una oferta de contrato sólida. Presentar por la vía equivocada es una de las causas más comunes de rechazo.']]
}, {
  id: 'post-nietos',
  date: '28 JUN 2026',
  title: "Ley de Nietos: quién puede pedir la nacionalidad por memoria democrática",
  excerpt: 'Requisitos de ascendencia, documentación en origen y plazos del procedimiento que menos se conoce.',
  body: ['La conocida como "Ley de Nietos" amplió el acceso a la nacionalidad española a los descendientes de quienes perdieron o tuvieron que renunciar a su nacionalidad de origen por el exilio durante la Guerra Civil y la dictadura.', ['Quién puede solicitarla', 'Hijos e hijas de españolas o españoles de origen, y nietos y nietas cuyo abuelo o abuela perdió o tuvo que renunciar a la nacionalidad española por las circunstancias históricas recogidas en la ley.'], ['La documentación, el verdadero reto', 'El cuello de botella no suele ser el derecho en sí, sino reunir las partidas de nacimiento, matrimonio y defunción de varias generaciones, emitidas en registros civiles de otros países y con apostilla de La Haya.']]
}, {
  id: 'post-apostilla',
  date: '14 JUN 2026',
  title: 'Cómo evitar el rechazo por errores en la apostilla',
  excerpt: 'Los tres fallos documentales más comunes que retrasan un expediente meses, y cómo revisarlos antes.',
  body: ['La apostilla de La Haya certifica que un documento público extranjero es válido para usarse en España, pero es también el punto donde más expedientes se rechazan por detalles que parecen menores y no lo son.', ['1. Caducidad del documento base', 'Certificados de antecedentes penales, partidas de nacimiento o certificados de estado civil suelen tener una validez limitada, normalmente de tres a seis meses.'], ['2. Apostilla sobre copia, no sobre original', 'En varios países la apostilla debe colocarse sobre el documento original emitido por la autoridad competente, no sobre una fotocopia.'], ['3. Traducción jurada incompleta', 'Un documento correctamente apostillado pero traducido por un traductor no jurado puede ser rechazado igualmente.']]
}, {
  id: 'post-estudiante',
  date: '02 JUN 2026',
  title: 'De estudiante a residente: qué hacer al terminar tus estudios en Vigo',
  excerpt: 'Los pasos y plazos para pasar de visado de estudios a permiso de residencia y trabajo sin perder tu situación legal.',
  body: ['Cada junio, decenas de graduados de la Universidade de Vigo y de escuelas de negocio de la ciudad se enfrentan a la misma pregunta: ¿qué pasa con mi situación legal cuando termina el curso académico?', ['La modificación de estancia por estudios a residencia', 'Se puede modificar a una autorización de residencia y trabajo por cuenta ajena o propia, siempre que se solicite antes de que caduque la autorización de estudios vigente.'], ['El margen de tiempo importa', 'Conviene iniciar el trámite entre 60 días antes y 90 días después de la finalización de los estudios, según el caso.']]
}];
function PostEntry({
  post
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    id: post.id,
    style: {
      borderBottom: '1px dashed var(--color-border)',
      padding: '32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 24,
      cursor: 'pointer'
    },
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.35rem',
      color: 'var(--color-brand-primary)',
      margin: 0
    }
  }, post.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-text-secondary)',
      marginTop: 8
    }
  }, post.excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      fontWeight: 600,
      color: 'var(--color-brand-primary-hover)',
      marginTop: 8,
      display: 'inline-block'
    }
  }, open ? 'Ocultar artículo ↑' : 'Leer artículo completo ↓')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-stamp)',
      fontSize: '0.75rem',
      color: 'var(--color-brand-accent)',
      whiteSpace: 'nowrap'
    }
  }, post.date)), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      color: 'var(--color-text-secondary)',
      maxWidth: 700
    }
  }, post.body.map((block, i) => Array.isArray(block) ? /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--color-brand-primary)',
      fontSize: '1.1rem',
      marginTop: 20,
      fontFamily: 'var(--font-display)'
    }
  }, block[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 14
    }
  }, block[1])) : /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      marginBottom: 14
    }
  }, block))));
}
function Blog({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: '70px 24px 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Recursos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-blog-hero)',
      fontFamily: 'var(--font-display)',
      color: 'var(--color-brand-primary)'
    }
  }, "El Blog de Ra\xEDz"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      color: 'var(--color-text-secondary)',
      maxWidth: 620
    }
  }, "Gu\xEDas claras, sin jerga legal, escritas por nuestro equipo de asesores en extranjer\xEDa.")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: '0 24px 88px'
    }
  }, POSTS.map(p => /*#__PURE__*/React.createElement(PostEntry, {
    key: p.id,
    post: p
  }))), /*#__PURE__*/React.createElement(Footer, {
    navLinks: [{
      label: 'Servicios',
      href: '#'
    }, {
      label: 'Cómo Trabajamos',
      href: '#'
    }, {
      label: 'Blog',
      href: '#'
    }],
    legalLinks: [{
      label: 'Aviso Legal',
      href: '#'
    }, {
      label: 'Política de Privacidad',
      href: '#'
    }, {
      label: 'Términos y Condiciones',
      href: '#'
    }]
  }));
}
window.Blog = Blog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/raiz-website/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/raiz-website/Home.jsx
try { (() => {
const {
  Eyebrow,
  Button,
  FileCard,
  ServiceCard,
  ProcessTracker,
  BlogCard,
  FormField,
  TextInput,
  Select,
  Textarea,
  Footer
} = window.RaZDesignSystem_d00590;
const SERVICES = [{
  title: 'Tipos de Arraigo',
  body: 'Social, Laboral, Familiar o para la Formación. Te guiamos para elegir la vía más rápida y segura si llevas más de 2 años en España.'
}, {
  title: 'Nacionalidad Española',
  body: 'Tramitación acelerada por residencia (Iberoamericanos en 2 años) y expedientes complejos de la Ley de Memoria Democrática (Ley de Nietos).'
}, {
  title: 'Modificación de Estancia',
  body: 'Paso de visado de estudiante a permiso de residencia y trabajo. Ideal para graduados de la UVigo y escuelas de negocios.'
}, {
  title: 'Renovaciones Inmediatas',
  body: 'Renovación de permisos sin esperas, evitando caducidades que pongan en riesgo tu situación legal o laboral.'
}];
const POSTS = [{
  date: '07 JUL 2026',
  title: 'Arraigo social vs. arraigo laboral: cuál te conviene en 2026',
  excerpt: 'Las diferencias reales de tiempo, requisitos y contrato que marcan qué vía es más rápida para tu caso.'
}, {
  date: '28 JUN 2026',
  title: 'Ley de Nietos: quién puede pedir la nacionalidad por memoria democrática',
  excerpt: 'Requisitos de ascendencia, documentación en origen y plazos del procedimiento que menos se conoce.'
}, {
  date: '14 JUN 2026',
  title: 'Cómo evitar el rechazo por errores en la apostilla',
  excerpt: 'Los tres fallos documentales más comunes que retrasan un expediente meses, y cómo revisarlos antes.'
}];
function ContactForm() {
  const [status, setStatus] = React.useState(null);
  const submit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (!data.get('nombre') || !data.get('telefono') || !data.get('email') || !data.get('situacion')) {
      setStatus({
        type: 'error',
        msg: 'Por favor, completa los campos obligatorios.'
      });
      return;
    }
    setStatus({
      type: 'success',
      msg: '¡Gracias! Hemos recibido tus datos, te contactaremos en menos de 2 horas hábiles.'
    });
    e.target.reset();
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      background: 'var(--color-bg-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-base)',
      padding: 32,
      boxShadow: 'var(--shadow-card)'
    },
    noValidate: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.1rem',
      marginBottom: 18,
      fontFamily: 'var(--font-display)',
      color: 'var(--color-brand-primary)'
    }
  }, "O d\xE9janos tus datos y te llamamos"), /*#__PURE__*/React.createElement(FormField, {
    label: "Nombre completo",
    htmlFor: "nombre"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "nombre",
    name: "nombre",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Tel\xE9fono / WhatsApp",
    htmlFor: "telefono"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "telefono",
    name: "telefono",
    type: "tel",
    required: true
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Correo electr\xF3nico",
    htmlFor: "email"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "email",
    name: "email",
    type: "email",
    required: true
  }))), /*#__PURE__*/React.createElement(FormField, {
    label: "Tu situaci\xF3n",
    htmlFor: "situacion"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "situacion",
    name: "situacion",
    required: true,
    placeholder: "Selecciona una opci\xF3n",
    options: ['Arraigo social', 'Arraigo laboral', 'Arraigo para la formación', 'Nacionalidad española', 'Ley de Nietos', 'Modificación de estancia', 'Renovación de permiso', 'Otro']
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Cu\xE9ntanos brevemente tu caso (opcional)",
    htmlFor: "mensaje"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "mensaje",
    name: "mensaje"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    type: "submit"
  }, "Enviar y reservar mi evaluaci\xF3n"), status && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: '0.9rem',
      fontWeight: 600,
      color: status.type === 'success' ? 'var(--color-status-success)' : 'var(--color-status-danger)'
    }
  }, status.msg), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--color-text-secondary)',
      marginTop: 8,
      marginBottom: 0
    }
  }, "Tus datos se guardan de forma segura y solo se usan para contactarte sobre tu consulta."));
}
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '110px 0 100px',
      overflow: 'hidden',
      background: 'var(--color-bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: '0 24px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Asesor\xEDa migratoria \xB7 Vigo, Galicia"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-hero)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      lineHeight: 1.15,
      color: 'var(--color-text-primary)',
      margin: '0 0 16px'
    }
  }, "Haz lo mejor que puedas, ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--color-brand-primary)'
    }
  }, "que de los papeles nos encargamos nosotros.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-hero-lead)',
      color: 'var(--color-text-secondary)',
      maxWidth: 560
    }
  }, "Tr\xE1mites de extranjer\xEDa en Galicia ", /*#__PURE__*/React.createElement("strong", null, "100% online y sin citas previas"), ". Evaluamos tu viabilidad y radicamos tu expediente con rigurosidad t\xE9cnica para evitar rechazos."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "large",
    onClick: () => onNavigate('home', 'contacto')
  }, "Evaluar mi caso por WhatsApp"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--color-brand-primary-hover)',
      fontWeight: 600,
      marginTop: 12
    }
  }, "\u2713 Estudio previo sin compromiso"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '6%',
      top: '42%',
      transform: 'rotate(-9deg) translateY(-50%)',
      color: 'var(--color-status-danger)',
      opacity: 0.9
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 160 160",
    width: "140",
    height: "140"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "80",
    r: "72",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "80",
    r: "60",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    id: "stampCirclePath",
    d: "M 80,20 A 60,60 0 1 1 79.9,20",
    fill: "none"
  }), /*#__PURE__*/React.createElement("text", {
    fontFamily: "'Special Elite', monospace",
    fontSize: "11",
    letterSpacing: "2",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("textPath", {
    href: "#stampCirclePath",
    startOffset: "2%"
  }, "100% TELEM\xC1TICO \xB7 SIN CITA PREVIA \xB7 ")), /*#__PURE__*/React.createElement("text", {
    x: "80",
    y: "76",
    textAnchor: "middle",
    fontFamily: "'Special Elite', monospace",
    fontSize: "16",
    fill: "currentColor"
  }, "CERO"), /*#__PURE__*/React.createElement("text", {
    x: "80",
    y: "96",
    textAnchor: "middle",
    fontFamily: "'Special Elite', monospace",
    fontSize: "16",
    fill: "currentColor"
  }, "RECHAZOS")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-bg-section-tint)',
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Tu expediente, hoy"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-section-title)',
      fontFamily: 'var(--font-display)',
      color: 'var(--color-brand-primary)',
      marginBottom: 8
    }
  }, "\xBFCansado de la burocracia y las esperas?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      color: 'var(--color-text-secondary)',
      maxWidth: 620,
      marginBottom: 48
    }
  }, "As\xED es como se siente tramitar solo. As\xED es como lo resolvemos nosotros."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(FileCard, {
    tabLabel: "Expediente 01",
    problemTitle: "Citas Imposibles",
    problemText: "Conseguir cita en la Oficina de Extranjer\xEDa en Vigo es frustrante, semanas de espera para un simple registro.",
    solutionText: "Presentamos por Mercurio, v\xEDa telem\xE1tica, al instante. Sin salas de espera."
  }), /*#__PURE__*/React.createElement(FileCard, {
    tabLabel: "Expediente 02",
    problemTitle: "Miedo al Rechazo",
    problemText: "Un error m\xEDnimo, una apostilla caducada, un formulario mal marcado, te cuesta meses de tu vida.",
    solutionText: "Equipo de m\xE1sters en extranjer\xEDa con doble auditor\xEDa documental antes de radicar."
  }), /*#__PURE__*/React.createElement(FileCard, {
    tabLabel: "Expediente 03",
    problemTitle: "Abogados Car\xEDsimos",
    problemText: "Cobros excesivos por adelantado, sin garant\xEDa real y sin explicarte en qu\xE9 punto est\xE1 tu caso.",
    solutionText: "Honorarios justos por hitos: 50% \u2013 30% \u2013 20%. Pagas seg\xFAn avanzamos."
  })))), /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    style: {
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Qu\xE9 tramitamos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-section-title)',
      fontFamily: 'var(--font-display)',
      color: 'var(--color-brand-primary)',
      marginBottom: 8
    }
  }, "Nuestros Tr\xE1mites Especializados"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 28,
      marginTop: 24
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.title,
    title: s.title
  }, s.body))))), /*#__PURE__*/React.createElement("section", {
    id: "metodologia",
    style: {
      background: 'var(--color-bg-page)',
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "C\xF3mo trabajamos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-section-title)',
      fontFamily: 'var(--font-display)',
      color: 'var(--color-brand-primary)',
      marginBottom: 8
    }
  }, "M\xE9todo \"Cero Rechazos\""), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      color: 'var(--color-text-secondary)',
      maxWidth: 620,
      marginBottom: 48
    }
  }, "Tres etapas, desde la ra\xEDz. Toca un n\xFAmero para resaltarlo."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(ProcessTracker, {
    steps: [{
      label: 'Diagnóstico',
      body: 'Análisis de viabilidad inicial. Si no es viable, no te cobramos.'
    }, {
      label: 'Auditoría',
      body: 'Revisión exhaustiva de apostillas y caducidad de documentos (Colombia, Perú, Cuba...).'
    }, {
      label: 'Radicación',
      body: 'Envío telemático seguro como Representantes Voluntarios Administrativos.'
    }]
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Recursos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-section-title)',
      fontFamily: 'var(--font-display)',
      color: 'var(--color-brand-primary)',
      marginBottom: 8
    }
  }, "Del Blog de Ra\xEDz"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      color: 'var(--color-text-secondary)',
      maxWidth: 620,
      marginBottom: 48
    }
  }, "Gu\xEDas claras, sin jerga legal, para entender tu situaci\xF3n antes de tu cita con nosotros."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 30
    }
  }, POSTS.map(p => /*#__PURE__*/React.createElement(BlogCard, {
    key: p.title,
    date: p.date,
    title: p.title,
    excerpt: p.excerpt,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('blog');
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate('blog')
  }, "Ver todos los art\xEDculos")))), /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      background: 'var(--color-bg-section-tint)',
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Da el primer paso"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-contact-title)',
      fontFamily: 'var(--font-display)',
      color: 'var(--color-brand-primary)'
    }
  }, "Da el primer paso hacia tu tranquilidad legal"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, "Cu\xE9ntanos tu situaci\xF3n y uno de nuestros expertos la analizar\xE1. Trabajamos principalmente en Vigo y toda la provincia de Pontevedra."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    href: "https://wa.me/34000000000"
  }, "\uD83D\uDCAC Escr\xEDbenos por WhatsApp")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--color-text-secondary)',
      marginTop: 16
    }
  }, "Respuesta en menos de 2 horas h\xE1biles.")), /*#__PURE__*/React.createElement(ContactForm, null))), /*#__PURE__*/React.createElement(Footer, {
    navLinks: [{
      label: 'Servicios',
      href: '#servicios'
    }, {
      label: 'Cómo Trabajamos',
      href: '#metodologia'
    }, {
      label: 'Blog',
      href: '#'
    }],
    legalLinks: [{
      label: 'Aviso Legal',
      href: '#'
    }, {
      label: 'Política de Privacidad',
      href: '#'
    }, {
      label: 'Términos y Condiciones',
      href: '#'
    }]
  }));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/raiz-website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/raiz-website/SiteNavbar.jsx
try { (() => {
const {
  SealLogo,
  Button
} = window.RaZDesignSystem_d00590;

/** Site chrome: sticky navbar (with page-aware links) used by both Home and Blog screens. */
function SiteNavbar({
  page,
  onNavigate
}) {
  const linkStyle = {
    fontWeight: 500,
    fontSize: '0.95rem',
    color: 'var(--color-text-primary)',
    textDecoration: 'none',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(241, 235, 216, 0.92)',
      backdropFilter: 'blur(6px)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => onNavigate('home')
  }, /*#__PURE__*/React.createElement(SealLogo, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: linkStyle,
    onClick: () => onNavigate('home', 'servicios')
  }, "Servicios"), /*#__PURE__*/React.createElement("a", {
    style: linkStyle,
    onClick: () => onNavigate('home', 'metodologia')
  }, "C\xF3mo Trabajamos"), /*#__PURE__*/React.createElement("a", {
    style: linkStyle,
    onClick: () => onNavigate('blog')
  }, "Blog"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate('home', 'contacto')
  }, "Consulta Gratis"))));
}
window.SiteNavbar = SiteNavbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/raiz-website/SiteNavbar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.StepStamp = __ds_scope.StepStamp;

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.FileCard = __ds_scope.FileCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.RootWordmark = __ds_scope.RootWordmark;

__ds_ns.SealLogo = __ds_scope.SealLogo;

__ds_ns.ProcessTracker = __ds_scope.ProcessTracker;

})();
