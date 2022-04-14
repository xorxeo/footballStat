import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState, useMemo } from "react";

import { useGetTeamsCalendarQuery } from "../store/footballAPI";
import { getDateLocalString, isInRange } from "../helpers/date.helpers";
import { SimpleTable } from "../components/simple-table/SimpleTable";
import { TABLE_HEADS } from "./LeaguesCalendar";
import { DateFilter } from "../components/date-filter/DateFilter";



export const TeamsCalendar = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetTeamsCalendarQuery(id);
    const [bodyData, setBodyData] = useState([]);
    const [searchDateStart, setSearchDateStart] = useState("");
    const [searchDateEnd, setSearchDateEnd] = useState("");


    useEffect(() => {
        if (data) {
            let matches;
            if (searchDateStart && searchDateEnd) {
                matches = data.matches.filter(match => isInRange(searchDateStart, searchDateEnd, match.utcDate)).map(match => {
                    return [

                        match.homeTeam.name,
                        match.awayTeam.name,
                        `${match.score.fullTime.homeTeam}:${match.score.fullTime.awayTeam}`,
                        getDateLocalString(match.utcDate),
                        match.status,
                    ]
                })
                console.log(matches);

            } else {
                matches = data.matches.map(match => {
                    return [

                        match.homeTeam.name,
                        match.awayTeam.name,
                        `${match.score.fullTime.homeTeam}:${match.score.fullTime.awayTeam}`,
                        getDateLocalString(match.utcDate),
                        match.status,
                    ]
                });
            }

            setBodyData(matches);

        };
    }, [data, searchDateStart, searchDateEnd]);



    return (
        <div className="teams-calendar">

            {isLoading && <div className="loading"></div>}
            {isError && <div className="error"></div>}
            {data &&
                <DateFilter
                    searchDateStart={searchDateStart}
                    searchDateEnd={searchDateEnd}
                    onInputStart={setSearchDateStart}
                    onInputEnd={setSearchDateEnd}
                />}
            {data &&
                <SimpleTable
                    data={bodyData}
                    heads={TABLE_HEADS}
                />}

        </div>
    );
};

