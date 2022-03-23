import React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet ,Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import HomeScreen from './src/components/homeScreen/homeScreen';
import { AuthStack } from './AppNavigator';

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
 
  useEffect(() => {
    // **************** Generate Token *******************
    messaging().getToken().then((response)=> {
      //console.log(response);
    }).catch(()=>{
        Alert.alert('No notification')
      }
    );

    // **************** Authenticate User exists or not *******************
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);


    // **************** Foreground Message Handler *******************
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage.notification.body)
      Alert.alert('A new FCM message arrived!', remoteMessage.notification.body
      //JSON.stringify(remoteMessage)
        );
      }
    );

    return unsubscribe,subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    //console.log('not signed in');
    return (
      <NavigationContainer>
        <AuthStack/>
      </NavigationContainer>
    );
  }
  // console.log('signed in :');
  // console.log(user.email);
  return (
    <HomeScreen/>
  );
}
