import React,{useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image ,ScrollView} from 'react-native';
import CategoryBtn from '../common/categoryBtn';

export default function AddCategory(props){
  return (
      <ScrollView>
        <View style={styles.view}>
            <CategoryBtn name={'Rent'} url={require('../../assets/house.png')}/>
            <CategoryBtn name={'Grocery'} url={require('../../assets/grocery-cart.png')}/>
            <CategoryBtn name={'Travel'} url={require('../../assets/vehicle.png')}/>
        </View>
        <View style={styles.view}>
            <CategoryBtn name={'Salary'} url={require('../../assets/salary.png')}/>
            <CategoryBtn name={'Food'} url={require('../../assets/salad.png')}/>
            
        </View>
        <View style={styles.view}>
            <CategoryBtn name={'Shopping'} url={require('../../assets/online-shopping.png')}/>
            <CategoryBtn name={'Bills'} url={require('../../assets/budget.png')}/>
            <CategoryBtn name={'Others'} url={require('../../assets/question.png')}/>
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