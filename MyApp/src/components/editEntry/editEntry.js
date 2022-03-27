import React,{} from 'react';
import { Text, View,Image ,TouchableOpacity} from 'react-native';
import styles from './editEntry.styles';
import ExpenseIncome from '../expenseIncome/expenseIncome';



export default function EditEntry(props){
    return (
        <View style={[styles.container,styles.shadow]}>
            <View style={styles.mainView}>
                <View style={styles.view1}>
                    <Text style={styles.text1}>Cash in</Text>
                    <Text style={styles.text1}>Date</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text2}>51</Text>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text3Remark}>Remark</Text>
                    <Text style={styles.text3}>Payment Mode : Cash</Text>
                    <Text style={styles.text3}>Category : Rent</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.editBtn} onPress={props?.onPress}> 
                <Text style={styles.editBtntext}>Edit Entry</Text>
            </TouchableOpacity>
        </View>
    );
}