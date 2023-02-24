import React from 'react';
import styles from "../../styles/MoviePage.module.css";

const MoviePageCountry = (props: any) => {
    return (
        <div className={styles.MoviePageCountry}>
            <b>Страна:</b> {props.country}
        </div>
    );
};

export default MoviePageCountry;