import React from 'react';
import styles from "../../styles/MoviePage.module.css";

const MoviePageLink = (props: any) => {
    return (
        <div className={styles.MoviePageLink}>
            <a href={props.webUrl}>Ссылка на Кинопоиск</a>
        </div>
    );
};

export default MoviePageLink;