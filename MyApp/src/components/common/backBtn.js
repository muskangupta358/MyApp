import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';

export default function BackBtn(props){

  return (
    <View >
        <TouchableOpacity style = {styles.headerBtn} onPress = {props.onClick}>       
            <Image style = {styles.logo} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1aeKhI8FgPhNob3XfBR2s3NJDpxM9Zd6CA&usqp=CAU'}}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    logo : {
        width: 50,
        height: 50,
    },
    headerBtn : {
        justifyContent : 'center',
        alignItems : 'center',
        height: 50,
        width : 50,
        marginLeft:10,
        marginTop : 30,
    }
});