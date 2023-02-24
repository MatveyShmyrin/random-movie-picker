export const getDescriptionString = (description: string|null) => {
    return (description !== "" && description !== null) ? description : "Нет описания";
}