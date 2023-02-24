import {SET_FILTER_COUNTRY, SET_FILTER_GENRE, SET_MAX_RATING, SET_MIN_RATING} from "../actions";

const initialStateFilters = {
    minRating: 0,
    maxRating: 10,
    country: "",
    genre:""
}

export const filtersReducer = (state: any = initialStateFilters, action:any) => {
    switch (action.type) {
        case SET_MIN_RATING:
            return {
                ...state,
                minRating: action.payload
            }
        case SET_MAX_RATING:
            return {
                ...state,
                maxRating: action.payload
            }
        case SET_FILTER_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        case SET_FILTER_GENRE:
            return {
                ...state,
                genre: action.payload
            }
        default:
            return state;
    }
}