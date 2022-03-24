import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container : {
      flex : 1,
      position : 'relative',
  },
  addBtn : {
    justifyContent : 'center',
    alignItems : 'center',
    height: 70,
    width : 70,
    borderRadius : 40,
    backgroundColor : '#2596be',
    position : 'absolute',
    bottom : 50,
    right : 30,
  },
  addSign : {
    color : 'white',
    fontSize : 40,
  },

  introView : {
    height : 200,
    backgroundColor:'#2596be',
    flexDirection:'row', 
    flexWrap:'wrap',
    justifyContent : 'space-around',
  },
  subView : {
    marginTop : 60,
    justifyContent : 'center',
    alignItems : 'center',
  },
  profileImg : {
    height : 80,
    width : 80,
    borderRadius : 40
  },
  textMoney : {
    fontSize : 50,
    color : 'white',
  },
  textSmall : {
    fontSize : 15,
    color : 'white',
    marginTop : 5
  },

  upholderView: {
    flex : 1,
    backgroundColor:'#e1e2e3',
    padding : 20,
    },

    shadow : {
        shadowColor: 'black',
        elevation: 5,        
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            height: 1,
            width: 1
        } 
    }
});

export default styles;
