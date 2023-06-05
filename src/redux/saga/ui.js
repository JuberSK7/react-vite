import { takeLatest, call, put } from 'redux-saga/effects';
import { alert } from "../../common/modal";
import { showError } from '../reducer/ui';


function* showErrorSaga({payload}) {
    if( payload.response && payload.response.status >= 500 ) {
        const e = yield payload.response.text()
        console.log(e)
        yield call(alert, JSON.stringify(e))
    } else if (payload.response && payload.response.statusText){
        yield call(alert, payload.response.statusText)
    } else {
        yield call(alert, payload.message)
    }
}

export function* watchShowErrorSaga() {
    yield takeLatest(showError.type, showErrorSaga);
}