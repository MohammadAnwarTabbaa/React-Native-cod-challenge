import { ActionTypes } from "../contants/action-types";
const initialState = {
    articles: {},
}
export const articleReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_ARTIClES:
            return {
                ...state,
                articles: payload,
            };

        default:
            return state;
    }
};