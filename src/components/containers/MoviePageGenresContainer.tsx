import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import MoviePageGenres from "../ui/MoviePageGenres";
import {makeGenresString} from "../../functions/makeGenresString";

const MoviePageGenresContainer = () => {
    let genres = useSelector<RootState, []>(store => store.movie.genres);
    return (
        <MoviePageGenres genresString = {makeGenresString(genres)}/>
    );
};

export default MoviePageGenresContainer;