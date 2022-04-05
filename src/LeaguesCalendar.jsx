import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

import { useGetLeaguesCalendarQuery } from "./store/footballAPI";
import { getDateLocalString } from "./helpers/date.helpers";
import { SimpleTable } from "./components/simple-table/SimpleTable";
// import { Link } from "react-router-dom";
// const availableData = {};
const TABLE_HEADS = ['Date', 'Status', 'Home Team', 'Away Team', 'Score'];


const LeaguesCalendar = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetLeaguesCalendarQuery(id);

    const [bodyData, setBodyData] = useState([]);
    // const [bodyStatus, setBodyStatus] = useState([]);


    useEffect(() => {

        if (data) {
            // setBodyData();
            const matches = data.matches.map(match => {
                return [
                    getDateLocalString(match.utcDate),
                    match.status, 
                    match.homeTeam.name,
                    match.awayTeam.name,
                    `${match.score.fullTime.homeTeam}:${match.score.fullTime.awayTeam}`,
                ]
            });

            setBodyData(matches);
        };
        // console.log('useEffect', bodyData);     
    }, [data]);

    console.log('useEffect', bodyData);




    return (
        <div className="leagues-calendar">

            {isLoading && <div>loading...</div>}
            {isError && <div>error</div>}
        
            <SimpleTable data={bodyData} heads={TABLE_HEADS}/>

            
        </div>
    );
}

export default LeaguesCalendar;

