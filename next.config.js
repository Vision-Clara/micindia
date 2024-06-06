/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "mlcx8vmjptuhq7il.public.blob.vercel-storage.com",
    ],
  },
};

module.exports = nextConfig;
