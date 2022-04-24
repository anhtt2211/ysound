import getConfig from 'next/config';
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

export const ENV = process.env.NODE_ENV || 'development';

export const { API_SERVER_URI, CLIENT_ID, CLIENT_SECRET } = publicRuntimeConfig;

// export const { API_SERVER_URI } = serverRuntimeConfig;
