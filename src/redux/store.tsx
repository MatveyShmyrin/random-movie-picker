import {combineReducers} from "redux";
import {configureStore} from '@reduxjs/toolkit';
import {filtersReducer} from './reducers/filtersReducer';
import {previousMovieReducer} from "./reducers/previousMovieReducer";
import {movieReducer} from "./reducers/movieReducer";
import {appReducer} from "./reducers/appReducer";


const rootReducer = combineReducers({filter: filtersReducer, movie: movieReducer, app: appReducer, previousMovie: previousMovieReducer});
const store = configureStore({reducer: rootReducer});


export default store;