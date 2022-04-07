import { useGetTeamsQuery } from "../store/footballAPI";
import { Link, useParams, useHistory } from "react-router-dom";
import { useMemo, useState } from "react";

import Pagination from "../components/pagination/Pagination";
import { useDataSlice } from "../hooks/useDataSlice";
import { Search } from "../components/search/Search";



let pageSize = 9;

export const Teams = () => {
    const { data, isLoading, isError } = useGetTeamsQuery();
    const { page: currentPage = 1 } = useParams();
    const history = useHistory();
    const [searchValue, setSearchValue] = useState("");

    const [searchActive, setSearchActive] = useState(false);



    const filteredTeamsData = useMemo(() => {
        if (data) {

            return data.teams
                .filter(team => team.name.toLowerCase().includes(searchValue.toLowerCase()))
        }

        return [];
    }, [data, searchValue]);

    console.log(filteredTeamsData);

    const currentDataTeams = useDataSlice({
        arr: filteredTeamsData,
        pageSize,
        currentPage,
    });

    console.log(currentDataTeams);

    const onPageChangeHandler = (pageNumber) => {
        history.push(`/teams/${pageNumber}`)
    }

    // console.log("input value", searchValue)

    return (
        <div>

            <Search
                value={searchValue}
                onInput={setSearchValue}
                place="team"
                active={searchActive}
                setActive={setSearchActive}

            />

            <div className="teams-container">


                {isLoading && <div className="loading">loading...</div>}
                {isError && <div className="error">error</div>}
                {Boolean(currentDataTeams.length) && currentDataTeams.map((team) => (
                    <div className="teams-item" key={team.id}>

                        <Link to={`/teams/${team.id}/matches`}>
                            <img className="crest" src={team.crestUrl} width="50" height="50"></img>
                            {team.name}


                        </Link>

                    </div>
                ))}




            </div>
            <Pagination
                className="pagination-bar"
                currentPage={Number(currentPage)}
                totalCount={filteredTeamsData.length}
                pageSize={pageSize}
                onPageChange={onPageChangeHandler}
            />
        </div>

    );
}

