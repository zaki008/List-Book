import {login, register, ReturnContract} from '../../helpers/data/AuthIdb';
import {
  getAllBook,
  getBookById,
  ReturnContractBook,
} from '../../helpers/data/BooksIdb';
import {PayloadLogin, PayloadRegister} from '../../interface';

//login
const loginInitiate = async (data: PayloadLogin) => {
  let result;
  try {
    const res = await login(data);
    result = res.data;
  } catch (err: any) {
    result = err.response.data;
  }
  return result;
};

//register
const registerInitiate = async (data: PayloadRegister) => {
  let result;
  try {
    const res = await register(data);
    result = res.data;
  } catch (err: any) {
    result = err.response.data;
  }
  return result;
};

//Get Books
const getBooksInitate = async (token: string) => {
  let result;
  try {
    const res = await getAllBook(token);
    result = res.data;
  } catch (err: any) {
    result = err.response.data;
  }
  return result;
};

// GetBookById
const getBookByIdInitate = async (token: string, id: string) => {
  let result;
  try {
    const res = await getBookById(token, id);
    result = res.data;
  } catch (err: any) {
    result = err.response.data;
  }
  return result;
};

export const loginApi = (data: PayloadLogin): Promise<ReturnContract> => {
  return loginInitiate(data);
};

export const registerApi = (data: PayloadRegister): Promise<ReturnContract> => {
  return registerInitiate(data);
};

export const getBooksApi = (token: string): Promise<ReturnContractBook> => {
  return getBooksInitate(token);
};

export const getBookByIdApi = async (
  token: string,
  id: string,
): Promise<ReturnContractBook> => {
  return getBookByIdInitate(token, id);
};
