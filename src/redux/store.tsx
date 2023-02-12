import {combineReducers} from "redux";
import {
    SET_COUNTRY,
    SET_DESCRIPTION,
    SET_DISABLED_PREVIOUS_MOVIE_BUTTON,
    SET_FILM_LENGTH,
    SET_FILTER_COUNTRY,
    SET_FILTER_GENRE,
    SET_GENRES,
    SET_ID,
    SET_IS_LOADED,
    SET_IS_LOADING,
    SET_MAX_RATING,
    SET_MIN_RATING,
    SET_NAME_EN,
    SET_NAME_RU,
    SET_POSTER_URL,
    SET_PREVIOUS_MOVIE,
    SET_TO_PREVIOUS_MOVIE,
    SET_RATING,
    SET_WEB_URL,
    SET_YEAR
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
    filmLength: "",
    webUrl: ""
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
        case SET_WEB_URL:
            return {
                ...state,
                webUrl: action.payload
            }
        case SET_TO_PREVIOUS_MOVIE:
            return {
                ...state,
                id: action.payload.id,
                nameRu: action.payload.nameRu,
                nameEn: action.payload.nameEn,
                posterUrl: action.payload.posterUrl,
                description: action.payload.description,
                year: action.payload.year,
                rating: action.payload.rating,
                genres: action.payload.genres,
                country: action.payload.country,
                filmLength: action.payload.filmLength,
                webUrl: action.payload.webUrl
            }
        default:
            return state;
    }
}

const initialStatePreviousMovie = {
    id: "",
    nameRu: "",
    nameEn: "",
    posterUrl: "",
    description: "",
    year: "",
    rating: "",
    genres: [],
    country: "",
    filmLength: "",
    webUrl: ""
}

const previousMovieReducer = (state: any = initialStatePreviousMovie, action:any) => {
    switch (action.type) {
        case SET_PREVIOUS_MOVIE:
            return {
                ...state,
                id: action.payload.id,
                nameRu: action.payload.nameRu,
                nameEn: action.payload.nameEn,
                posterUrl: action.payload.posterUrl,
                description: action.payload.description,
                year: action.payload.year,
                rating: action.payload.rating,
                genres: action.payload.genres,
                country: action.payload.country,
                filmLength: action.payload.filmLength,
                webUrl: action.payload.webUrl
            }

        default:
            return state;
    }
}

const initialStateApp = {
    isLoading: false,
    isLoaded: false,
    prevButtonDisabled: true
}

const appReducer = (state: any = initialStateApp, action:any) => {
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




const rootReducer = combineReducers({filter: filtersReducer, movie: movieReducer, app: appReducer, previousMovie: previousMovieReducer});
const store = configureStore({reducer: rootReducer});


export default store;