import { all, fork, takeEvery } from 'redux-saga/effects';
import { watchLoginUserSaga } from './login';
import { watchSignupSaga } from './signup';
import { watchShowErrorSaga } from './ui';
import { watchUserAllSaga } from './users';


export function* logAction(action) {
  console.log(action)
  yield;
}

export default function* root() {
  yield all([
    fork(watchLoginUserSaga),
    fork(watchShowErrorSaga),
    fork(watchSignupSaga),
    fork(watchUserAllSaga),
    takeEvery('*', logAction)
  ]);
}