import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../index";
import {setDisabledPreviousMovieButton, setToPreviousMovie} from "../../redux/actionCreators";
import PreviousMovieButton from "../ui/PreviousMovieButton";

const PreviousMovieButtonContainer = () => {
    const dispatch = useDispatch();
    const previousMovie = useSelector<RootState, object>(store => store.previousMovie);
    const prevButtonDisabled = useSelector<RootState, boolean>(store => store.app.prevButtonDisabled);
    const onClickPreviousMovieButton = () => {
            dispatch(setToPreviousMovie(previousMovie));
            dispatch(setDisabledPreviousMovieButton(true));
    };

    return (
            <PreviousMovieButton prevButtonDisabled = {prevButtonDisabled}
                                 onClickPreviousMovieButton = {onClickPreviousMovieButton}
            />
    );
};

export default PreviousMovieButtonContainer;