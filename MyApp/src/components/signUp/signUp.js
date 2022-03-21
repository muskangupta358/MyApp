import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ImageBackground} from 'react-native';
import Input from '../common/Input';
import BackBtn from '../common/backBtn';

export default function Login(props){
  return (
    <View style = {styles.main}>
      <View style = {styles.shadow}>
      <BackBtn onClick={() => props.navigation.goBack()}/>
      <Image style = {styles.image} source={{uri: 'https://img.freepik.com/free-vector/bluebell-flowers-illustration_254915-2.jpg?w=1380'} /*require('../../assets/snack-icon.png')*/}/>
      </View>
      <Text style={styles.text1}>Sign Up</Text>
      <Text style={styles.text2}>Create your account</Text>
      <Input text={'Username'}/>
      <Input text={'Email Address'} />
      <View style = {{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-around'}}>
        <Input text={'Password'} width={160} margin = {17}/>
        <Input text={'Confirm Password'} width={160} margin = {17} />
      </View>
      <Text style={[styles.text3]}>By registering, you are agreeing to our Terms of use and Privacy Policy</Text>
      <TouchableOpacity style={[styles.btn,styles.shadow]} onPress={()=>{props.navigation.navigate('SignUp',{})}} >
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
