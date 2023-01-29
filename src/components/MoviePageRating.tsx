import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../index";
import styles from "../styles/MoviePage.module.css";

const MoviePageRating = () => {
    let rating = useSelector<RootState, string>(store => store.movie.rating);
    return (
        <div className={styles.MoviePageRating}>
            {rating}
        </div>
    );
};

export default MoviePageRating;