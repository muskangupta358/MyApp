import React,{} from 'react';
import { Text, View,Image ,TouchableOpacity,Button , FlatList} from 'react-native';
import styles from './addUpholder.styles';
import FlatBtn from '../common/flatBtn';


export default function AddUpholder(props){

    // const renderItem = ({ item }) => (
        
    // );

    return (
        <View style={styles.container}>
            <View style = {[styles.introView,styles.shadow]}>
                <View style = {styles.subView}>
                    <Text style = {styles.textMoney}>₹4500</Text>
                    <Text style={styles.textSmall}>Total Available Balance</Text>
                </View>
                <View style = {styles.subView}>
                    <TouchableOpacity>
                        <Image style = {styles.profileImg} source={require('../../assets/profile.jpg')}/>
                    </TouchableOpacity>
                    <Text style={styles.textSmall}>Muskan Gupta</Text>
                </View>
            </View>
            <FlatBtn></FlatBtn>
            <FlatBtn></FlatBtn>
            <FlatList 
                style = {styles.upholderView}
                //renderItem={renderItem}
            />
            <TouchableOpacity style = {styles.addBtn}>
                <Text style={styles.addSign}>+</Text>
            </TouchableOpacity>
        </View>
    );
}