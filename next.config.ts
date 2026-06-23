import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Esto lo mantenemos para que ignore los tipos de las carpetas de las IA
    ignoreBuildErrors: true,
  },
};

export default nextConfig;