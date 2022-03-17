import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BackBtn from '../common/backBtn';

export default function ForgotPassword(props){
  return (
    <View>
      <Text>ForgotPassword</Text>
      <BackBtn onClick={() => props.navigation.goBack()}/>
    </View>
  );
}
