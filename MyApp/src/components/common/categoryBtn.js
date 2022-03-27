import React,{useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';

export default function CategoryBtn(props){
  return (
    <TouchableOpacity style = {styles.headerBtn} onPress = {props.onClick}> 
        <View style={styles.logo} >
            <Image style = {styles.image} source={props?.url}/>
        </View>      
        <Text style = {styles.text}>{props?.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    logo : {
        width: 60,
        height: 60,
        borderRadius : 30,
        backgroundColor : '#2596be',
        justifyContent:'center',
        alignItems :'center',
    },
    image : {
        width: 40,
        height: 40,
    },
    headerBtn : {
        justifyContent : 'center',
        alignItems : 'center',
        height: 70,
        width : 70,
        margin : 20
    },
    text : {
        fontSize:15,

    }
});