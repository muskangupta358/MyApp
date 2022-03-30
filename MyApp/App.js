import React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet ,Alert} from 'react-native';

import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { Provider } from 'react-redux';
import { store,persistor } from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';

import { AuthStack,MainStack } from './AppNavigator';

import { connect } from 'react-redux';
import { userDetails } from './src/redux/actionType';

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    // props.userDetails(user);
    // console.log(props.user)
    if (initializing) setInitializing(false);
  }

  useEffect(()=>{
    persistor(()=>{
      const user = store.getState().userReducer
    });
  },[])
 
  useEffect(() => {

    //********************** Splash Screen *****************/
    SplashScreen.hide();

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
      <Provider store={store} persistor={persistor}>
        <NavigationContainer>
          <AuthStack/>
        </NavigationContainer>
      </Provider>
      
    );
  }
  // console.log('signed in :');
  // console.log(user.email);
  return (
    <Provider store={store} persistor={persistor}>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </Provider>
  );
}



// const mapStateToProps = (state) => {
//   return {
//     user : state.userReducer.user
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//       userDetails : (newUser) => dispatch(userDetails(newUser)),
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)
