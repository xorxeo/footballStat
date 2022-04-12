import { useMemo } from "react";

export const useDateRange = ((
    searchDateStart,
    searchDateEnd,
    
) => {
    console.log(searchDateStart);
    console.log(searchDateEnd);

    const currentDate = useMemo(() => { 
        const arr = [];
        if (searchDateStart && searchDateEnd) {
            const dateStart = new Date(searchDateStart).getTime();
            const dateEnd = new Date(searchDateEnd).getTime();
            
            console.log(dateStart);
            console.log(dateEnd);
            for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
                // console.log(new Date(i).toISOString());
                arr.push(new Date(i).toISOString());
            }
        }
       
        return arr;
    }, [searchDateStart, searchDateEnd]);
    // console.log('currentDate from useDateRange', currentDate)
    return currentDate;
});