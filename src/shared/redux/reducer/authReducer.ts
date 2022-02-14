import {Effect} from 'redux-saga/effects';
import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
  REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from '../actionTypes';

interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  registerSuccess: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  isLoggedIn: false,
  registerSuccess: false,
};

const authReducer = (state = initialState, action: Effect) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      };
    }
    case REGISTER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        registerSuccess: true,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        isLoading: false,
        registerSuccess: false,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
