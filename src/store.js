import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
//import loggerMiddleware from './lib/loggerMiddleware';

import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
// import promiseMiddleware from 'redux-promise-middleware';

/*
    미들웨어가 여러개 일 때는 파라미터로 전달하면 된다. applyMiddleware(a,b,c)
    미들웨어 순서는 여기 전달된 파라미터 순서대로 지정된다.
*/
const logger = createLogger()
/* redux-thunk를 사용할 때 */
const store = createStore(modules, applyMiddleware(logger, ReduxThunk)) 

/* redux-promise-middleware를 사용할 때 */
// const pm = promiseMiddleware({
//     promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
// });
// const store = createStore(modules, applyMiddleware(logger, pm));


export default store;