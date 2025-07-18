/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.clerk.com'],
  },
  experimental:{
    turbo:false,
  }
};

export default nextConfig;
