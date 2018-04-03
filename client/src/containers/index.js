import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { PrivateRoute, PublicRoute } from './routers';
import { fetchUser } from './../actions';
import Header from './components/Header';
import {
  DashboardPage,
  LandingPage,
  LoginPage,
  NotFoundPage,
  RegisterationPage
} from './pages';

class App extends Component {
  componentDidMount() {
    console.log('fetching user');
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <PublicRoute path="/" component={LandingPage} exact />
              <PrivateRoute path="/dashboard" component={DashboardPage} />
              <PublicRoute path="/register" component={RegisterationPage} />
              <PublicRoute path="/login" component={LoginPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
