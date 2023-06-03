import { call, put, takeLatest } from "redux-saga/effects";
import { showError } from "../reducer/ui";
import { userAllApi } from "../../api/user";
import { setLoading } from "../reducer/ui";
import { setUsers } from "../reducer/users";


function* userAllSaga({payload}) {

    try {
      yield put(setLoading(true))
      const response = yield call(userAllApi);
      console.log(response)
      yield put(setUsers(response))
    } catch(error) {
      yield put(showError(error));
    }
    yield put(setLoading(false))
  }
  
  export function* watchUserAllSaga() {
    yield takeLatest('USER_ALL', userAllSaga);
  }