import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../index";
import styles from "../styles/MoviePage.module.css";

const MoviePageDescription = () => {
    let description = useSelector<RootState, string|null>(store => store.movie.description);
    return (
        <div className={styles.MoviePageDescription}>
            Описание:
            <React.Fragment><br/></React.Fragment>
            {(description !== "" && description !== null) ? <div>{description}</div> : <div>Нет описания</div>}
        </div>
    );
};

export default MoviePageDescription;