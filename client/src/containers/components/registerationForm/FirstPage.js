import React from 'react';
import { reduxForm } from 'redux-form';

import { firstPageFields } from './registerFields';
import FieldInputs from './../FieldInputs';

const FirstPage = props => {
  const { handleSubmit, submitForm } = props;

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldInputs fields={firstPageFields} />
        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

const validate = values => {
  const errors = {};
  const error = 'This field is required';

  errors.name = values.name ? '' : error;
  errors.description = values.description ? '' : error;

  return errors;
};

export default reduxForm({
  form: 'registeration-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(FirstPage);
