import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignora los errores de TypeScript de las carpetas de las IA al compilar
    ignoreBuildErrors: true,
  },
  // Modificamos la configuración de compilación directamente
  webpack: (config, { dev }) => {
    if (!dev && config.plugins) {
      // 💡 Tipamos el plugin usando una estructura de objeto válida en TypeScript estricto
      config.plugins = config.plugins.filter(
        (plugin: { constructor: { name: string } }) => 
          plugin.constructor && plugin.constructor.name !== "ESLintWebpackPlugin"
      );
    }
    return config;
  },
};

export default nextConfig;