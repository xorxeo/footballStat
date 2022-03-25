import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Navbar from './Navbar';
import Teams from './Teams';
import Leagues from './Leagues';
import LeaguesCalendar from './LeaguesCalendar';
import TeamsCalendar from './TeamsCalendar';

import { store } from './store/store'
import { Provider } from 'react-redux';

import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/teams">
                <Teams />
              </Route>
              <Route path="/teams/:id/matches">
                <TeamsCalendar />
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
        </div>
      </Router>

    </Provider >
  );
}

export default App;
