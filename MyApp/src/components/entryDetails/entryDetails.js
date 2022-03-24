import React,{} from 'react';
import { Text, View,Image ,TouchableOpacity,Button , SectionList} from 'react-native';
import styles from './entryDetails.styles';
import Header from '../common/header';


export default function EntryDetails(props){
    return (
        <View style={styles.container}>
            <Header text={'Entry details'} onClick={() => props.navigation.goBack()}/>
            <Text>Details</Text>
        </View>
    );
}