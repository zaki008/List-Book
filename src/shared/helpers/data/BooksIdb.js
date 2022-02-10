import axios from "axios"
import { getData } from "../../functions/asyncstorage";
import API_ENDPOINT from "../globals/api-endpoint";

// const Config = (token, contentType) => {
//     const DB = {
//       Headers: {
//         'Content-Type': contentType || 'application/json',
//         Authorization: `Bearer ${token}` || '',
//       },
//     };
//     return DB;
// }


const BookIdb = {
  getBook: async token =>
    axios.get(API_ENDPOINT.getBooks, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getBookById: async (token, id) =>
    axios.get(API_ENDPOINT.getBooksById(id), {
     headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default BookIdb