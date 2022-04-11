import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Navbar from './Navbar';
import { Teams } from './pages/Teams';
import { Leagues } from './pages/Leagues';
import LeaguesCalendar from './pages/LeaguesCalendar';
import TeamsCalendar from './pages/TeamsCalendar';

import { Breadcrumbs } from './components/BreadCrumbs/Breadcrumbs';

import { store } from './store/store'
import { Provider } from 'react-redux';


import './App.css';
import '../src/components/BreadCrumbs/breadCrumbs.css';





function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />


          <div className="container-fluid breadcrumbs">
            <Route path='/:path' component={Breadcrumbs} />
          </div>


          <Switch>

            <Route path="/teams/:id/matches">
              <TeamsCalendar />
            </Route>

            <Route path="/teams/:page">
              <Teams />
            </Route>

            <Route path="/teams">
              <Redirect to="/teams/1" />
            </Route>


            <Route path="/competitions/:id/matches">
              <LeaguesCalendar />
            </Route>

            <Route path="/competitions/:page">
              <Leagues />
            </Route>

            <Route path="/competitions">
              <Redirect to="/competitions/1" />
            </Route>

          </Switch>

        </div>
      </Router>

    </Provider >
  );
}

export default App;
