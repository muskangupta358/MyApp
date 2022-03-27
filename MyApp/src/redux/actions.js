import { addUpholder,editUpholder,deleteUpholder } from "./actionType";

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
