export const setMinRating = (minRating: number) => {
    return {
        type: "SET_MIN_RATING",
        payload: minRating
    }
}

export const setMaxRating = (maxRating: number) => {
    return {
        type: "SET_MAX_RATING",
        payload: maxRating
    }
}

export const setFilterCountry = (country: string|null) => {
    return {
        type: "SET_FILTER_COUNTRY",
        payload: country
    }
}

export const setFilterGenre = (genre: string|null) => {
    return {
        type: "SET_FILTER_GENRE",
        payload: genre
    }
}

export const setId = (id: string|null) => {
    return {
        type: "SET_ID",
        payload: id
    }
}

export const setNameRu = (nameRu: string|null) => {
    return {
        type: "SET_NAME_RU",
        payload: nameRu
    }
}

export const setNameEn = (nameEn: string|null) => {
    return {
        type: "SET_NAME_EN",
        payload: nameEn
    }
}

export const setPosterUrl = (posterUrl: string|null) => {
    return {
        type: "SET_POSTER_URL",
        payload: posterUrl
    }
}

export const setDescription = (description: string|null) => {
    return {
        type: "SET_DESCRIPTION",
        payload: description
    }
}

export const setYear = (year: string|null) => {
    return {
        type: "SET_YEAR",
        payload: year
    }
}

export const setRating = (rating: string|null) => {
    return {
        type: "SET_RATING",
        payload: rating
    }
}

export const setFilmLength = (filmLength: string|null) => {
    return {
        type: "SET_FILM_LENGTH",
        payload: filmLength
    }
}

export const setCountry = (country: string|null) => {
    return {
        type: "SET_COUNTRY",
        payload: country
    }
}

export const setGenres = (genres: Array<object>) => {
    return {
        type: "SET_GENRES",
        payload: genres
    }
}

export const setWebUrl = (webUrl: string|null) => {
    return {
        type: "SET_WEB_URL",
        payload: webUrl
    }
}

export const setToPreviousMovie = (previousMovie: object|null) => {
    return {
        type: "SET_TO_PREVIOUS_MOVIE",
        payload: previousMovie
    }
}

export const setPreviousMovie = (previousMovie: object|null) => {
    return {
        type: "SET_PREVIOUS_MOVIE",
        payload: previousMovie
    }
}

export const setIsLoading = (isLoading: boolean) => {
    return {
        type: "SET_IS_LOADING",
        payload: isLoading
    }
}

export const setIsLoaded = (isLoaded: boolean) => {
    return {
        type: "SET_IS_LOADED",
        payload: isLoaded
    }
}


export const setDisabledPreviousMovieButton = (isDisabled: boolean) => {
    return {
        type: "SET_DISABLED_PREVIOUS_MOVIE_BUTTON",
        payload: isDisabled
    }
}