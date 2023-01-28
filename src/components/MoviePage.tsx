import React from 'react';
import RollButton from "./RollButton";
import LoadingSpinner from "./LoadingSpinner";
import styles from "../styles/MoviePage.module.css";
import {useSelector} from "react-redux";
import {RootState} from "../index";

const MoviePage = () => {

    let posterUrl = useSelector<RootState, string>(store => store.movie.posterUrl);
    let nameRu = useSelector<RootState, string>(store => store.movie.nameRu);
    let nameEn = useSelector<RootState, string>(store => store.movie.nameEn);

    return (
        <div className={styles.MoviePage}>
            <h1>{nameRu}</h1>
            <h1>{nameEn}</h1>
            <img src = {posterUrl} width = {"270px"} height={"400px"} />
            <div className={styles.MoviePageRollAndLoading}>
                <RollButton />
                <LoadingSpinner />
            </div>
        </div>
    );
};

export default MoviePage;