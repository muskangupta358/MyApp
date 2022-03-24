import React,{} from 'react';
import { Text, View,Image ,TouchableOpacity,Button,StyleSheet} from 'react-native';

export default function FlatBtn(props){
    return (
        <TouchableOpacity style={styles.main}>
            <Image style = {styles.image} source={require('../../assets/moneyIcon.png')}/>
            <Text style = {styles.heading} >Upholder 1</Text>
            <TouchableOpacity>
            <Image style = {styles.image} source={require('../../assets/menuColored.png')}/>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    main : {
        height : 70,
        flexDirection: 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 20
    },
    image : {
        height : 35,
        width : 35,
    },
    heading : {
        fontSize : 25,
    },

});