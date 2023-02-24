import React from 'react';
import styles from "../../styles/MoviePage.module.css";

const MoviePageGenres = (props: any) => {
    return (
        <div className={styles.MoviePageGenres}>
            <b>Жанры:</b> {props.genresString}
        </div>
    );
};

export default MoviePageGenres;