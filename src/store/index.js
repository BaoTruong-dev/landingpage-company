// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import serviceReducer from './serviceReducer';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    service: serviceReducer
});
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

store.dispatch({
    type: 'FETCH_SERVICE_DATA'
});

export default store;