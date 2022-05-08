// import { ActionTypes } from "../contants/action-types";
// import axiosApi from "../../apis/axiosApi";
// import axios from "axios";
// import store from "../store";

// export const getArticles = (id) => async (dispatch, getState) => {
//     try {
//         const page = 1;
//         // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhbmRpZGF0ZSIsImlhdCI6MTY1MTc3ODcwOSwiZXhwIjoxNjUxODE0NzA5fQ.d_GxNbwoGdWMLWk1_anDsLC9GwM7Nbl_O8g-DZhfQnU";
//         const token = getState().login.user.accessToken;
//         // console.log("toookeeeen", token);
//         const response = await axios.get(`http://34.245.213.76:3000/articles?page=1`, { headers: { "Authorization": `Bearer ${token}` } });
//         const result = response.data;
//         // console.log(result);
//         if (result.status == "OK") {
//             console.log("ya 3en 3lek");
//             dispatch({
//                 type: ActionTypes.FETCH_ARTIClES,
//                 payload: result,
//             });
//         }
//     } catch (e) {
//         alert(e);
//     }
// };


import { ActionTypes } from "../contants/action-types";
import axiosApi from "../../apis/axiosApi";
import axios from "axios";
import store from "../store";

export const getArticles = (page) => async (dispatch, getState) => {
    try {
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhbmRpZGF0ZSIsImlhdCI6MTY1MTc3ODcwOSwiZXhwIjoxNjUxODE0NzA5fQ.d_GxNbwoGdWMLWk1_anDsLC9GwM7Nbl_O8g-DZhfQnU";
        const token = getState().login.user.accessToken;
        // console.log("toookeeeen", token);
        dispatch({ type: ActionTypes.API_REQUEST, payload: page });
        const response = await axios.get(`http://34.245.213.76:3000/articles?page=${page}`, { headers: { "Authorization": `Bearer ${token}` } });
        const result = response.data;
        console.log("resulttt", result.response.docs);
        //to filter the empty articles 
        // const test = result.response.docs.filter(t => t.abstract != "");
        if (result.status == "OK") {
            if (result.response.docs.length > 0) {
                console.log('maaaaaaaaa wsoooleeeeet');
                dispatch({
                    type: ActionTypes.API_SUCCESS,
                    payload: page,
                    data: result.response.docs

                });
            } else {
                console.log("wwwwwwwossssssssssseleeeeeeeeettttt");
                dispatch({
                    type: ActionTypes.API_LIST_END
                });

            }

        }
    } catch (e) {
        dispatch({ type: ActionTypes.API_FAILURE });
    }
};

