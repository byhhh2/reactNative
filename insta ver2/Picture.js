import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
 
export default class Picture extends Component{
    render(){
        return (
            <View> 

                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{height:130, width:'33%'}}
                        source={require('./images/pic1.jpg')}/>

                    <Image
                        style={{height:130, width:'33%'}}
                        source={require('./images/pic2.jpg')}/>

                    <Image
                        style={{height:130, width:'33%'}}
                        source={require('./images/pic3.jpg')}/> 
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{height:130, width:'33%'}}
                        source={require('./images/pic4.jpg')}/>
                    
                    <Image
                        style={{height:130, width:'33%'}}
                        source={require('./images/pic5.jpg')}/>

                    <Image
                        style={{height:130, width:'33%'}}
                        source={require('./images/pic6.jpg')}/> 

                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{height:130, width:'33%'}}
                        source={require('./images/pic7.jpg')}/>
                    
                    <Image
                        style={{height:130, width:'33%'}}
                        source={require('./images/pic8.jpg')}/>

                    <Image
                        style={{height:130, width:'33%'}}
                        source={require('./images/pic9.jpg')}/> 

                </View>

                


                    

            </View>

            
           


        );
    }
}
 

const style = StyleSheet.create({
    
});