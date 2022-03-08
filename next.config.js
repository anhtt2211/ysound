/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_SERVER_URL: 'https://jsonplaceholder.typicode.com',
  },
};

module.exports = nextConfig;
