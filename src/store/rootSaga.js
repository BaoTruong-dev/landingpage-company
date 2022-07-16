import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import serviceService from '../service/serviceService';

function* fetchServiceData() {
    try {
        let result = yield call(serviceService.getService);
        yield put({
            type: 'GET_SERVICE',
            payload: result
        });
    } catch (error) {
        throw error;
    }
}

function* rootSaga() {
    yield takeLatest('FETCH_SERVICE_DATA', fetchServiceData);
}

export default rootSaga;