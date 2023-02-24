import React from 'react';
import styles from "../../styles/MoviePage.module.css";

const MoviePageDescription = (props: any) => {
    return (
        <div className={styles.MoviePageDescription}>
            <div><b>Описание: </b> <span>{props.description}</span></div>
        </div>
    );
};

export default MoviePageDescription;