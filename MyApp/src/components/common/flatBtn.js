import React,{ useState } from 'react';
import { Text, View,Image ,TouchableOpacity,Button,StyleSheet} from 'react-native';

export default function FlatBtn(props){
    
    const [show,setShow] = useState(false)

    return (
        <TouchableOpacity style={styles.main} onPress={props?.onPress}>
            <Image style = {styles.image} source={require('../../assets/moneyIcon.png')}/>
            <Text style = {styles.heading}>{props?.text || 'Upholder'}</Text>
            <TouchableOpacity style = {{position:'relative'}} onPress={()=>{setShow(!show)}}>
            <Image style = {styles.menuImage} source={require('../../assets/menuColored.png')}/>
            {show && <View style = {[styles.subView,styles.shadow]}>
                <TouchableOpacity onPress={props?.delete}>
                    <Text>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props?.rename}>
                    <Text>Rename</Text>
                </TouchableOpacity>
            </View>}
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
    subView : {
        backgroundColor : 'white',
        height : 40,
        width : 100,
        position :'absolute',
        right : 25,
        top : 0,
        zIndex : 99999,
        alignItems : 'center',
        justifyContent : 'space-around'
    },
    shadow : {
        shadowColor: 'black',
        elevation: 5,        
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        } }

});