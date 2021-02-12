import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const PictureList = () => (
  <View>
    <View style={{flexDirection: 'row'}}>
      <Image
        style={{height: 130, width: '33%'}}
        source={require('../images/pic1.jpg')}
      />

      <Image
        style={{height: 130, width: '33%'}}
        source={require('../images/pic2.jpg')}
      />

      <Image
        style={{height: 130, width: '33%'}}
        source={require('../images/pic3.jpg')}
      />
    </View>

    <View style={{flexDirection: 'row'}}>
      <Image
        style={{height: 130, width: '33%'}}
        source={require('../images/pic4.jpg')}
      />

      <Image
        style={{height: 130, width: '33%'}}
        source={require('../images/pic5.jpg')}
      />

      <Image
        style={{height: 130, width: '33%'}}
        source={require('../images/pic6.jpg')}
      />
    </View>

    <View style={{flexDirection: 'row'}}>
      <Image
        style={{height: 130, width: '33%'}}
        source={require('../images/pic7.jpg')}
      />

      <Image
        style={{height: 130, width: '33%'}}
        source={require('../images/pic8.jpg')}
      />

      <Image
        style={{height: 130, width: '33%'}}
        source={require('../images/pic9.jpg')}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({});

export default PictureList;
