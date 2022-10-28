import { combineReducers } from "redux";
import ticketReducer from "./ticketReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
   ticket: ticketReducer,
   userSelect: userReducer,
});

export default rootReducer;
