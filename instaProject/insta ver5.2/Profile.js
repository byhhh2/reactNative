import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

//component
import ProfileHome from './components/ProfileHome';
import ProfileEdit from './components/ProfileEdit';
import MakeContent from './components/MakeContent';
import Settings from './components/Settings';
import PostList from './components/PostList';
import Follow from './components/Follower';
import NewPost from './components/NewPost';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MakeContentModal: false,
      SettingModal: false,
    };
  }

  toggleMakeContentModal() {
    this.setState({
      MakeContentModal: !this.state.MakeContentModal,
    });
    console.log(this.state.MakeContentModal);
  }

  toggleSettingModal() {
    this.setState({
      SettingModal: !this.state.SettingModal,
    });
  }

  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen //Home.js
            name="Home"
            options={{
              title: 'M0ovie',
              headerRight: () => (
                <View style={styles.headerBtn}>
                  <TouchableOpacity
                    onPress={() => this.toggleMakeContentModal()}>
                    <AntDesign name={'plus'} size={30} color={'#3F3F3F'} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.toggleSettingModal()}>
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
                settingModal={this.state.MakeContentModal}
              />
            )}
          </Stack.Screen>

          <Stack.Screen //ProfileEdit.js
            name="ProfileEdit"
            //component={ProfileEdit}
            options={({navigation}) => ({
              headerTitle: '프로필 편집',
              headerTitleAlign: 'center',
              headerRight: () => (
                <TouchableOpacity style={{marginRight: 5}}>
                  <Text style={{fontSize: 19, color: '#058FFD'}}>완료</Text>
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity
                  style={{marginLeft: 5}}
                  onPress={() => {
                    navigation.goBack();
                    this.props.TabNavigation.setOptions({tabBarVisible: true});
                  }}>
                  <Text style={{fontSize: 19, color: '#058FFD'}}>취소</Text>
                </TouchableOpacity>
              ),
            })}>
            {() => <ProfileEdit TabNavigation={this.props.TabNavigation} />}
          </Stack.Screen>

          <Stack.Screen
            name="PostList"
            component={PostList}
            options={{
              headerTitle: '게시물',
              headerTitleAlign: 'center',
            }}
          />

          <Stack.Screen
            name="Follow"
            component={Follow}
            options={{
              headerTitle: 'm0ovie',
              headerTitleAlign: 'center',
            }}
          />

          <Stack.Screen name="MakeContent">
            {() => <MakeContent />}
          </Stack.Screen>

          <Stack.Screen
            name="NewPost"
            component={NewPost}
            options={{
              headerTitle: '새 게시물',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
              headerRight: () => (
                <TouchableOpacity style={{marginRight: 5}}>
                  <Text style={{fontSize: 19, color: '#058FFD'}}>다음</Text>
                </TouchableOpacity>
              ),
            }}
          />

          {/*<ClickedPic />*/}
        </Stack.Navigator>
        {this.state.MakeContentModal ? (
          <MakeContent
            toggleMakeContentModal={() => this.toggleMakeContentModal()}
          />
        ) : (
          <></>
        )}
        {this.state.SettingModal ? (
          <Settings toggleSettingModal={() => this.toggleSettingModal()} />
        ) : (
          <></>
        )}
      </>
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

export default Profile;
