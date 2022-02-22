import axios from 'axios';

const config = (token: string) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}` || '',
    },
  };
  return config;
};

export const Get = async (endpoint: string, token?: string) => {
  let result: any;
  const configRequest = config(token);
  try {
    const res = await axios.get(endpoint, configRequest);
    result = res.data;
  } catch (e) {
    result = e.response || 'Internal Server Error';
  }
  return result;
};

export const Post = async (endpoint: string, data?: object, token?: string) => {
  let result: any;
  const configRequest = config(token);
  try {
    const res = await axios.post(endpoint, data, configRequest);
    result = res.data;
  } catch (e) {
    result = e.response || 'Internal Server Error';
  }
  return result;
};
