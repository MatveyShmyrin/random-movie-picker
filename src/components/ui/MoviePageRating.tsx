import React from 'react';
import styles from "../../styles/MoviePage.module.css";

const MoviePageRating = (props: any) => {
    return (
        <div className={styles.MoviePageRating}>
            <b style={{marginLeft: props.ratingSpace}}>{props.rating}</b>
        </div>
    );
};

export default MoviePageRating;