import React, {useState} from 'react';
import {Button, ButtonProps, styled} from "@mui/material";
import {purple} from "@mui/material/colors";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'
import {RootState} from "../../index";
import {getRandomFilmId, getRandomPageId} from "../../functions/random";
import {
    setCountry,
    setDescription,
    setDisabledPreviousMovieButton, setFilmLength, setGenres,
    setId, setIsLoaded,
    setIsLoading,
    setNameEn, setNameRu, setPosterUrl,
    setPreviousMovie, setRating, setWebUrl, setYear
} from "../../redux/actionCreators";






const RollButton = (props: any) => {
    let movie = useSelector<RootState, object>(store => store.movie);
    let id = useSelector<RootState, string>(store => store.movie.id);
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
                dispatch(setIsLoading(true));
                dispatch(setPreviousMovie(movie));

                if ((id != "") && (id != null)){
                    dispatch(setDisabledPreviousMovieButton(false));
                }


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
                fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?ratingFrom=' + minRating.toString() +
                    '&type=FILM' + '&ratingTo=' + maxRating.toString() + '&genres=' + genre.toString() + '&countries=' + country.toString() + '&page=' + getRandomPageId(5).toString()
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
                                dispatch(setId(json.kinopoiskId));
                                dispatch(setNameEn(json.nameOriginal));
                                dispatch(setNameRu(json.nameRu));
                                dispatch(setPosterUrl(json.posterUrl));
                                dispatch(setDescription(json.description));
                                dispatch(setYear(json.year));
                                dispatch(setRating(json.ratingKinopoisk));
                                dispatch(setGenres(json.genres));
                                dispatch(setCountry(json.countries[0].country));
                                dispatch(setFilmLength(json.filmLength));
                                dispatch(setWebUrl(json.webUrl))
                            }
                    )
                        .catch(err => console.log(err))
                }).then(() => {
                    setTimeout(() => {
                    dispatch(setIsLoading(false));
                    console.log("NOT LOADING");
                },1)
                    }).then(()=>{
                        setTimeout(() => {
                            dispatch(setIsLoaded(true));
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