# ¿Qué Decís? Landing Page

Landing page mobile first para una app inclusiva de comunicación Voz -> Texto y Texto -> Voz.

## Stack

- Next.js 15+
- React 19
- TypeScript estricto
- TailwindCSS
- App Router
- Server Components por defecto
- Componentes cliente solo para menú móvil y registro PWA

## Scripts

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Accesibilidad

- HTML semántico.
- Skip link.
- Navegación por teclado.
- Foco visible.
- Áreas táctiles de 44px o más.
- Contraste AA o superior.
- Acordeón con `details` y `summary`.
- Formulario con labels explícitos.

## PWA

Incluye `manifest.ts`, iconos SVG, `sw.js` y registro progresivo del service worker.
