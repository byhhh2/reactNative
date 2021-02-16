export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
//reducer에서 재사용할 수 있도록 상수를 만들어 Export

import uuidV4 from 'uuid/v4';

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book: {
      ...book,
      id: uuidV4(),
    },
  };
}
//addBook이라는 함수를 만들어 type정보와 하나의 인수로 전달된 도서객체 반환

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    book,
  };
}
//이 함수는 type과 인수로 전달된 book을 포함한 객체 반환
