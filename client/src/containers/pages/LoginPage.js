import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from './../../actions';
import LoginForm from './../components/loginForm';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm submitForm={values => this.props.loginUser(values)} />
      </div>
    );
  }
}

export default connect(null, { loginUser })(LoginPage);
