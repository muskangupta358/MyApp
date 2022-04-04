import {StyleSheet,Platform} from 'react-native';


const styles = StyleSheet.create({
    container : {
        height : Platform.OS == 'ios' ? 310 : 350,
        width : 350,
        backgroundColor:'white',
        borderRadius : 20,
        
        borderTopColor : 'red',
        borderTopWidth : 10,
    },
    mainView : {
        flex:1,
        padding : 20,
    },
    editBtn : {
        height : 50,
        borderTopColor : '#e1e2e3',
        borderTopWidth : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    editBtntext : {
        fontSize: 20,
        color : '#2596be',
        fontWeight : 'bold'
    },
    view1 : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent:'space-between'
    },
    view2:{
        borderBottomColor : '#e1e2e3',
        borderBottomWidth : 1,
        paddingVertical : 20,
    },
    view3:{
        paddingVertical : 20,
    },
    text1 : {
        color : 'grey'
    },
    text2:{
        fontSize : 50,
        color : 'red'
    },
    text3Remark:{
        fontSize : 25,
    },
    text3:{
        marginTop : 5,
        fontSize : 15,
        color : 'grey'
    },
    shadow : {
        shadowColor: 'black',
        elevation: 5,        
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        } 
    },
});

export default styles;