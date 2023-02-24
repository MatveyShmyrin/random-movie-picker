import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import MoviePageLink from "../ui/MoviePageLink";

const MoviePageLinkContainer = () => {
    let webUrl = useSelector<RootState, string>(store => store.movie.webUrl);
    return (
        <MoviePageLink webUrl = {webUrl}/>
    );
};

export default MoviePageLinkContainer;