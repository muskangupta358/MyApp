import * as React from 'react';
import { Text, View, StyleSheet,Image ,TouchableOpacity} from 'react-native';
import BackBtn from '../common/backBtn';
import Input from '../common/Input';

export default function ForgotPassword(props){
  return (
      <View style = {styles.main}>
      <BackBtn onClick={() => props.navigation.goBack()}/>
      <View style = {styles.shadow}>
      <Image style = {styles.image} source={{uri: 'https://img.freepik.com/free-vector/bluebell-flowers-illustration_254915-2.jpg?w=1380'} /*require('../../assets/snack-icon.png')*/}/>
      </View>
      <Text style={styles.text1}>Forgot Password? </Text>
      <Text style={styles.text2}>Don't Worry! It happens. </Text>
      <Input text={'Email Address'} />
      <Input text={' New Password'} />
      <Input text={'Confirm Password'}/>
      <TouchableOpacity style={[styles.btn,styles.shadow]} onPress={()=>{props.navigation.navigate('SignUp',{})}} >
          <Text style={styles.btnText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
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
  btn : {
      height : 50,
      width : 370,
      marginTop : 120,
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
