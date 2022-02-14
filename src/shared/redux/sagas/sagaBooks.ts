import {
  call,
  Effect,
  put,
  SagaReturnType,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {getBookByIdApi, getBooksApi} from '../action';
import {
  BOOKS,
  BOOKS_FAILED,
  BOOKS_SUCCESS,
  BOOK_DETAIL,
  BOOK_DETAIL_FAILED,
  BOOK_DETAIL_SUCCESS,
} from '../actionTypes';
import {getData} from '../../functions/asyncstorage';

type GetBookServiceResponse = SagaReturnType<typeof getBooksApi>;
type GetBookByIdServiceResponse = SagaReturnType<typeof getBookByIdApi>;

function* getBooks() {
  try {
    const token: string = yield getData();
    console.log(token);
    const res: GetBookServiceResponse = yield call(getBooksApi, token);
    console.log('book', res);
    if (res && res.results) {
      yield put({type: BOOKS_SUCCESS, payload: res.results});
    } else {
      yield put({type: BOOKS_FAILED});
    }
  } catch (err) {
    console.log('error', err);
    yield put({type: BOOKS_FAILED});
  }
}

function* getBooksById(action: Effect) {
  try {
    const token: string = yield getData();
    const res: GetBookByIdServiceResponse = yield call(
      getBookByIdApi,
      action.payload,
      token,
    );
    if (res) {
      yield put({type: BOOK_DETAIL_SUCCESS, payload: res});
    } else {
      yield put({type: BOOK_DETAIL_FAILED});
    }
  } catch (err) {
    console.log('error', err);
    yield put({type: BOOK_DETAIL_FAILED});
  }
}

export default function* sagaBooks() {
  yield takeLatest(BOOKS, getBooks);
  yield takeLatest(BOOK_DETAIL, getBooksById);
}
