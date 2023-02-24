export const makeGenresString = (genres: []) => {
    let newString = "";
    genres.map((item:any) => {
        newString += item.genre;
        newString += ", "
    });
    newString = newString.slice(0,-2);
    return newString;
}