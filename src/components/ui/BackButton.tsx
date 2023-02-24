import React from 'react';
import {useNavigate} from "react-router-dom";
import {ColorButtonBB} from "../../styles/buttons/ColorButtonBB";

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <div style={{width: "200px", height: "50px"}}>
            <ColorButtonBB onClick={() => {navigate('/')}}>Назад</ColorButtonBB>
        </div>
    );
};

export default BackButton;