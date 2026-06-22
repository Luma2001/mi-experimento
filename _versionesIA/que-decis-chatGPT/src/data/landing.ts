export const aboutBlocks = [
  {
    title: "Cuando no se escucha bien, todo se vuelve urgente",
    body: "Un turno médico, una compra o una consulta pueden depender de leer rápido y responder sin presión."
  },
  {
    title: "Creamos una ayuda simple para conversaciones reales",
    body: "¿Qué Decís? pone el texto grande, la voz clara y las frases frecuentes al alcance del pulgar."
  },
  {
    title: "La comunicación también tiene que ser accesible",
    body: "El diseño prioriza contraste, legibilidad, privacidad local y uso cómodo en espacios cotidianos."
  }
] as const;

export const features = [
  {
    title: "Voz a Texto",
    body: "Transcripción grande y legible para entender lo que dice una persona oyente.",
    icon: "mic"
  },
  {
    title: "Texto a Voz",
    body: "Escribís un mensaje y el celular lo reproduce con voz clara.",
    icon: "volume"
  },
  {
    title: "Frases rápidas",
    body: "Guardá respuestas frecuentes para usarlas en segundos.",
    icon: "message"
  },
  {
    title: "Modo privado",
    body: "Pensado para funcionar con conversaciones locales y sin cuentas obligatorias.",
    icon: "shield"
  },
  {
    title: "Una sola mano",
    body: "Botones amplios, acciones cercanas y lectura cómoda en pantallas chicas.",
    icon: "hand"
  },
  {
    title: "Instalable",
    body: "Preparada para agregarse al inicio del celular como una PWA.",
    icon: "phone"
  }
] as const;

export const steps = [
  "Abrí la aplicación.",
  "Presioná Escuchar.",
  "Leé la transcripción.",
  "Respondé usando texto a voz."
] as const;

export const faqs = [
  {
    question: "¿Necesito crear una cuenta?",
    answer: "No. El MVP está pensado para empezar rápido, sin registro obligatorio."
  },
  {
    question: "¿Funciona en cualquier celular?",
    answer:
      "Funciona mejor en celulares modernos con navegador compatible con reconocimiento de voz y síntesis de voz."
  },
  {
    question: "¿Guarda mis conversaciones?",
    answer:
      "La propuesta prioriza privacidad local. Las conversaciones no se guardan en un servidor."
  },
  {
    question: "¿Necesito internet?",
    answer:
      "Algunas funciones del navegador pueden requerir conexión según el dispositivo y el sistema operativo."
  },
  {
    question: "¿Puedo usar frases rápidas?",
    answer:
      "Sí. Podés personalizar frases para consultas médicas, comercios, bancos o clases."
  }
] as const;

export const testimonials = [
  {
    quote:
      "En el consultorio pude leer la indicación sin pedir que repitan todo. Me dio tranquilidad.",
    name: "Marina",
    role: "Persona con hipoacusia"
  },
  {
    quote:
      "Cuando no me entienden, escribo y el celular habla por mí. Es directo y no me expone.",
    name: "Lucía",
    role: "Persona sorda oralizada"
  },
  {
    quote:
      "En la facultad me ayuda a resolver preguntas rápidas en secretaría y pasillos.",
    name: "Tomás",
    role: "Estudiante universitario"
  }
] as const;

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" }
] as const;
