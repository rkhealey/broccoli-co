import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import AppWrapper from './components/app-wrapper';
import Home from './components/home';

const Routes = () =>
  <Router>
    <AppWrapper>
      <Route exact path="/" component={Home} />
    </AppWrapper>
  </Router>;

export default Routes;
