/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/work/ffa",
        destination: "/work/ndd",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
