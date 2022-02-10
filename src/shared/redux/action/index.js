import { AuthIb, BookIdb } from "../../helpers/data";

//login
const loginInitiate = async (data) => {
  let result;
  try{
    const res = await AuthIb.login(data);
    result = res.data;
  }catch(err){
    result = err.response.data
  }
   return result;
}

export const loginApi = (payload) => {
  return loginInitiate(payload);
}

//register
const registerInitiate = async (data) => {
  let result;
  try{
    const res = await AuthIb.register(data);
    result = res.data;
  }catch(err){
    result = err.response.data
  }
  return result;
}

export const registerApi = (payload) => {
  return registerInitiate(payload);
}

//Get Books
const getBooksInitate = async (token) => {
  let result; 
  try {
    const res  = await BookIdb.getBook(token);
    result = res.data;
  }catch(err){
    result = err.response.data
  }
  return result;
}

export const getBooksApi = (headers) => {
  return getBooksInitate(headers);
}

// GetBookById
const getBookByIdInitate =  async (token, id) => {
  let result; 
  try{
    const res = await BookIdb.getBookById(token, id);
    result = res.data
  }catch(err){
    result = err.response.data;
  }
  return result;
}

export const getBookByIdApi = async (token, id) => {
  return getBookByIdInitate(token, id);
};