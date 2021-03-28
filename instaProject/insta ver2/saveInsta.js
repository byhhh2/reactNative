import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
//import Setting from './Setting.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Container, Content, Header, Left, Body, Right, Button } from 'native-base';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}> 
        <View> 
          <View style={styles.nameAndBtn}> 
            <Text style={styles.idName}>M0ovie</Text>{  /* 상단에 이름, 추가와 리스트 기호 */  } 

            <TouchableOpacity style={styles.plus}>
              <AntDesign name={'plus'} size={30} color={'#3F3F3F'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.list}>
              <EvilIcons style={styles.list} name='navicon' size={30} color='#3F3F3F' />
            </TouchableOpacity>
          </View>



          
          <View style={styles.profileAndFollow}>
                 <Image
                    style={{height:100, width:100}}
                    source={require('./images/profilePicture.jpg')}/>{  /* 프로필 사진과 팔로우 표시 */  } 
            
             
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
              
          </View>
          


          <View style={styles.name}>
             <Text style={styles.nameText}>변영화</Text>{  /* 이름 */  } 
          </View>



          <View>
             <TouchableOpacity style={styles.profileEdit}>
                 <Text  style={styles.profileEditText}>
                      프로필 편집      
                </Text>{  /* 프로필 편집 버튼 */  } 
             </TouchableOpacity>
          </View>



          <View style={styles.storyList}>
              <Text>스토리 목록</Text>{  /* 스토리 목록 */  } 
          </View>
            





          <View style={styles.selectSee}>
            <View style={styles.selectPic}>
              <FontAwesome5 name='grip-horizontal' size={30} color='#3F3F3F' />{  /* 내가 올린 사진 볼 지 남이 올린 사진 볼지 고르는 버튼 */  } 
            </View>

            <View style={styles.selectPic}>
             <Ionicons name='person-circle-outline' size={30} color='#3F3F3F' />
            </View>
          </View>
            



          <View style={styles.PicList}>
            <Text>사진 목록</Text>{  /* 사진들 */  } 
          </View>



         
         </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileAndFollow: { //프로필 사진과 숫자들 view
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

  profileEditText: { //프로필 편집 버튼 안 text
    alignSelf: 'center',
  },

  storyList: { //스토리 목록 
    margin: 55,
  },

  selectSee: { //사진 폴더 view 
    flexDirection: 'row',
  },

  selectPic: { //각각 사진 폴더 icon담은 view
    alignSelf: 'center',
    marginLeft: '22%',
    marginRight: '22%'
  },

  PicList: { //사진 목록
    margin: 100
  },

  nameAndBtn: { //M0ovie +=
    flexDirection: 'row',
    justifyContent: 'center'
  },

  idName: { //M0ovie
    fontSize: 30,
    alignSelf: 'center',
  },

  plus: { //+
    alignSelf: 'center',
    marginLeft: '50%',
   // float: right,
  },

  list: { //=
    alignSelf: 'center',
    marginLeft: '1%',
  }
});