import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { 
    getRecipientsReducers, 
    sendAirtimeReducers, 
    totalAirtimeUserSentReducers
} from "./reducers/airtimeReducers";
import { 
    getSmsListReducers, 
    sendSmsReducers, 
    totalSmsReducers 
} from "./reducers/smsReducers";


const reducer = combineReducers({
    sendAirtime:sendAirtimeReducers,
    getRecipients: getRecipientsReducers,
    totalAirtimeUserSent:totalAirtimeUserSentReducers,
    getSms: getSmsListReducers,
    sendSms: sendSmsReducers,
    totalSms: totalSmsReducers
})

const initialState = { initial: "" }

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
