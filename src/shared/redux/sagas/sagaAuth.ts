import * as RootNavigation from '../../navigation/rootNavigation';
import {
  call,
  takeLatest,
  put,
  Effect,
  SagaReturnType,
} from 'redux-saga/effects';
import {removeDataLocal, storeData} from '../../functions/asyncstorage';
import {showError, showSuccess} from '../../helpers/showMessage';
import {loginApi, registerApi} from '../action';
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

type LoginServiceResponse = SagaReturnType<typeof loginApi>;
type RegisterServiceResponse = SagaReturnType<typeof registerApi>;

function* login(action: Effect) {
  try {
    const resLogin: LoginServiceResponse = yield call(loginApi, action.payload);
    if (resLogin) {
      let {token} = resLogin.tokens.access;
      showSuccess('Anda Berhasil Login');
      yield storeData(token);
      yield put({type: LOGIN_SUCCESS});
    } else {
      let {errors} = resLogin;
      showError(errors);
      yield put({type: LOGIN_FAILED});
    }
  } catch (err) {
    showError('Username or Password not valid');
    yield put({type: LOGIN_FAILED});
  }
}

function* register(action: Effect) {
  try {
    const res: RegisterServiceResponse = yield call(
      registerApi,
      action.payload,
    );
    if (res) {
      showSuccess(`you have successfully registered, ${res.message}`);
      yield put({type: REGISTER_SUCCESS});
      RootNavigation.navigate('Login');
    } else {
      yield put({type: REGISTER_FAILED});
    }
  } catch (err) {
    console.log('err', err);
    yield put({type: REGISTER_FAILED});
  }
}

function* logout() {
  try {
    const res: object = removeDataLocal();
    if (res) {
      yield put({type: LOGOUT_SUCCESS});
      showSuccess('Anda Berhasil Logout Akun');
    }
  } catch (err) {
    yield put({type: LOGOUT_FAILED});
    showSuccess('Gagal');
    console.log(err);
  }
}

export default function* sagaAuth() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(REGISTER, register);
  yield takeLatest(LOGOUT, logout);
}
