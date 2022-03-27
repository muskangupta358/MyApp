import React,{useState} from 'react';
import { Text, View,Image ,TouchableOpacity,Button , SectionList,Modal} from 'react-native';
import styles from './addEntry.styles';
import Header from '../common/header';
import ShowEntry from '../common/showEntry';
import EditEntry from '../editEntry/editEntry';


export default function AddEntry(props){

    const [modalVisible,setModalVisible] = useState(false);

    return (
        <View style = {styles.container}>
            <Header text={props.route.params['upholder']} onClick={() => props.navigation.goBack()}/>
            <View style={[styles.balanceView,styles.shadow]}>
                <Text style={styles.netText}>Net Balance</Text>
                <Text style={styles.mainText}>₹4500</Text>
                <View style={[styles.balanceSubiew,styles.shadow]}>
                    <View style={[styles.balanceSubiew2,{borderRightWidth : 1,borderRightColor : 'white',}]}>
                        <Text style={styles.subtext1}>Total In +</Text>
                        <Text style={[styles.subtext2,/*{fontSize : length > 4 ? 10 : 20}*/]}>₹6000</Text>
                    </View>
                    <View style={styles.balanceSubiew2}>
                        <Text style={styles.subtext1}>Total Out -</Text>
                        <Text style={styles.subtext2}>₹1500</Text>
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