import type { Metadata, Viewport } from "next";
import { Inter, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  variable: "--font-atkinson",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "¿Qué Decís? - Comunicación Inclusiva | Voz a Texto y Texto a Voz",
  description: "Landing page oficial de '¿Qué Decís?', la aplicación móvil accesible y offline que rompe barreras de comunicación para personas sordas, hipoacúsicas y oyentes en consultorios, bancos, comercios y espacios públicos.",
  keywords: "sordera, hipoacusia, inclusión, accesibilidad, voz a texto, texto a voz, comunicación accesible, PWA, WCAG 2.2 AA",
  authors: [{ name: "Equipo ¿Qué Decís?" }],
  manifest: "/manifest.json",
  openGraph: {
    title: "¿Qué Decís? - Comunicación Inclusiva para Hipoacusia y Sordera",
    description: "Aplicación móvil accesible de alta conversión voz a texto y texto a voz que permite comunicarse con personas oyentes sin barreras.",
    url: "https://quedecis.app",
    siteName: "¿Qué Decís?",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Qué Decís? - Comunicación Inclusiva",
    description: "Aplicación móvil accesible y offline que rompe barreras de comunicación para personas sordas e hipoacúsicas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${atkinson.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans text-text-dark bg-white antialiased">
        {children}
        {/* Registro del Service Worker para PWA */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                  }, function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
