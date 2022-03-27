import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#2596be',
    },
    tabsContainerStyle: {
        marginTop : 5,
        margin : 20,
      },
      tabStyle: {
        backgroundColor : '#2596be',
        borderColor : 'white',
        borderWidth : 1,
      },
      tabTextStyle: {
        color : 'white'
      },
      activeTabStyle: {
        backgroundColor : 'white',
      },
      activeTabTextStyle: {
        color : '#2596be'
      },
      modeText : {
          marginLeft:20,
        color : 'white',
        fontSize : 18,
      },
    btn : {
        justifyContent:'center',
        alignItems : 'center',
        height : 50,
        margin : 20,
        backgroundColor : 'green'
    },
    btnText : {
        color : 'white',
        fontSize : 20
    },
    tabsContainerStyle2: {
      height : 50,
      marginBottom : 10,
    },
    tabTextStyle2: {
      color : 'white',
      fontSize : 20,
      
    },


});
export default styles;