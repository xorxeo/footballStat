import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

import { useGetTeamsCalendarQuery } from "../store/footballAPI";
import { getDateLocalString } from "../helpers/date.helpers";
import { SimpleTable } from "../components/simple-table/SimpleTable";
import { TABLE_HEADS } from "./LeaguesCalendar";



const TeamsCalendar = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetTeamsCalendarQuery(id);

    const [bodyData, setBodyData] = useState([]);

    useEffect(() => {
        if (data) {
            const matches = data.matches.map(match => {
                return [
                    
                    match.homeTeam.name,
                    match.awayTeam.name,
                    `${match.score.fullTime.homeTeam}:${match.score.fullTime.awayTeam}`,
                    getDateLocalString(match.utcDate),
                    match.status,
                ]
            });

            setBodyData(matches);
        };
    }, [data]);

    return (
        <div className="teams-calendar">

            {isLoading && <div className="loading"></div>}
            {isError && <div className="error"></div>}
            <SimpleTable data={bodyData} heads={TABLE_HEADS} />

        </div>
    );
};

export default TeamsCalendar;