import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Animated,
  TouchableHighlight,
} from 'react-native';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//animation
import {Easing} from 'react-native-reanimated';

//Icon
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'; //'reload'

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValues = [];
    for (let i = 0; i < 100; i++) {
      this.animatedValues[i] = new Animated.Value(0);
    }

    this.animations = this.animatedValues.map((value) => {
      return Animated.timing(value, {
        toValue: 1,
        duration: 6000,
        //useNativeDriver: true,
      });
    });
  }

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    Animated.stagger(15, this.animations).start();
  };

  render() {
    return (
      <View style={styles.container}>
        {this.animatedValues.map((value, index) => (
          <Animated.View key={index} style={[{opacity: value}, styles.box]} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: 15,
    height: 15,
    margin: 0.5,
    backgroundColor: '#6464FF',
  },
});

export default Test;
