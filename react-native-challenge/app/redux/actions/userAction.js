import { ActionTypes } from "../contants/action-types";
import axios from "axios";

export const loginUser = (userName, password, navigation) => {
    return async function (dispatch) {
        try {
            dispatch({ type: ActionTypes.IN_PROGRESS });
            const userData = new FormData();
            userData.append("username", userName);
            userData.append("password", password);
            const response = await axios({
                method: 'post',
                url: 'http://34.245.213.76:3000/auth/signin',
                data: {
                    username: userName,
                    password: password
                }
            });
            if (response.status == 201) {

                // here we should store it in local storage to avoid logging in every time,but i did it as requirements

                dispatch({ type: ActionTypes.LOGIN, payload: response.data });
            }
        } catch (e) {
            if (e.response.status == 401) {
                alert("Username or password is incorrect");
                dispatch({ type: ActionTypes.FINISH_REQUEST });
            } else {
                alert("Somthing wrong please try again later");
                dispatch({ type: ActionTypes.FINISH_REQUEST });
            }
        }
    };
};

export const logOut = () => {
    return function (dispatch) {
        dispatch({ type: ActionTypes.LOGOUT })
    }
};