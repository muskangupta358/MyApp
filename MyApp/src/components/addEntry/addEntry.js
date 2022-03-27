import React,{useState} from 'react';
import { Text, View,Image ,TouchableOpacity,Button , SectionList,Modal} from 'react-native';
import styles from './addEntry.styles';
import Header from '../common/header';
import ShowEntry from '../common/showEntry';
import EditEntry from '../editEntry/editEntry';


import { connect } from 'react-redux';
import {add,edit,del} from '../../redux/actions'

function AddEntry(props){
    

    const [modalVisible,setModalVisible] = useState(false);
    const index = props.route.params['index']


    return (
        <View style = {styles.container}>
            <Header text={props.route.params['upholder']} onClick={() => props.navigation.goBack()}/>
            <View style={[styles.balanceView,styles.shadow]}>
                <Text style={styles.netText}>Net Balance</Text>
                <Text style={styles.mainText}>₹{props.data[index].balance}</Text>
                <View style={[styles.balanceSubiew,styles.shadow]}>
                    <View style={[styles.balanceSubiew2,{borderRightWidth : 1,borderRightColor : 'white',}]}>
                        <Text style={styles.subtext1}>Total In +</Text>
                        <Text style={[styles.subtext2,/*{fontSize : length > 4 ? 10 : 20}*/]}>₹{props.data[index].totalin}</Text>
                    </View>
                    <View style={styles.balanceSubiew2}>
                        <Text style={styles.subtext1}>Total Out -</Text>
                        <Text style={styles.subtext2}>₹{props.data[index].totalout}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.tranText}>Transactions</Text>
            <ShowEntry onPress={() => {setModalVisible(true)}} />
            <ShowEntry/>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                    <TouchableOpacity style={styles.centeredView} onPress={()=>{setModalVisible(false)}}>
                        <EditEntry onPress={()=>{
                            setModalVisible(false);
                            props.navigation.navigate('EntryDetails',{isEdit : true,pay : 1});

                        }}/>
                    </TouchableOpacity>
            </Modal>

            <TouchableOpacity style={[styles.cashin,styles.shadow]} onPress={()=>{props.navigation.navigate('EntryDetails',{isEdit : false})}}>
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
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddEntry)