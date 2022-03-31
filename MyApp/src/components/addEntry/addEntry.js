import React,{useState,useEffect,useRef} from 'react';
import { Text, View,Image ,TouchableOpacity,Button , SectionList,Modal} from 'react-native';
import styles from './addEntry.styles';
import Header from '../common/header';
import ShowEntry from '../common/showEntry';
import EditEntry from '../editEntry/editEntry';

import { connect } from 'react-redux';
import {add,edit,del,add_details,edit_details,del_details} from '../../redux/actions'

function AddEntry(props){

    const [modalVisible,setModalVisible] = useState(false);
    const [currentTransactionId,setCurrentTransactionId] = useState();
    const [sectionData,setSectionData] = useState([])

    const id = props.route.params['id'];
    const index = props.data.findIndex(item => item.upholderId === id);

    console.log(id,index,props.data[index])

    useEffect(()=>{
        const result = sum();
        props.edit(id,{totalin : result.sumIncome,totalout : result.sumExpense , balance : result.sumIncome-result.sumExpense})
    },[props.data[index].details.length])

    useEffect(()=>{
        const obj = groupBy(props.data[index].details, 'date')
        let sectionDataTemp = [];
        for(let key in obj)
        {
            sectionDataTemp = [...sectionDataTemp,{
                title : key,
                data : obj[key]
            }]
        }
        sectionDataTemp.sort(function(a, b) {
            var keyA = new Date(a.title),
            keyB = new Date(b.title);
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
        setSectionData(sectionDataTemp);
    },[props.data])


    const renderItem = ({ item,index }) => {
        return (
            <ShowEntry data={item} onPress={() => {
                setModalVisible(true);
                setCurrentTransactionId(item.transactionId);
            }} />
        );
    };

     function groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
           const key = new Date(obj[property]).toDateString();
           if (!acc[key]) {
              acc[key] = [];
           }
           acc[key].push(obj);
           return acc;
        }, {});
     }

    const sum = () => {
        let sumIncome = 0;
        let sumExpense = 0;
            props.data[index].details.forEach((subitem)=>{
                if(subitem.paymentType == 'Income'){
                    sumIncome = sumIncome + Number(subitem.amount);}
                else{
                    sumExpense = sumExpense + Number(subitem.amount);}
            })
        return {sumIncome,sumExpense};
    }

    return (
        <View style = {styles.container}>
            <Header text={props.route.params['upholder']} onClick={() => props.navigation.goBack()}/>
            <View style={[styles.balanceView,styles.shadow]}>
                <Text style={styles.netText}>Net Balance</Text>
                <Text style={styles.mainText}>₹{props.data[index].balance}</Text>
                <View style={[styles.balanceSubiew,styles.shadow]}>
                    <View style={[styles.balanceSubiew2,{borderRightWidth : 1,borderRightColor : 'white',}]}>
                        <Text style={styles.subtext1}>Total In+</Text>
                        <Text style={[styles.subtext2,/*{fontSize : length > 4 ? 10 : 20}*/]}>₹{props.data[index].totalin}</Text>
                    </View>
                    <View style={styles.balanceSubiew2}>
                        <Text style={styles.subtext1}>Total Out-</Text>
                        <Text style={styles.subtext2}>₹{props.data[index].totalout}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.tranText}>Transactions</Text>
            <SectionList contentContainerStyle={styles.contentContainer}
                sections={sectionData}
                renderItem={renderItem}
                stickySectionHeadersEnabled = {false}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
            )}
            />  
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                    <TouchableOpacity style={styles.centeredView} onPress={()=>{setModalVisible(false)}}>
                        <EditEntry onPress={()=>{
                            setModalVisible(false);
                            props.navigation.navigate('ExpenseIncome',{isEdit : true,transactionId:currentTransactionId,index:index});
                        }} transactionId ={currentTransactionId} index = {index}
                        />
                    </TouchableOpacity>
            </Modal>

            <TouchableOpacity style={[styles.cashin,styles.shadow]} onPress={()=>{props.navigation.navigate('ExpenseIncome',{isEdit : false,index : index})}}>
                <Text style={styles.cashText}>Add Transaction</Text>
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
  )(AddEntry)