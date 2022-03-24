import React,{} from 'react';
import { Text, View,Image ,TouchableOpacity,Button , SectionList} from 'react-native';
import styles from './entryDetails.styles';
import Header from '../common/header';
import { ExpenseIncome_Tab } from '../../../AppNavigator';


export default function EntryDetails(props){
    return (
        <View style={styles.container}>
            <Header text={'Entry details'} style={{backgroundColor:'white'}} onClick={() => props.navigation.goBack()}/>
            <ExpenseIncome_Tab/>
        </View>
    );
}