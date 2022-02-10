import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { getBookByIdApi, getBooksApi } from '../action';
import { BOOKS, BOOKS_FAILED, BOOKS_SUCCESS, BOOK_DETAIL, BOOK_DETAIL_FAILED, BOOK_DETAIL_SUCCESS } from '../actionTypes';
import {showError} from '../../helpers/showMessage'
import { getData } from '../../functions/asyncstorage';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* getBooks(action) {
  try {
    const token = yield getData();
    const res = yield call(getBooksApi, token);
    if (res && res.results) {
      yield put({type: BOOKS_SUCCESS, payload:res.results});
    } else {
      showError(res.message);
      yield put({type: BOOKS_FAILED});
    }
  } catch (err) {
    console.log('error', err)
    yield put({type: BOOKS_FAILED});
  }
}

function* getBooksById (action) {
  try{
    const token = yield getData();
    const res = yield call(getBookByIdApi, token, action.payload);
    console.log('detail', res)
    if (res) {
      yield put({type: BOOK_DETAIL_SUCCESS, payload:res});
    } else {
      showError(res.message);
      yield put({type: BOOK_DETAIL_FAILED});
    }
  }catch(err){
    console.log('error', err);
    yield put({type: BOOK_DETAIL_FAILED})
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export default function* sagaBooks() {
  yield takeLatest(BOOKS, getBooks);
  yield takeLatest(BOOK_DETAIL, getBooksById);
}
