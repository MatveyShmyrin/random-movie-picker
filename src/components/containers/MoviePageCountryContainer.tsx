import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import MoviePageCountry from "../ui/MoviePageCountry";

const MoviePageCountryContainer = () => {
    let country = useSelector<RootState, string>(store => store.movie.country);
    return (
        <MoviePageCountry country = {country} />
    );
};

export default MoviePageCountryContainer;