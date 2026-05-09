/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/3fuc9dyn/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services_page/zagran_passport',
        destination: '/services_page/legalservices',
        permanent: true,
      },
      {
        source: '/grajdanstvo_ruminaya',
        destination: '/grajdanstvo/romania',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
