import { combineReducers } from "redux";

import Auth from "./auth/reducer";
import Data from './data/reducer';

const rootReducer = combineReducers({  
  Auth,
  Data,
});

export default rootReducer;
