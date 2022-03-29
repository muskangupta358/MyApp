import React,{} from 'react';
import { Text,View,Image ,TouchableOpacity,StyleSheet} from 'react-native';

const IMAGES = {
    'Rent' : require('../../assets/house.png'),
    'Grocery' : require('../../assets/grocery-cart.png'),
    'Travel' : require('../../assets/vehicle.png'),
    'Salary' : require('../../assets/salary.png'),
    'Food' : require('../../assets/salad.png'),
    'Shopping' : require('../../assets/online-shopping.png'),
    'Bills' : require('../../assets/budget.png'),
    'Others' : require('../../assets/question.png'),

}

export default function ShowEntry(props){
    return (
        <TouchableOpacity style={[styles.main,styles.shadow]} onPress={props?.onPress}>
            <View style={styles.imageView} >
                <Image style = {styles.image} source={IMAGES[props?.data.category]}/>
            </View>
            <View style={styles.subView}>
                <Text style = {styles.remark} >{props?.data.remark}</Text>
                <View style={styles.subView2}>
                    <View style={styles.view1}> 
                        <Text style={styles.text1}>{props?.data.paymentMode}</Text>
                    </View>
                    <View style={styles.view1} >
                        <Text style={styles.text1}>{props?.data.category}</Text>
                    </View>
                </View>
            </View>
            <Text style = {[styles.amount,{color : props?.data.paymentType === 'Income' ? 'green' : 'red'}]} >{props?.data.amount}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    main : {
        height : 85,
        flexDirection: 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 20,
        backgroundColor : 'white',
    },
    imageView : {
        height : 55,
        width : 55,
        borderRadius : 30,
        backgroundColor : '#2596be',
        justifyContent : 'center',
        alignItems : 'center'
    },
    image : {
        height : 35,
        width : 35,
    },
    subView : {
        width : 200,
        alignItems : 'flex-start'
    },
    remark : {
        fontSize : 20,
    },
    subView2 : {
        flexDirection: 'row',
        flexWrap : 'wrap',
        marginTop : 5,
    },
    view1 : {
        height : 25,
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 10,
        padding : 5,
        borderRadius : 7,
    },
    text1 : {
        color:'grey',
        fontSize:15
    },
    amount : {
        fontSize : 15,
        color : 'red'
    },
  shadow : {
    shadowColor: 'black',
    elevation: 5,        
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
        height: 1,
        width: 1
    } 
},

});