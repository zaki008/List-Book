import {all} from 'redux-saga/effects';

import sagaAuth from './sagaAuth';
import sagaBooks from './sagaBooks';

export default function* rootSaga() {
  yield all([sagaAuth(), sagaBooks()]);
}
