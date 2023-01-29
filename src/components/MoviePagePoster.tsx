import React from 'react';
import styles from "../styles/MoviePage.module.css";
import {useSelector} from "react-redux";
import {RootState} from "../index";
import {Container} from "react-bootstrap";

const MoviePagePoster = () => {
    let posterUrl = useSelector<RootState, string>(store => store.movie.posterUrl);
    return (
        <Container className={styles.MoviePagePoster}>
            <img src = {posterUrl} />
        </Container>
    );
};

export default MoviePagePoster;