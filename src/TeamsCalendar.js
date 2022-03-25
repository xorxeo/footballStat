import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useGetTeamsCalendarQuery } from "./store/footballAPI";




const TeamsCalendar = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetTeamsCalendarQuery(id);
    console.log('data', data)
    console.log(isError)
    return (
        <div className="teams-calendar">

            {isLoading && <div>loading...</div>}
            {isError && <div>error</div>}
            {data && (
                <div className="teams-calendar">{data.matches.map((match) => (
                    <div className="team" key={match.id}>
                        <span>
                            {match.utcDate}
                        </span>
                        <span>
                            {match.status}
                        </span>
                        <span>
                            {match.homeTeam.name}
                        </span>
                        <span>
                            {match.awayTeam.name}
                        </span>
                        <span>
                            {match.score.fullTime.homeTeam}:{match.score.fullTime.awayTeam}
                        </span>
                    </div>
                ))}
                </div>
            )}
        </div>
    );
}

export default TeamsCalendar;