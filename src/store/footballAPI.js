import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const footballApi = createApi({
    reducerPath: 'footballApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.football-data.org/v2/',

        prepareHeaders: (headers, { getState }) => {

            headers.set('sec-fetch-mode', 'no-cors');
            headers.set('x-auth-token', 'ddaaf9ea81824cbb94039e5f0fee559d');

            return headers
        }
    }),
    endpoints: (builder) => ({

        getTeams: builder.query({
            query: () => 'teams'
        }),
        getCompetitions: builder.query({
            query: () => 'competitions'
        }),
        getLeaguesCalendar: builder.query({
            query: (id) => `competitions/${id}/matches`
        }),
        getTeamsCalendar: builder.query({
            query: (id) => `teams/${id}/matches`
        })

    }),



});

export const { useGetTeamsQuery, useGetCompetitionsQuery, useGetLeaguesCalendarQuery, useGetTeamsCalendarQuery } = footballApi;