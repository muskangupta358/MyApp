import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container : {
        flex : 1,
        position : 'relative',
    },
    /* ---------------------------------- */
    balanceView : {
      height : 230,
      borderRadius : 30,
      backgroundColor : '#2596be',
      marginTop : 10,
      margin : 30,
      padding : 20,
      alignItems : 'center'
  },
  balanceSubiew : {
    flexDirection : 'row',
    flexWrap : 'wrap',
    borderRadius : 10,
    borderColor : 'white',
    borderWidth : 1,
    margin : 10, 
    padding : 20,
    height : 80,
    width : 260,
  },
  mainText : {
    color : 'white',
    fontSize : 50,
    margin : 10,
    fontWeight : 'bold',
  },
  netText : {
    color : 'white',
    fontSize : 20
  },
  subtext1 : {
    color : 'white',
    fontSize : 15,
  },
  subtext2 : {
    color : 'white',
    fontSize : 20,
    fontWeight : 'bold',
  },
  balanceSubiew2 : {
    justifyContent : 'center',
    paddingHorizontal : 17,
    flex:1,
  },

  /* ---------------------------------- */

  tranText : {
    fontSize : 22,
    padding : 10,
    backgroundColor : '#e1e2e3',
  },

  cashin : {

      position : 'absolute',
      height : 60,
      width : 140,
      backgroundColor : 'green',
      bottom : 30,
      left : 40,
      borderRadius : 10,
      justifyContent : 'center',
      alignItems : 'center'
  },
  cashout : {
    position : 'absolute',
    height : 60,
    width : 140,
    bottom : 30,
    right : 40,
    borderRadius : 10,
    backgroundColor : '#D71709',
    justifyContent : 'center',
    alignItems : 'center'
  },

  cashText : {
    color : 'white',
    fontSize : 20
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
