import React from 'react';
import {Select, SelectChangeEvent} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";
import {SET_FILTER_COUNTRY} from "../redux/actions";

export default function StartPageCountrySelect() {

    const dispatch = useDispatch();
    let country = useSelector<RootState, string|"">(store => store.filter.country);
    const handleChange = (event: SelectChangeEvent) => {
        dispatch({type: SET_FILTER_COUNTRY, payload: event.target.value.toString()});
    };

    return (
        <div>
            <FormControl fullWidth style={{width: 350, marginLeft:25, marginTop:20}}>
                <InputLabel id="demo-simple-select-label">Страна</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="Country"
                    onChange={handleChange}
                >
                    <MenuItem value={''}>Любая страна</MenuItem>
                    <MenuItem value={1}>США</MenuItem>
                    <MenuItem value={2}>Швейцария</MenuItem>
                    <MenuItem value={3}>Франция</MenuItem>
                    <MenuItem value={4}>Польша</MenuItem>
                    <MenuItem value={5}>Великобритания</MenuItem>
                    <MenuItem value={6}>Швеция</MenuItem>
                    <MenuItem value={7}>Индия</MenuItem>
                    <MenuItem value={8}>Испания</MenuItem>
                    <MenuItem value={9}>Германия</MenuItem>
                    <MenuItem value={10}>Италия</MenuItem>
                    <MenuItem value={15}>Мексика</MenuItem>
                    <MenuItem value={16}>Япония</MenuItem>
                    <MenuItem value={24}>Аргентина</MenuItem>
                    <MenuItem value={33}>СССР</MenuItem>
                    <MenuItem value={34}>Россия</MenuItem>
                    <MenuItem value={49}>Южная Корея</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}