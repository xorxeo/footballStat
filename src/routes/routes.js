import { Redirect } from 'react-router-dom';
import { Leagues } from '../pages/Leagues';
import LeaguesCalendar from '../pages/LeaguesCalendar';
import { Teams } from '../pages/Teams';
import { TeamsCalendar } from '../pages/TeamsCalendar';

export const routes = [
  {
    name: 'TeamsCalendar',
    path: '/teams/:id/matches',
    component: TeamsCalendar,
  },
  {
    name: 'TeamsPage',
    path: '/teams/:page',
    component: Teams,
  },
  {
    name: 'Teams',
    path: '/teams',
    component: () => <Redirect to="/teams/1" />,
  },
  {
    name: 'LeaguesCalendar',
    path: '/competitions/:id/matches',
    component: LeaguesCalendar,
  },
  {
    name: 'Leagues',
    path: '/competitions/:page',
    component: Leagues,
  },
  {
    name: 'Leagues',
    path: '/competitions',
    component: () => <Redirect to="/competitions/1" />,
  },
];
