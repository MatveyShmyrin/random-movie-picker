import {
    SET_COUNTRY,
    SET_DESCRIPTION, SET_FILM_LENGTH, SET_GENRES,
    SET_ID,
    SET_NAME_EN,
    SET_NAME_RU,
    SET_POSTER_URL,
    SET_RATING, SET_TO_PREVIOUS_MOVIE, SET_WEB_URL,
    SET_YEAR
} from "../actions";

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

export const movieReducer = (state: any = initialStateMovie, action:any) => {
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