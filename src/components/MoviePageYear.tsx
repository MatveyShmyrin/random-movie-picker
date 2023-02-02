import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../index";
import styles from "../styles/MoviePage.module.css";

const MoviePageYear = () => {
    let year = useSelector<RootState, string>(store => store.movie.year);
    return (
        <div className={styles.MoviePageYear}>
            {(year == null || year == "") ? <div><b>Год:</b> неизвестен</div> : <div><b>Год:</b> {year}</div>}
        </div>
    );
};

export default MoviePageYear;