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

export const sendSmsToMultipleUsers = async (data) => {
    const token = localStorage.getItem("AuthToken");
    for (const row of data.slice(1)) {
        const phone = `0${row[0]}`
        const messageText = row[1];
        try {
            const result = await axios.post("http://localhost:3001/api/sms/sendMessage", {
                phone:phone,
                messageText:messageText,
            }, {
                headers: {
                    Authorization: token,
                },
            });
            console.log("res",result.data)
            console.log(`Airtime sent successfully to ${phone}: ${result}`);
        } catch (error) {
            console.error(`Failed to send airtime to ${phone}`);
        }
    }
};
