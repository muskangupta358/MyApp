import * as React from 'react';
import { Text, View, StyleSheet,Image ,TouchableOpacity,Button} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function HomeScreen(props){
    const out = () =>{
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));

        GoogleSignin.signOut()
        .then(()=>{
          console.log('logged out');
        });
    }
    return (
        <View style={{flex : 1,justifyContent:"center",alignItems:'center'}}>
            <Text>HomeScreen</Text>
            <Button title='Signout' onPress={()=>{out()}}></Button>
        </View>
    );
}