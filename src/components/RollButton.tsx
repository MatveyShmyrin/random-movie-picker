import React, {useState} from 'react';
import {Button, ButtonProps, styled} from "@mui/material";
import {purple} from "@mui/material/colors";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'
import {RootState} from "../index";
import {getRandomFilmId, getRandomPageId} from "../functions/random";

import {
    SET_COUNTRY,
    SET_DESCRIPTION, SET_FILM_LENGTH, SET_GENRES,
    SET_ID, SET_IS_LOADED, SET_IS_LOADING,
    SET_NAME_EN,
    SET_NAME_RU,
    SET_POSTER_URL,
    SET_RATING,
    SET_YEAR
} from "../redux/actions";






const RollButton = (props: any) => {
    let filter = useSelector<RootState, number>(store => store.filter);
    let movie = useSelector<RootState, number>(store => store.movie);
    let minRating = useSelector<RootState, number>(store => store.filter.minRating);
    let maxRating = useSelector<RootState, number>(store => store.filter.maxRating);
    let country = useSelector<RootState, number|"">(store => store.filter.country);
    let genre = useSelector<RootState, number|"">(store => store.filter.genre);

    const dispatch = useDispatch();

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        marginLeft: props.mL,
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));

    const [idsInPage, setIds] = useState(19);
    const navigate = useNavigate();

    return (
        <div style={{width: props.w, height: props.h, marginTop: props.mT}}>
            <ColorButton
                style={{width: props.w, height: props.h}}
                onClick={() => {
                console.log("Filter settings: ");
                console.log(filter);

                dispatch({type: SET_IS_LOADING, payload: true});

                fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films'
                    , {
                        method: 'GET',
                        headers: {
                            'X-API-KEY': 'ee6b9676-579e-4f90-90bf-048f23308ef7',
                            'Content-Type': 'application/json'
                        }
                    }).then(res => res.json()).then(json =>
                    {
                        setIds(json.items.length-1);
                    }
                )

                fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?ratingFrom='+minRating.toString()+
                    '&type=FILM'+'&ratingTo='+maxRating.toString()+'&genres='+genre+'&countries='+country+'&page='+getRandomPageId(5)
                    , {
                        method: 'GET',
                        headers: {
                            'X-API-KEY': 'ee6b9676-579e-4f90-90bf-048f23308ef7',
                            'Content-Type': 'application/json'
                        }
                    }).then(res => res.json()).then(json =>
                    {
                        let newItem = json.items[getRandomFilmId(idsInPage)];
                        return newItem.kinopoiskId.toString();
                    }
                ).then((fetchedId) => {
                    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + fetchedId, {
                        method: 'GET',
                        headers: {
                            'X-API-KEY': 'ee6b9676-579e-4f90-90bf-048f23308ef7',
                            'Content-Type': 'application/json'
                        },
                    })
                        .then(res => res.json())
                        .then(json => {
                                console.log("Responded movie: ");
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
                                console.log(json);
                            }
                    )
                        .catch(err => console.log(err))
                }).then(() => {
                    setTimeout(() => {
                    dispatch({type: SET_IS_LOADING, payload: false});
                    console.log("NOT LOADING");
                },1)
                    }).then(()=>{
                        setTimeout(() => {
                            dispatch({type: SET_IS_LOADED, payload: true});
                            console.log("LOADED");
                            console.log(movie);
                        }, 1)
                    }
                ).then(()=>{
                    setTimeout(()=>{
                        navigate('/movie');
                    },1);
                })
            }} variant="contained">
                Поиск
            </ColorButton>
        </div>
    );
};

export default RollButton;