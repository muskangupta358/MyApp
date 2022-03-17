import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native';
import Input from '../common/Input';

export default function Login(props){
  return (
    <View style = {styles.main}>
      <View style = {styles.shadow}>
      <Image style = {styles.image} source={{uri: 'https://cdn.vectorstock.com/i/1000x1000/97/16/watercolor-culinary-objects-spoons-and-flowers-vector-34089716.webp'} /*require('../../assets/snack-icon.png')*/}/>
      </View>
      <Text style={styles.text1}>Sign Up</Text>
      <Text style={styles.text2}>Create your account</Text>
      <Input text={'Username'}/>
      <Input text={'Email Address'}/>
      <Input text={'Password'}/>
      <Input text={'Confirm Password'}/>
      <Text style={[styles.text2]}>By registering, you are agreeing to our Terms of use and Privacy Policy</Text>
      <TouchableOpacity style={[styles.btn,styles.shadow]} onPress={()=>{props.navigation.navigate('SignUp',{})}} >
          <Text style={styles.btnText}>SIGN UP</Text>
      </TouchableOpacity>
      <View style = {{flexDirection:'row', flexWrap:'wrap'}}>
        <Text style={styles.text2}>Already have an account? </Text>
        <Text style={[styles.text2,{fontWeight : 'bold'}]} onPress={()=>{props.navigation.navigate('SignUp',{})}}>Login</Text>
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
    btn : {
        height : 50,
        width : 300,

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
