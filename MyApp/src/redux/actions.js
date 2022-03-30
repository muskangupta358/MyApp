import { addUpholder,editUpholder,deleteUpholder,addDetails,editDetails,deleteDetails,userDetails } from "./actionType";

export const add = (temp) => ({
type : addUpholder,
payload : temp,
});

export const edit = (i,temp) => ({
    type : editUpholder,
    payload : {i,temp},
});

export const del = (i) => ({
    type : deleteUpholder,
    payload : i,
});

export const add_details = (i,temp) => ({
    type : addDetails,
    payload : {i,temp},
});

export const edit_details = (i,id,temp) => ({
    type : editDetails,
    payload : {i,id,temp},
});

export const del_details = (i,id) => ({
    type : deleteDetails,
    payload : {i,id},
});

export const useDetails = (newUser) => ({
    type : useDetails,
    payload : newUser,
});
