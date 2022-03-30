import React,{useState} from 'react';
import { Text, View,Button,TouchableOpacity,Image } from 'react-native';
import styles from './profile.styles';
import Header from '../common/header';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function Profile(props){

    const out = () =>{
        auth()
        .signOut()
        .then(() => {console.log('User signed out!')})
        .finally(()=>{
            GoogleSignin.signOut()
            .then(()=>{
            //console.log('Google logged out');
            }).catch((error)=>{console.log(error)});
        })
    }

  return (
    <View >
        <Header text={'Profile'} onClick={() => props.navigation.goBack()}/>
        <Button title='Signout' onPress={()=>{out()}}></Button>
        <Text>Profile</Text>
    </View>
  );
}
