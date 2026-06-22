# ¿Qué Decís? — Plataforma Inclusiva para Personas con Discapacidad Auditiva

Este es el repositorio oficial de la **Landing Page Profesional y Demostrador Interactivo** de **¿Qué Decís?**, una aplicación web progresiva (PWA) de asistencia de comunicación instantánea diseñada específicamente para personas con hipoacusia, sordera oralizada o señante.

La plataforma resuelve la barrera dialógica cotidiana entre personas con discapacidad auditiva y personas oyentes en espacios públicos como bancos, consultorios médicos, comercios, universidades y oficinas de atención al ciudadano.

---

## 🚀 Características Clave del MVP

- **Voz a Texto en Tiempo Real:** Captura el audio hablado de la persona oyente usando la API nativa de reconocimiento de voz (`Web Speech API`) y lo muestra en la pantalla en **letras gigantes de alto contraste**.
- **Texto a Voz Instantáneo:** Permite que el usuario con disminución auditiva escriba una respuesta y la reproduzca mediante voz artificial sintetizada (`SpeechSynthesisUtterance`).
- **Tablero de Frases Rápidas:** Permite guardar y categorizar plantillas de respuestas frecuentes para interactuar en un segundo (ej: *"Hola, soy sordo. Por favor hablame despacio y de frente."*).
- **Diseño Mobile-First y Ergonómico:** Posicionamiento de controles interactivos en el tercio inferior para permitir un uso cómodo con una sola mano.
- **Privacidad Local Absoluta:** No guarda textos ni pistas de audio en servidores externos ni bases de datos de telemetría. Todo se procesa localmente en el dispositivo.
- **Preparada para PWA:** Archivo de manifiesto configurado para agregarse de manera directa a la pantalla de inicio del smartphone de forma offline.

---

## 🛠️ Arquitectura y Tecnologías Utilizadas

- **Framework:** React 19 + TypeScript (arquitectura escalable y componentes desacoplados).
- **Estilos:** TailwindCSS (bajo contraste accesible WCAG 2.2 Nivel AA).
- **Tipografía:** Atkinson Hyperlegible & Inter (óptima lectura a distancia).
- **Iconografía:** Lucide React (simplicidad y claridad cognitiva).
- **Empaquetador:** Vite para una recarga inmediata ultra-veloz.

---

## 💻 Instrucciones para la Instalación y Uso Local

Para ejecutar el proyecto de forma local en tu computadora y comenzar a desarrollar, sigue estos sencillos pasos:

### 1. Requisitos Previos

Asegúrate de tener instalada una versión estable de [Node.js](https://nodejs.org/) (versión 18 o superior recomendada) y su administrador de paquetes `npm`.

### 2. Clonar el repositorio o descargar el código

Si tienes el código comprimido o en un entorno Git, accede a la carpeta del proyecto a través de la consola:

```bash
cd que-decis-landing
```

### 3. Instalar las dependencias

Ejecuta el siguiente comando para descargar e instalar todas las dependencias del ecosistema en tu máquina local:

```bash
npm install
```

### 4. Lanzar el Servidor de Desarrollo

Una vez completada la instalación de paquetes, inicia el entorno de pruebas local usando:

```bash
npm run dev
```

El servidor local se levantará de inmediato. Puedes abrir tu navegador favorito e ingresar a:

**`http://localhost:3000`** *(o el puerto asignado por tu consola)*

---

## 🧑‍🦽 Estrategia de Accesibilidad Web (WCAG 2.2 AA)

Este desarrollo cumple estrictamente con las regulaciones internacionales de accesibilidad inclusiva:
- **Marcado Semántico:** Uso riguroso de etiquetas HTML5 (`<header>`, `<main>`, `<footer>`, `<section>`).
- **Navegación por Teclado:** Todas las tarjetas e inputs interactivos son localizables secuencialmente usando el tabulador y contienen un borde (`focus-visible`) grueso en color naranja de máxima visibilidad.
- **Roles ARIA completos:** Se implementaron botones alternativos con especificación de estado para menús desplegables (`aria-expanded`, `aria-controls`) y paneles dinámicos de acordeones accesibles.
- **Alternativa Simulación en Sandbox:** Dado que muchos navegadores bloquean el uso de micrófono o el acceso a internet dentro de contenedores `iframe` de vista previa, el simulador incluye un **botón de simulación manual con teclado** para probar los flujos sin bloqueos de red por hardware en el visor.

---

## 📄 Licencia

Este proyecto cuenta con una Licencia Comunitaria de Código Abierto. Siéntete libre de clonarlo, incorporarle mejoras o adaptarlo a las dependencias de accesibilidad de tu región. ¡La inclusión la construimos juntos/as!
