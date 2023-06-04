import { put, takeLatest, call } from 'redux-saga/effects';
import { loginSuccess, login } from '../reducer/login';
import { loginApi } from '../../api/authv1';
import { setLoading, showError } from '../reducer/ui';
import outsideHooks from '../../common/outsideHooks';

function* loginUserSaga({payload}) {

  try {
    yield put(setLoading(true))
    const response = yield call(loginApi, payload);
    
    console.log(response)
    yield put(loginSuccess(response.data))
    if(response.status === 200) {
      outsideHooks.navigate('/home')
    }
  } catch(error) {
    yield put(showError(error));
  }
  yield put(setLoading(false))
}

export function* watchLoginUserSaga() {
  yield takeLatest(login.type, loginUserSaga);
}