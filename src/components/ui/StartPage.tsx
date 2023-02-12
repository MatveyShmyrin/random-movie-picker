import React from 'react';
import styles from "../../styles/StartPage.module.css";
import StartPageName from "./StartPageName";
import StartPageFilter from "./StartPageFilter";
import RollButton from "./RollButton";
import StartPageRatingSlider from "./StartPageRatingSlider";
import LoadingSpinner from "./LoadingSpinner";



const StartPage = () => {
    return (
        <div className={styles.StartPage}>
            <StartPageName/>
            <StartPageFilter/>
            <StartPageRatingSlider/>
            <RollButton w = {"200px"} h = {"50px"} mT = {"40px"} mL = {"100px"}/>
            <LoadingSpinner mL = {"165px"} mT = {"10px"}/>
        </div>
    );
};

export default StartPage;