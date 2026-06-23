/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignora los errores de TypeScript de las subcarpetas durante la compilación
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignora las advertencias y errores de formato de las subcarpetas al compilar
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;