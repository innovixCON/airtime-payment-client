import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { 
    getRecipientsReducers, 
    sendAirtimeReducers 
} from "./reducers/airtimeReducers";


const reducer = combineReducers({
    sendAirtime:sendAirtimeReducers,
    getRecipients: getRecipientsReducers
})

const initialState = { initial: "" }

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
