import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import MoviePageCountry from "../ui/MoviePageCountry";
import {makeCountriesString} from "../../functions/makeCountiesString";

const MoviePageCountryContainer = () => {
    let countries = useSelector<RootState, []>(store => store.movie.countries);
    return (
        <MoviePageCountry countryString = {makeCountriesString(countries)}/>
    );
};

export default MoviePageCountryContainer;