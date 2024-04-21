import axios from "axios";
import {
    GET_SMS_LIST_REQUEST,
    GET_SMS_LIST_SUCCESS,
    GET_SMS_LIST_FAIL,
    SEND_SMS_REQUEST,
    SEND_SMS_SUCCESS,
    SEND_SMS_FAIL
} from "./types";

export const getSmsListAction = (token) => async (dispatch) => {
      try {
        dispatch({
            type: GET_SMS_LIST_REQUEST
        })
        const response = await axios.get("http://localhost:3001/api/sms/viewSms",{
            headers: {
                Authorization: token,
            },
        })

        dispatch({
            type: GET_SMS_LIST_SUCCESS,
            payload: response.data.messages
        });
      } catch (error) {
        dispatch({
            type: GET_SMS_LIST_FAIL
        })
      }  
}

export const sendSmsAction = (token, payload) => async (dispatch) => {
    try {
      dispatch({
          type: SEND_SMS_REQUEST
      })
      const response = await axios.post("http://localhost:3001/api/sms/sendMessage", payload,{
          headers: {
              Authorization: token,
          },
      })

      dispatch({
          type: SEND_SMS_SUCCESS,
          payload: response.data
      });
    } catch (error) {
      dispatch({
          type: SEND_SMS_FAIL
      })
    }
}