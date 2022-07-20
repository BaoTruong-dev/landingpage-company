import { call, put, takeLatest } from 'redux-saga/effects';
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
<<<<<<< HEAD
    yield takeLatest('FETCH_SERVICE_DATA', fetchServiceData);
    yield takeLatest('FETCH_POSTS_DATA',fetchPostsData);    
=======
    yield takeEvery('FETCH_SERVICE_DATA', fetchServiceData);
>>>>>>> 93ad0f755b330d8959592dfc75a676c989b90c60
}



export default rootSaga;