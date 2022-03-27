import React,{useState,useRef} from 'react';
import { Text,View,Image ,TouchableOpacity,StyleSheet,Animated,Easing} from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import RBSheet from "react-native-raw-bottom-sheet";
import Input2 from '../common/Input2';
import AddCategory from '../addCategory/addCategory';
import DatePicker from 'react-native-date-picker'
import styles from './expenseIncome.styles';

import { connect } from 'react-redux';
import {add,edit,del} from '../../redux/actions'


function ExpenseIncome(props){

    const [amount,setAmount] = useState(0);
    const [remark,setRemark] = useState('');
    const [date, setDate] = useState(new Date())
    const [category,setCategory] = useState(0);
    const [paymentMode,setPaymentMode] = useState(0);
    const [paymentType,setPaymentType] = useState(0);

    const refRBSheet = useRef();
    const [open, setOpen] = useState(false)
    const type = props?.isEdit ? (props?.pay === 0 ? true : false) : (paymentType === 0 ? true : false);

    return (
        <View style={styles.container}>
            {!props?.isEdit && <SegmentedControlTab
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
            <Input2 text={'Enter Date'} value={date.toString()} onPressIn = {()=>{setOpen(true)}} />
            <Input2 text={'Enter Category'} value={category} onPressIn = {()=>{refRBSheet.current.open()}} />
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
            <TouchableOpacity style={[styles.btn,{backgroundColor : type ? 'green' : '#D2042D'}]} onPress={() => {
              console.log(amount);
              console.log(remark);
              console.log(date);
              console.log(category);
            }}>
                <Text style = {[styles.btnText]} >{type ? '+  Cash In ' : '-  Cash Out'}</Text>
            </TouchableOpacity>

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
                  height : 340,
                },
                draggableIcon: {
                  backgroundColor: "#000"
                }
              }}>
                <AddCategory/>
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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseIncome)

