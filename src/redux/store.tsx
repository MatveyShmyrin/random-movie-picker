import {combineReducers} from "redux";
import {
    SET_COUNTRY, SET_DESCRIPTION, SET_FILM_LENGTH, SET_FILTER_COUNTRY, SET_FILTER_GENRE,
    SET_GENRES,
    SET_ID,
    SET_MAX_RATING,
    SET_MIN_RATING,
    SET_NAME_EN,
    SET_NAME_RU,
    SET_POSTER_URL, SET_RATING, SET_YEAR
} from "./actions";
import { configureStore } from '@reduxjs/toolkit';



const initialStateFilters = {
    minRating: 0,
    maxRating: 10,
    country: "",
    genre:""
}

const filtersReducer = (state: any = initialStateFilters, action:any) => {
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

const initialStateMovie = {
    id: "",
    nameRu: "",
    nameEn: "",
    posterUrl: "",
    description: "",
    year: "",
    rating: "",
    genres: [],
    country: "",
    filmLength: ""
}

const movieReducer = (state: any = initialStateMovie, action:any) => {
    switch (action.type) {
        case SET_ID:
            return {
                ...state,
                id: action.payload
            }
        case SET_NAME_RU:
            return {
                ...state,
                nameRu: action.payload
            }
        case SET_NAME_EN:
            return {
                ...state,
                nameEn: action.payload
            }
        case SET_POSTER_URL:
            return {
                ...state,
                posterUrl: action.payload
            }
        case SET_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            }
        case SET_YEAR:
            return {
                ...state,
                year: action.payload
            }
        case SET_RATING:
            return {
                ...state,
                rating: action.payload
            }
        case SET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case SET_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        case SET_FILM_LENGTH:
            return {
                ...state,
                filmLength: action.payload
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({filter: filtersReducer, movie: movieReducer});
const store = configureStore({reducer: rootReducer});


export default store;