import { useGetLeaguesCalendarQuery } from "./store/footballAPI";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// import { Link } from "react-router-dom";
// const availableData = {};

const LeaguesCalendar = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetLeaguesCalendarQuery(id);
    console.log('data', data)
    console.log(isError)
    return (
        <div className="leagues-calendar">

            {isLoading && <div>loading...</div>}
            {isError && <div>error</div>}
            {data && (
                <div className="leagues-calendar">{data.matches.map((match) => (
                    <div className="match" key={match.id}>
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

export default LeaguesCalendar;