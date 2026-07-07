ProcessTracker — a vertical, root-branching stage tracker: a dashed trunk descends top-to-bottom with thin forest/gold fiber-lines linking each stamped stage number to the next, stage copy stacked to the right. Built around the "Raíz" (root) name — an original line-art motif, not copied from any reference site. Use for any multi-stage process (case methodology, document checklist, onboarding).

```jsx
<ProcessTracker
  steps={[
    { label: 'Diagnóstico', body: 'Análisis de viabilidad inicial. Si no es viable, no te cobramos.' },
    { label: 'Auditoría', body: 'Revisión exhaustiva de apostillas y caducidad de documentos.' },
    { label: 'Radicación', body: 'Envío telemático seguro como Representantes Voluntarios Administrativos.' },
  ]}
/>
```

Uncontrolled by default (clicking a stage number or row highlights it). Pass `active` + `onChange` to control it externally. Pass `orientation="horizontal"` for the earlier left-to-right dashed-track variant.
