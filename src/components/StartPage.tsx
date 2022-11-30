import React from 'react';
import styles from "../styles/StartPage.module.css";
import StartPageName from "./StartPageName";
import StartPageFilter from "./StartPageFilter";
import StartPageButton from "./StartPageButton";

const StartPage = () => {
    return (
        <div className={styles.StartPage}>
            <StartPageName/>
            <StartPageFilter/>
            <StartPageButton/>
        </div>
    );
};

export default StartPage;