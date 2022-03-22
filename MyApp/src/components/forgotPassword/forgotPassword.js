import React,{useState} from 'react';
import { Text, View, StyleSheet,Image ,TouchableOpacity,ScrollView,Alert} from 'react-native';
import BackBtn from '../common/backBtn';
import Input from '../common/Input';
import auth from '@react-native-firebase/auth';

export default function ForgotPassword(props){

const [email, setEmail] = useState();

const forgotPassword = (Email) => {
        auth().sendPasswordResetEmail(Email)
          .then((user) => {
            Alert.alert('Password Change link send to given email')
          }).catch((e) => {
            console.log(e)
          })
      }

const pull_email = (data) => {
    setEmail(data)
}

const valid_email = (mail) => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let isValid = regex.test(mail);
    console.log(isValid);
    if(!isValid)
      Alert.alert('Enter Valid Email Address')
  }

  return (
      <ScrollView>
      <View style = {styles.main}>
      <BackBtn onClick={() => props.navigation.goBack()}/>
      <Image style = {styles.image} source={require('../../assets/lockIcon.jpg')}/>
      <Text style={styles.text1}>Forgot Password? </Text>
      <Text style={styles.text2}>Don't Worry! It happens. </Text>
      <Input text={'Email Address'} onChangeText={pull_email} value={email} 
      onBlur={()=>{valid_email(email)}} />
      <TouchableOpacity style={[styles.btn,styles.shadow]} onPress={()=>{forgotPassword(email)}} >
          <Text style={styles.btnText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  main : {
      flex : 1,
      backgroundColor : '#2596be',
      alignItems : 'center',
      position : 'relative',
  },
  image : {
      height : 280,
      width : 280,
      marginTop : 111,
      marginBottom : 20,

  },
  text1 : {
      color : 'white',
      fontFamily : 'Avenir-Roman',
      fontSize : 40,
      marginVertical : 10,
  },
  text2 : {
      color : 'white',
      fontFamily : 'Avenir-Roman',
      fontSize : 15,
      marginVertical : 10,
  },
  btn : {
      height : 50,
      width : 370,
      marginTop : 10,
      backgroundColor: '#2b5391',
      justifyContent : 'center',
      alignItems : 'center',
      borderRadius : 30,
      marginTop : 130,
      marginBottom : 160,
  },
  btnText : {
      color : 'white',
      fontWeight : 'bold',
  }

});
