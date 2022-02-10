import { BOOKS, BOOKS_FAILED, BOOKS_SUCCESS, BOOK_DETAIL, BOOK_DETAIL_FAILED, BOOK_DETAIL_SUCCESS } from "../actionTypes";

const initialState = {
    isLoading : false,
    book: null,
    topNewRelease: null,
    books: null,
    bookDetail: null
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case BOOKS: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case BOOKS_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          books: action.payload,
          topNewRelease: action.payload.slice(0, 5),
        };
      }
      case BOOKS_FAILED: {
        return {
          ...state,
          isLoading: false,
        };
      }
      case BOOK_DETAIL: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case BOOK_DETAIL_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          booksDetail: action.payload,
        };
      }
      case BOOK_DETAIL_FAILED: {
        return {
          ...state,
          isLoading: false,
        };
      }
      default: {
        return {
          state,
        };
      }
    }
}

export default bookReducer;