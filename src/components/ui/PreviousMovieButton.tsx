import React from 'react';
import {ColorButtonPMB} from "../../styles/buttons/ColorButtonPMB";

const PreviousMovieButton = (props: any) => {
    return (
        <div style={{width: "200px", height: "50px"}}>
            <ColorButtonPMB disabled={props.prevButtonDisabled} onClick = {props.onClickPreviousMovieButton}>
                Предыдущий фильм
            </ColorButtonPMB>
        </div>
    );
}

export default PreviousMovieButton;