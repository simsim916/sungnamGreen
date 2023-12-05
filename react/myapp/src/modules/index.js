import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

/* 
    < combineReducers 함수 >

- 다중 모듈의 리듀서를 하나의 루트 리듀서로 통합.
*/
const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;