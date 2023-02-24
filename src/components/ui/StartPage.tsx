import React from 'react';
import styles from "../../styles/StartPage.module.css";
import StartPageName from "./StartPageName";
import StartPageFilter from "./StartPageFilter";

import StartPageRatingSlider from "./StartPageRatingSlider";
import LoadingSpinnerContainer from "../containers/LoadingSpinnerContainer";
import RollButtonContainer from "../containers/RollButtonContainer";


const StartPage = () => {
    return (
        <div className={styles.StartPage}>
            <StartPageName/>
            <StartPageFilter/>
            <StartPageRatingSlider/>
            <RollButtonContainer w = {"200px"} h = {"50px"} mT = {"40px"} mL = {"100px"}/>
            <LoadingSpinnerContainer mL = {"165px"} mT = {"10px"}/>
        </div>
    );
};

export default StartPage;