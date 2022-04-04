import { addUpholder,editUpholder,deleteUpholder,addDetails,editDetails,deleteDetails } from "../actionType";

const initialState = {
    data: []
  };

const upholderReducer = (state=initialState,action) => {
    switch(action.type){
        case addUpholder : {
            return {...state, data : [...state.data,action.payload]};
        }
        case editUpholder : {
            //console.log(action.payload)
            return {...state, data : state.data.map(obj => obj.upholderId === action.payload.i ? {...obj,...action.payload.temp} : obj)}
        }
        case deleteUpholder :{
            return {...state, data : state.data.filter(obj => obj.upholderId !== action.payload)} ;
        }
        case addDetails : {
            return {...state, data : state.data.map((obj, index) => index == action.payload.i ? {...obj, details: [...state.data[index].details ,action.payload.temp]} : obj)} 
        }
        case editDetails : {
            const transactionIndex = state.data[action.payload.i].details.findIndex(item => item.transactionId === action.payload.id );
            const newDetails = state.data[action.payload.i].details.map((obj, index) => index === transactionIndex ? action.payload.temp : obj );
            const newData =  [...state.data];
            //console.log(newData[action.payload.i].totalin,newData[action.payload.i].details[transactionIndex].amount,newDetails[transactionIndex].amount)
            newData[action.payload.i].details[transactionIndex].paymentType === 'Income' ?
            newData[action.payload.i].totalin = newData[action.payload.i].totalin - Number(newData[action.payload.i].details[transactionIndex].amount) + Number(newDetails[transactionIndex].amount): 
            newData[action.payload.i].totalout = newData[action.payload.i].totalout - Number(newData[action.payload.i].details[transactionIndex].amount) + Number(newDetails[transactionIndex].amount);
            newData[action.payload.i].balance = newData[action.payload.i].totalin - newData[action.payload.i].totalout ;
            newData[action.payload.i].details = newDetails;
            return {...state, data : newData};
        }
        case deleteDetails : {
            const transactionIndex = state.data[action.payload.i].details.findIndex(item => item.transactionId === action.payload.id );
            const newDetails = state.data[action.payload.i].details.filter((obj, index) => index !== transactionIndex);
            const newData =  [...state.data];
            newData[action.payload.i].details = newDetails;
            return {...state, data : newData};
        }
        default : return state
    }

};

export default upholderReducer;