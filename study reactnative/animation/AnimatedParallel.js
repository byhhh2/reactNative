import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Animated,
  TouchableHighlight,
} from 'react-native';

//animation
import {Easing} from 'react-native-reanimated';

//Icon
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'; //'reload'

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  animatedTitle = new Animated.Value(-200);
  animatedSubTitle = new Animated.Value(600);
  animatedButton = new Animated.Value(800);

  componentDidMount() {
    this.animated();
  }

  animated = () => {
    Animated.parallel([
      Animated.timing(this.animatedTitle, {
        toValue: 200,
        duration: 800,
        //useNativeDriver: true,
      }),
      Animated.timing(this.animatedSubTitle, {
        toValue: 0,
        duration: 1400,
        delay: 800,
        //useNativeDriver: true,
      }),
      Animated.timing(this.animatedButton, {
        toValue: 0,
        duration: 1000,
        delay: 2200,
        //useNativeDriver: true,
      }),
    ]).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.title, {marginTop: this.animatedTitle}]}>
          welcome!
        </Animated.Text>
        <Animated.Text
          style={[styles.subTitle, {marginLeft: this.animatedSubTitle}]}>
          welwel
        </Animated.Text>
        <Animated.View style={{marginTop: this.animatedButton}}>
          <TouchableHighlight style={styles.button}>
            <Text>get started</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 12,
  },
  subTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    opacity: 0.8,
  },
  button: {
    marginTop: 25,
    backgroundColor: '#ddd',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default Test;
