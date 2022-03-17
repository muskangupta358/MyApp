import React from 'react';
import { Text, View, StyleSheet ,Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/components/logIn/login';
import SignUp from './src/components/signUp/signUp';
import ForgotPassword from './src/components/forgotPassword/forgotPassword';

const Stack = createStackNavigator();

function AuthStack(){
    return(    
      <Stack.Navigator screenOptions = {{headerTitleAlign:"center"}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
      );
  }

export {AuthStack};