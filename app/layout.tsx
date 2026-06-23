import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "¿Qué Decís? - Comunicación accesible en momentos reales. ",
  description: "Distintas versiones de Landing Pages para la webApp '¿Qué Decís?'. Una web app inclusiva cuyo objetivo es derribar las barreras de comunicación entre personas con distintos grados de disminución auditiva y oyentes.",
  icons: {
    icon: "/image/luma.webp",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased selection:bg-teal-500 selection:text-white min-h-full flex flex-col">
        <div className="relative min-h-screen w-full bg-transparent text-slate-900 flex flex-col justify-between p-6 font-sans selection:bg-teal-500 selection:text-white overflow-hidden">
            
            {/* La Imagen de Fondo Optimizada */}
            <div className="fixed inset-0 -z-10 h-full w-full">
              <Image
                src="/image/_background.png"
                alt="Fondo de la Landing Page con un patrón abstracto y colores suaves"
                quality={75} // Optimiza el peso de la imagen al 75% sin perder calidad notoria
                fill // Hace que la imagen llene todo el div contenedor
                priority
                className="object-cover object-center" // Equivalente a background-size: cover
              />
              {/* Capa de superposición (Overlay) oscura para dar contraste al texto */}
              <div className="absolute inset-0 bg-gray-950/70 backdrop-blur-none" />
            </div>

            {children}

            {/* Footer Académico */}
            <footer className="relative z-10 w-full max-w-md mx-auto text-center mt-10 pt-8 pb-2 border rounded-xl border-slate-200  backdrop-grayscale backdrop-blur-sm shadow-sm">
              <Image
                width={64}
                height={64}
                src="/image/luma.webp"
                alt="Avatar de Luma"
                className="mx-auto w-16 h-16 mb-2"
              />
              <p className="text-xs font-semibold text-slate-100">
                Luciana Quilcate - Alias Luma
              </p>
              <p className="text-xs font-semibold text-slate-100">
                Trabajo Práctico Final - Desarrollo Frontend
              </p>
              <p className="text-xs font-semibold text-slate-100">
                Tecnicatura en Desarrollo de Softwares - IFTS N° 29
              </p>
      
            </footer>
        </div> 
      </body>
    </html>
  );
}
