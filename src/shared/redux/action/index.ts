/* eslint-disable @typescript-eslint/no-explicit-any */
import {Get, Post} from '../../helpers/api';
import {
  // login,
  // register,
  ReturnContract,
} from '../../helpers/data/AuthIdb';
import {
  // getAllBook,
  // getBookById,
  ReturnContractBook,
} from '../../helpers/data/BooksIdb';
import API_ENDPOINT from '../../helpers/globals/api-endpoint';
import {PayloadLogin, PayloadRegister} from '../../interface';

export const loginApi = (data: PayloadLogin): Promise<ReturnContract> => {
  return Post(API_ENDPOINT.login, data);
};

export const registerApi = (data: PayloadRegister): Promise<ReturnContract> => {
  return Post(API_ENDPOINT.register, data);
};

export const getBooksApi = (token: string): Promise<ReturnContractBook> => {
  return Get(API_ENDPOINT.getBooks, token);
};

export const getBookByIdApi = async (
  id: string,
  token: string,
): Promise<ReturnContractBook> => {
  return Get(API_ENDPOINT.getBooksById(id), token);
};

//login
// const loginInitiate = async (data: PayloadLogin) => {
//   let result;
//   try {
//     const res = await login(data);
//     result = res.data;
//   } catch (err: any) {
//     result = err.response.data;
//   }
//   return result;
// };

//register
// const registerInitiate = async (data: PayloadRegister) => {
//   let result;
//   try {
//     const res = await register(data);
//     result = res.data;
//   } catch (err: any) {
//     result = err.response.data;
//   }
//   return result;
// };

//Get Books
// const getBooksInitate = async (token: string) => {
//   let result;
//   try {
//     const res = await getAllBook(token);
//     result = res.data;
//   } catch (err: any) {
//     result = err.response.data;
//   }
//   return result;
// };

// GetBookById
// const getBookByIdInitate = async (token: string, id: string) => {
//   let result;
//   try {
//     const res = await getBookById(token, id);
//     result = res.data;
//   } catch (err: any) {
//     result = err.response.data;
//   }
//   return result;
// };
