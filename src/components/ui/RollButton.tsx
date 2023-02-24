import React from 'react';
import {ColorButtonRB} from "../../styles/buttons/ColorButtonRB";

const RollButton = (props: any) => {
    return (
        <div style={{width: props.w, height: props.h, marginTop: props.mT}}>
            <ColorButtonRB
                style={{width: props.w, height: props.h, marginLeft: props.mL}}
                onClick={() => {
                props.onClickRollButton()
            }} variant="contained">
                Поиск
            </ColorButtonRB>
        </div>
    );
};

export default RollButton;