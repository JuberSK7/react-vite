import { put, takeLatest, call } from 'redux-saga/effects';
import { loginSuccess, login, loginFailed } from '../reducer/login';
import { loginApi } from '../../api/authv1';
import { setLoading, showError } from '../reducer/ui';
import outsideHooks from '../../common/outsideHooks';

function* loginUserSaga({payload}) {

  try {
    yield put(setLoading(true))
    const response = yield call(loginApi, payload);
    yield put(loginSuccess(response.data))
    if(response.status === 200) {
      outsideHooks.navigate('/home')
    }
  } catch(error) {
    if( error.response && error.response.status == 401 ) {
      yield put(loginFailed(true))
    } else {
      yield put(showError(error));
    }
  }
  yield put(setLoading(false))
}

export function* watchLoginUserSaga() {
  yield takeLatest(login.type, loginUserSaga);
}