import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import loading from "../../img/loading.gif";

const LoadingSpinner = (props: any) => {
    let isLoading = useSelector<RootState, boolean>(store => store.app.isLoading);
    const loadingSpinner = isLoading ?
        <img src ={loading} alt = 'Не работает' width={75} height={75}
             style={{marginLeft: props.mL, marginTop: props.mT}}/> : <div></div>;

    return (
        <div>
            {loadingSpinner}
        </div>
    );
};

export default LoadingSpinner;