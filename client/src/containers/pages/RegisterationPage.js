import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegisterationForm from './../components/registerationForm';
import AlertBox from './../components/AlertBox';
import { cleanErrorMessages, registerUser } from './../../actions';

class RegisterationPage extends Component {
  state = {
    fireRedirect: false
  };

  componentDidMount() {
    this.props.cleanErrorMessages();
  }

  handleSubmission = values => {
    this.props
      .registerUser(values)
      .then(() => {
        this.setState(() => ({ fireRedirect: true }));
      })
      .catch(() => {});
  };

  render() {
    return this.state.fireRedirect ? (
      <Redirect to="/login" />
    ) : (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <br />
          <br />
          <AlertBox />
          <RegisterationForm
            submitForm={values => this.handleSubmission(values)}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { registerUser, cleanErrorMessages })(
  RegisterationPage
);
