import { takeLatest, call, put } from 'redux-saga/effects';
import { alert } from "../../common/modal";
import { showError } from '../reducer/ui';


function* showErrorSaga({error}) {
    if( error.response && error.response.status >= 500 ) {
        const e = yield error.response.text()
        console.log(e)
        yield call(alert, JSON.stringify(e))
    } else if (error.response && error.response.statusText){
        yield call(alert, error.response.statusText)
    } else {
        yield call(alert, error.message)
    }
}

export function* watchShowErrorSaga() {
    yield takeLatest(showError.type, showErrorSaga);
}