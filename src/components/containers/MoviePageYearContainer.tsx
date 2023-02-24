import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import {getYearString} from "../../functions/getYearString";
import MoviePageYear from "../ui/MoviePageYear";

const MoviePageYearContainer = () => {
    let year = useSelector<RootState, string>(store => store.movie.year);
    return (
        <MoviePageYear year = {getYearString(year)} />
    );
};

export default MoviePageYearContainer;