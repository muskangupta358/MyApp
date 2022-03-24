import React,{} from 'react';
import { Text,View,Image ,TouchableOpacity,StyleSheet} from 'react-native';

export default function ShowEntry(props){
    return (
        <TouchableOpacity style={styles.main} onPress={props?.onPress}>
            <Image style = {styles.image} source={require('../../assets/moneyIcon.png')}/>
            <Text style = {styles.heading} >Upholder 1</Text>
            <TouchableOpacity>
            <Image style = {styles.menuImage} source={require('../../assets/menuColored.png')}/>
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
        padding : 20,
        backgroundColor : 'white'
    },
    image : {
        height : 30,
        width : 30,
    },
    menuImage : {
        height : 25,
        width : 25,
    },
    heading : {
        fontSize : 20,
    },

});