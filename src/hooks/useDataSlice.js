import { useMemo } from "react";

export const useDataSlice = (({
    arr,
    pageSize = 5,
    currentPage,
}) => {

    const currentData = useMemo(() => {
        if (arr.length >= pageSize) {
            const firstPageIndex = (currentPage - 1) * pageSize;
            const lastPageIndex = firstPageIndex + pageSize;
            return arr.slice(firstPageIndex, lastPageIndex);
        } else {
            return arr;
        }
    }, [arr, pageSize, currentPage]);
    return currentData;
});


