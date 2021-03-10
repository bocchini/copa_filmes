import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SelectMovies from './pages/SelectMovies';
import VotationMovies from './pages/VotationMovies';

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <SelectMovies />
          </Route>
          <Route path="/votation">
            <VotationMovies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
