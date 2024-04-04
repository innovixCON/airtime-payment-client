import { 
    SEND_AIRTIME_FAIL,
    SEND_AIRTIME_REQUEST, 
    SEND_AIRTIME_SUCCESS ,
    GET_RECIPIENTS_FAIL,
    GET_RECIPIENTS_REQUEST,
    GET_RECIPIENTS_SUCCESS,
    TOTAL_AIRTIME_USER_SENT_REQUEST,
    TOTAL_AIRTIME_USER_SENT_SUCCESS,
    TOTAL_AIRTIME_USER_SENT_FAIL
} from "../actions/types";

export const sendAirtimeReducers = (state = {}, action) =>{
    switch (action.type) {
        case SEND_AIRTIME_REQUEST:
          return { loading: true }
    
        case SEND_AIRTIME_SUCCESS:
          return {
            loading: false,
            success: "successfull sent",
            Response: action.payload,
          };
    
        case SEND_AIRTIME_FAIL:
          return { loading: false, error: action.payload };
    
        default:
          return state;
      }
}

export const getRecipientsReducers = (state = { recipients: []}, action) =>{
    switch (action.type) {
        case GET_RECIPIENTS_REQUEST:
          return { loading: true }
    
        case GET_RECIPIENTS_SUCCESS:
          return {
            loading: false,
            recipients: action.payload,
          };
        case GET_RECIPIENTS_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
}

export const totalAirtimeUserSentReducers = (state = { totalAirtimeUserSent: []}, action) =>{
    switch (action.type) {
        case TOTAL_AIRTIME_USER_SENT_REQUEST:
          return { loading: true }
    
        case TOTAL_AIRTIME_USER_SENT_SUCCESS:
          return {
            loading: false,
            totalAirtimeUserSent: action.payload,
          };
        case TOTAL_AIRTIME_USER_SENT_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
}
