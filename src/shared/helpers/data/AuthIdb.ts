import axios, {AxiosResponse} from 'axios';
import {PayloadLogin, PayloadRegister} from '../../interface';
import API_ENDPOINT from '../globals/api-endpoint';

export interface ReturnContract {
  tokens: {
    access: {
      expires: string;
      token: string;
    };
    refresh: {
      expires: string;
      token: string;
    };
  };
  user: {
    email: string;
    id: string;
    isEmailVerified: boolean;
    name: string;
    role: string;
  };
  message: string;
}

interface LoginService {
  (data: PayloadLogin): Promise<AxiosResponse<ReturnContract>>;
}

interface RegisterService {
  (data: PayloadRegister): Promise<AxiosResponse<ReturnContract>>;
}

export const login: LoginService = async (data: PayloadLogin) => {
  return await axios.post(API_ENDPOINT.login, data);
};

export const register: RegisterService = async (data: PayloadRegister) => {
  return await axios.post(API_ENDPOINT.register, data);
};

// const AuthIb = {
//   register: async (data: object) => axios.post(API_ENDPOINT.register, data),
//   login: async (email: string, password: string) =>
//     axios.post(API_ENDPOINT.login, {email, password}),
// };

// export default AuthIb;
