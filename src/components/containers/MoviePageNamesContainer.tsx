import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import MoviePageNames from "../ui/MoviePageNames";

const MoviePageNamesContainer = () => {
    let nameRu = useSelector<RootState, string>(store => store.movie.nameRu);
    let nameEn = useSelector<RootState, string>(store => store.movie.nameEn);

    return (
        <MoviePageNames nameRu = {nameRu} nameEn = {nameEn} />
    );
};

export default MoviePageNamesContainer;