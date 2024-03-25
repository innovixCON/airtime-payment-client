import axios from "axios"
import {
    SEND_AIRTIME_FAIL,
    SEND_AIRTIME_REQUEST,
    SEND_AIRTIME_SUCCESS,
    GET_RECIPIENTS_FAIL,
    GET_RECIPIENTS_REQUEST,
    GET_RECIPIENTS_SUCCESS
} from "./types"

export const sendAirtimeAction = (token, payload) => async (dispatch) => {
    try {
        dispatch({
            type: SEND_AIRTIME_REQUEST
        })
        //https://call-africa-a27ed3a5b0f4.herokuapp.com
        //http://localhost:3001
        const response = await axios.post("https://call-africa-a27ed3a5b0f4.herokuapp.com/api/recipients/sendAirtime",
            payload,
            {
                headers: {
                    Authorization: token,
                },
            })
        console.log("Airtime", response.data)
        dispatch({
            type: SEND_AIRTIME_SUCCESS,
            payload: response.data.data
        });
        // navigate("/dashboard/");
        // window.location.reload();
    } catch (error) {
        dispatch({
            type: SEND_AIRTIME_FAIL
        })
    }
}

export const getRecipientsAction = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_RECIPIENTS_REQUEST
        })
        const response = await axios.get("https://call-africa-a27ed3a5b0f4.herokuapp.com/api/recipients/viewAllRecipients")
        dispatch({
            type: GET_RECIPIENTS_SUCCESS,
            payload: response.data.data
        });
    } catch (error) {
        dispatch({
            type: GET_RECIPIENTS_FAIL
        })
    }
}