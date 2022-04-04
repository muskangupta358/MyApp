import React,{useState,useRef, useEffect} from 'react';
import { Text,View,Image ,TouchableOpacity,StyleSheet,Animated,Easing, Alert} from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import RBSheet from "react-native-raw-bottom-sheet";
import Input2 from '../common/Input2';
import AddCategory from '../addCategory/addCategory';
import DatePicker from 'react-native-date-picker'
import styles from './expenseIncome.styles';
import Header from '../common/header';

import { connect } from 'react-redux';
import {add,edit,del,add_details,edit_details,del_details} from '../../redux/actions'


function ExpenseIncome(props){

    const isEdit = props.route.params['isEdit'];
    const index = props?.route?.params['index'];
    const transactionId = props?.route?.params['transactionId'];

    const transactionIndex = props.data[index].details.findIndex(item => item.transactionId === transactionId);
    const transactionData = props.data[index].details[transactionIndex];

    const [amount,setAmount] = useState(0);
    const [remark,setRemark] = useState('');
    const [date, setDate] = useState(new Date())
    const [category,setCategory] = useState('');
    const [paymentMode,setPaymentMode] = useState(0);
    const [paymentType,setPaymentType] = useState(0);

    useEffect(()=>{
        if (transactionData){
          setAmount(transactionData.amount)
          setRemark(transactionData.remark)
          setDate(new Date(transactionData.date))
          setCategory(transactionData.category)
          setPaymentMode(transactionData.paymentMode === 'Cash' ? 0 : 1)
          setPaymentType(transactionData.paymentType === 'Income' ? 0 : 1)
        }
      },[])
    
    const refRBSheet = useRef();
    const [open, setOpen] = useState(false);
    const type = paymentType === 0 ? true : false;
    

    const pull_category = (data) => {
      setCategory(data)
    }

    return (
        <View style={styles.container}>
          <Header text={isEdit ? 'Edit Transaction' : 'Add Transaction'} style={{backgroundColor:'white'}} onClick={() => props.navigation.goBack()}/>
            {!isEdit && <SegmentedControlTab
                tabsContainerStyle={styles.tabsContainerStyle2}
                tabStyle={styles.tabStyle}
                tabTextStyle={styles.tabTextStyle2}
                activeTabStyle={styles.activeTabStyle}
                activeTabTextStyle={styles.activeTabTextStyle}
                selectedIndex={paymentType}
                values={['Income','Expense']}
                onTabPress={index => {
                    setPaymentType(index);
                }}/>}
            <Input2 text={'Enter Amount'} onChangeText={(text) => {setAmount(text)}} value={amount} style={{color : type ? 'green' : '#D2042D'}}/>
            <Input2 text={'Enter Remark'} onChangeText={(text) => {setRemark(text)}} value={remark}/>
            <Input2 text={'Enter Date'} value={date.toISOString().slice(0,10)} onPressIn = {()=>{setOpen(true)}} />
            <Input2 text={'Enter Category'} onChangeText={pull_category} value={category} onPressIn = {()=>{refRBSheet.current.open()}} />
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
                    setPaymentMode(index);
              }}/>
            </View>
            { !isEdit && 
            <TouchableOpacity style={[styles.btn,{backgroundColor : type ? 'green' : '#D2042D'}]} onPress={() => {
              if(amount === 0){
                Alert.alert('Please Enter Amount')
              }
              else if(remark === ''){
                Alert.alert('Please Enter Remark')
              }
              else if(category === ''){
                Alert.alert('Please Select a Category')
              }
              else if(paymentType === 1 && amount > props?.data[index].balance){
                Alert.alert('Insufficient Balance')
              }
              else{
                props.add_details(index,{
                  transactionId : new Date().getTime(),
                  amount : amount,
                  remark : remark,
                  category : category,
                  date : date.toISOString(),
                  paymentMode : paymentMode === 0 ? 'Cash' : 'Online',
                  paymentType : paymentType === 0 ? 'Income' : 'Expense',
                });
                props.navigation.goBack();
              }
              
            }}>
                <Text style = {[styles.btnText]} >{ type ? '+  Cash In ' : '-  Cash Out'}</Text>
            </TouchableOpacity>}
            {
              isEdit && 
              <View>
                <TouchableOpacity style={[styles.btn,{backgroundColor : type ? 'green' : '#D2042D'}]} onPress={() => {
                  if(!type && amount > props?.data[index].balance){
                    Alert.alert('Insufficient Balance')
                  }
                  else{
                  props.edit_details(index,transactionId,{
                  transactionId : transactionId,
                  amount : amount,
                  remark : remark,
                  category : category,
                  date : date.toISOString(),
                  paymentMode : paymentMode === 0 ? 'Cash' : 'Online',
                  paymentType : paymentType === 0 ? 'Income' : 'Expense',
                  })}
                props.navigation.goBack();
                }} >
                  <Text style = {[styles.btnText]} >Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn,{backgroundColor : type ? 'green' : '#D2042D'}]} onPress={() => {props.del_details(index,transactionId);props.navigation.goBack();}} >
                  <Text style = {[styles.btnText]} >Delete</Text>
                </TouchableOpacity>
              </View>

            }

            <DatePicker
              modal
              open={open}
              mode={'date'}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />

            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={true}
              customStyles={{
                wrapper: {
                  backgroundColor: "transparent"
                },
                container:{
                  height : 320,
                },
                draggableIcon: {
                  backgroundColor: "#000"
                }
              }}>
                <AddCategory pull_category={pull_category}/>
              </RBSheet>
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
)(ExpenseIncome)

