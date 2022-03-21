import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native';
import Input from '../common/Input';

export default function Login(props){
  return (
    <View style = {styles.main}>
      <View style = {styles.shadow}>
      <Image style = {styles.image} source={{uri: 'https://img.freepik.com/free-vector/bluebell-flowers-illustration_254915-2.jpg?w=1380'} /*require('../../assets/snack-icon.png')*/}/>
      </View>
      <Text style={styles.text1}>Welcome Back</Text>
      <Text style={styles.text2}>Login to your account</Text>
      <Input text={'Username'}/>
      <Input text={'Password'}/>
      <Text style={[styles.text2,{fontWeight : 'bold',marginLeft:230}]} onPress={()=>{props.navigation.navigate('ForgotPassword',{})}}>Forgot Password?</Text>
      <TouchableOpacity style={[styles.btn,styles.shadow]} onPress={()=>{props.navigation.navigate('SignUp',{})}} >
          <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>
      <View style = {{flexDirection:'row', flexWrap:'wrap'}}>
        <Text style={styles.text2}>Don't have an account? </Text>
        <Text style={[styles.text2,{fontWeight : 'bold'}]} onPress={()=>{props.navigation.navigate('SignUp',{})}}>Sign Up</Text>
      </View>
    </View>
  );
}

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
    btn : {
        height : 50,
        width : 370,
        marginTop : 140,
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


