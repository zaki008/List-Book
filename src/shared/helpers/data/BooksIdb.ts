import axios, {AxiosResponse} from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

export interface ReturnContractBook {
  results: [
    {
      title: string;
      author: string;
      average_rating: string;
      cover_image: string;
      id: string;
      price: number;
      publisher: string;
    },
  ];
}

interface BookService {
  (token: string): Promise<AxiosResponse<ReturnContractBook>>;
}

interface BookByIdService {
  (id: string, token: string): Promise<AxiosResponse<ReturnContractBook>>;
}

export const getAllBook: BookService = async (token: string) => {
  return await axios.get(API_ENDPOINT.getBooks, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getBookById: BookByIdService = async (
  id: string,
  token: string,
) => {
  return await axios.get(API_ENDPOINT.getBooksById(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// const BookIdb = {
//   getBook: async (token: string) =>
//     axios.get(API_ENDPOINT.getBooks, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }),
//   getBookById: async (token: string, id: string) =>
//     axios.get(API_ENDPOINT.getBooksById(id), {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }),
// };

// export default BookIdb;
