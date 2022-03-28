import React,{} from 'react';
import { Text, View,Image ,TouchableOpacity,Button , SectionList} from 'react-native';
import styles from './entryDetails.styles';
import Header from '../common/header';
import ExpenseIncome from '../expenseIncome/expenseIncome';


export default function EntryDetails(props){
    const isEdit = props.route.params['isEdit'];
    const index = props.route.params['index']
    const pay = props?.route?.params?.pay;
    return (
        <View style={styles.container}>
            <Header text={'Entry details'} style={{backgroundColor:'white'}} onClick={() => props.navigation.goBack()}/>
            <ExpenseIncome pay={pay} isEdit={isEdit} index={index}/>
        </View>
    );
}