import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Characters from './pages/Characters';
import Character from './pages/Character';
import Episodes from './pages/Episodes';
import Episode from './pages/Episode';
import Locations from './pages/Locations';
import Location from './pages/Location';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/characters">
          <Characters />
        </Route>
        <Route exact path="/characters/:id(\d+)">
          <Character />
        </Route>
        <Route exact path="/episodes">
          <Episodes />
        </Route>
        <Route exact path="/episodes/:id(\d+)">
          <Episode />
        </Route>
        <Route exact path="/locations">
          <Locations />
        </Route>
        <Route exact path="/locations/:id(\d+)">
          <Location />
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
