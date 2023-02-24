import React from 'react';
import styles from "../../styles/MoviePage.module.css";

const MoviePageYear = (props: any) => {
    return (
        <div className={styles.MoviePageYear}>
            <div><b>Год:</b> {props.year} </div>
        </div>
    );
};

export default MoviePageYear;