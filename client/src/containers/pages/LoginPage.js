import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser, cleanErrorMessages } from './../../actions';
import LoginForm from './../components/loginForm';
import AlertBox from './../components/AlertBox';

class LoginPage extends Component {
  componentDidMount() {
    this.props.cleanErrorMessages();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <br />
          <br />
          <AlertBox />
          <LoginForm submitForm={values => this.props.loginUser(values)} />
        </div>
      </div>
    );
  }
}

export default connect(null, { loginUser, cleanErrorMessages })(LoginPage);
