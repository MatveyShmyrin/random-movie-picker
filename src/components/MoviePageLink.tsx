import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../index";
import styles from "../styles/MoviePage.module.css";

const MoviePageLink = () => {
    let webUrl = useSelector<RootState, string>(store => store.movie.webUrl);
    return (
        <div className={styles.MoviePageLink}>
            <a href={webUrl}>Ссылка на Кинопоиск</a>
        </div>
    );
};

export default MoviePageLink;