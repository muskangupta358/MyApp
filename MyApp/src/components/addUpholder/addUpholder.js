import React,{useReducer, useState} from 'react';
import { Text, View,Image ,TouchableOpacity,TextInput,Animated,FlatList,Button,Easing} from 'react-native';
import styles from './addUpholder.styles';
import FlatBtn from '../common/flatBtn';
import Input2 from '../common/Input2';

import { connect } from 'react-redux';
import {add,edit,del} from '../../redux/actions'


function AddUpholder(props){

    const [heightMenu,setHeightMenu] = useState(new Animated.Value(0));
    const [upholderName, setUpholderName] = useState('');
    const [search, setSearch] = useState();
    const [isRename, setIsRename] = useState(false);
    const [RenameId, setRenameId] = useState(false);
    let filtered_data = search ?  props.data.filter(obj => obj.upholderName.startsWith(search)) : props.data;

    const renderItem = ({ item,index }) => (
        <FlatBtn text={item.upholderName} 
        delete={()=>{props.del(item.upholderId)}} 
        rename={()=>{addMenu();
            setIsRename(true);
            setRenameId(item.upholderId)
        }} 
        onPress={()=>{props.navigation.navigate('AddEntry',{upholder : item.upholderName, id : item.upholderId})}}></FlatBtn>
    );

    const addMenu = () =>{
        Animated.timing(heightMenu, {
            toValue: 250,
            duration: 400,
            easing : Easing.elastic(1),
            useNativeDriver: false,
          }).start();
      }

    const cancelMenu = () =>{
        Animated.timing(heightMenu, {
            toValue: 0,
            duration: 30,
            useNativeDriver: false
          }).start();
        setIsRename(false)
    }

    const pull_upholderName = (data) => {
        setUpholderName(data)
    }

    const net_balance = () => {
        let sum = 0;
        props.data.forEach(function (arrayItem) {
            sum = sum + arrayItem.balance
        });
        return sum;
    }

    const search_upholder = (data) => {
        setSearch(data)
    }

    return (
        <View style={styles.container}>
            <View style = {[styles.introView,styles.shadow]}>
                <View style = {styles.subView}>
                    <Text style = {styles.textMoney}>₹{net_balance()}</Text>
                    <Text style={styles.textSmall}>Total Available Balance</Text>
                </View>
                <View style = {styles.subView}>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('Profile',{})}}>
                        <Image style = {styles.profileImg} source={require('../../assets/profile.jpg')}/>
                    </TouchableOpacity>
                    <Text style={styles.textSmall}>{props?.route.params.user}</Text>
                </View>
            </View>

            {props.data.length !== 0 && <TextInput style={[styles.search,styles.shadow]} placeholder='🔍 Search by upholder name' placeholderTextColor="#2596be" autoCapitalize="none" 
            onChangeText={search_upholder} value={search}/>}

            <FlatList 
                style = {styles.upholderView}
                data={filtered_data}
                renderItem={renderItem}
                extraData={search}
            />
            <TouchableOpacity style = {styles.addBtn} onPress={addMenu}>
            <Image style = {{height:30,width:30}} source={require('../../assets/plus.png')}/>
            </TouchableOpacity>

            <Animated.View style={[styles.animatedView,{height: heightMenu}]}>
                <View style={styles.animatedSubview}>
                    <TouchableOpacity onPress={cancelMenu} >
                        <Image style = {styles.cancelImage} source={require('../../assets/close.png')}/>
                    </TouchableOpacity>
                    <Text style = {styles.animatedText} >{isRename ? 'Rename Upholder' : 'Create Upholder'}</Text>
                </View>
                <Input2 text={isRename ? 'Enter New Name' : 'Add upholder name'} onChangeText={pull_upholderName} value={upholderName}/>
                <TouchableOpacity style = {[styles.saveBtn,styles.shadow]} onPress={() => {
                        {isRename ? (props.edit(RenameId,{upholderName : upholderName})) :
                        (props.add({
                            upholderName:upholderName,
                            upholderId : new Date().getTime(),
                            balance : 0,
                            totalin : 0 ,
                            totalout : 0 ,
                            details : [],
                        }))};
                        setUpholderName('')
                        cancelMenu();
                        }}>
                    <Text style ={{color : 'white',fontWeight : 'bold'}}>Save</Text>
                </TouchableOpacity>
            </Animated.View >
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
  )(AddUpholder)