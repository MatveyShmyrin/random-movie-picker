export const getYearString = (year: string|null) => {
    return (year !== "" && year !== null) ?  year : "неизвестен";
}