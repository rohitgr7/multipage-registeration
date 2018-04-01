import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import loginFields from './loginFields';
import FieldInputs from './../FieldInputs';

class LoginForm extends Component {
  render() {
    const { handleSubmit, submitForm } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(submitForm)}>
          <FieldInputs fields={loginFields} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
