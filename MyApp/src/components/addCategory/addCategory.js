import React,{useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image ,ScrollView} from 'react-native';
import CategoryBtn from '../common/categoryBtn';

export default function AddCategory(props){
  return (
      <ScrollView>
        <View style={styles.view}>
            <CategoryBtn name={'Rent'} url={require('../../assets/house.png')} onPress={()=>{props?.pull_category('Rent')}}/>
            <CategoryBtn name={'Grocery'} url={require('../../assets/grocery-cart.png')} onPress={()=>{props?.pull_category('Grocery')}} />
            <CategoryBtn name={'Travel'} url={require('../../assets/vehicle.png')} onPress={()=>{props?.pull_category('Travel')}}/>
        </View>
        <View style={styles.view}>
            <CategoryBtn name={'Salary'} url={require('../../assets/salary.png')} onPress={()=>{props?.pull_category('Salary')}}/>
            <CategoryBtn name={'Food'} url={require('../../assets/salad.png')} onPress={()=>{props?.pull_category('Food')}}/>
            
        </View>
        <View style={styles.view}>
            <CategoryBtn name={'Shopping'} url={require('../../assets/online-shopping.png')} onPress={()=>{props?.pull_category('Shopping')}}/>
            <CategoryBtn name={'Bills'} url={require('../../assets/budget.png')} onPress={()=>{props?.pull_category('Bills')}}/>
            <CategoryBtn name={'Others'} url={require('../../assets/question.png')} onPress={()=>{props?.pull_category('Others')}}/>
        </View>
        
      </ScrollView>
  );
}

const styles = StyleSheet.create({
view:{
    flexDirection:'row',
    flexWrap : 'wrap',
    justifyContent : 'space-around',
},
});