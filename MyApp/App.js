import React,{useEffect} from 'react';
import { Text, View, StyleSheet ,Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

export default function App() {

      
  async function checkApplicationPermission() {
    const authorizationStatus = await messaging().requestPermission();

    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      console.log('User has notification permissions enabled.');
    } else if (authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL) {
      console.log('User has provisional notification permissions.');
    } else {
      console.log('User has notification permissions disabled');
    }
  }

  useEffect(() => {

    messaging().getToken().then((response)=> {
      console.log(response);
    }).catch(()=>{
        Alert.alert('No notification')
      }
    );

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage.notification.body)
      Alert.alert('A new FCM message arrived!', remoteMessage.notification.body
      //JSON.stringify(remoteMessage)
      );
    }
    );

    checkApplicationPermission();

    return unsubscribe;
  }, []);

  return (
    <View>
      <Text>Hello</Text>
    </View>
    
  );
}
