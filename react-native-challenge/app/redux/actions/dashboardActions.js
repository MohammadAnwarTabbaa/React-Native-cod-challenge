import { ActionTypes } from "../contants/action-types";
import axios from "axios";

export const getArticles = (page) => async (dispatch, getState) => {
    try {
        const token = getState().login.user.accessToken;
        dispatch({ type: ActionTypes.API_REQUEST, payload: page });
        const response = await axios.get(`http://34.245.213.76:3000/articles?page=${page}`, { headers: { "Authorization": `Bearer ${token}` } });
        const result = response.data;
        if (result.status == "OK") {
            if (result.response.docs.length > 0) {
                dispatch({
                    type: ActionTypes.API_SUCCESS,
                    payload: page,
                    data: result.response.docs

                });
            } else {
                dispatch({
                    type: ActionTypes.API_LIST_END
                });

            }

        }
    } catch (e) {
        dispatch({ type: ActionTypes.API_FAILURE });
    }
};

export const FilterArticles = (search) => async (dispatch, getState) => {
    const articles = getState().article.articles;
    const filteredArray = articles.filter(i => i.abstract.match(new RegExp(search, "i")) || i.lead_paragraph.match(new RegExp(search, "i")));
    dispatch({ type: ActionTypes.FILTERED_ARTICLES, payload: filteredArray });
}



