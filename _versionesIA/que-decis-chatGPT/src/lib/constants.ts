export const siteConfig = {
  name: "¿Qué Decís?",
  description:
    "Aplicación accesible para conversar con apoyo de voz a texto, texto a voz y frases rápidas.",
  url: "https://que-decis.app",
  cta: "Empezar a conversar"
} as const;

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Manual de Instrucciones", href: "#manual" },
  { label: "Preguntas y Respuestas", href: "#preguntas" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" }
] as const;
