import React from 'react';
import StartPageGenreSelect from "./StartPageGenreSelect";
import StartPageCountrySelect from "./StartPageCountrySelect";

const StartPageFilter = () => {
    return (
        <div>
            <StartPageGenreSelect/>
            <StartPageCountrySelect/>
        </div>
    );
};

export default StartPageFilter;