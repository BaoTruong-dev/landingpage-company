import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
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

function* rootSaga() {
    yield takeLatest('FETCH_SERVICE_DATA', fetchServiceData);
    yield takeLatest('FETCH_POSTS_DATA',fetchPostsData);
}



export default rootSaga;