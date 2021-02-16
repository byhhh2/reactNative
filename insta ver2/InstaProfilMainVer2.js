import * as React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MakeContents from './MakeContents.js'; 
import ListSetting from './ListSetting.js'; 
import Picture from './Picture.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      settingModal: false,
    }
  }

  toggleSettingModal() {
    this.setState({
      settingModal: !this.state.settingModal
    })
  }

  

  render() {
    return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile">
          {() => (
           <Stack.Navigator>
            <Stack.Screen //1
              name="Home"
              component={HomeScreen}
              options={{
              title: 'M0ovie',
              headerRight:() => (<View style={styles.headerBtn}>
                <TouchableOpacity ><AntDesign name={'plus'} size={30} color={'#3F3F3F'} /></TouchableOpacity>
                <TouchableOpacity onPress={()=>this.toggleSettingModal()}><EvilIcons style={styles.listIcon} name='navicon' size={30} color='#3F3F3F' /></TouchableOpacity>
                </View>),
              //headerTitleAlign: 'center',  //타이틀 중앙정렬
              justifyContent:'center',}}/>
              
            <Stack.Screen name="ProfileEdit" component={OpenProfileEdit}
              options={{
                headerTitle: '프로필 편집',
                headerTitleAlign: 'center',
                headerRight: () => (<TouchableOpacity style={{ marginRight: 5}}><Text style={{ fontSize: 19, color: '#058FFD'}}>완료</Text></TouchableOpacity>),
              }}
                
            /> 
                
           </Stack.Navigator>)}
      </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>);

function HomeScreen({ navigation }) {

  return (
    <ScrollView style={{ flex: 1 , backgroundColor: 'white' }}>
      
      <View style={styles.profileAndFollowView}>
          <Image
            style={{height:100, width:100}}
            source={require('./images/profilePicture.jpg')}/>
            
             
          <View style={styles.followText}>
            <Text style={styles.followNum}>3</Text>
            <Text style={styles.followNum}>게시물</Text>
          </View>

          <View style={styles.followText}>
            <Text style={styles.followNum}>152</Text>
            <Text style={styles.followNum}>팔로워</Text>
          </View>

          <View style={styles.followText}>
            <Text style={styles.followNum}>161</Text>
            <Text style={styles.followNum}>팔로잉</Text>
          </View>    
      </View>{  /* 프로필 사진과 팔로우 표시 */  }
      

      <View style={styles.nameView}>
             <Text style={styles.nameText}>변영화</Text>
      </View>{  /* 이름 */  } 


      <View>
             <TouchableOpacity 
             style={styles.profileEdit}
             onPress={() => navigation.push('ProfileEdit')}
             >
                 <Text  style={{ alignSelf: 'center' }}>
                      프로필 편집      
                </Text>
             </TouchableOpacity>
      </View>{  /* 프로필 편집 버튼 */  } 


      <ScrollView>
           <Image
               style={{height:100, width: '90%', margin: 5}}
               source={require('./images/story.jpg')}/>
      
      </ScrollView>{  /* 스토리 목록 (아직 보여주기 식) */  } 


      <View style={{ flexDirection: 'row' }}>
            <View style={styles.selectPicIcon}>
              <TouchableOpacity>
               <FontAwesome5 name='grip-horizontal' size={30} color='#3F3F3F' />
              </TouchableOpacity>
            </View>

            <View style={styles.selectPicIcon}>
              <TouchableOpacity>
                <Ionicons name='person-circle-outline' size={30} color='#3F3F3F' />
              </TouchableOpacity>
            </View>
      </View>{  /* 내가 올린 사진, 태그된 사진 고르는 버튼 */  } 

    
      <View>
            {/*<Picture/>*/}
            <Picture/>
      </View>{  /* 사진들 */  } 
   

      {/* { this.state.settingModal ? <MakeContents/> : <></> }*/}
      {/*<MakeContents/>*/}
      {/*<ListSetting/>*/}

      


    </ScrollView>//container
    
      );
    }

    function OpenProfileEdit({ navigation }) {
      return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
          
          <View>
            <Image
                style={{height:150, width: 150, margin: 5, alignSelf: 'center',}}
                source={require('./images/profileChange.jpg')}/>
            <TouchableOpacity>
              <Text 
              style={{ alignSelf: 'center', color: '#058FFD', fontSize: 15}}> 프로필 사진 바꾸기 </Text>
            </TouchableOpacity>
          </View>{  /* 프로필 사진 바꾸기 */  } 


          <View style={{marginTop: '3%'}}>
            <View style={styles.changeInfo}>
              <View style={{ width: '40%'}}><Text style={styles.infoKindsText}>이름</Text></View>
              <TextInput style={styles.changeInfoText}/>
            </View>

            <View style={styles.changeInfo}>
            <View style={{ width: '40%'}}><Text style={styles.infoKindsText}>사용자 이름</Text></View>
             <TextInput style={styles.changeInfoText}/>
            </View>

            <View style={styles.changeInfo}>
            <View style={{ width: '40%'}}><Text style={styles.infoKindsText}>웹사이트</Text></View>
              <TextInput style={styles.changeInfoText}/>
            </View>

            <View style={styles.changeInfo}>
            <View style={{ width: '40%'}}><Text style={styles.infoKindsText}>소개</Text></View>
              <TextInput style={styles.changeInfoText}/>
            </View>
          </View>{  /* 바꿀 정보 입력하는 부분 */  } 

          <View>
           <View style={styles.changeInfo}>
            <View><TouchableOpacity><Text style={styles.changeBtn}>프로페셔널 계정으로 전환</Text></TouchableOpacity></View>
           </View>

           <View style={styles.changeInfo}>
            <View><TouchableOpacity><Text style={styles.changeBtn}>개인 정보 설정</Text></TouchableOpacity></View>
           </View>


          </View>{  /* 전환 버튼 */  } 



        </View>//container
      );
    } //프로필 편집 창 



  

  }
}

/*
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile">
          {() => (
           <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
              title: 'M0ovie',
              headerRight:() => (<View style={styles.headerBtn}>
                <TouchableOpacity ><AntDesign name={'plus'} size={30} color={'#3F3F3F'} /></TouchableOpacity>
                <TouchableOpacity ><EvilIcons style={styles.listIcon} name='navicon' size={30} color='#3F3F3F' /></TouchableOpacity>
                </View>),
              //headerTitleAlign: 'center',  //타이틀 중앙정렬
              justifyContent:'center',}}/>
           </Stack.Navigator>)}
      </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
*/
//export default App;

const styles = StyleSheet.create({
  headerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  listIcon: {
    marginLeft: '10%',
  },

  profileAndFollowView: { //프로필 사진과 숫자들 view
    flexDirection: 'row',
  },

  followNum: { //게시물, 팔로워, 팔로잉 글자, 숫자
    fontSize: 17,
    textAlign: 'center' 
  },

  followText: { //팔로우 숫자와 글자 묶는 view
    padding: '6%',
    justifyContent: 'center',
  },

  nameView: { //이름 view
    
  },

  nameText: { //이름 글자
    marginLeft: '3%',
    fontSize: 15,
    margin: '3%',
  },

  profileEdit: { //프로필 편집 버튼 
    margin: '3%',
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    padding: '2%',
    borderColor: '#3F3F3F',
    width: '90%'
  },

  selectPicIcon: { //각각 사진 폴더 icon담은 view
    alignSelf: 'center',
    marginLeft: '22%',
    marginRight: '22%',
    marginTop: '3%',
    marginBottom: '3%'
  },

  changeInfo: {
    borderTopWidth: 1,
    borderColor: '#dcdcdc',
    padding: '5%',
    flexDirection: 'row',
  },

  changeInfoText: {
    //marginLeft: '20%',
    height: 35,
    width: '60%',
    padding: 0,
    fontSize: 20,
  },

  infoKindsText: {
    fontSize: 20
  },

  changeBtn: {
    fontSize: 20,
    color: '#058FFD',
  }

});