//MakeContents.js

import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
 
export default class MakeContents extends React.Component {
 
    render() {
        return (
          <View  style={styles.container}>
            <TouchableOpacity style={styles.background}/>
                <View style={styles.modal}>
                   <Text style={styles.titleText}>만들기</Text>
                   
                   <TouchableOpacity style={styles.listTouch}>
                      <Text style={styles.listText}>
                         게시물
                      </Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.listTouch}>
                      <Text style={styles.listText}>
                         스토리
                      </Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.listTouch}>
                      <Text style={styles.listText}>
                         스토리 하이라이트
                      </Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.listTouch}>
                      <Text style={styles.listText}>
                         IGTV 동영상
                      </Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.listTouch}>
                      <Text style={styles.listText}>
                         릴스
                      </Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.listTouch}>
                      <Text style={styles.listText}>
                         가이드
                      </Text>
                   </TouchableOpacity>


                </View>
          </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent'
      },
      background: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      ddayInput: { //사용 ㄴㄴ
        backgroundColor: 'white',
        marginBottom: 20,
        width: '75%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#a5a5a5'
      },
      modal: {
        marginHorizontal: 0,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: '60%',
        backgroundColor: 'white',
      },
      listText: {
        fontSize: 20,
        margin: 15,
      },
      listTouch:{
        borderTopWidth: 1,
        borderTopColor: '#d2d2d2',
        width: '100%',
      },

      titleText: {
        fontSize: 20,
        margin: 15,
        fontWeight: 'bold',
      }
});