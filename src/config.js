import dotenv from 'dotenv';
dotenv.config();

export default {
  API_ENDPOINT: process.env.API_ENDPOINT || 'localhost:8080/api',
  TOKEN_KEY: process.env.TOKEN_KEY || 'totally-secure-key'
};