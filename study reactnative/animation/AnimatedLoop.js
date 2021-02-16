//진입점

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  Button,
  Animated,
} from 'react-native';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import uuidV4 from 'uuid/v4';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//component
import AddCity from './src/AddCity/AddCity';
import Test from './src/AddCity/Test';

//animation
import {Easing} from 'react-native-reanimated';

//Icon
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'; //'reload'

function Home({navigation, toggle, toggleSwitch}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed">
        {() => (
          <Feed
            navigation={navigation}
            toggle={toggle}
            toggleSwitch={toggleSwitch}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  toggleSwitch() {
    this.setState({
      toggle: !this.state.toggle,
    });
    console.log(this.state.toggle);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {({navigation}) => (
              <Home
                navigation={navigation}
                toggle={this.state.toggle}
                toggleSwitch={() => this.toggleSwitch()}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.animated();
    setTimeout(() => this.setState({loading: false}), 2000);
  }

  animatedRotation = new Animated.Value(0);

  animated = () => {
    Animated.loop(
      Animated.timing(this.animatedRotation, {
        toValue: 1,
        duration: 1800,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  render() {
    const rotation = this.animatedRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    const {loading} = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <Animated.Image
            source={require('./images/loading.png')}
            style={{width: 40, height: 40, transform: [{rotate: rotation}]}}
          />
        ) : (
          <Text>Welcome!</Text>
        )}
      </View>
    );
  }
}

const Messages = () => (
  <View>
    <Text>Messages</Text>
  </View>
);

const Profile = ({city}) => (
  <View>
    <Text>Profile</Text>
    <Text>{city}</Text>
  </View>
);

const Settings = () => (
  <View>
    <Text>Profile</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 50,
  },
  input: {
    height: 50,
    marginHorizontal: 15,
    backgroundColor: '#ededed',
    marginTop: 10,
    paddingHorizontal: 9,
  },
});

export default App;
