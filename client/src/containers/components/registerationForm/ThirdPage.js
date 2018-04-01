import React from 'react';
import { reduxForm } from 'redux-form';

import { thirdPageFields } from './registerFields';
import FieldInputs from './../FieldInputs';

const ThirdPage = props => {
  const { handleSubmit, submitForm, previousPage } = props;

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldInputs fields={thirdPageFields} />
        <button type="button" onClick={previousPage}>
          Previous
        </button>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const validate = values => {
  const errors = {};
  const error = 'This field is required';

  errors.email = values.email ? '' : error;
  errors.password = values.password ? '' : error;

  return errors;
};

export default reduxForm({
  form: 'registeration-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(ThirdPage);
