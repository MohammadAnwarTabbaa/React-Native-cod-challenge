import { ActionTypes } from "../contants/action-types";
import axiosUrl from "../../apis/axiosApi";
import axiosApi from "../../apis/axiosApi";
import axios from "axios";

export const loginUser = (userName, password, navigation) => {
    return async function (dispatch) {
        try {
            console.log("kkkkkkkkkkk");
            const userData = new FormData();
            userData.append("username", userName);
            userData.append("password", password);
            console.log(userData);
            // const response = await axiosApi.post("/auth/sigin", userData, {
            //     headers: {
            //         "Content-type": "application/json",
            //         Accept: "application/json",
            //     }
            // // });
            // const response = await axios('/auth/sigin', {
            //     headers: {
            //         "Content-type": "application/json",
            //         Accept: "application/json",
            //     }, data: {
            //         username: userName,
            //         password: password
            //     }
            // });
            const response = await axios({
                method: 'post',
                url: 'http://34.245.213.76:3000/auth/signin',
                data: {
                    username: userName,
                    password: password
                }
            });

            console.log(response.status);
            if (response.status == 201) {
                console.log("mabrook");
                dispatch({ type: ActionTypes.LOGIN, payload: response.data });
                // navigation.navigate('dashBoard');

            }
        } catch (e) {
            if (e.response.status == 401) {
                console.log("Username or password is incorrect")
            } else {
                console.log("Somthing wrong please try again later");
            }
        }
    };
};

export const logOut = () => {
    return function (dispatch) {
        dispatch({ type: ActionTypes.LOGOUT })
    }
};