export const makeCountriesString = (countries: []) => {
    let newString = "";
    countries.map((item:any) => {
        newString += item.country;
        newString += ", "
    });
    newString = newString.slice(0,-2);
    return newString;
}