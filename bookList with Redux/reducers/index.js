//root reducer : 앱의 모든 reducer를 모아 전역 상태를 만든다.

import {combineReducers} from 'redux';

import bookReducer from './bookReducer';

const rootReducer = combineReducers({
  bookReducer,
});

export default rootReducer;
