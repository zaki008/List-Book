import CONFIG from "./config";

const API_ENDPOINT = {
  register: `${CONFIG.BASE_URL}/auth/register`,
  login: `${CONFIG.BASE_URL}/auth/login`,
  getBooks: `${CONFIG.BASE_URL}/books/`,
  getBooksById : (id) => `${CONFIG.BASE_URL}/books/${id}`
};

export default API_ENDPOINT;