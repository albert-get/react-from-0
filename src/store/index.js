import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer'

import rootAction from './action'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootAction)

export default store