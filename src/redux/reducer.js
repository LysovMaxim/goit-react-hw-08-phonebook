import { contactReducer } from './sliceContact';
import { filterReducer } from './sliceFilter';
import { combineReducers } from 'redux';
import { authReducer} from "./sliceUser"

import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'token',
  storage,
  whitelist:["token"]
}

const persistedReducer = persistReducer(persistConfig, authReducer)



export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: persistedReducer,
});
