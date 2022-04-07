import { useGetCompetitionsQuery } from "../store/footballAPI";
import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";

import Pagination from "../components/pagination/Pagination";
import { useDataSlice } from "../hooks/useDataSlice";
import { Search } from "../components/search/Search"
import { useGetAvaibleCompetitionsQuery } from "../hooks/useGetAvaibleCompetitionsQuery"

let pageSize = 9;


export const Leagues = () => {
    const { availableLeaguesData, isLoading, isError } = useGetAvaibleCompetitionsQuery();
    const { page: currentPage = 1 } = useParams();
    const history = useHistory();
    const [searchValue, setSearchValue] = useState("");


    const filteredLeaguesData = useMemo(() => {
        // console.log("avaiblelegues", data)
        if (availableLeaguesData.length) {
            // console.log("if true", data.competitions)
            return availableLeaguesData
                .filter(competition => competition.name.toLowerCase().includes(searchValue.toLowerCase())
                    || competition.area.name.toLowerCase().includes(searchValue.toLowerCase())
                );
        }

        return [];
    }, [availableLeaguesData, searchValue])

    console.log('filteredLeaguesData', filteredLeaguesData);

    // console.log("availableLeaguesData", availableLeaguesData);

    const currentLeaguesData = useDataSlice({
        arr: filteredLeaguesData,
        pageSize,
        currentPage,
    });


    console.log('currentLeaguesData', currentLeaguesData);
    // console.log(currentPage);

    const onPageChangeHandler = (pageNumber) => {
        history.push(`/competitions/${pageNumber}`)
    }

    console.log("input value", searchValue)

    return (
        <div>

            <Search
                value={searchValue}
                onInput={setSearchValue}
                place="league"
            />

            <div className="leagues-container">

                {isLoading && <div className="loading">loading...</div>}
                {isError && <div className="error">error</div>}
                {Boolean(currentLeaguesData.length) && currentLeaguesData.map((competition) => (

                    <div className="leagues-item" key={competition.id}>

                        <Link to={`/competitions/${competition.id}/matches`}>

                            <p> {competition.name} </p>
                            <p> {competition.area.name} </p>

                        </Link>

                    </div>
                ))}

            </div>
            <Pagination
                className="pagination-bar"
                currentPage={Number(currentPage)}
                totalCount={filteredLeaguesData.length}
                pageSize={pageSize}
                onPageChange={onPageChangeHandler}
            />
        </div>





    );
}


