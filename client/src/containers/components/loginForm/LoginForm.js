import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { loginFields } from './loginFields';
import FieldInputs from './../FieldInputs';

class LoginForm extends Component {
  render() {
    const { handleSubmit, submitForm } = this.props;

    return (
      <div>
        <br />
        <br />
        <form onSubmit={handleSubmit(submitForm)}>
          <FieldInputs fields={loginFields} />
          <button className="btn btn-primary" type="submit">
            Login
          </button>
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

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email';
  }

  return errors;
};

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);
