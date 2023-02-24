import React from 'react';
import styles from "../../styles/MoviePage.module.css";
import BackButton from "./BackButton";
import LoadingSpinnerContainer from "../containers/LoadingSpinnerContainer";
import MoviePageCountryContainer from "../containers/MoviePageCountryContainer";
import MoviePageDescriptionContainer from "../containers/MoviePageDescriptionContainer";
import MoviePageFilmLengthContainer from "../containers/MoviePageFilmLengthContainer";
import MoviePageGenresContainer from "../containers/MoviePageGenresContainer";
import MoviePageLinkContainer from "../containers/MoviePageLinkContainer";
import MoviePageNamesContainer from "../containers/MoviePageNamesContainer";
import MoviePagePosterContainer from "../containers/MoviePagePosterContainer";
import MoviePageRatingContainer from "../containers/MoviePageRatingContainer";
import MoviePageYearContainer from "../containers/MoviePageYearContainer";
import PreviousMovieButtonContainer from '../containers/PreviousMovieButtonContainer';
import RollButtonContainer from "../containers/RollButtonContainer";

const MoviePage = () => {
    return (
        <div className={styles.MoviePage}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <MoviePagePosterContainer />
                    <MoviePageRatingContainer />
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <MoviePageNamesContainer />
                    <MoviePageYearContainer />
                    <MoviePageFilmLengthContainer />
                    <MoviePageGenresContainer />
                    <MoviePageCountryContainer />
                    <MoviePageDescriptionContainer />
                    <MoviePageLinkContainer />
                </div>
            </div>
            <div>
                <div className={styles.MoviePageButtons}>
                    <PreviousMovieButtonContainer />
                    <RollButtonContainer w = {"200px"} h = {"50px"} mL = {"200px"} mT = {"100px"}/>
                    <BackButton/>
                </div>
                <div>
                    <LoadingSpinnerContainer mL = {"465px"}/>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;