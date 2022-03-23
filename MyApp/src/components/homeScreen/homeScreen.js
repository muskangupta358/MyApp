import * as React from 'react';
import { Text, View, StyleSheet,Image ,TouchableOpacity,Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

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
            });
        })
        
    }
    return (
        <View style={{flex : 1,justifyContent:"center",alignItems:'center'}}>
            <Text>HomeScreen</Text>
            <Button title='Signout' onPress={()=>{out()}}></Button>
        </View>
    );
}