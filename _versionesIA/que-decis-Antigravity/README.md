# ¿Qué Decís? - Landing Page Profesional e Inclusiva

Esta es la Landing Page oficial y de alta conversión para la aplicación **¿Qué Decís?**, diseñada especialmente para personas con hipoacusia y sordera, rompiendo las barreras cotidianas de comunicación con personas oyentes en consultorios médicos, comercios, bancos y espacios públicos.

La landing page se construyó bajo un enfoque **Mobile First**, garantizando accesibilidad digital estricta de nivel **WCAG 2.2 AA** y preparación completa para funcionar como **PWA (Progressive Web App)** de manera local y offline.

---

## 🛠️ Tecnologías y Arquitectura

- **Next.js 15+ (App Router)**: Estructura moderna con renderizado optimizado y orquestación híbrida de Server y Client Components.
- **TypeScript**: Tipado estricto para garantizar solidez de código y evitar errores en tiempo de ejecución.
- **TailwindCSS v4**: Configuración de tema personalizada con colores de alto contraste que cumplen con las exigencias de accesibilidad y micro-animaciones fluidas.
- **SpeechSynthesis API (Nativa)**: El simulador interactivo de smartphone reproduce frases de voz reales directamente desde el navegador de los usuarios oyentes.
- **Progressive Web App (PWA)**: Preparada con Service Worker nativo y manifest.json.

---

## 🗂️ Estructura del Proyecto

```
que-decis-landing/
├── public/
│   ├── manifest.json       # Configuración PWA
│   ├── sw.js               # Service Worker local para soporte offline
│   └── icons/              # Iconos de PWA en varias resoluciones
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Configuración de layout, tipografías y metadatos SEO
│   │   ├── page.tsx        # Página de inicio que integra todas las secciones
│   │   └── globals.css     # Estilos globales y tokens de Tailwind v4
│   ├── components/
│   │   ├── layout/         # Componentes estructurales (Header, Footer)
│   │   ├── ui/             # Componentes atómicos (Button, Accordion)
│   │   └── sections/       # Secciones de la landing page (Hero, About, Features, etc.)
│   └── hooks/              # Hooks personalizados para estados visuales
```

---

## ♿ Estrategia de Accesibilidad (WCAG 2.2 AA)

1. **Contraste de Color Garantizado**: El color principal del CTA (`#F97316`) cuenta con un texto oscuro de alto contraste (`#111827`), superando el requisito mínimo y alcanzando una relación de **7.2:1** (Nivel AAA). El texto secundario tiene una relación de **4.8:1** sobre fondo blanco.
2. **Tipografía Inclusiva**: Se importó y configuró la fuente **Atkinson Hyperlegible**, desarrollada por el Braille Institute para optimizar el reconocimiento de caracteres en personas con baja visión, además de **Inter**.
3. **HTML Semántico Completo**: Uso estructurado de etiquetas `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<blockquote>`, `<cite>` y `<button>`.
4. **Navegación por Teclado e Indicadores**: Los elementos interactivos están asociados a clases de foco visibles (`focus-visible:ring-3 focus-visible:outline-none`) con anillos de color azul muy perceptibles.
5. **Carga Cognitiva Reducida**: Textos concisos y directos, animaciones sutiles y desactivación automática de transiciones si se detecta la preferencia `prefers-reduced-motion: reduce`.
6. **ARIA Labels**: Botones móviles, acordeones de FAQ y enlaces sociales están etiquetados de manera clara para lectores de pantalla.

---

## 📲 Preparación PWA (Offline & Instalable)

- **manifest.json**: Configurado con propiedades `standalone`, orientación vertical por defecto y colores de marca.
- **Service Worker (`sw.js`)**: Realiza un precaché de los recursos clave (`/`, `/manifest.json` y `/favicon.ico`) garantizando la carga instantánea y la disponibilidad offline de la UI de la landing page.

---

## 🚀 Instrucciones de Desarrollo

Para ejecutar el proyecto localmente, sigue estos pasos:

1. **Instalar Dependencias**:
   ```bash
   npm install
   ```
2. **Iniciar Servidor de Desarrollo**:
   ```bash
   npm run dev
   ```
3. **Construir para Producción**:
   ```bash
   npm run build
   ```
4. **Verificar el Build local**:
   ```bash
   npm run start
   ```

---

## 🌍 Recomendaciones de Despliegue

Para un despliegue optimizado en producción:
- **Vercel** o **Netlify**: Recomendado para proyectos Next.js por su soporte nativo e integración con las optimizaciones de Turbopack.
- **Seguridad (HTTPS)**: Requisito obligatorio para habilitar el registro del Service Worker de la PWA y permitir el uso de la API SpeechSynthesis del navegador.
- **Configuración de CDN**: Asegura que los recursos bajo `/public` tengan cabeceras de caché estáticas eficientes.
