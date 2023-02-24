import {SET_PREVIOUS_MOVIE} from "../actions";

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

export const previousMovieReducer = (state: any = initialStatePreviousMovie, action:any) => {
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