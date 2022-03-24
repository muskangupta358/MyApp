import React from 'react';
import { Text, View, StyleSheet ,Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/components/logIn/login';
import SignUp from './src/components/signUp/signUp';
import ForgotPassword from './src/components/forgotPassword/forgotPassword';

import HomeScreen from './src/components/homeScreen/homeScreen';
import AddUpholder from './src/components/addUpholder/addUpholder';
import AddEntry from './src/components/addEntry/addEntry';
import EntryDetails from './src/components/entryDetails/entryDetails';

const Stack = createStackNavigator();
const Stack2 = createStackNavigator();

function AuthStack(){
    return(    
      <Stack.Navigator screenOptions = {{headerTitleAlign:"center",headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
      );
  }


function MainStack(){
  return(    
    <Stack2.Navigator screenOptions = {{headerTitleAlign:"center",headerShown:false}}>
      <Stack2.Screen name="HomeScreen" component={HomeScreen} />
      <Stack2.Screen name="AddUpholder" component={AddUpholder} />
      <Stack2.Screen name="AddEntry" component={AddEntry} />
      <Stack2.Screen name="EntryDetails" component={EntryDetails} />
    </Stack2.Navigator>
    );
}

export {AuthStack,MainStack};