import axios from "axios"
import {
    SEND_AIRTIME_FAIL,
    SEND_AIRTIME_REQUEST,
    SEND_AIRTIME_SUCCESS,
    GET_RECIPIENTS_FAIL,
    GET_RECIPIENTS_REQUEST,
    GET_RECIPIENTS_SUCCESS,
    TOTAL_AIRTIME_USER_SENT_REQUEST,
    TOTAL_AIRTIME_USER_SENT_SUCCESS,
    TOTAL_AIRTIME_USER_SENT_FAIL
} from "./types"

export const sendAirtimeAction = (token, payload) => async (dispatch) => {
    try {
        dispatch({
            type: SEND_AIRTIME_REQUEST
        })
        const response = await axios.post("http://localhost:3001/api/recipients/sendAirtime",
            payload,
            {
                headers: {
                    Authorization: token,
                },
            })
            console.log("tr",response.data.data)
        dispatch({
            type: SEND_AIRTIME_SUCCESS,
            payload: response.data.data
        });
    } catch (error) {
        dispatch({
            type: SEND_AIRTIME_FAIL
        })
    }
}

export const sendAirtimeToMultipleUsers = async (data) => {
    const token = localStorage.getItem("AuthToken");
    for (const row of data.slice(1)) {
        const name = row[0]
        const phoneNumber = `0${row[1]}`;
        const amount = parseInt(row[2])
        
        try {
            const result = await axios.post("http://localhost:3001/api/recipients/sendAirtime", {
                receiverAirtimeNumber:phoneNumber,
                amountAirtime:amount,
                Name:name
            }, {
                headers: {
                    Authorization: token,
                },
            });
            console.log("res",result.data)
            console.log(`Airtime sent successfully to ${phoneNumber}: ${result}`);
        } catch (error) {
            console.error(`Failed to send airtime to ${phoneNumber}`);
        }
    }
};


export const getRecipientsAction = (token) => async (dispatch) => {
    try {
        dispatch({
            type: GET_RECIPIENTS_REQUEST
        })
        const response = await axios.get("http://localhost:3001/api/recipients/viewRecipient",{
            headers: {
                Authorization: token,
            },
        })
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

export const totalAirtimeUserSentAction = (token) => async (dispatch) => {
    try {
        dispatch({
            type: TOTAL_AIRTIME_USER_SENT_REQUEST
        })
        const response = await axios.get("http://localhost:3001/api/recipients/totalAmountSentByUser",{
            headers: {
                Authorization: token,
            },
        })
        dispatch({
            type: TOTAL_AIRTIME_USER_SENT_SUCCESS,
            payload: response.data.data
        });
    } catch (error) {
        dispatch({
            type: TOTAL_AIRTIME_USER_SENT_FAIL
        })
    }   
}