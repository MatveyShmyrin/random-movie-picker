import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../index";
import styles from "../styles/MoviePage.module.css";
import {Container} from "react-bootstrap";

const MoviePageNames = () => {
    let nameRu = useSelector<RootState, string>(store => store.movie.nameRu);
    let nameEn = useSelector<RootState, string>(store => store.movie.nameEn);
    return (
        <Container className={styles.MoviePageNames}>
            <h1>{nameRu}</h1>
            <h1>{nameEn}</h1>
        </Container>
    );
};

export default MoviePageNames;