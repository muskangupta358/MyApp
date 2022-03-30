import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Login from './src/components/logIn/login';
import SignUp from './src/components/signUp/signUp';
import ForgotPassword from './src/components/forgotPassword/forgotPassword';

import HomeScreen from './src/components/homeScreen/homeScreen';
import AddUpholder from './src/components/addUpholder/addUpholder';
import AddEntry from './src/components/addEntry/addEntry';
import ExpenseIncome from './src/components/expenseIncome/expenseIncome';
import Profile from './src/components/profile/profile';

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
      <Stack2.Screen name="ExpenseIncome" component={ExpenseIncome} />
      <Stack2.Screen name="Profile" component={Profile}/>
    </Stack2.Navigator>
    );
}


export {AuthStack,MainStack};