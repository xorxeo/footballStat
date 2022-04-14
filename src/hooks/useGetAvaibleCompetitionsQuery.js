import { AVAIBLE_LEAGUES } from "../helpers/avaibleLeagues";
import { useMemo } from "react";
import { useGetCompetitionsQuery } from "../store/footballAPI";

export const useGetAvaibleCompetitionsQuery = () => {
    const { data, isLoading, isError } = useGetCompetitionsQuery();

    const availableLeaguesData = useMemo(() => {
        // console.log("avaiblelegues", data)
        if (data) {
            // console.log("if true", data.competitions)
            return data.competitions
                .filter(competition => AVAIBLE_LEAGUES.includes(competition.code)
                );
        }
        return [];

    }, [data])

    return { availableLeaguesData, isLoading, isError };
}