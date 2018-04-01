import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import {
  DashboardPage,
  LandingPage,
  LoginPage,
  NotFoundPage,
  RegisterationPage
} from './pages';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/register" component={RegisterationPage} />
          <Route path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
