import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import MultiplexReducer from "./MultiplexReducer";
import AllotmentReducer from "./AllotmentReducer";

export default combineReducers({ MovieReducer, MultiplexReducer, AllotmentReducer });