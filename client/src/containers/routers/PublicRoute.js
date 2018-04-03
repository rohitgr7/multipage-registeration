import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      user ? <Redirect to="/dashboard" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(PublicRoute);
