/** @type {import('next').NextConfig} */
const nextConfig = {
     webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      // pdfjs-dist tries to require('canvas') for Node.js env,
      // but we only run in the browser, so skip it safely
      canvas: false,
    };
    return config;
  },
};

export default nextConfig;
