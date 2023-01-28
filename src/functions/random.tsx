export const getRandomPageId = (pages: number) => {
    return (Math.floor(Math.random() * (Math.floor(pages) - Math.ceil(1))) + Math.ceil(1)).toString();
}

export const getRandomFilmId = (ids: number) => {
    return (Math.floor(Math.random() * (Math.floor(ids) - Math.ceil(0))) + Math.ceil(0)).toString();
}