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
  TouchableOpacity,
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

const Feed = ({navigation}) => (
  <View>
    <Text>Feed</Text>
    <TouchableOpacity
      onPress={() => navigation.push('Profile', {city: '하이'})}>
      <Text style={{fontSize: 30}}>벨벨</Text>
      <Text>gd</Text>
    </TouchableOpacity>
  </View>
);

const Messages = () => (
  <View>
    <Text>Messages</Text>
  </View>
);

const Profile = () => (
  <View>
    <Text>Profile</Text>
  </View>
);

const Settings = () => (
  <View>
    <Text>Profile</Text>
  </View>
);

const styles = StyleSheet.create({});

export default App;
