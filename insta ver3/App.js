import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

//component
import ProfileHome from './components/ProfileHome';
import TestFile from './components/TestFile';
import ProfileEdit from './components/ProfileEdit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settingModal: false,
    };

    this.toggleSettingModal = this.toggleSettingModal.bind(this);
  }

  toggleSettingModal() {
    this.setState({
      settingModal: !this.state.settingModal,
    });
    console.log(this.state.settingModal);
  }
  render() {
    <ProfileHome settingModal={this.state.settingModal} />;
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Profile">
            {() => (
              <Stack.Navigator>
                <Stack.Screen //Home.js
                  name="Home"
                  /*
                  component={({navigation}) => (
                    <ProfileHome
                      navigation={navigation}
                      settingModal={this.state.settingModal}
                    />
                  )}*/
                  options={{
                    title: 'M0ovie',
                    headerRight: () => (
                      <View style={styles.headerBtn}>
                        <TouchableOpacity
                          onPress={() => this.toggleSettingModal()}>
                          <AntDesign
                            name={'plus'}
                            size={30}
                            color={'#3F3F3F'}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <EvilIcons
                            style={{marginLeft: '10%'}}
                            name="navicon"
                            size={30}
                            color="#3F3F3F"
                          />
                        </TouchableOpacity>
                      </View>
                    ),
                    //headerTitleAlign: 'center',  //타이틀 중앙정렬
                    justifyContent: 'center',
                  }}>
                  {({navigation}) => (
                    <ProfileHome
                      navigation={navigation}
                      settingModal={this.state.settingModal}
                    />
                  )}
                </Stack.Screen>

                <Stack.Screen //ProfileEdit.js
                  name="ProfileEdit"
                  component={ProfileEdit}
                  options={{
                    headerTitle: '프로필 편집',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                      <TouchableOpacity style={{marginRight: 5}}>
                        <Text style={{fontSize: 19, color: '#058FFD'}}>
                          완료
                        </Text>
                      </TouchableOpacity>
                    ),
                  }}
                />
              </Stack.Navigator>
            )}
          </Tab.Screen>

          <Tab.Screen name="test">
            {() => (
              <Stack.Navigator>
                <Stack.Screen //TestFile.js
                  name="TestFile"
                  component={TestFile}
                />
              </Stack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  headerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
});

export default App;
