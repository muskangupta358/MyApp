import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Alert} from 'react-native';

const valid_email = (mail) => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let isValid = regex.test(mail);
    // console.log(mail);
    // console.log(isValid);
    if(!isValid)
      Alert.alert('Enter Valid Email Address')
  }

export default valid_email;