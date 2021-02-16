import React from 'react';
import {StyleSheet, View, Button, Animated} from 'react-native';
import {Easing} from 'react-native-reanimated';

class Test extends React.Component {
  marginTop = new Animated.Value(20); //클래스 속성, 애니메이션 효과 만들고 시작값 20

  animated = () => {
    //애니메이션 효과를 실행하는 함수
    Animated.timing(this.marginTop, {
      toValue: 200, //종료값
      duration: 500, //시간
      easing: Easing.bounce, //이거 해줘야 오류 안남 떨어졌을 때 효과인듯
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Animate Box" onPress={this.animated} />
        <Animated.View style={[styles.box, {marginTop: this.marginTop}]} />
      </View>
    );
  }
}

//스타일 시트
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});

export default Test;
