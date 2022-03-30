import React from 'react';
import { Text, View, StyleSheet,Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import styles from './profile.styles';
import Header from '../common/header';

export default function Profile(props){

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
            });
        })
    }
    
    return (
        <View style = {styles.container}>
            <Header text={'Profile'} onClick={() => props.navigation.goBack()}/>
            <Text>Profile</Text>
            <Button title='Signout' onPress={()=>{out()}}></Button>
        </View>
    );
}
