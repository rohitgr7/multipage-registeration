import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      user ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(PrivateRoute);
