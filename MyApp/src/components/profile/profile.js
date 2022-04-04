import React,{useState} from 'react';
import { Text, View,Button,TouchableOpacity,Image,StyleSheet } from 'react-native';
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
    <View>
        <View style={styles.upperView}>
          <Header text={'Profile'} onClick={() => props.navigation.goBack()}/>
          <View style ={styles.imageView}>
            <Image style = {styles.profileImg} source={require('../../assets/profile.jpg')}/>
            <Text style={styles.textSmall}>{props?.route.params.user}</Text>
          </View>
        </View>
        <TouchableOpacity style = {styles.logout} onPress={()=>{out()}}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  upperView : {
    backgroundColor : '#2596be',
    height : 200,
  },
  imageView : {
    alignItems : 'center',
    position : 'absolute',
    top : 148,
    left : 135,

  },
  profileImg : {
      height : 120,
      width : 120,
      borderRadius : 60
    },
    textSmall : {
      fontSize : 25,
      marginTop : 5
    },
    logout : {
      marginTop : 150,
      height : 40,
      justifyContent : 'center',
      alignItems : 'center',
    },
    logoutText : {
      fontSize : 20,
    }
});
