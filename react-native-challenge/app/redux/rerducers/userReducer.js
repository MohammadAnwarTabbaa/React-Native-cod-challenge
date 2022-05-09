import { ActionTypes } from "../contants/action-types";
const initialState = {
    user: {},
    inProgress: false,
}
export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOGIN:
            return {
                ...state,
                user: payload,
                inProgress: false
            };
        case ActionTypes.LOGOUT:
            return {
                ...state,
                user: {}
            }
        case ActionTypes.IN_PROGRESS:
            return {
                ...state,
                inProgress: true
            }
        case ActionTypes.FINISH_REQUEST:
            return {
                ...state,
                inProgress: false
            }
        default:
            return state;
    }
};