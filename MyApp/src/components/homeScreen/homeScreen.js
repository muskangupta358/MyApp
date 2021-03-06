import React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet,Image ,TouchableOpacity,Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import DisplayText from '../common/displayText';


export default function HomeScreen(props){

    const out = () =>{
        auth()
        .signOut()
        .then(() => 
        {console.log('User signed out!')
        })
        .finally(()=>{
            GoogleSignin.signOut()
            .then(()=>{
            console.log('Google logged out');
            }).catch((error)=>{console.log(error)});
        })
    }
    return (
        <View style={{flex : 1,justifyContent:"center",alignItems:'center'}}>
            <DisplayText title={'Welcome'} description={'Welcome to homescreen '} error={false} />
            <Button title='Signout' onPress={()=>{out()}}></Button>
            <Button title='Go' onPress={()=>{props.navigation.navigate('AddUpholder',{})}}></Button>
        </View>
    );
}