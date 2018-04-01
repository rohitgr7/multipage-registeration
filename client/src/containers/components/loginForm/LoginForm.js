import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { loginFields } from './loginFields';
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

const validate = values => {
  const errors = {};
  const error = 'This field is required';

  errors.email = values.email ? '' : error;
  errors.password = values.password ? '' : error;

  console.log(errors);

  return errors;
};

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);
