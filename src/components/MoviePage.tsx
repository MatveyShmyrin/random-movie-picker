import React from 'react';
import RollButton from "./RollButton";
import LoadingSpinner from "./LoadingSpinner";
import styles from "../styles/MoviePage.module.css";
import MoviePagePoster from "./MoviePagePoster";
import MoviePageNames from "./MoviePageNames";
import {Container} from "react-bootstrap";
import MoviePageDescription from "./MoviePageDescription";
import MoviePageRating from "./MoviePageRating";
import MoviePageYear from "./MoviePageYear";
import MoviePageGenres from "./MoviePageGenres";
import MoviePageCountry from "./MoviePageCountry";
import MoviePageFilmLength from "./MoviePageFilmLength";



const MoviePage = () => {

    return (
        <div className={styles.MoviePage}>
            <Container style={{display: "flex", flexDirection: "row"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <MoviePagePoster />
                    <MoviePageRating />
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <MoviePageNames />
                    <MoviePageYear />
                    <MoviePageFilmLength />
                    <MoviePageGenres />
                    <MoviePageCountry />
                    <MoviePageDescription />
                </div>
            </Container>
            <div className={styles.MoviePageRollAndLoading}>
                <RollButton w = {"200px"} h = {"50px"}/>
                <LoadingSpinner mL = {"65px"}/>
            </div>
        </div>
    );
};

export default MoviePage;