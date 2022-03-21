import React,{useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';

export default function SocialBtn(props){
  return (
    <View style = {styles.button}>
        <TouchableOpacity style = {styles.headerBtn} onPress = {props.onClick}>       
            <Image style = {styles.logo} source={{uri: props.url}} />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    button : {
        width: 50,
        height: 50,
        marginTop : 40,
    },
    logo : {
        width: 50,
        height: 50,
        
    },
    headerBtn : {
        justifyContent : 'center',
        alignItems : 'center',
        height: 50,
        width : 50,
        
    }
});