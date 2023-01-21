import React from 'react';
import Slider from '@mui/material/Slider';
import {Box, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";
import {SET_MAX_RATING, SET_MIN_RATING} from "../redux/actions";



function valuetext(value: number) {
    return `${value}`;
}
const minDistance = 1;


const StartPageRatingSlider = () => {
    const dispatch = useDispatch();
    let minRating = useSelector<RootState, number>(store => store.filter.minRating);
    let maxRating = useSelector<RootState, number>(store => store.filter.maxRating);


    const handleChange = (
        event: Event,
        newRating: number | number[],
        activeThumb: number,
        ) => {
        if (!Array.isArray(newRating)) {
            return;
        }
        if (activeThumb === 0) {
            dispatch({type:SET_MIN_RATING, payload: Math.min(newRating[0], maxRating - minDistance)});
            dispatch({type:SET_MAX_RATING, payload: maxRating});
        }
        else {
            dispatch({type:SET_MIN_RATING, payload: minRating});
            dispatch({type:SET_MAX_RATING, payload: Math.max(newRating[1], minRating + minDistance)});
        }
    };

    return (
            <Box sx={{ width: 300, marginLeft: 6, marginTop: 2 }}>
                <Typography sx={{marginLeft: 15}}>Рейтинг</Typography>
                <Slider
                    value={[minRating, maxRating]}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color={"secondary"}
                    min={0}
                    max={10}
                    step={1}
                    disableSwap
                />
            </Box>
    );
};

export default StartPageRatingSlider;