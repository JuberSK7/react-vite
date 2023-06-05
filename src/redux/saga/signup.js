import { call, put, takeLatest } from "redux-saga/effects";
import { signupApi } from "../../api/authv1";
import outsideHooks from "../../common/outsideHooks";
import { signup, signupFailed } from "../reducer/signup";
import { setLoading, showError } from "../reducer/ui";


function* signupSaga({payload}) {

    try {
      yield put(setLoading(true))
      const response = yield call(signupApi, payload);
      if(response.status === 202) {
        outsideHooks.navigate('/home')
      }
    } catch(error) {
      if( error.response && error.response.status == 403 ) {
        yield put(signupFailed(true))
      } else {
        yield put(showError(error));
      }
    }
    yield put(setLoading(false))
  }
  
  export function* watchSignupSaga() {
    yield takeLatest(signup.type, signupSaga);
  }