import {userDetails} from "../actionType";

const initialState = {
    user: {}
  };

const userReducer = (state=initialState,action) => {
    switch(action.type){
        case userDetails :  {
            return {
                user : action.payload,
            }
                
        }
        default : return state
    }

};

export default userReducer;