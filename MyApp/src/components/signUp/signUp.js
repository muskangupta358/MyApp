import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,Alert,ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin';
import Input from '../common/Input';
import BackBtn from '../common/backBtn';
import SocialBtn from '../common/socialBtn';
import valid_email from '../../utilities/validEmail';

export default function Login(props){

  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [confirmpass, setConfirmpass] = useState();


  useEffect (() => {
    GoogleSignin.configure({
      webClientId: '739803817157-qbh6t9ebjfe71mh24mvkr38mk226mefr.apps.googleusercontent.com', 
    });
  },[]);


  const googleSignUp = async () => {
    try {
      const userInfo = await GoogleSignin.signIn();
      // console.log(userInfo);
      // console.log(userInfo.user.email);
      signUp(userInfo.user.email,'1234abc',true);

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("SIGN_IN_CANCELLED");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("IN_PROGRESS");
      }
       else {
        console.log(error);
      }
    }
  };

  const signUp = (email,pass,isSocial) => {
    auth()
    .createUserWithEmailAndPassword(email,pass)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        if(isSocial){
          GoogleSignin.signOut()
          .then(()=>{
            console.log('Google logged out');
          });
          Alert.alert('This account is already signed Up! Please Login');
        }
        else
          Alert.alert('That email address is already in use!');
      }
      else if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      }
      else{
        console.log(error);
      }
    });
  }

  const pull_email = (data) => {
    setEmail(data)
  }

  const pull_pass = (data) => {
    setPass(data)
  }

  const pull_user = (data) => {
    setUser(data)
  }

  const pull_confirmpass = (data) => {
    setConfirmpass(data)
  }
  return (
    <ScrollView>
    <View style = {styles.main}>
      <View style = {styles.shadow}>
      <BackBtn onClick={() => props.navigation.goBack()}/>
      <Image style = {styles.image} source={require('../../assets/Flower.webp')}/>
      </View>
      <Text style={styles.text1}>Sign Up</Text>
      <Text style={styles.text2}>Create your account</Text>
      <Input text={'Username'} onChangeText={pull_user} value={user} />
      <Input text={'Email Address'} onChangeText={pull_email} value={email} 
      onBlur={()=>{valid_email(email)}} 
      />
      <View style = {{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-around'}}>
        <Input text={'Password'} width={160} margin = {17} onChangeText={pull_pass} value={pass} protected={true}/>
        <Input text={'Confirm Password'} width={160} margin = {17} onChangeText={pull_confirmpass} value={confirmpass} protected={true}/>
      </View>
      <Text style={[styles.text3]}>By registering, you are agreeing to our Terms of use and Privacy Policy</Text>

      <View style = {styles.social}>
        <SocialBtn onClick={() => googleSignUp() } url={require('../../assets/googleIcon.png')}/>
        <SocialBtn onClick={() => googleSignUp() } url={require('../../assets/facebook.png')}/>
        <SocialBtn onClick={() => googleSignUp() } url={require('../../assets/twitter.png')}/>
        <SocialBtn onClick={() => googleSignUp() } url={require('../../assets/apple.png')}/>
      </View>

      <TouchableOpacity style={[styles.btn,styles.shadow]} onPress={()=>{
        if(pass === confirmpass)
          signUp(email,pass,false)
        else
          Alert.alert('Passwords do not match')
        }}>
          <Text style={styles.btnText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style = {{flexDirection:'row', flexWrap:'wrap'}}>
        <Text style={styles.text2}>Already have an account? </Text>
        <Text style={[styles.text2,{fontWeight : 'bold'}]} onPress={()=>{props.navigation.navigate('Login',{})}}>Login</Text>
      </View>
    </View>
    </ScrollView>
  );
}
//

const styles = StyleSheet.create({
    main : {
        flex : 1,
        backgroundColor : '#2596be',
        alignItems : 'center',
    },
    image : {
        height : 280,
        width : 410,
        borderBottomLeftRadius: 99999,
        borderBottomRightRadius: 99999,
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
    text3 : {
      color : 'white',
      fontFamily : 'Avenir-Roman',
      fontSize : 13,
      marginVertical : 7,
      marginHorizontal : 17,
    },
    social:{
      justifyContent: 'space-around',
      alignItems : 'center',
      flexDirection:'row',
      flexWrap:'wrap',
      width:370,
      height:80
    },
    btn : {
        height : 50,
        width : 370,
        marginTop : 10,
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
