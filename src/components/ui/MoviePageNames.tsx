import React from 'react';
import styles from "../../styles/MoviePage.module.css";
import {Container} from "react-bootstrap";

const MoviePageNames = (props: any) => {
    return (
        <Container className={styles.MoviePageNames}>
            <h1>{props.nameRu}</h1>
            <h1>{props.nameEn}</h1>
        </Container>
    );
};

export default MoviePageNames;