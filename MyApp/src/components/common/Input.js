import React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';

export default function Input(props){
  return (
    <View>
        <TextInput style={[styles.input,styles.shadow,{width : props?.width || 370, marginHorizontal: props?.margin}]} placeholder={props.text} placeholderTextColor="#2596be" 
         onChangeText={props?.onChangeText} value={props?.value} autoCapitalize="none" secureTextEntry={props?.protected || false}
         onBlur={props?.onBlur}
         />
    </View>
  );
}

const styles = StyleSheet.create({
  shadow : {
      shadowColor: "black",
      shadowOpacity: 0.5,
      shadowRadius: 3,
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