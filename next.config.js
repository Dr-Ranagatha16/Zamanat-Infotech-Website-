/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextui.org', // Add the domain here
        port: '', // Leave blank if no specific port
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000', // Add port if your localhost runs on a specific port
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '', // Leave blank if no specific port
      },
    ],
  },
};

module.exports = nextConfig;
