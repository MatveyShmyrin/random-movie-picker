import React from 'react';
import {Button, ButtonProps, styled} from "@mui/material";
import {purple} from "@mui/material/colors";
import {useNavigate} from "react-router-dom";

const BackButton = () => {

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        width: "200px",
        height: "50px",
        marginTop: "100px",
        marginLeft: "300px",
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));

    const navigate = useNavigate();

    return (
        <div style={{width: "200px", height: "50px"}}>
            <ColorButton onClick={()=>{
                navigate('/')
            }}>Назад</ColorButton>
        </div>
    );
};

export default BackButton;