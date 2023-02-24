import {SET_DISABLED_PREVIOUS_MOVIE_BUTTON, SET_IS_LOADED, SET_IS_LOADING} from "../actions";

const initialStateApp = {
    isLoading: false,
    isLoaded: false,
    prevButtonDisabled: true
}

export const appReducer = (state: any = initialStateApp, action:any) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_IS_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        case SET_DISABLED_PREVIOUS_MOVIE_BUTTON:
            return {
                ...state,
                prevButtonDisabled: action.payload
            }
        default:
            return state;
    }
}