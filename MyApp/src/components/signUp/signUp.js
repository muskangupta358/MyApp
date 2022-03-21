import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ImageBackground} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin,GoogleSigninButton,statusCodes} from '@react-native-google-signin/google-signin';
import Input from '../common/Input';
import BackBtn from '../common/backBtn';
import SocialBtn from '../common/socialBtn';

export default function Login(props){

  const [email, setEmail] = useState();
  const [pass, setPass] = useState();



  useEffect (() => {
    GoogleSignin.configure({
      webClientId: '739803817157-qbh6t9ebjfe71mh24mvkr38mk226mefr.apps.googleusercontent.com', 
    });
  },[]);


  const googleSignUp = async () => {
    try {
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      console.log(userInfo.user.email);
      signUp(userInfo.user.email,'1234abc');
      
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

  const signUp = (email,pass) => {
    auth()
    .createUserWithEmailAndPassword(email,pass)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    });
  }

  const pull_email = (data) => {
    setEmail(data)
  }

  const pull_pass = (data) => {
    setPass(data)
  }
  

  return (
    <View style = {styles.main}>
      <View style = {styles.shadow}>
      <BackBtn onClick={() => props.navigation.goBack()}/>
      <Image style = {styles.image} source={{uri: 'https://img.freepik.com/free-vector/bluebell-flowers-illustration_254915-2.jpg?w=1380'} /*require('../../assets/snack-icon.png')*/}/>
      </View>
      <Text style={styles.text1}>Sign Up</Text>
      <Text style={styles.text2}>Create your account</Text>
      <Input text={'Username'}  />
      <Input text={'Email Address'} func={pull_email} />
      <View style = {{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-around'}}>
        <Input text={'Password'} width={160} margin = {17} func={pull_pass}/>
        <Input text={'Confirm Password'} width={160} margin = {17} />
      </View>
      <Text style={[styles.text3]}>By registering, you are agreeing to our Terms of use and Privacy Policy</Text>

      <View style = {{flex: 1,justifyContent: 'space-around',alignItems : 'center',flexDirection:'row',flexWrap:'wrap',width:370}}>
        <SocialBtn onClick={() => googleSignUp() } url={'https://cdn-icons-png.flaticon.com/512/270/270014.png'}/>
        <SocialBtn onClick={() => googleSignUp() } url={'https://cdn-icons-png.flaticon.com/512/185/185981.png'}/>
        <SocialBtn onClick={() => googleSignUp() } url={'https://cdn-icons-png.flaticon.com/512/185/185961.png'}/>
        <SocialBtn onClick={() => googleSignUp() } url={'https://cdn-icons-png.flaticon.com/512/185/185964.png'}/>
      </View>

      <TouchableOpacity style={[styles.btn,styles.shadow]} onPress={()=>{signUp(email,pass)}} >
          <Text style={styles.btnText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style = {{flexDirection:'row', flexWrap:'wrap'}}>
        <Text style={styles.text2}>Already have an account? </Text>
        <Text style={[styles.text2,{fontWeight : 'bold'}]} onPress={()=>{props.navigation.navigate('Login',{})}}>Login</Text>
      </View>
    </View>
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
    btn : {
        height : 50,
        width : 370,
        marginTop : 50,
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
