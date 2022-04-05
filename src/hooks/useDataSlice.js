import { useMemo } from "react";


export const useDataSlice = (({
    arr,
    pageSize = 5,
    currentPage,
}) => {

        const currentData = useMemo(() => {
            // console.log("current data use memo", arr);
            if (arr.length >= pageSize) {
                
                const firstPageIndex = (currentPage - 1) * pageSize;
                const lastPageIndex = firstPageIndex + pageSize;
                
                // console.log("if true slice")
                console.log(firstPageIndex)
                console.log(lastPageIndex)
                console.log(currentPage)

                return arr.slice(firstPageIndex, lastPageIndex);
            }
            else return arr;
        }, [arr, pageSize, currentPage]);

    console.log('arr in useDataSlice', arr);
    console.log('currentData in useDataSlice' ,currentData);
    
    return currentData;

});


