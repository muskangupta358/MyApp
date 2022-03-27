import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function DisplayText({title='',description='',error=false}){
    
    return (
        <View style = {styles.container}>
            <Text style = {[styles.titleText,{color : (error ? 'red' : '#2596be') || '#2596be' }]}>{title}</Text>
            <Text style = {[styles.descriptionText,{color : (error ? 'red' : 'black') || 'black'}]}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    titleText : {
        fontSize : 40,
        textAlign : 'center'
    },
    descriptionText : {
        fontSize : 20,
        textAlign : 'center'
    }
});