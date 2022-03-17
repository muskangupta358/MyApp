import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native';

export default function Login(props){
  return (
    <View style = {styles.main}>
      <View style = {styles.shadow}>
      <Image style = {styles.image} source={{uri: 'https://img.freepik.com/free-vector/bluebell-flowers-illustration_254915-2.jpg?w=1380'} /*require('../../assets/snack-icon.png')*/}/>
      </View>
      <Text style={styles.text1}>Welcome Back</Text>
      <Text style={styles.text2}>Login to your account</Text>
      <TextInput style={[styles.input,styles.shadow]} placeholder="UserName"/>
      <TextInput style={[styles.input,styles.shadow]} placeholder="Password"/>
      <TouchableOpacity style={[styles.btn,styles.shadow]} onPress={()=>{props.navigation.navigate('SignUp',{})}} >
          <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>
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
        height : 200,
        width : 410,
        borderBottomLeftRadius: 99999,
        borderBottomRightRadius: 99999,
    },
    shadow : {
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 50,
        shadowOffset: {
        height: 2,
        width: 2,
        } ,
        elevation: 3,
    },
    input : {
        marginVertical : 10,
        color : 'white',
        backgroundColor : '#83eaf1',
        width : 370,
        borderRadius : 30,
        paddingLeft : 15
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
        marginTop : 120,
        backgroundColor: '#83eaf1',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 30,
    },
    btnText : {
        color : 'white'
    }

});


