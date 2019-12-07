import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducers } from './rootReducers';
import rootSaga from './sagas';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const enhancers = [applyMiddleware(sagaMiddleware)];

const store = createStore(rootReducers, composeEnhancers(...enhancers));
sagaMiddleware.run(rootSaga);

export default { ...store };
