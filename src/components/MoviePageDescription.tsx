import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../index";
import styles from "../styles/MoviePage.module.css";

const MoviePageDescription = () => {
    let description = useSelector<RootState, string|null>(store => store.movie.description);
    return (
        <div className={styles.MoviePageDescription}>
            <div><b>Описание: </b> {(description !== "" && description !== null) ? <span>{description}</span> : <span>Нет описания</span>}</div>
        </div>
    );
};

export default MoviePageDescription;