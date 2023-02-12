import React from 'react';
import {Select, SelectChangeEvent} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../index";
import {setFilterGenre} from "../../redux/actionCreators";


export default function StartPageGenreSelect() {
    const dispatch = useDispatch();
    let genre = useSelector<RootState, string|"">(store => store.filter.genre);
    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setFilterGenre(event.target.value.toString()));
    };

    return (
        <div>
            <FormControl fullWidth style={{width: 350, marginLeft:25, marginTop:20}}>
                <InputLabel id="demo-simple-select-label">Жанр</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={genre}
                    label="Genre"
                    onChange={handleChange}
                >
                    <MenuItem value={''}>Любой жанр</MenuItem>
                    <MenuItem value={1}>Триллер</MenuItem>
                    <MenuItem value={2}>Драма</MenuItem>
                    <MenuItem value={3}>Криминал</MenuItem>
                    <MenuItem value={4}>Мелодрама</MenuItem>
                    <MenuItem value={5}>Детектив</MenuItem>
                    <MenuItem value={6}>Фантастика</MenuItem>
                    <MenuItem value={7}>Приключения</MenuItem>
                    <MenuItem value={8}>Биография</MenuItem>
                    <MenuItem value={9}>Фильм-нуар</MenuItem>
                    <MenuItem value={10}>Вестерн</MenuItem>
                    <MenuItem value={11}>Боевик</MenuItem>
                    <MenuItem value={12}>Фэнтези</MenuItem>
                    <MenuItem value={13}>Комедия</MenuItem>
                    <MenuItem value={14}>Военный</MenuItem>
                    <MenuItem value={15}>История</MenuItem>
                    <MenuItem value={16}>Музыка</MenuItem>
                    <MenuItem value={17}>Ужасы</MenuItem>
                    <MenuItem value={18}>Мультфильм</MenuItem>
                    <MenuItem value={19}>Семейный</MenuItem>
                    <MenuItem value={20}>Мюзикл</MenuItem>
                    <MenuItem value={21}>Спорт</MenuItem>
                    <MenuItem value={22}>Документальный</MenuItem>
                    <MenuItem value={23}>Кроткометражка</MenuItem>
                    <MenuItem value={24}>Аниме</MenuItem>
                    <MenuItem value={33}>Детский</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}