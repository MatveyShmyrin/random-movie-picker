import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import MoviePageFilmLength from "../ui/MoviePageFilmLength";
import {getFilmLengthString} from "../../functions/getFilmLengthString";

const MoviePageFilmLengthContainer = () => {
    let filmLength = useSelector<RootState, string>(store => store.movie.filmLength);

    return (
        <MoviePageFilmLength filmLength = {getFilmLengthString(filmLength)}/>
    );
};

export default MoviePageFilmLengthContainer;