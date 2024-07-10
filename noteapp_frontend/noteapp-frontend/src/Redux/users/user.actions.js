import axios from 'axios';
import { BASE_URL } from '../../constants/config';
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./user.types";

export const getUser = (loginData) => async (dispatch) => {
    
    dispatch({ type: LOGIN_USER_LOADING });
    try {
        let data = await axios(BASE_URL+"/user/login", {
            method: "post",
            data: loginData
        });
        let { message, token, status } = data.data;
        console.log(message);
        if (status == 1) {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
        } else {
            dispatch({ type: LOGIN_USER_ERROR });
        }
    } catch (error) {
        dispatch({ type: LOGIN_USER_ERROR });
    }
};
