
import { ActionTypes } from "../contants/action-types";
let initialState = {
    loading: false,
    moreLoading: false,
    error: null,
    moreEroor: null,
    isListend: false,
    articles: [],
    filteredArticles: [],
}
export const articleReducer = (state = initialState, { type, payload, data }) => {
    switch (type) {
        case ActionTypes.API_REQUEST:
            if (payload === 1) {
                return { ...state, loading: true }
            } else {
                return { ...state, moreLoading: true }
            }

        case ActionTypes.API_SUCCESS:
            return {
                ...state,
                articles: [...state.articles, ...data],
                error: '',
                loading: false,
                moreLoading: false
            }
        case ActionTypes.API_FAILURE:
            return {
                ...state,
                loading: false,
                moreLoading: false,
            }
        case ActionTypes.API_LIST_END:
            return {
                ...state,
                loading: false,
                moreLoading: false,
                isListend: true,
            }
        case ActionTypes.FILTERED_ARTICLES:
            return {
                ...state,
                filteredArticles: payload
            }

        default:
            return state;
    }

};