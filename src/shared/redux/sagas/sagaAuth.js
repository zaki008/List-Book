import {ToastAndroid} from 'react-native';
import {call, takeLatest, put} from 'redux-saga/effects';

// eslint-disable-next-line prettier/prettier
import {removeDataLocal, storeData} from '../../functions/asyncstorage';
import { showError, showSuccess } from '../../helpers/showMessage';
import { loginApi, registerApi } from '../action';
import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAILED, LOGOUT_SUCCESS, REGISTER, REGISTER_FAILED, REGISTER_SUCCESS } from '../actionTypes';

function* login(action) {
  try {
    const resLogin = yield call(loginApi, action.payload) ;
    if (resLogin && resLogin.tokens.access.token !== undefined) {
      showSuccess('Anda Berhasil Login');
      yield storeData(resLogin.tokens.access.token);
      yield put({type: LOGIN_SUCCESS});
    } else {
      showError(resLogin.errors);
      yield put({type: LOGIN_FAILED});
    }
  } catch (err) {
    showError('Username or Password not valid');
    yield put({type: LOGIN_FAILED});
  }
}

function* register(action) {
  try {
    const res = yield call(registerApi, action.payload);
    if (res && res.data) {
      showSuccess(`you have successfully registered, ${res.message}`);
      yield put({type: REGISTER_SUCCESS});
    } else {
      showError(res.message);
      yield put({type: REGISTER_FAILED});
    }
  } catch (err) {
    console.log('err', err);
    yield put({type: REGISTER_FAILED});
  }
}

function* logout() {
  try {
    const res = removeDataLocal();
    if(res){
      yield put({type: LOGOUT_SUCCESS})
      showSuccess('Anda Berhasil Logout Akun')
    }
  } catch (err) {
    yield put({type: LOGOUT_FAILED})
    showSuccess('Gagal')
    console.log(err)
  }
}

export default function* sagaAuth() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(REGISTER, register);
  yield takeLatest(LOGOUT, logout);
}
