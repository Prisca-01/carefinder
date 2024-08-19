/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
  webpack(config, { isServer }) {
    // Add this rule to handle WebAssembly modules
    config.experiments = {
      asyncWebAssembly: true,
      syncWebAssembly: true,
      layers: true, // optional but useful for handling modules
    };

    return config;
  },
};

export default nextConfig;
