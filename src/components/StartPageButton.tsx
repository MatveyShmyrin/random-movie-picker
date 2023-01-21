import React from 'react';
import {Button, ButtonProps, styled} from "@mui/material";
import {purple} from "@mui/material/colors";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";
import {getRandomFilmId, getRandomPageId} from "../functions/random";

import {
    SET_COUNTRY,
    SET_DESCRIPTION, SET_FILM_LENGTH, SET_GENRES,
    SET_ID,
    SET_NAME_EN,
    SET_NAME_RU,
    SET_POSTER_URL,
    SET_RATING,
    SET_YEAR
} from "../redux/actions";


const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    marginLeft: '155px',
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));



const StartPageButton = () => {
    let filter = useSelector<RootState, number>(store => store.filter);
    let movie = useSelector<RootState, number>(store => store.movie);
    let minRating = useSelector<RootState, number>(store => store.filter.minRating);
    let maxRating = useSelector<RootState, number>(store => store.filter.maxRating);
    let country = useSelector<RootState, string|"">(store => store.filter.country);
    let genre = useSelector<RootState, number|"">(store => store.filter.genre);

    let id = useSelector<RootState, number|"">(store => store.movie.id);

    const dispatch = useDispatch();



    return (
        <div style={{marginTop: '20px'}}>
            <ColorButton onClick={() => {
                console.log("Filter settings: ");
                console.log(filter);
                fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?ratingFrom='+minRating.toString()+
                    '&ratingTo='+maxRating.toString()+'&genres='+genre+'&countries='+country+'&page='+getRandomPageId()
                    , {
                        method: 'GET',
                        headers: {
                            'X-API-KEY': 'ee6b9676-579e-4f90-90bf-048f23308ef7',
                            'Content-Type': 'application/json',
                        }
                    }).then(res => res.json()).then(json =>
                    {
                        let newItem = json.items[getRandomFilmId()];
                        console.log("Responded movie: ");
                        console.log(newItem);
                        console.log(newItem.kinopoiskId);
                        return newItem.kinopoiskId.toString();
                    }
                ).then((fetchedId) => {
                    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + fetchedId, {
                        method: 'GET',
                        headers: {
                            'X-API-KEY': 'ee6b9676-579e-4f90-90bf-048f23308ef7',
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(res => res.json())
                        .then(json => {
                                console.log(json);
                                dispatch({type: SET_ID, payload: json.kinopoiskId});
                                dispatch({type: SET_NAME_EN, payload: json.nameOriginal});
                                dispatch({type: SET_NAME_RU, payload: json.nameRu});
                                dispatch({type: SET_POSTER_URL, payload: json.posterUrl});
                                dispatch({type: SET_DESCRIPTION, payload: json.description});
                                dispatch({type: SET_YEAR, payload: json.year});
                                dispatch({type: SET_RATING, payload: json.ratingKinopoisk});
                                dispatch({type: SET_GENRES, payload: json.genres});
                                dispatch({type: SET_COUNTRY, payload: json.countries[0].country});
                                dispatch({type: SET_FILM_LENGTH, payload: json.filmLength});
                            }
                    )
                        .catch(err => console.log(err))
                })




            }} variant="contained">
                Поиск
            </ColorButton>
            <ColorButton onClick={()=>console.log(movie)}>Show movie</ColorButton>
        </div>
    );
};

export default StartPageButton;