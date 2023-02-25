import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../index";
import {
    setCountries,
    setDescription,
    setDisabledPreviousMovieButton, setFilmLength, setGenres, setId, setIsLoaded,
    setIsLoading, setNameEn, setNameRu, setPosterUrl,
    setPreviousMovie, setRating, setWebUrl, setYear
} from "../../redux/actionCreators";
import RollButton from "../ui/RollButton";
import {useNavigate} from "react-router-dom";
import {getRandomFilmId, getRandomPageId} from "../../functions/random";


const RollButtonContainer = (props: any) => {
    const movie = useSelector<RootState, object>(store => store.movie);
    const id = useSelector<RootState, string>(store => store.movie.id);
    const minRating = useSelector<RootState, number>(store => store.filter.minRating);
    const maxRating = useSelector<RootState, number>(store => store.filter.maxRating);
    const country = useSelector<RootState, number|"">(store => store.filter.country);
    const genre = useSelector<RootState, number|"">(store => store.filter.genre);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [idsInPage, setIds] = useState(19);

    async function onClickRollButton(){
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
                console.log(json);
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
                        dispatch(setId(json.kinopoiskId));
                        dispatch(setNameEn(json.nameOriginal));
                        dispatch(setNameRu(json.nameRu));
                        dispatch(setPosterUrl(json.posterUrl));
                        dispatch(setDescription(json.description));
                        dispatch(setYear(json.year));
                        dispatch(setRating(json.ratingKinopoisk));
                        dispatch(setGenres(json.genres));
                        dispatch(setCountries(json.countries));
                        dispatch(setFilmLength(json.filmLength));
                        dispatch(setWebUrl(json.webUrl))
                    }
                )
                .catch(err => console.log(err))
        }).then(() => {
            setTimeout(() => {
                dispatch(setIsLoading(false));
                console.log("NOT LOADING");
            },0)
        }).then(()=>{
                setTimeout(() => {
                    dispatch(setIsLoaded(true));
                    console.log("LOADED");
                    console.log(movie);
                }, 0)
            }
        ).then(()=>{
            setTimeout(()=>{
                navigate('/movie');
            },0);
        })

    }
    return (
        <RollButton w = {props.w} h = {props.h} mT = {props.mT} mL = {props.mL}
                    onClickRollButton = {onClickRollButton}/>
    );
};
export default RollButtonContainer;