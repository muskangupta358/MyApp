import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Image,TextInput,TouchableOpacity,ScrollView, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import Input from '../common/Input';
import SocialBtn from '../common/socialBtn';
import {GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin';
import valid_email from '../common/validEmail';

export default function Login(props){

  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  useEffect (() => {
    GoogleSignin.configure({
      webClientId: '739803817157-qbh6t9ebjfe71mh24mvkr38mk226mefr.apps.googleusercontent.com', 
    });
  },[]);

  const googleLogin = async () => {
    try {
      const userInfo = await GoogleSignin.signIn();
      login(userInfo.user.email,'1234abc');
    } 
    catch (error) {
      console.log(error);
    }
  };

  const login = (email,pass) => {
    auth()
    .signInWithEmailAndPassword(email, pass)
    .then(() => {
      console.log('Logged in!');
    })
    .catch(error => {
      Alert.alert('Please Sign Up first')
      //console.error(error);
    });
  }

  const pull_email = (data) => {
    setEmail(data)
  }

  const pull_pass = (data) => {
    setPass(data)
  }
  

  return (
    <ScrollView>
    <View style = {styles.main}>
      <View style = {styles.shadow}>
      <Image style = {styles.image} source={{uri: 'https://img.freepik.com/free-vector/bluebell-flowers-illustration_254915-2.jpg?w=1380'} /*require('../../assets/snack-icon.png')*/}/>
      </View>
      <Text style={styles.text1}>Welcome Back</Text>
      <Text style={styles.text2}>Login to your account</Text>
      <Input text={'Username'} onChangeText={pull_email} value={email} onBlur={()=>{valid_email(email)}} />
      <Input text={'Password'} onChangeText={pull_pass} value={pass} protected={true}/>
      <Text style={[styles.text2,{fontWeight : 'bold',marginLeft:230}]} onPress={()=>{props.navigation.navigate('ForgotPassword',{})}}>Forgot Password?</Text>

      <View style = {styles.social}>
        <SocialBtn onClick={() => googleLogin() } url={'https://cdn-icons-png.flaticon.com/512/270/270014.png'}/>
        <SocialBtn onClick={() => googleLogin() } url={'https://cdn-icons-png.flaticon.com/512/185/185981.png'}/>
        <SocialBtn onClick={() => googleLogin() } url={'https://cdn-icons-png.flaticon.com/512/185/185961.png'}/>
        <SocialBtn onClick={() => googleLogin() } url={'https://cdn-icons-png.flaticon.com/512/185/185964.png'}/>
        </View>

      <TouchableOpacity style={[styles.btn,styles.shadow]} onPress={()=>{login(email,pass)}} >
          <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>
      <View style = {{flexDirection:'row', flexWrap:'wrap',marginBottom:30}}>
        <Text style={styles.text2}>Don't have an account? </Text>
        <Text style={[styles.text2,{fontWeight : 'bold'}]} onPress={()=>{props.navigation.navigate('SignUp',{})}}>Sign Up</Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    main : {
        flex : 1,
        backgroundColor : '#2596be',
        alignItems : 'center',
        marginBottom:30,
    },
    image : {
        height : 280,
        width : 410,
        borderBottomLeftRadius: 99999,
        borderBottomRightRadius: 99999,
    },
    text1 :{
        color : 'white',
        fontFamily : 'Avenir-Roman',
        fontSize : 40,
        marginVertical : 10

    },
    text2 : {
        color : 'white',
        fontFamily : 'Avenir-Roman',
        fontSize : 15,
        marginVertical : 10
    },
    social : {
      justifyContent: 'space-around',
      alignItems : 'center',
      flexDirection:'row',
      flexWrap:'wrap',
      width:370,
      height:100,
      marginTop:30
    },
    btn : {
        height : 50,
        width : 370,
        marginTop:10,
        backgroundColor: '#2b5391',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 30,
    },
    btnText : {
        color : 'white',
        fontWeight : 'bold',
    }

});


