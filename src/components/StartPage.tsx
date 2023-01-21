import React from 'react';
import styles from "../styles/StartPage.module.css";
import StartPageName from "./StartPageName";
import StartPageFilter from "./StartPageFilter";
import StartPageButton from "./StartPageButton";
import StartPageRatingSlider from "./StartPageRatingSlider";


const StartPage = () => {
    return (
        <div className={styles.StartPage}>
            <StartPageName/>
            <StartPageFilter/>
            <StartPageRatingSlider/>
            <StartPageButton/>

        </div>
    );
};

export default StartPage;