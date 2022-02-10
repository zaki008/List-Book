export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const BOOKS = 'BOOKS';
export const BOOKS_SUCCESS = 'BOOKS_SUCCESS';
export const BOOKS_FAILED = 'BOOKS_FAILED';

export const BOOK_DETAIL = 'BOOK_DETAIL';
export const BOOK_DETAIL_SUCCESS = 'BOOK_DETAIL_SUCCESS';
export const BOOK_DETAIL_FAILED = 'BOOK_DETAIL_FAILED';
export const BOOK_DETAIL_CLEAR = 'BOOK_DETAIL_CLEAR';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

//auth
export const loginAction = payload => {
  return {
    type: LOGIN,
    payload,
  };
};

export const registerAction = payload => {
  return {
    type: REGISTER,
    payload,
  };
};

//books
export const getBooksAction = (payload) => {
  return {
    type: BOOKS,
    payload,
  };
};

export const bookDetailAction = payload => {
  return {
    type: BOOK_DETAIL,
    payload,
  };
};

//LOGOUT
export const logoutAction = payload => {
  return {
    type: LOGOUT,
    payload
  }
}