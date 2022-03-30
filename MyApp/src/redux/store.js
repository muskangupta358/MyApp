import { createStore } from "redux";
import reducer from "./reducer/index";
import {persistStore, persistReducer} from 'redux-persist'
import  AsyncStorage  from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    whitelist: ['upholderReducer','userReducer'],
    storage : AsyncStorage,
  }
   
const persistedReducer = persistReducer(persistConfig, reducer)
let store = createStore(persistedReducer)
let persistor = callBack => persistStore(store);

export {store,persistor};