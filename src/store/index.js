import {createStore, combineReducers} from "redux";
import {cashReducer} from "./cashReducer"
import {webReducer} from "./WebReducer";
// Изменить cashReducer 
const rootReducer = combineReducers({
  cashReducer, webReducer
})
export const store = createStore(rootReducer);
