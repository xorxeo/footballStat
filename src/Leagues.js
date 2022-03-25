import { useGetCompetitionsQuery } from "./store/footballAPI";
import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";

import Pagination from "./components/pagination/Pagination";



let PageSize = 4;


const Leagues = () => {
    const { data, isLoading, isError } = useGetCompetitionsQuery();
    const { page: currentPage = 1 } = useParams();
    const history = useHistory();


    const availableLeagues = [
        "WC", "CL", "BL1", "DED", "BSA", "PD", "FL1", "ELC", "PPL", "EC", "SA", "PL", "CLI"
    ];


    const currentData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return availableLeagues.slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);
      

      console.log(currentData);

    
    const onPageChangeHandler = (pageNumber) => {
        history.push(`/competitions/${pageNumber}`)
    }

    //   if (!currentPage) {
    //       return 
    //   }

    return (
        <div className="leagues">



            {isLoading && <div>loading...</div>}
            {isError && <div>error</div>}
            {data && data.competitions.filter(competition => currentData.includes(competition.code)).map((competition) => (

                <div className="leagues-item" key={competition.id}>

                    <Link to={`/competitions/${competition.id}/matches`}>

                        <p> {competition.name} </p>
                        <p> {competition.area.name} </p>

                    </Link>

                </div>
            ))}

            <Pagination
                className="pagination-bar"
                currentPage={Number(currentPage)}
                totalCount={availableLeagues.length}
                pageSize={PageSize}
                onPageChange={onPageChangeHandler}
            />


        </div>


    );
}


export default Leagues;