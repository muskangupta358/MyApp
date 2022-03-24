import React,{useState} from 'react';
import { Text,View,Image ,TouchableOpacity,StyleSheet} from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import Input2 from './Input2';


export default function ExpenseIncome(props){

    const [paymentMode,setPaymentMode] = useState(0);

    return (
        <View style={styles.container}>
            <Input2 text={'Enter Amount'}/>
            <Input2 text={'Enter Remark'}/>
            <Input2 text={'Enter Date'}/>
            <Input2 text={'Enter Category'}/>
            <View>
            <Text style={styles.modeText}>Payment mode</Text>
            <SegmentedControlTab
                tabsContainerStyle={styles.tabsContainerStyle}
                tabStyle={styles.tabStyle}
                tabTextStyle={styles.tabTextStyle}
                activeTabStyle={styles.activeTabStyle}
                activeTabTextStyle={styles.activeTabTextStyle}
                selectedIndex={paymentMode}
                values={['Cash','Online']}
                onTabPress={index => {
                    console.log(index)
                    setPaymentMode(index);
                }}
                />
            </View>
            <TouchableOpacity style={styles.btn} onPress={props?.onPress}>
                <Text style = {styles.btnText} >Add</Text>
            </TouchableOpacity>
            <View></View>
        </View>
    );
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#2596be',
    },
    tabsContainerStyle: {
        marginTop : 5,
        margin : 20,
      },
      tabStyle: {
        backgroundColor : '#2596be',
        borderColor : 'white',
        borderWidth : 1,
      },
      tabTextStyle: {
        color : 'white'
      },
      activeTabStyle: {
        backgroundColor : 'white',
      },
      activeTabTextStyle: {
        color : '#2596be'
      },
      modeText : {
          marginLeft:20,
        color : 'white',
        fontSize : 18,
      },
    btn : {
        justifyContent:'center',
        alignItems : 'center',
        height : 50,
        margin : 20,
        backgroundColor : 'green'
    },
    btnText : {
        color : 'white',
        fontSize : 20
    },

});