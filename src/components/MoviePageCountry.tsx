import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../index";
import styles from "../styles/MoviePage.module.css";

const MoviePageCountry = () => {
    let country = useSelector<RootState, string>(store => store.movie.country);
    return (
        <div className={styles.MoviePageCountry}>
            <b>Страна:</b> {country}
        </div>
    );
};

export default MoviePageCountry;