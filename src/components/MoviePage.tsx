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
import MoviePageLink from "./MoviePageLink";
import PreviousMovieButton from "./PreviousMovieButton";
import BackButton from "./BackButton";



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
                    <MoviePageLink />
                </div>
            </Container>


            <div>
                <div className={styles.MoviePageButtons}>
                    <PreviousMovieButton/>
                    <RollButton w = {"200px"} h = {"50px"} mL = {"200px"} mT = {"100px"}/>
                    <BackButton/>
                </div>
                <div>
                    <LoadingSpinner mL = {"465px"}/>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;