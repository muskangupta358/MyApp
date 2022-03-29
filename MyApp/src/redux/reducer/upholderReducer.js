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
            return {...state, data : state.data.map(obj => obj.upholderId === action.payload.i ? action.payload.temp : obj)} 
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
            const newState =  {...state};
            newState.data[action.payload.i].details = newDetails;
            return newState;
        }
        case deleteDetails : {
            const transactionIndex = state.data[action.payload.i].details.findIndex(item => item.transactionId === action.payload.id );
            const newDetails = state.data[action.payload.i].details.filter((obj, index) => index !== transactionIndex);
            const newState =  {...state};
            newState.data[action.payload.i].details = newDetails;
            return newState;
        }
        default : return state
    }

};

export default upholderReducer;