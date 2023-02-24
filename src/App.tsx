import React from 'react';
import StartPage from "./components/ui/StartPage";
import styles from "./styles/App.module.css";
import {Navigate, Route,  Routes} from "react-router-dom";
import MoviePage from "./components/ui/MoviePage";
import {useSelector} from "react-redux";
import {RootState} from "./index";

function App() {
    let isLoaded = useSelector<RootState, boolean>(store => store.app.isLoaded);
    return (
            <div className={styles.App}>
                <Routes>
                    <Route path="/" element={<StartPage/>} />
                    <Route path="/movie" element={
                        isLoaded ? (
                            <><MoviePage/></>
                        ) : (
                            <Navigate replace to="/" />
                        )
                    } />
                </Routes>
            </div>
  );
}

export default App;
