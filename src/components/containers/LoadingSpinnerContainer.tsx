import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import loading from "../../img/loading.gif";
import LoadingSpinner from "../ui/LoadingSpinner";

const LoadingSpinnerContainer = ({mL,mT}: any) => {
    let isLoading = useSelector<RootState, boolean>(store => store.app.isLoading);
    const loadingSpinner = isLoading ?
        <img src ={loading} alt = 'Не работает' width={75} height={75}
             style={{marginLeft: mL, marginTop: mT}}/> : <div></div>;

    return (
        <LoadingSpinner loadingSpinner = {loadingSpinner}/>
    );
};

export default LoadingSpinnerContainer;