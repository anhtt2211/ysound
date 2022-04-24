/** @type {import('next').NextConfig} */

const config = {};

config.reactStrictMode = true;

config.publicRuntimeConfig = {
  API_SERVER_URI: process.env.API_SERVER_URI || 'http://localhost:5000',
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

config.serverRuntimeConfig = {};

console.log(config);

module.exports = config;
