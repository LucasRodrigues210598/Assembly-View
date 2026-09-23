/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Alias de import para facilitar desenvolvimento
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/': '/mobibuild/src/'
    };
    return config;
  },
};

export default nextConfig;