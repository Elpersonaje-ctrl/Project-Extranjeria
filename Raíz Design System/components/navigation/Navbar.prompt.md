Navbar — sticky, blurred header used identically on every page (homepage, blog). Wordmark left, nav links + primary CTA right.

```jsx
<Navbar
  links={[
    { label: 'Servicios', href: '#servicios' },
    { label: 'Cómo Trabajamos', href: '#metodologia' },
    { label: 'Blog', href: 'blog.html' },
  ]}
  ctaLabel="Consulta Gratis"
  ctaHref="#contacto"
/>
```

On mobile the source hides all links except the CTA button — replicate with a media query if building responsive.
