import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import styles from "../../styles/MoviePage.module.css";

const MoviePageFilmLength = () => {
    let filmLength = useSelector<RootState, string>(store => store.movie.filmLength);
    return (
        <div className={styles.MoviePageFilmLength}>
            {(filmLength == null || filmLength == "") ? <div><b>Длительность фильма:</b>неизвестна</div>
                : <div><b>Длительность фильма:</b> {filmLength} минут</div>}
        </div>
    );
};

export default MoviePageFilmLength;