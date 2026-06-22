import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PwaRegister } from "@/components/pwa-register";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Comunicación accesible`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "accesibilidad auditiva",
    "hipoacusia",
    "sordera oralizada",
    "sordera señante",
    "voz a texto",
    "texto a voz",
    "PWA accesible"
  ],
  authors: [{ name: "Equipo ¿Qué Decís?" }],
  creator: "¿Qué Decís?",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} | Comunicación accesible`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_AR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Comunicación accesible`,
    description: siteConfig.description
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/apple-touch-icon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563EB",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>
        <a
          className="sr-only z-50 rounded-md bg-white px-4 py-3 font-bold text-brand-blue focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          href="#contenido"
        >
          Saltar al contenido principal
        </a>
        {children}
        <PwaRegister />
      </body>
    </html>
  );
}
