export const getRandomPageId = () => {
    return (Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1))) + Math.ceil(1)).toString();
}

export const getRandomFilmId = () => {
    return (Math.floor(Math.random() * (Math.floor(19) - Math.ceil(0))) + Math.ceil(0)).toString();
}