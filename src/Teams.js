import { Link } from "react-router-dom";
import { useGetTeamsQuery } from "./store/footballAPI";

const Teams = () => {
    const { data, isLoading } = useGetTeamsQuery();

    return (
        <div className="teams">


            {isLoading ? 'loading...' : data.teams.map((team) => (
                <div className="teams-item" key={team.id}>

                    <Link to={`/teams/${team.id}/matches`}>
                        <img className="crest" src={team.crestUrl} width="50" height="50"></img>
                        {team.name}


                    </Link>

                </div>))}

        </div>
    );
}

export default Teams;