import React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';

export default function Input2(props){
  return (
    <View>
        <TextInput style={[styles.input,styles.shadow]} placeholder={props?.text} placeholderTextColor="#2596be" autoCapitalize="none" />
    </View>
  );
}

const styles = StyleSheet.create({
    input : {
        height : 50,
        margin : 20,
        paddingHorizontal : 20,
        paddingVertical : 10,
        backgroundColor : 'white',
        borderRadius : 5,
      },
        
      shadow : {
            shadowColor: 'black',
            elevation: 5,        
            shadowOpacity: 0.5,
            shadowRadius: 2,
            shadowOffset: {
                height: 1,
                width: 1
            } 
      },
});

