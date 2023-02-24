import React from 'react';
import styles from "../../styles/MoviePage.module.css";

const MoviePageFilmLength = (props: any) => {
    return (
        <div className={styles.MoviePageFilmLength}>
            <div><b>Длительность фильма:</b> {props.filmLength}</div>
        </div>
    );
};

export default MoviePageFilmLength;