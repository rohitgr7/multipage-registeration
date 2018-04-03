import React from 'react';
import { reduxForm } from 'redux-form';

import { firstPageFields } from './registerFields';
import FieldInputs from './../FieldInputs';

const FirstPage = props => {
  const { handleSubmit, submitForm } = props;

  return (
    <div>
      <form className="needs-validation" onSubmit={handleSubmit(submitForm)}>
        <FieldInputs fields={firstPageFields} />
        <div className="text-center">
          <button className="btn btn-primary" type="submit">
            Proceed
          </button>
        </div>
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
