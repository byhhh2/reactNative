import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

//components
import Story from './Story';
import PictureList from './PictureList';
import MakeContent from './MakeContent';

//icon
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

class ProfileHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View>
          <ProfileAndFollow />

          <Name />

          <ProfileEditBtn navigation={this.props.navigation} />

          <Story />

          <PictureDisplay />
          {this.props.settingModal ? <MakeContent /> : <></>}
        </View>
      </ScrollView>
    );
  }
}

const ProfileAndFollow = () => (
  //프로필 사진과 팔로우 표시
  <View style={styles.profileAndFollowView}>
    <Image
      style={{height: 100, width: 100}}
      source={require('../images/profilePicture.jpg')}
    />

    <View style={styles.followTextView}>
      <Text style={styles.followNumText}>3</Text>
      <Text style={styles.followNumText}>게시물</Text>
    </View>

    <View style={styles.followTextView}>
      <Text style={styles.followNumText}>152</Text>
      <Text style={styles.followNumText}>팔로워</Text>
    </View>

    <View style={styles.followTextView}>
      <Text style={styles.followNumText}>161</Text>
      <Text style={styles.followNumText}>팔로잉</Text>
    </View>
  </View>
);

const Name = () => (
  <View>
    <Text style={styles.nameText}>변영화</Text>
  </View>
);

const ProfileEditBtn = ({navigation}) => (
  <View>
    <TouchableOpacity
      style={styles.profileEditBtn}
      onPress={() => navigation.push('ProfileEdit')}>
      <Text style={{alignSelf: 'center'}}>프로필 편집</Text>
    </TouchableOpacity>
  </View>
);

const PictureDisplay = () => (
  <View>
    <View style={{flexDirection: 'row'}}>
      <View style={styles.selectPicIconView}>
        <TouchableOpacity>
          <FontAwesome5 name="grip-horizontal" size={30} color="#3F3F3F" />
        </TouchableOpacity>
      </View>

      <View style={styles.selectPicIconView}>
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={30} color="#3F3F3F" />
        </TouchableOpacity>
      </View>
    </View>

    <PictureList />
  </View>
);

const styles = StyleSheet.create({
  profileAndFollowView: {
    //프로필 사진과 숫자들 view
    flexDirection: 'row',
  },

  followNumText: {
    //게시물, 팔로워, 팔로잉 글자, 숫자
    fontSize: 17,
    textAlign: 'center',
  },

  followTextView: {
    //팔로우 숫자와 글자 묶는 view
    padding: '6%',
    justifyContent: 'center',
  },
  nameText: {
    //이름 글자
    marginLeft: '3%',
    fontSize: 17,
    margin: '3%',
  },
  profileEditBtn: {
    //프로필 편집 버튼
    margin: '3%',
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    padding: '2%',
    borderColor: '#3F3F3F',
    width: '90%',
  },
  selectPicIconView: {
    //각각 사진 폴더 icon담은 view
    alignSelf: 'center',
    marginLeft: '22%',
    marginRight: '22%',
    marginTop: '3%',
    marginBottom: '3%',
  },
});

export default ProfileHome;
