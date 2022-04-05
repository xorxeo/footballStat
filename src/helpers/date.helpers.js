export const getDateLocalString = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleString();
}