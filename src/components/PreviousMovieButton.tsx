import React, {useState} from 'react';
import {Button, ButtonProps, styled} from "@mui/material";
import {purple} from "@mui/material/colors";
import {SET_DISABLED_PREVIOUS_MOVIE_BUTTON, SET_PREVIOUS_MOVIE, SET_PREVIOUS_MOVIE_BACK,} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";

const PreviousMovieButton = () => {

    const dispatch = useDispatch();

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        width: "200px",
        height: "50px",
        marginTop: "100px",
        marginLeft: "100px",
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));

    let prevButtonDisabled = useSelector<RootState, boolean>(store => store.app.prevButtonDisabled);
    let previousMovie = useSelector<RootState, object>(store => store.previousMovie);

    return (
        <div style={{width: "200px", height: "50px"}}>
            <ColorButton disabled={prevButtonDisabled} onClick = {(event)=>{
                dispatch({type: SET_PREVIOUS_MOVIE_BACK, payload: previousMovie});
                dispatch({type: SET_DISABLED_PREVIOUS_MOVIE_BUTTON, payload: true});
            }}>
                Предыдущий фильм
            </ColorButton>
        </div>
    );
};

export default PreviousMovieButton;