import React from 'react';
import styles from "../../styles/MoviePage.module.css";
import {Container} from "react-bootstrap";

const MoviePagePoster = (props: any) => {
    return (
        <Container className={styles.MoviePagePoster}>
            <img src = {props.posterUrl} />
        </Container>
    );
};

export default MoviePagePoster;