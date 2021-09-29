import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Searchbar } from '../components/Searchbar';
import { Home } from '../pages/Home';
import { CharacterDetails } from '../pages/CharacterDetails';

export function Router() {
  return (
    <BrowserRouter>
      <Searchbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/character/:id">
          <CharacterDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
