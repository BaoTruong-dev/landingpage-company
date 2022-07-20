// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import postReducer from './postReducer';

import rootSaga from './rootSaga';
import serviceReducer from './serviceReducer';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    service: serviceReducer,
    posts: postReducer,
});
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

store.dispatch({
    type: 'FETCH_SERVICE_DATA',
});
store.dispatch({
    type: 'FETCH_POSTS_DATA',
});
export default store;