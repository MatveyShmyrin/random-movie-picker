import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import styles from "../../styles/MoviePage.module.css";

const MoviePageGenres = () => {
    let genres = useSelector<RootState, []>(store => store.movie.genres);
    let makeGenresString = () => {
        let newString = "";
        genres.map((item:any) => {
            newString += item.genre;
            newString += ", "
        });
        newString = newString.slice(0,-2);
        return newString;
    }
    return (
        <div className={styles.MoviePageGenres}>
            <b>Жанры:</b> {makeGenresString()}
        </div>
    );
};

export default MoviePageGenres;