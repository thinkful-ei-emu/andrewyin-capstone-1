import dotenv from 'dotenv';
dotenv.config();

export default {
  API_ENDPOINT: process.env.API_ENDPOINT || 'https://intense-wildwood-33210.herokuapp.com/api',
  TOKEN_KEY: process.env.TOKEN_KEY || '19ea5c82-f931-47ae-8b75-f18c43580b85'
};