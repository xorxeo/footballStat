import { useMemo } from "react";


export const useDataSlice = ({
    arr,
    pageSize = 5,
    currentPage,
}) => {

    const currentData = useMemo(() => {
        console.log("current data use memo", arr);
        if (arr.length) {
            console.log("if true slice")
            const firstPageIndex = (currentPage - 1) * pageSize;
            const lastPageIndex = firstPageIndex + pageSize;
            return arr.slice(firstPageIndex, lastPageIndex);
        }
        return arr;
    }, [arr, pageSize, currentPage]);

    return currentData;

};


