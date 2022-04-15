import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/nav-bar/Navbar';
import { Teams } from './pages/Teams';
import { Leagues } from './pages/Leagues';
import LeaguesCalendar from './pages/LeaguesCalendar';
import { TeamsCalendar } from './pages/TeamsCalendar';
import { Breadcrumbs } from './components/bread-crumbs/BreadCrumbs';

import { store } from './store/store';
import { Provider } from 'react-redux';

import './App.css';
import './components/bread-crumbs/breadCrumbs.css';
import { routes } from './routes/routes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            {routes.map((route) => {
              console.log('>>>>>> r:', route.path);
              return <Route key={route.path} path={route.path} component={route.component} />;
            })}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
