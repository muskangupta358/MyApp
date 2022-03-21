import React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';

export default function Input(props){

  return (
    <View>
        <TextInput style={[styles.input,styles.shadow,{width : props?.width || 370, marginHorizontal: props?.margin}]} placeholder={props.text} placeholderTextColor="#2596be" 
         onChangeText={props?.func} value={props?.value} />
    </View>
  );
}

const styles = StyleSheet.create({
  shadow : {
      shadowColor: "black",
      shadowOpacity: 0.5,
      shadowRadius: 50,
      shadowOffset: {
      height: 2,
      width: 2,
      } ,
      elevation: 3,
  },
  input : {
      marginVertical : 15,
      backgroundColor : 'white',
      width : 370,
      height : 45,
      borderRadius : 30,
      paddingLeft : 15
  },
});