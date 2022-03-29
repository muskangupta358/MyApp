import React,{} from 'react';
import { Text, View,Image ,TouchableOpacity} from 'react-native';
import styles from './editEntry.styles';
import ExpenseIncome from '../expenseIncome/expenseIncome';

import { connect } from 'react-redux';
import {add,edit,del,add_details,edit_details,del_details} from '../../redux/actions'



function EditEntry(props){

    const transactionIndex = props.data[props?.index].details.findIndex(item => item.transactionId === props?.transactionId);
    const transactionData = props.data[props?.index].details[transactionIndex];
    const isIncome = transactionData.paymentType === 'Income' ? true : false;

    return (
        <View style={[styles.container,styles.shadow,{borderTopColor : isIncome ? 'green' : 'red'}]}>
            <View style={styles.mainView}>
                <View style={styles.view1}>
                    <Text style={styles.text1}>{isIncome ? 'Cash In' : 'Cash Out'}</Text>
                    <Text style={styles.text1}>{new Date(transactionData.date).toDateString()}</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={[styles.text2,{color : isIncome ? 'green' : 'red'}]}>{transactionData.amount}</Text>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text3Remark}>{transactionData.remark}</Text>
                    <Text style={styles.text3}>Payment Mode : {transactionData.paymentMode}</Text>
                    <Text style={styles.text3}>Category : {transactionData.category}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.editBtn} onPress={props?.onPress}> 
                <Text style={styles.editBtntext}>Edit Entry</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
      data : state.upholderReducer.data
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        add : (temp) => dispatch(add(temp)),
        edit : (i,temp) =>  dispatch(edit(i,temp)),
        del : (i) =>  dispatch(del(i)),
        add_details : (i,temp) => dispatch(add_details(i,temp)),
        edit_details : (i,id,temp) => dispatch(edit_details(i,id,temp)),
        del_details : (i,id) => dispatch(del_details(i,id))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditEntry)