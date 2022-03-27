import { addUpholder,editUpholder,deleteUpholder } from "../actionType";

const initialState = {
    data: []
  };

const upholderReducer = (state=initialState,action) => {
    switch(action.type){
        case addUpholder : {
            return {...state, data : [...state.data,action.payload]};
        }
        case editUpholder : {
            let updatedArray = [...state.data];
            updatedArray[action.payload.i] = action.payload.temp;
            return {...state, data : updatedArray};
        }
        case deleteUpholder :
            {
                let deletedArray = [...state.data];
                deletedArray.splice(action.payload,1)
                return {...state, data : deletedArray};
            }
        default : return state
    }

};

export default upholderReducer;