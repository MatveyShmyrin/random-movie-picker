export const getRatingSpace = (rating: number) => {
    return (rating.toString().length == 1) ? "20px": "0px";
}