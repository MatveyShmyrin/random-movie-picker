import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import MoviePageDescription from "../ui/MoviePageDescription";
import {getDescriptionString} from "../../functions/getDescriptionString";

const MoviePageDescriptionContainer = () => {
    let description = useSelector<RootState, string|null>(store => store.movie.description);
    return (
        <MoviePageDescription description = {getDescriptionString(description)}/>
    );
};

export default MoviePageDescriptionContainer;