import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import MoviePagePoster from "../ui/MoviePagePoster";

const MoviePagePosterContainer = () => {
    let posterUrl = useSelector<RootState, string>(store => store.movie.posterUrl);
    return (
        <MoviePagePoster posterUrl={posterUrl}/>
    );
};

export default MoviePagePosterContainer;