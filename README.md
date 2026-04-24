# Ley de Datos Personales · Proyecto 1751-D-2026

Sitio explicativo, en primera persona, del **Proyecto de Ley 1751-D-2026** de modernización de la Ley 25.326 de Protección de Datos Personales, presentado por el diputado Martín Yeza en la Honorable Cámara de Diputados de la Nación Argentina.

Este proyecto es una de las tres iniciativas de reforma que hoy conviven en el Congreso argentino. El sitio busca explicarlo con tono humilde, sin exageraciones, desde la voz de su autor.

## Contenido

- `web/` — sitio estático (HTML / CSS / JS vanilla, sin build step)
  - `index.html` — estructura del sitio
  - `styles.css` — estética institucional HCDN
  - `script.js` — interactividad (cursor custom, canvas, scroll-spy, command palette, focus trap, etc.)
- `1751-D-2026.pdf` — texto oficial del proyecto de ley
- `1751-D-2026.txt` — extracción textual para referencia
- `Proyecto Yeza 1751-D-2026_ Reforma Pro-...pdf` — análisis ejecutivo

## Stack

- **HTML/CSS/JS vanilla** — sin framework, sin build
- **Fuentes**: Fraunces + Inter + JetBrains Mono (Google Fonts)
- **Servidor local**: cualquiera que sirva estáticos (ej. `python -m http.server 5173 --directory web`)

## Deploy en Vercel

Este repositorio está listo para desplegar en Vercel:

```bash
# Con Vercel CLI
npx vercel

# O conectar el repo desde el dashboard de Vercel
# Framework Preset: Other
# Root Directory: ./
# Build Command: (ninguno)
# Output Directory: web
```

El archivo [`vercel.json`](./vercel.json) configura:
- `outputDirectory: web` — sirve el contenido de la carpeta `web/`
- Headers de seguridad (CSP, Referrer-Policy, Permissions-Policy)
- Cache long-lived para assets estáticos
- `cleanUrls` y sin trailing slash

## Características UX implementadas

**Accesibilidad (WCAG 2.2 AA)**
- Skip link, `<main>` landmark
- `:focus-visible` con ring dorado
- Focus trap en modales
- `prefers-reduced-motion` respetado en todas las animaciones
- Cursor custom sólo en `pointer: fine`
- Touch targets ≥ 44×44 px

**Mobile**
- Drawer de navegación con focus trap
- Sticky CTA inferior con `safe-area-inset`
- Tipografía fluida con `clamp()`

**Desktop pro**
- TOC flotante con scroll-spy
- Command palette (`Ctrl/Cmd + K`)
- Ajustador de tipografía A- / A / A+ con persistencia
- Anchor-copy buttons en section titles
- Reading time por sección

**Performance**
- Canvas particles pausado cuando está offscreen
- `content-visibility: auto` en secciones largas
- DPR cap en 2 para canvas
- IntersectionObserver para reveals y counters

**Trust signals institucionales**
- Última actualización + link canónico a HCDN
- Banda tricolor argentina en footer
- Escudo institucional

## Licencia

El contenido del proyecto de ley es de dominio público.
El código del sitio puede reutilizarse libremente con atribución.
