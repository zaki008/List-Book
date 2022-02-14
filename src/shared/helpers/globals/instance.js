import axios from 'axios';
import CONFIG from './config';

const HOST = __DEV__
  ? `${CONFIG.BASE_URL}`
  : '[HERE OUR PROD HOST ENDPOINT]';
const instance = axios.create({
  baseURL: HOST,
});

export default instance;
