import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../index";
import styles from "../styles/MoviePage.module.css";

const MoviePageYear = () => {
    let year = useSelector<RootState, string>(store => store.movie.year);
    return (
        <div className={styles.MoviePageYear}>
            Год : {year}
        </div>
    );
};

export default MoviePageYear;