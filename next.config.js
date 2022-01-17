/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/missions",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
