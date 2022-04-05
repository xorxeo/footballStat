import { Link, useParams, useHistory } from "react-router-dom";
import { useGetTeamsQuery } from "./store/footballAPI";

import Pagination from "./components/pagination/Pagination";
import { useDataSlice } from "./hooks/useDataSlice";



let pageSize = 7;

export const Teams = () => {
    const { data, isLoading, isError } = useGetTeamsQuery();
    const { page: currentPage = 1 } = useParams();
    const history = useHistory();


    const currentDataTeams = useDataSlice({
        arr: data ? data.teams: [],
        pageSize,
        currentPage,
    });


    const onPageChangeHandler = (pageNumber) => {
        history.push(`/teams/${pageNumber}`)
    }


    return (
        <div className="teams">


            {isLoading && <div>'loading...'</div>}
            {isError && <div>error</div>}
            {data && data.teams.filter(team => currentDataTeams.includes(team)).map((team) => (
                <div className="teams-item" key={team.id}>

                    <Link to={`/teams/${team.id}/matches`}>
                        <img className="crest" src={team.crestUrl} width="50" height="50"></img>
                        {team.name}


                    </Link>

                </div>
            ))}

            <Pagination
                className="pagination-bar"
                currentPage={Number(currentPage)}
                totalCount={data ? data.teams.length : 0}
                pageSize={pageSize}
                onPageChange={onPageChangeHandler}
            />


        </div>
    );
}

