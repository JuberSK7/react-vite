import { put, takeLatest, call } from 'redux-saga/effects';
import { loginSuccess, login } from '../reducer/login';
import { loginApi } from '../../api/authv1';
import { navigate, setLoading, showError } from '../reducer/ui';

function* loginUserSaga({payload}) {

  try {
    yield put(setLoading(true))
    const response = yield call(loginApi, payload);
    //console.log(response)
    yield put(loginSuccess(response.data));
    yield put(navigate('/users'))
  } catch(error) {
    yield put(showError(error));
  }
  yield put(setLoading(false))
}

export function* watchLoginUserSaga() {
  yield takeLatest(login.type, loginUserSaga);
}