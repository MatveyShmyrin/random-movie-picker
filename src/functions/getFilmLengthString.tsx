export const getFilmLengthString = (filmLength: string) => {
    return (filmLength !== "" && filmLength !== null) ? filmLength + " минут" : "неизвестна";
}