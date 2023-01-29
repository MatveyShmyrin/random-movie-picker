import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../index";
import styles from "../styles/MoviePage.module.css";

const MoviePageFilmLength = () => {
    let filmLength = useSelector<RootState, string>(store => store.movie.filmLength);
    return (
        <div className={styles.MoviePageFilmLength}>
            Длительность фильма: {filmLength} минут
        </div>
    );
};

export default MoviePageFilmLength;