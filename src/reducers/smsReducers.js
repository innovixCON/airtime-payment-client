import {
    GET_SMS_LIST_REQUEST,
    GET_SMS_LIST_SUCCESS,
    GET_SMS_LIST_FAIL,
    SEND_SMS_REQUEST,
    SEND_SMS_SUCCESS,
    SEND_SMS_FAIL,
    TOTAL_SMS_REQUEST,
    TOTAL_SMS_SUCCESS,
    TOTAL_SMS_FAIL
} from "../actions/types";

export const getSmsListReducers = (state = { smsList: []}, action) =>{
    switch (action.type) {
        case GET_SMS_LIST_REQUEST:
          return { loading: true }
    
        case GET_SMS_LIST_SUCCESS:
          return {
            loading: false,
            smsList: action.payload,
          };
        case GET_SMS_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
}
export const sendSmsReducers = (state = {}, action) =>{
    switch (action.type) {
        case SEND_SMS_REQUEST:
          return { loading: true }
    
        case SEND_SMS_SUCCESS:
          return {
            loading: false,
            success: "successfull sent",
            Response: action.payload,
          };
        case SEND_SMS_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
}
export const totalSmsReducers = (state = { totalSms: []}, action) =>{
    switch (action.type) {
        case TOTAL_SMS_REQUEST:
          return { loading: true }
    
        case TOTAL_SMS_SUCCESS:
          return {
            loading: false,
            totalSms: action.payload,
          };
        case TOTAL_SMS_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
}