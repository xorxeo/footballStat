export const getDateLocalString = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleString();
}

export const isInRange = (start, end, date) => {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    const targetDate = new Date(date).getTime();

    console.log("start from isInRange", startDate);
    console.log("end from isInRange", endDate);

    if (targetDate > startDate && targetDate < endDate) {
        return true;
    } else {
        return false;
    }
};