import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import MoviePageRating from "../ui/MoviePageRating";
import {getRatingSpace} from "../../functions/getRatingSpace";

const MoviePageRatingContainer = () => {
    let rating = useSelector<RootState, number>(store => store.movie.rating);
    return (
        <MoviePageRating rating = {rating} ratingSpace = {getRatingSpace(rating)}/>
    );
};

export default MoviePageRatingContainer;