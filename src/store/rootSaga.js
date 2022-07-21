import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import serviceInfo from '../service/serviceInfo';
import servicePosts from '../service/servicePosts';
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

function* fetchPostsData() {
    try {
        let result = yield call(servicePosts.getPostsData);
        yield put({
            type: 'GET_POSTS',
            payload: result,
        });
    } catch (error) {
        throw error;
    }
}
function* fetInfoData() {
    try {
        let result = yield call(serviceInfo.getInfo);
        yield put({
            type: 'GET_INFO',
            payload: result,
        });
    } catch (error) {
        throw error;
    }
}

function* rootSaga() {
    yield takeEvery('FETCH_SERVICE_DATA', fetchServiceData);
    yield takeEvery('FETCH_INFO_DATA', fetInfoData);
    yield takeEvery('FETCH_POSTS_DATA', fetchPostsData);
}



export default rootSaga;