import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Books from './Books';
import rootReducer from './reducers/index';

//redux
import {Provider} from 'react-redux'; //provider wrapper
import {createStore} from 'redux';

const store = createStore(rootReducer); //rootReducer를 이용하여 store 객체 생성

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Books />
      </Provider>
    );
  }
}

//provider로 메인 컴포넌트인 Books 컴포넌트를 감싸는 형태
//Provider의 모든 자식들은 리덕스 스토어를 참조 가능
//createStort : 리덕스의 유틸리티 함수, 리덕스의 스토어를 만들기 위해 사용

const styles = StyleSheet.create({});

export default App;
