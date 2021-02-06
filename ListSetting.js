//ListSetting.js

import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
 
export default class MakeContents extends React.Component {
 
    render() {
        return (
          <View  style={styles.container}>
            <TouchableOpacity style={styles.background}/>
                <View style={styles.modal}>
                   
                   <TouchableOpacity style={styles.listTouch}>
                      <Text style={styles.listText}>
                         설정
                      </Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.listTouch}>
                      <Text style={styles.listText}>
                         보관
                      </Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.listTouch}>
                      <Text style={styles.listText}>
                         내 활동
                      </Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.listTouch}>
                      <Text style={styles.listText}>
                         QR 코드
                      </Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.listTouch}>
                      <Text style={styles.listText}>
                         저장됨
                      </Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.listTouch}>
                      <Text style={styles.listText}>
                         친한 친구
                      </Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.listTouch}>
                      <Text style={styles.listText}>
                         사람 찾아보기 
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