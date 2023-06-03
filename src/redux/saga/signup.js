import { call, put, takeLatest } from "redux-saga/effects";
import { signupApi } from "../../api/signup";
import { signup } from "../reducer/signup";
import { navigate, setLoading, showError } from "../reducer/ui";


function* signupSaga({payload}) {

    try {
      yield put(setLoading(true))
      const response = yield call(signupApi, payload);
      console.log(response)
      yield put(navigate('/home'))
    } catch(error) {
      yield put(showError(error));
    }
    yield put(setLoading(false))
  }
  
  export function* watchSignupSaga() {
    yield takeLatest(signup.type, signupSaga);
  }