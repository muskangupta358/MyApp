import React,{useState} from 'react';
import { Text, View,Image ,TouchableOpacity,TextInput,Animated,FlatList,Button,Easing} from 'react-native';
import styles from './addUpholder.styles';
import FlatBtn from '../common/flatBtn';
import Input2 from '../common/Input2';


export default function AddUpholder(props){

    // const renderItem = ({ item }) => (
        
    // );

    const [heightMenu,setHeightMenu] = useState(new Animated.Value(0));

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
      }

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

            <TextInput style={[styles.search,styles.shadow]} placeholder='🔍 Search by upholder name' placeholderTextColor="#2596be" autoCapitalize="none" />

            <FlatBtn onPress={()=>{props.navigation.navigate('AddEntry',{upholder : 'UpholderDummy'})}}></FlatBtn>
            <FlatBtn></FlatBtn>
            <FlatList 
                style = {styles.upholderView}
                //renderItem={renderItem}
            />
            <TouchableOpacity style = {styles.addBtn} onPress={addMenu}>
            <Image style = {{height:30,width:30}} source={require('../../assets/plus.png')}/>
            </TouchableOpacity>

            <Animated.View style={[styles.animatedView,{height: heightMenu}]}>
                <View style={styles.animatedSubview}>
                    <TouchableOpacity onPress={cancelMenu} >
                        <Image style = {styles.cancelImage} source={require('../../assets/close.png')}/>
                    </TouchableOpacity>
                    <Text style = {styles.animatedText} >Create Upholder</Text>
                </View>
                <Input2 text={'Add upholder name'}/>
                <TouchableOpacity style = {[styles.saveBtn,styles.shadow]}>
                    <Text style ={{color : 'white',fontWeight : 'bold'}}>Save</Text>
                </TouchableOpacity>
            </Animated.View >
        </View>
    );
}