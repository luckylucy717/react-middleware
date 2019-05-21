import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
//import loggerMiddleware from './lib/loggerMiddleware';

import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';

/*
    미들웨어가 여러개 일 때는 파라미터로 전달하면 된다. applyMiddleware(a,b,c)
    미들웨어 순서는 여기 전달된 파라미터 순서대로 지정된다.
*/
const logger = createLogger()
const store = createStore(modules, applyMiddleware(logger, ReduxThunk))

export default store;