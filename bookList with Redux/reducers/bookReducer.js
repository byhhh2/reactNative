//첫번째 리덕스의 상태
//리덕스는 전역 객체
import uuidV4 from 'uuid/v4'; //고유 식별자
import {ADD_BOOK, REMOVE_BOOK} from '../actions';

//reducer 만들기
const initialState = {
  //시작할 때 초기상태
  books: [{name: 'East of Eden', author: 'John', id: uuidV4()}],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.book], //새로운 books배열 반환
      };
    case REMOVE_BOOK:
      const index = state.books.findIndex((book) => book.id === action.book.id);
      //삭제할 도서 인덱스 찾기
      return {
        books: [
          ...state.books.slice(0, index),
          ...state.books.slice(index + 1), //삭제할 도서 제외하고 새로운 배열 반환
        ],
      };
    default:
      return state;
  }
};

export default bookReducer;

//action파일에서 ADD_BOOK상수를 가져옴
//bookReducer의 두번재 인수에 action을 추가한다.
//action의 타입에 따라 분기하는 switch문
